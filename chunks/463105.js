n.d(t, { A: () => N });
var i = n(478437),
    r = n(451988),
    a = n(885386),
    s = n(734057),
    l = n(232835),
    o = n(309010),
    d = n(45787),
    c = n(507104),
    u = n(158390),
    _ = n(228366),
    E = n(148494),
    A = n(439372),
    h = n(931480),
    I = n(617617),
    f = n(927813),
    p = n(652215);
let T = 10 * f.A.Millis.SECOND,
    m = 5 * f.A.Millis.MINUTE;
class g extends A.A {
    actions = {
        POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
        CHANNEL_SELECT: (e) => this.onChannelSelect(e),
        GIFT_INTENT_DISMISSALS_FETCH_SUCCESS: (e) => this.onReconcileSuccess(e),
        GIFT_INTENT_DISMISSALS_FETCH_FAILURE: () => this.onReconcileSettled(!1),
        LOGOUT: () => this.onLogout(),
    };
    stores = new Map([[c.Ay, () => this.onPremiumGiftingIntentStoreChange()]]);
    reconcileBackoff = new u.A(T, m);
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
        !this.isReconcileEligible() || this.reconcileBackoff.pending || this.attemptReconcileFetch();
    }
    retryReconcileServerDismissals = () => {
        this.isReconcileEligible() && this.attemptReconcileFetch();
    };
    isReconcileEligible() {
        return c.Ay.getFriendAnniversaries().length > 0;
    }
    getServerDismissalTimestampMs() {
        return Number(I.A.settings.userContent?.lastGiftIntentDismissedAtMs ?? "0");
    }
    attemptReconcileFetch() {
        let e = this.getServerDismissalTimestampMs();
        c.Ay.getLastKnownGiftIntentDismissedAtMs() >= e ||
            this.isReconciling ||
            ((this.isReconciling = !0), (0, d.qH)(e));
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
                for (let e of h.A.getMessages(i))
                    e.type === p.lAJ.GIFTING_PROMPT &&
                        e.giftingPrompt?.recipientUserId === t &&
                        _.h.dispatch({ type: "MESSAGE_DELETE", id: e.id, channelId: i });
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
            c.Ay.getLastKnownGiftIntentDismissedAtMs() < this.getServerDismissalTimestampMs() ||
            ((this.heldGiftingPromptSystemMessage = !1), this.sendGiftingPromptSystemMessagesIfEligible());
    }
    shouldHoldGiftingPromptSystemMessageForServerReconcile() {
        return c.Ay.getLastKnownGiftIntentDismissedAtMs() < this.getServerDismissalTimestampMs();
    }
    trySendGiftingPromptSystemMessage(e, t, n, i) {
        return this.shouldHoldGiftingPromptSystemMessageForServerReconcile()
            ? ((this.heldGiftingPromptSystemMessage = !0), !1)
            : (E.A.sendGiftingPromptSystemMessage(e, {
                  giftIntentType: t,
                  recipientUserId: n,
                  giftIntentSecondaryAction: i,
              }),
              !0);
    }
}
var S = n(202541);
let N = new (class extends g {
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
        c.Ay.isGiftIntentMessageInCooldown(n) ||
            e !== r ||
            (s
                ? this.trySendGiftingPromptSystemMessage(e, t, n, i) && (0, d.xs)(n)
                : l.A.whenReady(e, () => {
                      o.Ay.getChannelId() === e && this.maybeSendGiftingPromptSystemMessage(e, t, n, i);
                  }));
    }
    sendGiftPromptMessageInSelectedChannelIfEligible(e) {
        let t = s.A.getChannel(e);
        if (null != t && this.isChannelEligible(t)) {
            let e = new Set(t.recipients),
                n = c.Ay.getFriendAnniversaries().filter((t) => e.has(t));
            if (n.length > 0) {
                let e = n[0];
                this.maybeSendGiftingPromptSystemMessageDelayed(t.id, S.np.FRIEND_ANNIVERSARY, e, S.l1.SEND_MESSAGE);
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
