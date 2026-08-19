n.d(t, { US: () => R, BD: () => D, X8: () => G, mH: () => v });
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
    A = n(645959),
    h = n(625494),
    E = n(265422),
    g = n(652215),
    C = n(790782);
function _(e, t) {
    return [
        { resourceId: e, type: C.P.GUILD_EVENT },
        ...(e === g.ME
            ? A.A.getPrivateChannelIds()
            : (0, a.A)(e, { withVoiceChannels: t, withCurrentVoiceChannel: !0 }).map((e) => e.id)),
    ];
}
let I = r().throttle(function (e, t) {
    var l;
    let r,
        a,
        A,
        {
            channelPredicate: C = () => !0,
            guildPredicate: I = () => !0,
            guildFeaturePredicate: T = () => !1,
            ensureChatIsVisible: p = () => !1,
            withVoiceChannels: S = !1,
        } = t,
        N = o.A.getState().guildId ?? g.ME,
        L = o.A.getState().channelId,
        m =
            ((l = N),
            (a = (r = [g.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(l)),
            e > 0
                ? r.slice(a).concat(r.slice(0, a), l)
                : (r.splice(a, 0, l), r.slice(a + 1).concat(r.slice(0, a + 1)))),
        f = e > 0 ? 0 : m.length - 1,
        O = _(N, S),
        b = O.indexOf(L) + e;
    for (; null != N && "" !== N; ) {
        if (((A = O[b]), I(N)))
            for (; null != A && "" !== A; ) {
                if ("string" == typeof A) {
                    if (C(N, A)) return (0, E.i)(N, A, !1, p(N, A));
                } else if ("object" == typeof A && T(A.resourceId, A.type))
                    return (
                        N !== c.A.getGuildId() && (0, E.i)(N, d.Ay.getDefaultChannel(N)?.id),
                        (0, s.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("489565"),
                                n.e("684231"),
                                n.e("570690"),
                                n.e("886631"),
                                n.e("931937"),
                                n.e("998835"),
                                n.e("74336"),
                                n.e("872983"),
                                n.e("694303"),
                                n.e("147626"),
                                n.e("632756"),
                                n.e("256373"),
                                n.e("901922"),
                                n.e("970644"),
                                n.e("752695"),
                                n.e("449347"),
                                n.e("464287"),
                                n.e("853934"),
                                n.e("468248"),
                                n.e("469647"),
                                n.e("543267"),
                                n.e("798354"),
                                n.e("711588"),
                            ]).then(n.bind(n, 15823));
                            return (t) => (0, i.jsx)(e, { ...t, guildId: N });
                        })
                    );
                (b += e), (A = O[b]);
            }
        if (((f += e), null == (N = m[f]) || "" === N)) break;
        (O = _(N, S)), (b = e < 0 ? O.length - 1 : 0);
    }
    h._.dispatch(g.jej.SHAKE_APP, { duration: 200, intensity: 2 });
}, g.ugG);
var T = n(455234),
    p = n(95701),
    S = n(734057),
    N = n(568548),
    L = n(309010),
    m = n(543465);
let f = (e, t) => {
        let n = S.A.getChannel(t);
        return (
            null != n &&
            ((0, p.Gw)(n.type) || g.kvI.GUILD_VOCAL_PRIMARY.has(n.type)
                ? N.Ay.getMentionCount(t) > 0 || L.Ay.getVoiceChannelId() === t
                : (!m.Ay.isChannelMuted(e, t) || N.Ay.getMentionCount(t) > 0) && (0, T.Y)(n))
        );
    },
    O = (e, t) =>
        t === C.P.GUILD_EVENT ? !m.Ay.isMuteScheduledEventsEnabled(e) && N.Ay.hasUnread(e, t) : N.Ay.hasUnread(e, t),
    b = (e, t) => {
        let n = S.A.getChannel(t);
        return (
            null != n &&
            !!g.kvI.GUILD_VOCAL.has(n.type) &&
            (N.Ay.getMentionCount(t) > 0 || (L.Ay.getVoiceChannelId() === t && N.Ay.getUnreadCount(t) > 0))
        );
    },
    v = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.A.getState().guildId ?? g.ME;
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
    R = {
        binds: ["alt+shift+up"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.A.getState().guildId ?? g.ME;
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
    U = (e, t) => N.Ay.getMentionCount(t) > 0,
    D = {
        binds: ["mod+shift+alt+down"],
        comboKeysBindGlobal: !0,
        action: () => (I(1, { channelPredicate: U, ensureChatIsVisible: b, withVoiceChannels: !0 }), !1),
    },
    G = {
        binds: ["mod+shift+alt+up"],
        comboKeysBindGlobal: !0,
        action: () => (I(-1, { channelPredicate: U, ensureChatIsVisible: b, withVoiceChannels: !0 }), !1),
    };
