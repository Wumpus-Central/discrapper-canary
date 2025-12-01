n.d(t, { Z: () => E }), n(388685);
var r = n(106351),
    i = n(846519),
    a = n(904245),
    o = n(147913),
    s = n(695346),
    l = n(592125),
    c = n(375954),
    u = n(944486),
    d = n(522558),
    f = n(795448),
    p = n(441623),
    _ = n(474936);
function m(e, t, n) {
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
let h = 1000;
class g extends o.Z {
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
        new i.sW(h, () => {
            let i = u.Z.getChannelId();
            !p.ZP.isGiftIntentMessageInCooldown(n) &&
                e === i &&
                c.Z.isReady(e) &&
                (a.Z.sendGiftingPromptSystemMessage(e, {
                    giftIntentType: t,
                    recipientUserId: n,
                    giftIntentSecondaryAction: r,
                }),
                (0, f.PV)(n));
        }).delay();
    }
    handleChannelSelect(e) {
        let { enabled: t } = d.w.getConfig({ location: "PremiumGiftingIntentManager handleChannelSelect" }),
            n = l.Z.getChannel(e);
        if (t && null != n && this.isChannelEligible(n)) {
            let e = new Set(n.recipients),
                t = p.ZP.getFriendAnniversaries().filter((t) => e.has(t));
            if (t.length > 0) {
                let e = t[0];
                this.maybeSendGiftingPromptSystemMessageDelayed(n.id, _.hX.FRIEND_ANNIVERSARY, e, _.X2.SEND_MESSAGE);
            }
        }
    }
    handleTopAffinityUnreadNotification() {
        let { enabled: e } = d.w.getConfig({
                location: "PremiumGiftingIntentManager handleTopAffinityUnreadNotification",
            }),
            t = s.vc.getSetting();
        e &&
            t &&
            p.ZP.getFriendAnniversaries()
                .filter((e) => p.ZP.isTopAffinityFriendAnniversary({ userId: e }))
                .forEach((e) => {
                    let t = l.Z.getDMChannelFromUserId(e);
                    null != t &&
                        new i.sW(h, () => {
                            p.ZP.canShowGiftUnreadNotification() &&
                                (a.Z.sendGiftingPromptSystemMessage(t.id, {
                                    giftIntentType: _.hX.FRIEND_ANNIVERSARY,
                                    recipientUserId: e,
                                    giftIntentSecondaryAction: _.X2.SEND_MESSAGE,
                                }),
                                (0, f.Zm)());
                        }).delay();
                });
    }
    onChannelSelect(e) {
        let { channelId: t } = e;
        this.handleTopAffinityUnreadNotification(), this.handleChannelSelect(t);
    }
    onPostConnectionOpen() {
        this.handleTopAffinityUnreadNotification();
        let e = u.Z.getChannelId();
        null != e && this.handleChannelSelect(e);
    }
    constructor(...e) {
        super(...e),
            m(this, "actions", {
                POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
                CHANNEL_SELECT: (e) => this.onChannelSelect(e),
            });
    }
}
let E = new g();
