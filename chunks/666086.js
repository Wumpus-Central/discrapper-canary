n.d(t, { Z: () => I }), n(388685);
var r = n(106351),
    i = n(846519),
    a = n(904245),
    o = n(147913),
    s = n(622822),
    l = n(447003),
    c = n(592125),
    u = n(650774),
    d = n(271383),
    f = n(430824),
    _ = n(375954),
    p = n(944486),
    h = n(522558),
    m = n(795448),
    g = n(441623),
    E = n(474936);
function b(e, t, n) {
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
let y = 50,
    O = 1000;
class v extends o.Z {
    isChannelEligible(e, t) {
        switch (e.type) {
            case r.d.DM:
            case r.d.GROUP_DM:
                return !0;
            case r.d.GUILD_TEXT:
                let n = f.Z.getGuild(t),
                    i = u.Z.getMemberCount(t);
                return (
                    null != i &&
                    i <= y &&
                    (null == n ? void 0 : n.rulesChannelId) !== e.id &&
                    !(0, s.Y3)(e) &&
                    !(0, l.Z)(e) &&
                    null == e.linkedLobby
                );
            default:
                return !1;
        }
    }
    maybeSendGiftingPromptSystemMessageDelayed(e, t, n, r) {
        new i.sW(O, () => {
            let i = p.Z.getChannelId();
            !g.Z.isGiftIntentMessageInCooldown(n) &&
                e === i &&
                _.Z.isReady(e) &&
                (a.Z.sendGiftingPromptSystemMessage(e, {
                    giftIntentType: t,
                    recipientUserId: n,
                    giftIntentSecondaryAction: r,
                }),
                (0, m.PV)(n));
        }).delay();
    }
    handleChannelSelect(e, t) {
        let { enabled: n } = h.w.getCurrentConfig(
                { location: "PremiumGiftingIntentManager handleChannelSelect" },
                { autoTrackExposure: !1 },
            ),
            r = c.Z.getChannel(t);
        if (n && null != r && this.isChannelEligible(r, e)) {
            let t = new Set(null != e ? d.ZP.getMemberIds(e) : r.recipients),
                i = g.Z.getFriendAnniversaries().filter((e) => t.has(e));
            if (n && i.length > 0) {
                let e = i[0];
                this.maybeSendGiftingPromptSystemMessageDelayed(
                    r.id,
                    E.hX.FRIEND_ANNIVERSARY,
                    e,
                    i.length > 1 ? E.X2.VIEW_ALL : E.X2.SEND_MESSAGE,
                );
            }
        }
    }
    onChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        this.handleChannelSelect(t, n);
    }
    onPostConnectionOpen() {
        let e = p.Z.getChannelId();
        if (null != e) {
            let t = c.Z.getChannel(e);
            this.handleChannelSelect(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id);
        }
    }
    constructor(...e) {
        super(...e),
            b(this, "actions", {
                POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
                CHANNEL_SELECT: (e) => this.onChannelSelect(e),
            });
    }
}
let I = new v();
