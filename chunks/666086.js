n.d(t, { Z: () => T }), n(388685);
var r = n(990547),
    i = n(106351),
    a = n(846519),
    o = n(493683),
    s = n(904245),
    l = n(147913),
    c = n(213609),
    u = n(710845),
    d = n(348245),
    f = n(752048),
    p = n(695346),
    _ = n(592125),
    m = n(375954),
    h = n(944486),
    g = n(522558),
    E = n(795448),
    b = n(441623),
    y = n(474936);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let v = 1000,
    S = new u.Z("PremiumGiftingIntentManager");
class I extends l.Z {
    isChannelEligible(e) {
        switch (e.type) {
            case i.d.DM:
                return !0;
            case i.d.GROUP_DM:
            case i.d.GUILD_TEXT:
            default:
                return !1;
        }
    }
    maybeSendGiftingPromptSystemMessageDelayed(e, t, n, r) {
        new a.sW(v, () => {
            let i = h.Z.getChannelId();
            !b.ZP.isGiftIntentMessageInCooldown(n) &&
                e === i &&
                m.Z.isReady(e) &&
                (s.Z.sendGiftingPromptSystemMessage(e, {
                    giftIntentType: t,
                    recipientUserId: n,
                    giftIntentSecondaryAction: r,
                }),
                (0, E.PV)(n));
        }).delay();
    }
    sendGiftPromptMessageInSelectedChannelIfEligible(e) {
        let { enabled: t } = g.w.getConfig({ location: "PremiumGiftingIntentManager handleChannelSelect" }),
            n = _.Z.getChannel(e);
        if (t && null != n && this.isChannelEligible(n)) {
            let e = new Set(n.recipients),
                t = b.ZP.getFriendAnniversaries().filter((t) => e.has(t));
            if (t.length > 0) {
                let e = t[0];
                this.maybeSendGiftingPromptSystemMessageDelayed(n.id, y.hX.FRIEND_ANNIVERSARY, e, y.X2.SEND_MESSAGE);
            }
        }
    }
    async sendGiftingNotificationIfEligible() {
        let { enabled: e } = g.w.getConfig({
                location: "PremiumGiftingIntentManager handleTopAffinityUnreadNotification",
            }),
            t = p.vc.getSetting();
        if (!e || !t) return;
        let n = b.ZP.getNextRecipientUserIDForNotification();
        if (null != n)
            try {
                let e = await o.Z.getOrEnsurePrivateChannel(n),
                    t = _.Z.getChannel(e);
                if (null == t) return;
                m.Z.isReady(t.id) ||
                    (await d.Z.fetchMessages({
                        channelId: t.id,
                        isPreload: !0,
                    }));
                let i = b.ZP.getNextRecipientUserIDForNotification();
                if (i !== n) return;
                s.Z.sendGiftingPromptSystemMessage(t.id, {
                    giftIntentType: y.hX.FRIEND_ANNIVERSARY,
                    recipientUserId: i,
                    giftIntentSecondaryAction: y.X2.SEND_MESSAGE,
                });
                let a = f.Z.getUserAffinity(i);
                (0, c.h)({
                    name: r.ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION,
                    type: r.ImpressionTypes.VIEW,
                    properties: {
                        gift_intent_type: y.hX.FRIEND_ANNIVERSARY,
                        dm_affinity: null == a ? void 0 : a.dmProbability,
                        channel_id: t.id,
                    },
                }),
                    (0, E.PV)(i),
                    (0, E.Zm)();
            } catch (e) {
                S.error("Failed to fetch DM channel data for gifting notification", {
                    recipientUserID: n,
                    error: e,
                });
            }
    }
    onChannelSelect(e) {
        let { channelId: t } = e;
        this.sendGiftPromptMessageInSelectedChannelIfEligible(t);
    }
    onPostConnectionOpen() {
        this.sendGiftingNotificationIfEligible();
        let e = h.Z.getChannelId();
        null != e && this.sendGiftPromptMessageInSelectedChannelIfEligible(e);
    }
    constructor(...e) {
        super(...e),
            O(this, "actions", {
                POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
                CHANNEL_SELECT: (e) => this.onChannelSelect(e),
            });
    }
}
let T = new I();
