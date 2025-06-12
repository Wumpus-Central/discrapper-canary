n.d(t, { Z: () => v }), n(388685);
var r = n(392711),
    i = n(106351),
    a = n(904245),
    o = n(147913),
    s = n(447003),
    l = n(592125),
    c = n(650774),
    u = n(271383),
    d = n(430824),
    _ = n(375954),
    f = n(944486),
    p = n(522558),
    h = n(795448),
    m = n(441623),
    g = n(474936);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let b = 50,
    y = 1000;
class O extends o.Z {
    isChannelEligible(e, t) {
        switch (e.type) {
            case i.d.DM:
            case i.d.GROUP_DM:
                return !0;
            case i.d.GUILD_TEXT:
                let n = d.Z.getGuild(t),
                    r = c.Z.getMemberCount(t);
                return null != r && r <= b && (null == n ? void 0 : n.rulesChannelId) !== e.id && !e.isNSFW() && !(0, s.Z)(e) && null == e.linkedLobby;
            default:
                return !1;
        }
    }
    maybeSendGiftingPromptSystemMessageDebounced(e, t, n, i) {
        (0, r.debounce)(() => {
            let r = f.Z.getChannelId();
            !m.Z.isGiftIntentMessageInCooldown(n) &&
                e === r &&
                _.Z.isReady(e) &&
                (a.Z.sendGiftingPromptSystemMessage(e, {
                    giftIntentType: t,
                    recipientUserId: n,
                    giftIntentSecondaryAction: i
                }),
                (0, h.PV)(n));
        }, y)();
    }
    handleChannelSelect(e, t) {
        let { enabled: n } = p.w.getCurrentConfig({ location: 'PremiumGiftingIntentManager handleChannelSelect' }, { autoTrackExposure: !1 }),
            r = l.Z.getChannel(t);
        if (n && null != r && this.isChannelEligible(r, e)) {
            let t = new Set(null != e ? u.ZP.getMemberIds(e) : r.recipients),
                i = m.Z.getFriendAnniversaries().filter((e) => t.has(e));
            if (n && i.length > 0) {
                let e = i[0];
                this.maybeSendGiftingPromptSystemMessageDebounced(r.id, g.hX.FRIEND_ANNIVERSARY, e, i.length > 1 ? g.X2.VIEW_ALL : g.X2.SEND_MESSAGE);
            }
        }
    }
    onChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        this.handleChannelSelect(t, n);
    }
    onPostConnectionOpen() {
        let e = f.Z.getChannelId();
        if (null != e) {
            let t = l.Z.getChannel(e);
            this.handleChannelSelect(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id);
        }
    }
    constructor(...e) {
        super(...e),
            E(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
                CHANNEL_SELECT: (e) => this.onChannelSelect(e)
            });
    }
}
let v = new O();
