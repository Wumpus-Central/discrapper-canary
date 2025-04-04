n.d(t, { Z: () => A }), n(47120);
var r = n(392711),
    i = n(106351),
    o = n(904245),
    a = n(147913),
    s = n(367907),
    l = n(447003),
    c = n(592125),
    u = n(650774),
    d = n(271383),
    f = n(430824),
    _ = n(375954),
    p = n(944486),
    h = n(626135),
    m = n(522558),
    g = n(581025),
    E = n(795448),
    b = n(441623),
    y = n(474936),
    v = n(981631);
function O(e, t, n) {
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
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
let S = 50,
    T = 1000;
class N extends a.Z {
    isChannelEligible(e, t) {
        switch (e.type) {
            case i.d.DM:
            case i.d.GROUP_DM:
                return !0;
            case i.d.GUILD_TEXT:
                let n = f.Z.getGuild(t),
                    r = u.Z.getMemberCount(t);
                return null != r && r <= S && (null == n ? void 0 : n.rulesChannelId) !== e.id && !e.isNSFW() && !(0, l.Z)(e) && null == e.linkedLobby;
            default:
                return !1;
        }
    }
    maybeSendGiftingPromptSystemMessageDebounced(e, t, n, i) {
        (0, r.debounce)(() => {
            let r = p.Z.getChannelId();
            !b.Z.isGiftIntentMessageInCooldown(n) &&
                e === r &&
                _.Z.isReady(e) &&
                (o.Z.sendGiftingPromptSystemMessage(e, {
                    giftIntentType: t,
                    recipientUserId: n,
                    giftIntentSecondaryAction: i
                }),
                (0, E.PV)(n));
        }, T)();
    }
    handleChannelSelect(e, t) {
        let { enabled: n } = g.G.getCurrentConfig({ location: 'PremiumGiftingIntentManager handleChannelSelect' }, { autoTrackExposure: !1 }),
            { enabled: r } = m.w.getCurrentConfig({ location: 'PremiumGiftingIntentManager handleChannelSelect' }, { autoTrackExposure: !1 }),
            i = c.Z.getChannel(t);
        if ((n || r) && null != i && this.isChannelEligible(i, e)) {
            let t = new Set(null != e ? d.ZP.getMemberIds(e) : i.recipients),
                o = b.Z.getFriendAnniversaries().filter((e) => t.has(e));
            if (r && o.length > 0) {
                let e = o[0];
                this.maybeSendGiftingPromptSystemMessageDebounced(i.id, y.hX.FRIEND_ANNIVERSARY, e, o.length > 1 ? y.X2.VIEW_ALL : y.X2.SEND_MESSAGE);
            }
            n && h.default.track(v.rMx.FRIEND_ANNIVERSARIES_CHANNEL_VIEWED, I({ friend_anniversaries_count: o.length }, (0, s.v_)(i)));
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
            O(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
                CHANNEL_SELECT: (e) => this.onChannelSelect(e)
            });
    }
}
let A = new N();
