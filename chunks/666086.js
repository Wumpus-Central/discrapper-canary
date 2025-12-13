n.d(t, { Z: () => v }), n(388685);
var r = n(106351),
    i = n(846519),
    a = n(493683),
    o = n(904245),
    s = n(147913),
    l = n(710845),
    c = n(348245),
    u = n(695346),
    d = n(592125),
    f = n(375954),
    p = n(944486),
    _ = n(522558),
    m = n(795448),
    h = n(441623),
    g = n(474936);
function E(e, t, n) {
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
let b = 1000,
    y = new l.Z("PremiumGiftingIntentManager");
class O extends s.Z {
    isChannelEligible(e) {
        switch (e.type) {
            case r.d.DM:
                return !0;
            case r.d.GROUP_DM:
            case r.d.GUILD_TEXT:
            default:
                return !1;
        }
    }
    maybeSendGiftingPromptSystemMessageDelayed(e, t, n, r) {
        new i.sW(b, () => {
            let i = p.Z.getChannelId();
            !h.ZP.isGiftIntentMessageInCooldown(n) &&
                e === i &&
                f.Z.isReady(e) &&
                (o.Z.sendGiftingPromptSystemMessage(e, {
                    giftIntentType: t,
                    recipientUserId: n,
                    giftIntentSecondaryAction: r,
                }),
                (0, m.PV)(n));
        }).delay();
    }
    sendGiftPromptMessageInSelectedChannelIfEligible(e) {
        let { enabled: t } = _.w.getConfig({ location: "PremiumGiftingIntentManager handleChannelSelect" }),
            n = d.Z.getChannel(e);
        if (t && null != n && this.isChannelEligible(n)) {
            let e = new Set(n.recipients),
                t = h.ZP.getFriendAnniversaries().filter((t) => e.has(t));
            if (t.length > 0) {
                let e = t[0];
                this.maybeSendGiftingPromptSystemMessageDelayed(n.id, g.hX.FRIEND_ANNIVERSARY, e, g.X2.SEND_MESSAGE);
            }
        }
    }
    async sendGiftingNotificationIfEligible() {
        let { enabled: e } = _.w.getConfig({
                location: "PremiumGiftingIntentManager handleTopAffinityUnreadNotification",
            }),
            t = u.vc.getSetting();
        if (!e || !t) return;
        let n = h.ZP.getNextRecipientUserIDForNotification();
        if (null != n)
            try {
                let e = await a.Z.getOrEnsurePrivateChannel(n),
                    t = d.Z.getChannel(e);
                if (null == t) return;
                f.Z.isReady(t.id) ||
                    (await c.Z.fetchMessages({
                        channelId: t.id,
                        isPreload: !0,
                    }));
                let r = h.ZP.getNextRecipientUserIDForNotification();
                if (r !== n) return;
                o.Z.sendGiftingPromptSystemMessage(t.id, {
                    giftIntentType: g.hX.FRIEND_ANNIVERSARY,
                    recipientUserId: r,
                    giftIntentSecondaryAction: g.X2.SEND_MESSAGE,
                }),
                    (0, m.PV)(r),
                    (0, m.Zm)();
            } catch (e) {
                y.error("Failed to fetch DM channel data for gifting notification", {
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
        let e = p.Z.getChannelId();
        null != e && this.sendGiftPromptMessageInSelectedChannelIfEligible(e);
    }
    constructor(...e) {
        super(...e),
            E(this, "actions", {
                POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
                CHANNEL_SELECT: (e) => this.onChannelSelect(e),
            });
    }
}
let v = new O();
