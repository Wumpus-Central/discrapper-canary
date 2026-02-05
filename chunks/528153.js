"use strict";
n.d(t, { A: () => v });
var r = n(110259),
    i = n(478437),
    a = n(451988),
    s = n(308528),
    o = n(843472),
    l = n(439372),
    u = n(139286),
    c = n(626584),
    d = n(547),
    _ = n(21119),
    f = n(253932),
    p = n(734057),
    h = n(320501),
    m = n(309010),
    g = n(70730),
    E = n(45787),
    A = n(275759),
    I = n(788868);
let T = 1e3,
    y = new c.A("PremiumGiftingIntentManager");
class S extends l.A {
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
    maybeSendGiftingPromptSystemMessageDelayed(e, t, n, r) {
        new a.J_(T, () => {
            this.maybeSendGiftingPromptSystemMessage(e, t, n, r);
        }).delay();
    }
    maybeSendGiftingPromptSystemMessage(e, t, n, r) {
        let i = m.A.getChannelId(),
            a = A.Ay.isGiftIntentMessageInCooldown(n),
            s = h.A.isReady(e);
        if (!a && e === i) {
            if (!s)
                return void h.A.whenReady(e, () => {
                    m.A.getChannelId() === e && this.maybeSendGiftingPromptSystemMessage(e, t, n, r);
                });
            o.A.sendGiftingPromptSystemMessage(e, {
                giftIntentType: t,
                recipientUserId: n,
                giftIntentSecondaryAction: r,
            }),
                (0, E.xs)(n);
        }
    }
    sendGiftPromptMessageInSelectedChannelIfEligible(e) {
        let { enabled: t } = g.u.getConfig({ location: "PremiumGiftingIntentManager handleChannelSelect" }),
            n = p.A.getChannel(e);
        if (t && null != n && this.isChannelEligible(n)) {
            let e = new Set(n.recipients),
                t = A.Ay.getFriendAnniversaries().filter((t) => e.has(t));
            if (t.length > 0) {
                let e = t[0];
                this.maybeSendGiftingPromptSystemMessageDelayed(n.id, I.np.FRIEND_ANNIVERSARY, e, I.l1.SEND_MESSAGE);
            }
        }
    }
    async sendGiftingNotificationIfEligible() {
        let { enabled: e } = g.u.getConfig({
                location: "PremiumGiftingIntentManager handleTopAffinityUnreadNotification",
            }),
            t = f.oz.getSetting();
        if (!e || !t) return;
        let n = A.Ay.getNextRecipientUserIDForNotification();
        if (null != n)
            try {
                let e = await s.A.getOrEnsurePrivateChannel(n),
                    t = p.A.getChannel(e);
                if (null == t) return;
                if (
                    (h.A.isReady(t.id) || (await d.A.fetchMessages({ channelId: t.id, isPreload: !0 })),
                    h.A.getMessages(t.id).cached)
                )
                    return void y.info("Skipping gift intent notification - fetched messages marked as stale", {
                        channelId: t.id,
                        recipientUserID: n,
                    });
                let i = A.Ay.getNextRecipientUserIDForNotification();
                if (i !== n) return;
                o.A.sendGiftingPromptSystemMessage(t.id, {
                    giftIntentType: I.np.FRIEND_ANNIVERSARY,
                    recipientUserId: i,
                    giftIntentSecondaryAction: I.l1.SEND_MESSAGE,
                });
                let a = _.A.getUserAffinity(i);
                (0, u.x)({
                    name: r.ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION,
                    type: r.ImpressionTypes.VIEW,
                    properties: {
                        gift_intent_type: I.np.FRIEND_ANNIVERSARY,
                        dm_affinity: a?.dmProbability,
                        channel_id: t.id,
                    },
                }),
                    (0, E.xs)(i),
                    (0, E.BT)();
            } catch (e) {
                y.error("Failed to fetch DM channel data for gifting notification", { recipientUserID: n, error: e });
            }
    }
    onChannelSelect(e) {
        let { channelId: t } = e;
        this.sendGiftPromptMessageInSelectedChannelIfEligible(t);
    }
    onPostConnectionOpen() {
        this.sendGiftingNotificationIfEligible();
        let e = m.A.getChannelId();
        null != e && this.sendGiftPromptMessageInSelectedChannelIfEligible(e);
    }
}
let v = new S();
