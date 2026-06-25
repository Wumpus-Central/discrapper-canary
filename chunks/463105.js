"use strict";
n.d(t, { A: () => w });
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
    g = n(70730),
    A = n(45787),
    I = n(507104),
    T = n(158390),
    S = n(493336),
    y = n(439372),
    C = n(617617),
    N = n(19745);
let v = 10 * m.A.Millis.SECOND,
    R = 5 * m.A.Millis.MINUTE;
class O extends y.A {
    actions = {
        POST_CONNECTION_OPEN: () => this.sendGiftingPromptSystemMessagesIfEligible(),
        CHANNEL_SELECT: (e) => this.onChannelSelect(e),
        GIFT_INTENT_DISMISSALS_FETCH_SUCCESS: () => this.onReconcileSettled(!0),
        GIFT_INTENT_DISMISSALS_FETCH_FAILURE: () => this.onReconcileSettled(!1),
        LOGOUT: () => this.onLogout(),
    };
    stores = new Map([[I.Ay, () => this.onPremiumGiftingIntentStoreChange()]]);
    reconcileBackoff = new T.A(v, R);
    isReconciling = !1;
    heldGiftingPromptSystemMessage = !1;
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
        return 0 !== I.Ay.getFriendAnniversaries().length && N.H.getConfig({ location: e }).enabled;
    }
    getServerDismissalTimestampMs() {
        return Number(C.A.settings.userContent?.lastGiftIntentDismissedAtMs ?? "0");
    }
    attemptReconcileFetch() {
        let e = this.getServerDismissalTimestampMs();
        I.Ay.getLastKnownGiftIntentDismissedAtMs() >= e ||
            this.isReconciling ||
            ((this.isReconciling = !0), (0, A.qH)(e));
    }
    onReconcileSettled(e) {
        (this.isReconciling = !1),
            e ? this.reconcileBackoff.succeed() : this.reconcileBackoff.fail(this.retryReconcileServerDismissals);
    }
    onLogout() {
        this.reconcileBackoff.cancel(), (this.isReconciling = !1), (this.heldGiftingPromptSystemMessage = !1);
    }
    maybeRetryHeldGiftingPromptSystemMessage() {
        !this.heldGiftingPromptSystemMessage ||
            I.Ay.getLastKnownGiftIntentDismissedAtMs() < this.getServerDismissalTimestampMs() ||
            ((this.heldGiftingPromptSystemMessage = !1), this.sendGiftingPromptSystemMessagesIfEligible());
    }
    shouldHoldGiftingPromptSystemMessageForServerReconcile(e) {
        return (
            !!N.H.getConfig({ location: e }).enabled &&
            I.Ay.getLastKnownGiftIntentDismissedAtMs() < this.getServerDismissalTimestampMs()
        );
    }
    trySendGiftingPromptSystemMessage(e, t, n, i, r) {
        return this.shouldHoldGiftingPromptSystemMessageForServerReconcile(r)
            ? ((this.heldGiftingPromptSystemMessage = !0), !1)
            : (S.A.sendGiftingPromptSystemMessage(e, {
                  giftIntentType: t,
                  recipientUserId: n,
                  giftIntentSecondaryAction: i,
              }),
              !0);
    }
}
var b = n(788868),
    D = n(49999);
let L = new u.A("PremiumGiftingIntentManager"),
    w = new (class extends O {
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
            (0, c.uh)(s.M.GIFT_INTENT_MESSAGE, { dismissAction: D.i.AUTO_DISMISS, forceTrack: !0 });
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
            I.Ay.isGiftIntentMessageInCooldown(n) ||
                e !== r ||
                (s
                    ? this.trySendGiftingPromptSystemMessage(e, t, n, i, "maybeSendGiftingPromptSystemMessage") &&
                      (0, A.xs)(n)
                    : p.A.whenReady(e, () => {
                          E.A.getChannelId() === e && this.maybeSendGiftingPromptSystemMessage(e, t, n, i);
                      }));
        }
        sendGiftPromptMessageInSelectedChannelIfEligible(e) {
            let { enabled: t } = g.u.getConfig({ location: "handleChannelSelect" }),
                n = f.A.getChannel(e);
            if (t && null != n && this.isChannelEligible(n)) {
                let e = new Set(n.recipients),
                    t = I.Ay.getFriendAnniversaries().filter((t) => e.has(t));
                if (t.length > 0) {
                    let e = t[0];
                    this.maybeSendGiftingPromptSystemMessageDelayed(
                        n.id,
                        b.np.FRIEND_ANNIVERSARY,
                        e,
                        b.l1.SEND_MESSAGE,
                    );
                }
            }
        }
        async sendGiftingNotificationIfEligible() {
            let { enabled: e, showDmPrompts: t } = g.u.getConfig({ location: "handleTopAffinityUnreadNotification" }),
                n = h.oz.getSetting();
            if (!e || !t || !n || this.isGiftIntentDCInCooldown()) return;
            let r = I.Ay.getNextRecipientUserIDForNotification();
            if (null != r)
                try {
                    let e = await o.A.getOrEnsurePrivateChannel(r),
                        t = f.A.getChannel(e);
                    if (null == t) return;
                    if (
                        (p.A.isReady(t.id) || (await d.A.fetchMessages({ channelId: t.id, isPreload: !0 })),
                        p.A.getMessages(t.id).cached)
                    )
                        return void L.info("Skipping gift intent notification - fetched messages marked as stale", {
                            channelId: t.id,
                            recipientUserID: r,
                        });
                    let n = I.Ay.getNextRecipientUserIDForNotification();
                    if (
                        n !== r ||
                        !this.trySendGiftingPromptSystemMessage(
                            t.id,
                            b.np.FRIEND_ANNIVERSARY,
                            n,
                            b.l1.SEND_MESSAGE,
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
                            gift_intent_type: b.np.FRIEND_ANNIVERSARY,
                            dm_affinity: s?.dmProbability,
                            channel_id: t.id,
                        },
                    }),
                        (0, A.xs)(n),
                        (0, A.BT)();
                } catch (e) {
                    L.error("Failed to fetch DM channel data for gifting notification", {
                        recipientUserID: r,
                        error: e,
                    });
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
