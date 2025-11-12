n.d(t, { Z: () => E }), n(388685);
var r = n(106351),
    i = n(846519),
    a = n(904245),
    o = n(147913),
    s = n(592125),
    l = n(271383),
    c = n(375954),
    u = n(944486),
    d = n(522558),
    f = n(795448),
    _ = n(441623),
    p = n(474936);
function h(e, t, n) {
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
let m = 1000;
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
        new i.sW(m, () => {
            let i = u.Z.getChannelId();
            !_.Z.isGiftIntentMessageInCooldown(n) &&
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
    handleChannelSelect(e, t) {
        let { enabled: n } = d.w.getConfig({ location: "PremiumGiftingIntentManager handleChannelSelect" }),
            r = s.Z.getChannel(t);
        if (n && null != r && this.isChannelEligible(r)) {
            let t = new Set(null != e ? l.ZP.getMemberIds(e) : r.recipients),
                i = _.Z.getFriendAnniversaries().filter((e) => t.has(e));
            if (n && i.length > 0) {
                let e = i[0];
                this.maybeSendGiftingPromptSystemMessageDelayed(
                    r.id,
                    p.hX.FRIEND_ANNIVERSARY,
                    e,
                    i.length > 1 ? p.X2.VIEW_ALL : p.X2.SEND_MESSAGE,
                );
            }
        }
    }
    onChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        this.handleChannelSelect(t, n);
    }
    onPostConnectionOpen() {
        let e = u.Z.getChannelId();
        if (null != e) {
            let t = s.Z.getChannel(e);
            this.handleChannelSelect(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id);
        }
    }
    constructor(...e) {
        super(...e),
            h(this, "actions", {
                POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
                CHANNEL_SELECT: (e) => this.onChannelSelect(e),
            });
    }
}
let E = new g();
