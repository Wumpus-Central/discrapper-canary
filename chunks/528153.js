"use strict";
n.d(t, { A: () => y });
var i = n(110259),
    r = n(478437),
    s = n(554146),
    a = n(451988),
    o = n(308528),
    l = n(720149),
    d = n(439372),
    _ = n(139286),
    u = n(626584),
    c = n(367727),
    E = n(547),
    h = n(427358),
    m = n(253932),
    f = n(734057),
    g = n(232835),
    p = n(309010),
    A = n(927813),
    I = n(70730),
    T = n(45787),
    S = n(275759),
    N = n(788868),
    C = n(49999);
let R = new u.A("PremiumGiftingIntentManager");
class O extends d.A {
    actions = {
        POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
        CHANNEL_SELECT: (e) => this.onChannelSelect(e),
    };
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
        return (0, c.FZ)(s.M.GIFT_INTENT_MESSAGE, { cooldownDurationMs: A.A.Millis.DAY }).isDismissed;
    }
    dismissGiftIntentDC() {
        (0, c.uh)(s.M.GIFT_INTENT_MESSAGE, { dismissAction: C.i.AUTO_DISMISS, forceTrack: !0 });
    }
    maybeSendGiftingPromptSystemMessageDelayed(e, t, n, i) {
        new a.J_(1e3, () => {
            this.maybeSendGiftingPromptSystemMessage(e, t, n, i);
        }).delay();
    }
    maybeSendGiftingPromptSystemMessage(e, t, n, i) {
        let r = p.A.getChannelId(),
            s = g.A.isReady(e);
        if (!S.Ay.isGiftIntentMessageInCooldown(n) && e === r) {
            if (!s)
                return void g.A.whenReady(e, () => {
                    p.A.getChannelId() === e && this.maybeSendGiftingPromptSystemMessage(e, t, n, i);
                });
            l.A.sendGiftingPromptSystemMessage(e, {
                giftIntentType: t,
                recipientUserId: n,
                giftIntentSecondaryAction: i,
            }),
                (0, T.xs)(n);
        }
    }
    sendGiftPromptMessageInSelectedChannelIfEligible(e) {
        let { enabled: t } = I.u.getConfig({ location: "PremiumGiftingIntentManager handleChannelSelect" }),
            n = f.A.getChannel(e);
        if (t && null != n && this.isChannelEligible(n)) {
            let e = new Set(n.recipients),
                t = S.Ay.getFriendAnniversaries().filter((t) => e.has(t));
            if (t.length > 0) {
                let e = t[0];
                this.maybeSendGiftingPromptSystemMessageDelayed(n.id, N.np.FRIEND_ANNIVERSARY, e, N.l1.SEND_MESSAGE);
            }
        }
    }
    async sendGiftingNotificationIfEligible() {
        let { enabled: e, showDmPrompts: t } = I.u.getConfig({
                location: "PremiumGiftingIntentManager handleTopAffinityUnreadNotification",
            }),
            n = m.oz.getSetting();
        if (!e || !t || !n || this.isGiftIntentDCInCooldown()) return;
        let r = S.Ay.getNextRecipientUserIDForNotification();
        if (null != r)
            try {
                let e = await o.A.getOrEnsurePrivateChannel(r),
                    t = f.A.getChannel(e);
                if (null == t) return;
                if (
                    (g.A.isReady(t.id) || (await E.A.fetchMessages({ channelId: t.id, isPreload: !0 })),
                    g.A.getMessages(t.id).cached)
                )
                    return void R.info("Skipping gift intent notification - fetched messages marked as stale", {
                        channelId: t.id,
                        recipientUserID: r,
                    });
                let n = S.Ay.getNextRecipientUserIDForNotification();
                if (n !== r) return;
                l.A.sendGiftingPromptSystemMessage(t.id, {
                    giftIntentType: N.np.FRIEND_ANNIVERSARY,
                    recipientUserId: n,
                    giftIntentSecondaryAction: N.l1.SEND_MESSAGE,
                }),
                    this.dismissGiftIntentDC();
                let s = h.A.getUserAffinity(n);
                (0, _.x)({
                    name: i.ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION,
                    type: i.ImpressionTypes.VIEW,
                    properties: {
                        gift_intent_type: N.np.FRIEND_ANNIVERSARY,
                        dm_affinity: s?.dmProbability,
                        channel_id: t.id,
                    },
                }),
                    (0, T.xs)(n),
                    (0, T.BT)();
            } catch (e) {
                R.error("Failed to fetch DM channel data for gifting notification", { recipientUserID: r, error: e });
            }
    }
    onChannelSelect(e) {
        let { channelId: t } = e;
        this.sendGiftPromptMessageInSelectedChannelIfEligible(t);
    }
    onPostConnectionOpen() {
        this.sendGiftingNotificationIfEligible();
        let e = p.A.getChannelId();
        null != e && this.sendGiftPromptMessageInSelectedChannelIfEligible(e);
    }
}
let y = new O();
