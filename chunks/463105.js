"use strict";
n.d(t, { A: () => R });
var i = n(478437),
    r = n(451988),
    a = n(885386),
    s = n(734057),
    l = n(232835),
    o = n(309010),
    d = n(70730),
    c = n(45787),
    u = n(507104),
    _ = n(158390),
    E = n(228366),
    A = n(493336),
    h = n(439372),
    I = n(931480),
    f = n(617617),
    p = n(927813),
    T = n(19745),
    m = n(652215);
let g = 10 * p.A.Millis.SECOND,
    S = 5 * p.A.Millis.MINUTE;
class N extends h.A {
    actions = {
        POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
        CHANNEL_SELECT: (e) => this.onChannelSelect(e),
        GIFT_INTENT_DISMISSALS_FETCH_SUCCESS: (e) => this.onReconcileSuccess(e),
        GIFT_INTENT_DISMISSALS_FETCH_FAILURE: () => this.onReconcileSettled(!1),
        LOGOUT: () => this.onLogout(),
    };
    stores = new Map([[u.Ay, () => this.onPremiumGiftingIntentStoreChange()]]);
    reconcileBackoff = new _.A(g, S);
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
        return 0 !== u.Ay.getFriendAnniversaries().length && T.H.getConfig({ location: e }).enabled;
    }
    getServerDismissalTimestampMs() {
        return Number(f.A.settings.userContent?.lastGiftIntentDismissedAtMs ?? "0");
    }
    attemptReconcileFetch() {
        let e = this.getServerDismissalTimestampMs();
        u.Ay.getLastKnownGiftIntentDismissedAtMs() >= e ||
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
            let i = s.A.getDMFromUserId(t);
            if (null != i)
                for (let e of I.A.getMessages(i))
                    e.type === m.lAJ.GIFTING_PROMPT &&
                        e.giftingPrompt?.recipientUserId === t &&
                        E.h.dispatch({ type: "MESSAGE_DELETE", id: e.id, channelId: i });
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
            u.Ay.getLastKnownGiftIntentDismissedAtMs() < this.getServerDismissalTimestampMs() ||
            ((this.heldGiftingPromptSystemMessage = !1), this.sendGiftingPromptSystemMessagesIfEligible());
    }
    shouldHoldGiftingPromptSystemMessageForServerReconcile(e) {
        return (
            !!T.H.getConfig({ location: e }).enabled &&
            u.Ay.getLastKnownGiftIntentDismissedAtMs() < this.getServerDismissalTimestampMs()
        );
    }
    trySendGiftingPromptSystemMessage(e, t, n, i, r) {
        return this.shouldHoldGiftingPromptSystemMessageForServerReconcile(r)
            ? ((this.heldGiftingPromptSystemMessage = !0), !1)
            : (A.A.sendGiftingPromptSystemMessage(e, {
                  giftIntentType: t,
                  recipientUserId: n,
                  giftIntentSecondaryAction: i,
              }),
              !0);
    }
}
var C = n(202541);
let R = new (class extends N {
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
        if (!a.oz.getSetting()) return;
        let r = o.Ay.getChannelId(),
            s = l.A.isReady(e);
        u.Ay.isGiftIntentMessageInCooldown(n) ||
            e !== r ||
            (s
                ? this.trySendGiftingPromptSystemMessage(e, t, n, i, "maybeSendGiftingPromptSystemMessage") &&
                  (0, c.xs)(n)
                : l.A.whenReady(e, () => {
                      o.Ay.getChannelId() === e && this.maybeSendGiftingPromptSystemMessage(e, t, n, i);
                  }));
    }
    sendGiftPromptMessageInSelectedChannelIfEligible(e) {
        let { enabled: t } = d.u.getConfig({ location: "handleChannelSelect" }),
            n = s.A.getChannel(e);
        if (t && null != n && this.isChannelEligible(n)) {
            let e = new Set(n.recipients),
                t = u.Ay.getFriendAnniversaries().filter((t) => e.has(t));
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
        let e = o.Ay.getChannelId();
        null != e && this.sendGiftPromptMessageInSelectedChannelIfEligible(e);
    }
})();
