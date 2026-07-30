n.d(t, { US: () => v, BD: () => y, X8: () => D, mH: () => R });
var i = n(477900);
n(582128);
var l = n(435558),
    r = n.n(l),
    s = n(192308),
    a = n(310953),
    o = n(366811),
    d = n(808728),
    c = n(967198),
    u = n(711014),
    h = n(645959),
    A = n(625494),
    E = n(265422),
    C = n(652215),
    g = n(790782);
function _(e, t) {
    return [
        { resourceId: e, type: g.P.GUILD_EVENT },
        ...(e === C.ME
            ? h.A.getPrivateChannelIds()
            : (0, a.A)(e, { withVoiceChannels: t, withCurrentVoiceChannel: !0 }).map((e) => e.id)),
    ];
}
let I = r().throttle(function (e, t) {
    var l;
    let r,
        a,
        h,
        {
            channelPredicate: g = () => !0,
            guildPredicate: I = () => !0,
            guildFeaturePredicate: T = () => !1,
            ensureChatIsVisible: p = () => !1,
            withVoiceChannels: N = !1,
        } = t,
        S = o.A.getState().guildId ?? C.ME,
        L = o.A.getState().channelId,
        m =
            ((l = S),
            (a = (r = [C.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(l)),
            e > 0
                ? r.slice(a).concat(r.slice(0, a), l)
                : (r.splice(a, 0, l), r.slice(a + 1).concat(r.slice(0, a + 1)))),
        f = e > 0 ? 0 : m.length - 1,
        O = _(S, N),
        b = O.indexOf(L) + e;
    for (; null != S && "" !== S; ) {
        if (((h = O[b]), I(S)))
            for (; null != h && "" !== h; ) {
                if ("string" == typeof h) {
                    if (g(S, h)) return (0, E.i)(S, h, !1, p(S, h));
                } else if ("object" == typeof h && T(h.resourceId, h.type))
                    return (
                        S !== c.A.getGuildId() && (0, E.i)(S, d.Ay.getDefaultChannel(S)?.id),
                        (0, s.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("25996"),
                                n.e("54948"),
                                n.e("85251"),
                                n.e("28634"),
                                n.e("78638"),
                                n.e("39644"),
                                n.e("15462"),
                                n.e("55513"),
                                n.e("47626"),
                                n.e("32756"),
                                n.e("56373"),
                                n.e("48263"),
                                n.e("1922"),
                                n.e("52695"),
                                n.e("49347"),
                                n.e("64287"),
                                n.e("53934"),
                                n.e("68248"),
                                n.e("69647"),
                                n.e("43267"),
                                n.e("98354"),
                                n.e("11588"),
                            ]).then(n.bind(n, 15823));
                            return (t) => (0, i.jsx)(e, { ...t, guildId: S });
                        })
                    );
                (b += e), (h = O[b]);
            }
        if (((f += e), null == (S = m[f]) || "" === S)) break;
        (O = _(S, N)), (b = e < 0 ? O.length - 1 : 0);
    }
    A._.dispatch(C.jej.SHAKE_APP, { duration: 200, intensity: 2 });
}, C.ugG);
var T = n(455234),
    p = n(95701),
    N = n(734057),
    S = n(568548),
    L = n(309010),
    m = n(543465);
let f = (e, t) => {
        let n = N.A.getChannel(t);
        return (
            null != n &&
            ((0, p.Gw)(n.type) || C.kvI.GUILD_VOCAL_PRIMARY.has(n.type)
                ? S.Ay.getMentionCount(t) > 0 || L.Ay.getVoiceChannelId() === t
                : (!m.Ay.isChannelMuted(e, t) || S.Ay.getMentionCount(t) > 0) && (0, T.Y)(n))
        );
    },
    O = (e, t) =>
        t === g.P.GUILD_EVENT ? !m.Ay.isMuteScheduledEventsEnabled(e) && S.Ay.hasUnread(e, t) : S.Ay.hasUnread(e, t),
    b = (e, t) => {
        let n = N.A.getChannel(t);
        return (
            null != n &&
            !!C.kvI.GUILD_VOCAL.has(n.type) &&
            (S.Ay.getMentionCount(t) > 0 || (L.Ay.getVoiceChannelId() === t && S.Ay.getUnreadCount(t) > 0))
        );
    },
    R = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.A.getState().guildId ?? C.ME;
            return (
                I(1, {
                    channelPredicate: f,
                    guildPredicate: (t) => t === e || !m.Ay.isMuted(t),
                    guildFeaturePredicate: O,
                    ensureChatIsVisible: b,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    v = {
        binds: ["alt+shift+up"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.A.getState().guildId ?? C.ME;
            return (
                I(-1, {
                    channelPredicate: f,
                    guildPredicate: (t) => t === e || !m.Ay.isMuted(t),
                    guildFeaturePredicate: O,
                    ensureChatIsVisible: b,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    U = (e, t) => S.Ay.getMentionCount(t) > 0,
    y = {
        binds: ["mod+shift+alt+down"],
        comboKeysBindGlobal: !0,
        action: () => (I(1, { channelPredicate: U, ensureChatIsVisible: b, withVoiceChannels: !0 }), !1),
    },
    D = {
        binds: ["mod+shift+alt+up"],
        comboKeysBindGlobal: !0,
        action: () => (I(-1, { channelPredicate: U, ensureChatIsVisible: b, withVoiceChannels: !0 }), !1),
    };
