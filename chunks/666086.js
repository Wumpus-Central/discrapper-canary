var i = r(47120);
var a = r(392711);
var o = r(106351),
    s = r(904245),
    l = r(147913),
    u = r(367907),
    c = r(447003),
    d = r(592125),
    f = r(650774),
    p = r(271383),
    h = r(430824),
    _ = r(375954),
    m = r(944486),
    g = r(626135),
    E = r(522558),
    v = r(581025),
    y = r(795448),
    b = r(441623),
    I = r(474936),
    T = r(981631);
function S(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let A = 50,
    C = 1000;
class N extends l.Z {
    isChannelEligible(e, n) {
        switch (e.type) {
            case o.d.DM:
            case o.d.GROUP_DM:
                return !0;
            case o.d.GUILD_TEXT:
                let r = h.Z.getGuild(n),
                    i = f.Z.getMemberCount(n);
                return null != i && i <= A && (null == r ? void 0 : r.rulesChannelId) !== e.id && !e.isNSFW() && !(0, c.Z)(e) && null == e.linkedLobby;
            default:
                return !1;
        }
    }
    maybeSendGiftingPromptSystemMessageDebounced(e, n, r, i) {
        (0, a.debounce)(() => {
            let a = m.Z.getChannelId();
            !b.Z.isGiftIntentMessageInCooldown(r) &&
                e === a &&
                _.Z.isReady(e) &&
                (s.Z.sendGiftingPromptSystemMessage(e, {
                    giftIntentType: n,
                    recipientUserId: r,
                    giftIntentSecondaryAction: i
                }),
                (0, y.PV)(r));
        }, C)();
    }
    handleChannelSelect(e, n) {
        let { enabled: r } = v.G.getCurrentConfig({ location: 'PremiumGiftingIntentManager handleChannelSelect' }, { autoTrackExposure: !1 }),
            { enabled: i } = E.w.getCurrentConfig({ location: 'PremiumGiftingIntentManager handleChannelSelect' }, { autoTrackExposure: !1 }),
            a = d.Z.getChannel(n);
        if ((r || i) && null != a && this.isChannelEligible(a, e)) {
            let n = new Set(null != e ? p.ZP.getMemberIds(e) : a.recipients),
                o = b.Z.getFriendAnniversaries().filter((e) => n.has(e));
            if (i && o.length > 0) {
                let e = o[0];
                this.maybeSendGiftingPromptSystemMessageDebounced(a.id, I.hX.FRIEND_ANNIVERSARY, e, o.length > 1 ? I.X2.VIEW_ALL : I.X2.SEND_MESSAGE);
            }
            r &&
                g.default.track(T.rMx.FRIEND_ANNIVERSARIES_CHANNEL_VIEWED, {
                    friend_anniversaries_count: o.length,
                    ...(0, u.v_)(a)
                });
        }
    }
    onChannelSelect(e) {
        let { guildId: n, channelId: r } = e;
        this.handleChannelSelect(n, r);
    }
    onPostConnectionOpen() {
        let e = m.Z.getChannelId();
        if (null != e) {
            let n = d.Z.getChannel(e);
            this.handleChannelSelect(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id);
        }
    }
    constructor(...e) {
        super(...e),
            S(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
                CHANNEL_SELECT: (e) => this.onChannelSelect(e)
            });
    }
}
n.Z = new N();
