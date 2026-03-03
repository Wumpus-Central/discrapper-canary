"use strict";
n.d(t, { A: () => O });
var r = n(110259),
    i = n(478437),
    s = n(554146),
    a = n(451988),
    o = n(308528),
    l = n(843472),
    u = n(439372),
    c = n(139286),
    d = n(626584),
    _ = n(367727),
    f = n(547),
    p = n(21119),
    h = n(253932),
    m = n(734057),
    E = n(320501),
    g = n(309010),
    A = n(927813),
    I = n(70730),
    T = n(45787),
    S = n(275759),
    y = n(788868),
    v = n(49999);
let N = 1e3,
    C = new d.A("PremiumGiftingIntentManager");
class R extends u.A {
    actions = {
        POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
        CHANNEL_SELECT: (e) => this.onChannelSelect(e),
    };
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
    isGiftIntentDCInCooldown() {
        return (0, _.FZ)(s.M.GIFT_INTENT_MESSAGE, { cooldownDurationMs: A.A.Millis.DAY }).isDismissed;
    }
    dismissGiftIntentDC() {
        (0, _.uh)(s.M.GIFT_INTENT_MESSAGE, { dismissAction: v.i.AUTO_DISMISS, forceTrack: !0 });
    }
    maybeSendGiftingPromptSystemMessageDelayed(e, t, n, r) {
        new a.J_(N, () => {
            this.maybeSendGiftingPromptSystemMessage(e, t, n, r);
        }).delay();
    }
    maybeSendGiftingPromptSystemMessage(e, t, n, r) {
        let i = g.A.getChannelId(),
            s = E.A.isReady(e);
        if (!S.Ay.isGiftIntentMessageInCooldown(n) && e === i) {
            if (!s)
                return void E.A.whenReady(e, () => {
                    g.A.getChannelId() === e && this.maybeSendGiftingPromptSystemMessage(e, t, n, r);
                });
            l.A.sendGiftingPromptSystemMessage(e, {
                giftIntentType: t,
                recipientUserId: n,
                giftIntentSecondaryAction: r,
            }),
                (0, T.xs)(n);
        }
    }
    sendGiftPromptMessageInSelectedChannelIfEligible(e) {
        let { enabled: t } = I.u.getConfig({ location: "PremiumGiftingIntentManager handleChannelSelect" }),
            n = m.A.getChannel(e);
        if (t && null != n && this.isChannelEligible(n)) {
            let e = new Set(n.recipients),
                t = S.Ay.getFriendAnniversaries().filter((t) => e.has(t));
            if (t.length > 0) {
                let e = t[0];
                this.maybeSendGiftingPromptSystemMessageDelayed(n.id, y.np.FRIEND_ANNIVERSARY, e, y.l1.SEND_MESSAGE);
            }
        }
    }
    async sendGiftingNotificationIfEligible() {
        let { enabled: e, showDmPrompts: t } = I.u.getConfig({
                location: "PremiumGiftingIntentManager handleTopAffinityUnreadNotification",
            }),
            n = h.oz.getSetting();
        if (!e || !t || !n || this.isGiftIntentDCInCooldown()) return;
        let i = S.Ay.getNextRecipientUserIDForNotification();
        if (null != i)
            try {
                let e = await o.A.getOrEnsurePrivateChannel(i),
                    t = m.A.getChannel(e);
                if (null == t) return;
                if (
                    (E.A.isReady(t.id) || (await f.A.fetchMessages({ channelId: t.id, isPreload: !0 })),
                    E.A.getMessages(t.id).cached)
                )
                    return void C.info("Skipping gift intent notification - fetched messages marked as stale", {
                        channelId: t.id,
                        recipientUserID: i,
                    });
                let n = S.Ay.getNextRecipientUserIDForNotification();
                if (n !== i) return;
                l.A.sendGiftingPromptSystemMessage(t.id, {
                    giftIntentType: y.np.FRIEND_ANNIVERSARY,
                    recipientUserId: n,
                    giftIntentSecondaryAction: y.l1.SEND_MESSAGE,
                }),
                    this.dismissGiftIntentDC();
                let s = p.A.getUserAffinity(n);
                (0, c.x)({
                    name: r.ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION,
                    type: r.ImpressionTypes.VIEW,
                    properties: {
                        gift_intent_type: y.np.FRIEND_ANNIVERSARY,
                        dm_affinity: s?.dmProbability,
                        channel_id: t.id,
                    },
                }),
                    (0, T.xs)(n),
                    (0, T.BT)();
            } catch (e) {
                C.error("Failed to fetch DM channel data for gifting notification", { recipientUserID: i, error: e });
            }
    }
    onChannelSelect(e) {
        let { channelId: t } = e;
        this.sendGiftPromptMessageInSelectedChannelIfEligible(t);
    }
    onPostConnectionOpen() {
        this.sendGiftingNotificationIfEligible();
        let e = g.A.getChannelId();
        null != e && this.sendGiftPromptMessageInSelectedChannelIfEligible(e);
    }
}
let O = new R();
