"use strict";
n.d(t, { A: () => N });
var i = n(478437),
    r = n(451988),
    s = n(885386),
    a = n(734057),
    o = n(232835),
    l = n(309010),
    u = n(70730),
    c = n(45787),
    d = n(507104),
    _ = n(158390),
    h = n(228366),
    f = n(493336),
    p = n(439372),
    E = n(931480),
    m = n(617617),
    g = n(927813),
    A = n(19745),
    I = n(652215);
let T = 10 * g.A.Millis.SECOND,
    S = 5 * g.A.Millis.MINUTE;
class y extends p.A {
    actions = {
        POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
        CHANNEL_SELECT: (e) => this.onChannelSelect(e),
        GIFT_INTENT_DISMISSALS_FETCH_SUCCESS: (e) => this.onReconcileSuccess(e),
        GIFT_INTENT_DISMISSALS_FETCH_FAILURE: () => this.onReconcileSettled(!1),
        LOGOUT: () => this.onLogout(),
    };
    stores = new Map([[d.Ay, () => this.onPremiumGiftingIntentStoreChange()]]);
    reconcileBackoff = new _.A(T, S);
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
        return 0 !== d.Ay.getFriendAnniversaries().length && A.H.getConfig({ location: e }).enabled;
    }
    getServerDismissalTimestampMs() {
        return Number(m.A.settings.userContent?.lastGiftIntentDismissedAtMs ?? "0");
    }
    attemptReconcileFetch() {
        let e = this.getServerDismissalTimestampMs();
        d.Ay.getLastKnownGiftIntentDismissedAtMs() >= e ||
            this.isReconciling ||
            ((this.isReconciling = !0), (0, c.qH)(e));
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
            let i = a.A.getDMFromUserId(t);
            if (null != i)
                for (let e of E.A.getMessages(i))
                    e.type === I.lAJ.GIFTING_PROMPT &&
                        e.giftingPrompt?.recipientUserId === t &&
                        h.h.dispatch({ type: "MESSAGE_DELETE", id: e.id, channelId: i });
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
            d.Ay.getLastKnownGiftIntentDismissedAtMs() < this.getServerDismissalTimestampMs() ||
            ((this.heldGiftingPromptSystemMessage = !1), this.sendGiftingPromptSystemMessagesIfEligible());
    }
    shouldHoldGiftingPromptSystemMessageForServerReconcile(e) {
        return (
            !!A.H.getConfig({ location: e }).enabled &&
            d.Ay.getLastKnownGiftIntentDismissedAtMs() < this.getServerDismissalTimestampMs()
        );
    }
    trySendGiftingPromptSystemMessage(e, t, n, i, r) {
        return this.shouldHoldGiftingPromptSystemMessageForServerReconcile(r)
            ? ((this.heldGiftingPromptSystemMessage = !0), !1)
            : (f.A.sendGiftingPromptSystemMessage(e, {
                  giftIntentType: t,
                  recipientUserId: n,
                  giftIntentSecondaryAction: i,
              }),
              !0);
    }
}
var C = n(788868);
let N = new (class extends y {
    isChannelEligible(e) {
        switch (e.type) {
            case i.r.DM:
                return !0;
            case i.r.GROUP_DM:
            case i.r.GUILD_TEXT:
            default:
                return !1;
        }
    }
    maybeSendGiftingPromptSystemMessageDelayed(e, t, n, i) {
        new r.J_(1e3, () => {
            this.maybeSendGiftingPromptSystemMessage(e, t, n, i);
        }).delay();
    }
    maybeSendGiftingPromptSystemMessage(e, t, n, i) {
        if (!s.oz.getSetting()) return;
        let r = l.A.getChannelId(),
            a = o.A.isReady(e);
        d.Ay.isGiftIntentMessageInCooldown(n) ||
            e !== r ||
            (a
                ? this.trySendGiftingPromptSystemMessage(e, t, n, i, "maybeSendGiftingPromptSystemMessage") &&
                  (0, c.xs)(n)
                : o.A.whenReady(e, () => {
                      l.A.getChannelId() === e && this.maybeSendGiftingPromptSystemMessage(e, t, n, i);
                  }));
    }
    sendGiftPromptMessageInSelectedChannelIfEligible(e) {
        let { enabled: t } = u.u.getConfig({ location: "handleChannelSelect" }),
            n = a.A.getChannel(e);
        if (t && null != n && this.isChannelEligible(n)) {
            let e = new Set(n.recipients),
                t = d.Ay.getFriendAnniversaries().filter((t) => e.has(t));
            if (t.length > 0) {
                let e = t[0];
                this.maybeSendGiftingPromptSystemMessageDelayed(n.id, C.np.FRIEND_ANNIVERSARY, e, C.l1.SEND_MESSAGE);
            }
        }
    }
    onChannelSelect(e) {
        let { channelId: t } = e;
        this.sendGiftPromptMessageInSelectedChannelIfEligible(t);
    }
    sendGiftingPromptSystemMessagesIfEligible() {
        let e = l.A.getChannelId();
        null != e && this.sendGiftPromptMessageInSelectedChannelIfEligible(e);
    }
})();
