"use strict";
n.d(t, { A: () => w });
var i = n(562708),
    r = n(158390),
    s = n(478437),
    a = n(554146),
    o = n(451988),
    l = n(308528),
    u = n(493336),
    c = n(439372),
    d = n(139286),
    _ = n(626584),
    h = n(367727),
    f = n(547),
    p = n(427358),
    E = n(885386),
    m = n(617617),
    g = n(734057),
    A = n(232835),
    I = n(309010),
    T = n(927813),
    S = n(70730),
    y = n(19745),
    C = n(45787),
    N = n(507104),
    v = n(788868),
    R = n(49999);
let O = 10 * T.A.Millis.SECOND,
    b = 5 * T.A.Millis.MINUTE,
    D = new _.A("PremiumGiftingIntentManager");
class L extends c.A {
    actions = {
        POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
        CHANNEL_SELECT: (e) => this.onChannelSelect(e),
        GIFT_INTENT_DISMISSALS_FETCH_SUCCESS: () => this.onReconcileSettled(!0),
        GIFT_INTENT_DISMISSALS_FETCH_FAILURE: () => this.onReconcileSettled(!1),
        LOGOUT: () => this.onLogout(),
    };
    stores = new Map([[N.Ay, () => this.onPremiumGiftingIntentStoreChange()]]);
    reconcileBackoff = new r.A(O, b);
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
        return 0 !== N.Ay.getFriendAnniversaries().length && y.H.getConfig({ location: e }).enabled;
    }
    getServerDismissalTimestampMs() {
        return Number(m.A.settings.userContent?.lastGiftIntentDismissedAtMs ?? "0");
    }
    attemptReconcileFetch() {
        let e = this.getServerDismissalTimestampMs();
        N.Ay.getLastKnownGiftIntentDismissedAtMs() >= e ||
            this.isReconciling ||
            ((this.isReconciling = !0), (0, C.qH)(e));
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
            N.Ay.getLastKnownGiftIntentDismissedAtMs() < this.getServerDismissalTimestampMs() ||
            ((this.heldGiftingPromptSystemMessage = !1), this.sendGiftingPromptSystemMessagesIfEligible());
    }
    shouldHoldGiftingPromptSystemMessageForServerReconcile(e) {
        return (
            !!y.H.getConfig({ location: e }).enabled &&
            N.Ay.getLastKnownGiftIntentDismissedAtMs() < this.getServerDismissalTimestampMs()
        );
    }
    isChannelEligible(e) {
        switch (e.type) {
            case s.r.DM:
                return !0;
            case s.r.GROUP_DM:
            case s.r.GUILD_TEXT:
            default:
                return !1;
        }
    }
    isGiftIntentDCInCooldown() {
        return (0, h.FZ)(a.M.GIFT_INTENT_MESSAGE, { cooldownDurationMs: T.A.Millis.DAY }).isDismissed;
    }
    dismissGiftIntentDC() {
        (0, h.uh)(a.M.GIFT_INTENT_MESSAGE, { dismissAction: R.i.AUTO_DISMISS, forceTrack: !0 });
    }
    trySendGiftingPromptSystemMessage(e, t, n, i, r) {
        return this.shouldHoldGiftingPromptSystemMessageForServerReconcile(r)
            ? ((this.heldGiftingPromptSystemMessage = !0), !1)
            : (u.A.sendGiftingPromptSystemMessage(e, {
                  giftIntentType: t,
                  recipientUserId: n,
                  giftIntentSecondaryAction: i,
              }),
              !0);
    }
    maybeSendGiftingPromptSystemMessageDelayed(e, t, n, i) {
        new o.J_(1e3, () => {
            this.maybeSendGiftingPromptSystemMessage(e, t, n, i);
        }).delay();
    }
    maybeSendGiftingPromptSystemMessage(e, t, n, i) {
        if (!E.oz.getSetting()) return;
        let r = I.A.getChannelId(),
            s = A.A.isReady(e);
        N.Ay.isGiftIntentMessageInCooldown(n) ||
            e !== r ||
            (s
                ? this.trySendGiftingPromptSystemMessage(e, t, n, i, "maybeSendGiftingPromptSystemMessage") &&
                  (0, C.xs)(n)
                : A.A.whenReady(e, () => {
                      I.A.getChannelId() === e && this.maybeSendGiftingPromptSystemMessage(e, t, n, i);
                  }));
    }
    sendGiftPromptMessageInSelectedChannelIfEligible(e) {
        let { enabled: t } = S.u.getConfig({ location: "handleChannelSelect" }),
            n = g.A.getChannel(e);
        if (t && null != n && this.isChannelEligible(n)) {
            let e = new Set(n.recipients),
                t = N.Ay.getFriendAnniversaries().filter((t) => e.has(t));
            if (t.length > 0) {
                let e = t[0];
                this.maybeSendGiftingPromptSystemMessageDelayed(n.id, v.np.FRIEND_ANNIVERSARY, e, v.l1.SEND_MESSAGE);
            }
        }
    }
    async sendGiftingNotificationIfEligible() {
        let { enabled: e, showDmPrompts: t } = S.u.getConfig({ location: "handleTopAffinityUnreadNotification" }),
            n = E.oz.getSetting();
        if (!e || !t || !n || this.isGiftIntentDCInCooldown()) return;
        let r = N.Ay.getNextRecipientUserIDForNotification();
        if (null != r)
            try {
                let e = await l.A.getOrEnsurePrivateChannel(r),
                    t = g.A.getChannel(e);
                if (null == t) return;
                if (
                    (A.A.isReady(t.id) || (await f.A.fetchMessages({ channelId: t.id, isPreload: !0 })),
                    A.A.getMessages(t.id).cached)
                )
                    return void D.info("Skipping gift intent notification - fetched messages marked as stale", {
                        channelId: t.id,
                        recipientUserID: r,
                    });
                let n = N.Ay.getNextRecipientUserIDForNotification();
                if (
                    n !== r ||
                    !this.trySendGiftingPromptSystemMessage(
                        t.id,
                        v.np.FRIEND_ANNIVERSARY,
                        n,
                        v.l1.SEND_MESSAGE,
                        "sendGiftingNotificationIfEligible",
                    )
                )
                    return;
                this.dismissGiftIntentDC();
                let s = p.A.getUserAffinity(n);
                (0, d.x)({
                    name: i.ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION,
                    type: i.ImpressionTypes.VIEW,
                    properties: {
                        gift_intent_type: v.np.FRIEND_ANNIVERSARY,
                        dm_affinity: s?.dmProbability,
                        channel_id: t.id,
                    },
                }),
                    (0, C.xs)(n),
                    (0, C.BT)();
            } catch (e) {
                D.error("Failed to fetch DM channel data for gifting notification", { recipientUserID: r, error: e });
            }
    }
    onChannelSelect(e) {
        let { channelId: t } = e;
        this.sendGiftPromptMessageInSelectedChannelIfEligible(t);
    }
    sendGiftingPromptSystemMessagesIfEligible() {
        this.sendGiftingNotificationIfEligible();
        let e = I.A.getChannelId();
        null != e && this.sendGiftPromptMessageInSelectedChannelIfEligible(e);
    }
    onPostConnectionOpen() {
        this.sendGiftingPromptSystemMessagesIfEligible();
    }
}
let w = new L();
