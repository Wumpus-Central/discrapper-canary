n.d(t, { US: () => v, BD: () => y, X8: () => D, mH: () => R });
var i = n(627968);
n(64700);
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
            withVoiceChannels: S = !1,
        } = t,
        N = o.A.getState().guildId ?? C.ME,
        m = o.A.getState().channelId,
        L =
            ((l = N),
            (a = (r = [C.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(l)),
            e > 0
                ? r.slice(a).concat(r.slice(0, a), l)
                : (r.splice(a, 0, l), r.slice(a + 1).concat(r.slice(0, a + 1)))),
        f = e > 0 ? 0 : L.length - 1,
        O = _(N, S),
        b = O.indexOf(m) + e;
    for (; null != N && "" !== N; ) {
        if (((h = O[b]), I(N)))
            for (; null != h && "" !== h; ) {
                if ("string" == typeof h) {
                    if (g(N, h)) return (0, E.i)(N, h, !1, p(N, h));
                } else if ("object" == typeof h && T(h.resourceId, h.type))
                    return (
                        N !== c.A.getGuildId() && (0, E.i)(N, d.Ay.getDefaultChannel(N)?.id),
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
                            return (t) => (0, i.jsx)(e, { ...t, guildId: N });
                        })
                    );
                (b += e), (h = O[b]);
            }
        if (((f += e), null == (N = L[f]) || "" === N)) break;
        (O = _(N, S)), (b = e < 0 ? O.length - 1 : 0);
    }
    A._.dispatch(C.jej.SHAKE_APP, { duration: 200, intensity: 2 });
}, C.ugG);
var T = n(455234),
    p = n(95701),
    S = n(734057),
    N = n(568548),
    m = n(309010),
    L = n(543465);
let f = (e, t) => {
        let n = S.A.getChannel(t);
        return (
            null != n &&
            ((0, p.Gw)(n.type) || C.kvI.GUILD_VOCAL_PRIMARY.has(n.type)
                ? N.Ay.getMentionCount(t) > 0 || m.Ay.getVoiceChannelId() === t
                : (!L.Ay.isChannelMuted(e, t) || N.Ay.getMentionCount(t) > 0) && (0, T.Y)(n))
        );
    },
    O = (e, t) =>
        t === g.P.GUILD_EVENT ? !L.Ay.isMuteScheduledEventsEnabled(e) && N.Ay.hasUnread(e, t) : N.Ay.hasUnread(e, t),
    b = (e, t) => {
        let n = S.A.getChannel(t);
        return (
            null != n &&
            !!C.kvI.GUILD_VOCAL.has(n.type) &&
            (N.Ay.getMentionCount(t) > 0 || (m.Ay.getVoiceChannelId() === t && N.Ay.getUnreadCount(t) > 0))
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
                    guildPredicate: (t) => t === e || !L.Ay.isMuted(t),
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
                    guildPredicate: (t) => t === e || !L.Ay.isMuted(t),
                    guildFeaturePredicate: O,
                    ensureChatIsVisible: b,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    U = (e, t) => N.Ay.getMentionCount(t) > 0,
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
