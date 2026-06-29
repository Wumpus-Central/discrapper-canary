"use strict";
n.d(t, { A: () => k });
var i = n(562708),
    r = n(478437),
    s = n(554146),
    a = n(451988),
    o = n(308528),
    l = n(139286),
    u = n(626584),
    c = n(367727),
    d = n(547),
    _ = n(427358),
    h = n(885386),
    f = n(734057),
    p = n(232835),
    E = n(309010),
    m = n(927813),
    g = n(38405),
    A = n(70730),
    I = n(45787),
    T = n(507104),
    S = n(158390),
    y = n(228366),
    C = n(493336),
    N = n(439372),
    v = n(931480),
    R = n(617617),
    O = n(19745),
    b = n(652215);
let D = 10 * m.A.Millis.SECOND,
    L = 5 * m.A.Millis.MINUTE;
class w extends N.A {
    actions = {
        POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
        CHANNEL_SELECT: (e) => this.onChannelSelect(e),
        GIFT_INTENT_DISMISSALS_FETCH_SUCCESS: (e) => this.onReconcileSuccess(e),
        GIFT_INTENT_DISMISSALS_FETCH_FAILURE: () => this.onReconcileSettled(!1),
        LOGOUT: () => this.onLogout(),
    };
    stores = new Map([[T.Ay, () => this.onPremiumGiftingIntentStoreChange()]]);
    reconcileBackoff = new S.A(D, L);
    isReconciling = !1;
    heldGiftingPromptSystemMessage = !1;
    lastReconciledDismissalAtMs = new Map();
    onPostConnectionOpen() {
        this.lastReconciledDismissalAtMs.clear(), this.sendGiftingPromptSystemMessagesIfEligible();
    }
    onPremiumGiftingIntentStoreChange() {
        this.maybeReconcileServerDismissals(), this.maybeRetryHeldGiftingPromptSystemMessage();
    }
    maybeReconcileServerDismissals() {
        !this.isReconcileEligible("maybeReconcileServerDismissals") ||
            this.reconcileBackoff.pending ||
            this.attemptReconcileFetch();
    }
    retryReconcileServerDismissals = () => {
        this.isReconcileEligible("retryReconcileServerDismissals") && this.attemptReconcileFetch();
    };
    isReconcileEligible(e) {
        return 0 !== T.Ay.getFriendAnniversaries().length && O.H.getConfig({ location: e }).enabled;
    }
    getServerDismissalTimestampMs() {
        return Number(R.A.settings.userContent?.lastGiftIntentDismissedAtMs ?? "0");
    }
    attemptReconcileFetch() {
        let e = this.getServerDismissalTimestampMs();
        T.Ay.getLastKnownGiftIntentDismissedAtMs() >= e ||
            this.isReconciling ||
            ((this.isReconciling = !0), (0, I.qH)(e));
    }
    onReconcileSuccess(e) {
        this.onReconcileSettled(!0), this.removeRemotelyDismissedGiftIntentCards(e.dismissals);
    }
    onReconcileSettled(e) {
        (this.isReconciling = !1),
            e ? this.reconcileBackoff.succeed() : this.reconcileBackoff.fail(this.retryReconcileServerDismissals);
    }
    removeRemotelyDismissedGiftIntentCards(e) {
        for (let { targetId: t, dismissedAtMs: n } of e) {
            let e = this.lastReconciledDismissalAtMs.get(t);
            if ((this.lastReconciledDismissalAtMs.set(t, Math.max(e ?? 0, n)), null == e || n <= e)) continue;
            let i = f.A.getDMFromUserId(t);
            if (null != i)
                for (let e of v.A.getMessages(i))
                    e.type === b.lAJ.GIFTING_PROMPT &&
                        e.giftingPrompt?.recipientUserId === t &&
                        y.h.dispatch({ type: "MESSAGE_DELETE", id: e.id, channelId: i });
        }
    }
    onLogout() {
        this.reconcileBackoff.cancel(),
            (this.isReconciling = !1),
            (this.heldGiftingPromptSystemMessage = !1),
            this.lastReconciledDismissalAtMs.clear();
    }
    maybeRetryHeldGiftingPromptSystemMessage() {
        !this.heldGiftingPromptSystemMessage ||
            T.Ay.getLastKnownGiftIntentDismissedAtMs() < this.getServerDismissalTimestampMs() ||
            ((this.heldGiftingPromptSystemMessage = !1), this.sendGiftingPromptSystemMessagesIfEligible());
    }
    shouldHoldGiftingPromptSystemMessageForServerReconcile(e) {
        return (
            !!O.H.getConfig({ location: e }).enabled &&
            T.Ay.getLastKnownGiftIntentDismissedAtMs() < this.getServerDismissalTimestampMs()
        );
    }
    trySendGiftingPromptSystemMessage(e, t, n, i, r) {
        return this.shouldHoldGiftingPromptSystemMessageForServerReconcile(r)
            ? ((this.heldGiftingPromptSystemMessage = !0), !1)
            : (C.A.sendGiftingPromptSystemMessage(e, {
                  giftIntentType: t,
                  recipientUserId: n,
                  giftIntentSecondaryAction: i,
              }),
              !0);
    }
}
var M = n(788868),
    P = n(49999);
let x = new u.A("PremiumGiftingIntentManager"),
    k = new (class extends w {
        isChannelEligible(e) {
            switch (e.type) {
                case r.r.DM:
                    return !0;
                case r.r.GROUP_DM:
                case r.r.GUILD_TEXT:
                default:
                    return !1;
            }
        }
        isGiftIntentDCInCooldown() {
            return (0, c.FZ)(s.M.GIFT_INTENT_MESSAGE, { cooldownDurationMs: m.A.Millis.DAY }).isDismissed;
        }
        dismissGiftIntentDC() {
            (0, c.uh)(s.M.GIFT_INTENT_MESSAGE, { dismissAction: P.i.AUTO_DISMISS, forceTrack: !0 });
        }
        maybeSendGiftingPromptSystemMessageDelayed(e, t, n, i) {
            new a.J_(1e3, () => {
                this.maybeSendGiftingPromptSystemMessage(e, t, n, i);
            }).delay();
        }
        maybeSendGiftingPromptSystemMessage(e, t, n, i) {
            if (!h.oz.getSetting()) return;
            let r = E.A.getChannelId(),
                s = p.A.isReady(e);
            T.Ay.isGiftIntentMessageInCooldown(n) ||
                e !== r ||
                (s
                    ? this.trySendGiftingPromptSystemMessage(e, t, n, i, "maybeSendGiftingPromptSystemMessage") &&
                      (0, I.xs)(n)
                    : p.A.whenReady(e, () => {
                          E.A.getChannelId() === e && this.maybeSendGiftingPromptSystemMessage(e, t, n, i);
                      }));
        }
        sendGiftPromptMessageInSelectedChannelIfEligible(e) {
            let { enabled: t } = A.u.getConfig({ location: "handleChannelSelect" }),
                n = f.A.getChannel(e);
            if (t && null != n && this.isChannelEligible(n)) {
                let e = new Set(n.recipients),
                    t = T.Ay.getFriendAnniversaries().filter((t) => e.has(t));
                if (t.length > 0) {
                    let e = t[0];
                    this.maybeSendGiftingPromptSystemMessageDelayed(
                        n.id,
                        M.np.FRIEND_ANNIVERSARY,
                        e,
                        M.l1.SEND_MESSAGE,
                    );
                }
            }
        }
        async sendGiftingNotificationIfEligible() {
            let { enabled: e, showDmPrompts: t } = A.u.getConfig({ location: "handleTopAffinityUnreadNotification" }),
                n = h.oz.getSetting();
            if (!e || !t || !n || this.isGiftIntentDCInCooldown()) return;
            let r = T.Ay.getNextRecipientUserIDForNotification();
            if (null != r)
                try {
                    let e = await o.A.getOrEnsurePrivateChannel(r),
                        t = f.A.getChannel(e);
                    if (null == t) return;
                    if (
                        (p.A.isReady(t.id) || (await d.A.fetchMessages({ channelId: t.id, isPreload: !0 })),
                        p.A.getMessages(t.id).cached)
                    )
                        return void x.info("Skipping gift intent notification - fetched messages marked as stale", {
                            channelId: t.id,
                            recipientUserID: r,
                        });
                    let n = T.Ay.getNextRecipientUserIDForNotification();
                    if (
                        n !== r ||
                        !this.trySendGiftingPromptSystemMessage(
                            t.id,
                            M.np.FRIEND_ANNIVERSARY,
                            n,
                            M.l1.SEND_MESSAGE,
                            "sendGiftingNotificationIfEligible",
                        )
                    )
                        return;
                    this.dismissGiftIntentDC();
                    let s = _.A.getUserAffinity(n);
                    (0, l.x)({
                        name: i.ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION,
                        type: i.ImpressionTypes.VIEW,
                        properties: {
                            gift_intent_type: M.np.FRIEND_ANNIVERSARY,
                            dm_affinity: s?.dmProbability,
                            channel_id: t.id,
                        },
                    }),
                        (0, I.xs)(n),
                        (0, I.BT)();
                } catch (e) {
                    x.error("Failed to fetch DM channel data for gifting notification", {
                        recipientUserID: r,
                        error: e,
                    }),
                        g.A.captureException(e, { tags: { feature: "gift_intent" } });
                }
        }
        onChannelSelect(e) {
            let { channelId: t } = e;
            this.sendGiftPromptMessageInSelectedChannelIfEligible(t);
        }
        sendGiftingPromptSystemMessagesIfEligible() {
            this.sendGiftingNotificationIfEligible();
            let e = E.A.getChannelId();
            null != e && this.sendGiftPromptMessageInSelectedChannelIfEligible(e);
        }
    })();
