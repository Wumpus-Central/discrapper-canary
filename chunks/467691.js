n.d(t, { US: () => v, BD: () => D, X8: () => y, mH: () => R });
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
    E = n(625494),
    h = n(265422),
    C = n(652215),
    _ = n(790782);
function g(e, t) {
    return [
        { resourceId: e, type: _.P.GUILD_EVENT },
        ...(e === C.ME
            ? A.A.getPrivateChannelIds()
            : (0, a.A)(e, { withVoiceChannels: t, withCurrentVoiceChannel: !0 }).map((e) => e.id)),
    ];
}
let T = r().throttle(function (e, t) {
    var l;
    let r,
        a,
        A,
        {
            channelPredicate: _ = () => !0,
            guildPredicate: T = () => !0,
            guildFeaturePredicate: I = () => !1,
            ensureChatIsVisible: p = () => !1,
            withVoiceChannels: N = !1,
        } = t,
        S = o.A.getState().guildId ?? C.ME,
        f = o.A.getState().channelId,
        O =
            ((l = S),
            (a = (r = [C.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(l)),
            e > 0
                ? r.slice(a).concat(r.slice(0, a), l)
                : (r.splice(a, 0, l), r.slice(a + 1).concat(r.slice(0, a + 1)))),
        L = e > 0 ? 0 : O.length - 1,
        m = g(S, N),
        b = m.indexOf(f) + e;
    for (; null != S && "" !== S;) {
        if (((A = m[b]), T(S)))
            for (; null != A && "" !== A;) {
                if ("string" == typeof A) {
                    if (_(S, A)) return (0, h.i)(S, A, !1, p(S, A));
                } else if ("object" == typeof A && I(A.resourceId, A.type))
                    return (
                        S !== c.A.getGuildId() && (0, h.i)(S, d.Ay.getDefaultChannel(S)?.id),
                        (0, s.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("489565"),
                                n.e("684231"),
                                n.e("570690"),
                                n.e("886631"),
                                n.e("884841"),
                                n.e("998835"),
                                n.e("435860"),
                                n.e("694303"),
                                n.e("147626"),
                                n.e("632756"),
                                n.e("256373"),
                                n.e("901922"),
                                n.e("970644"),
                                n.e("752695"),
                                n.e("449347"),
                                n.e("853934"),
                                n.e("468248"),
                                n.e("469647"),
                                n.e("543267"),
                                n.e("798354"),
                                n.e("188353"),
                                n.e("886571"),
                            ]).then(n.bind(n, 318104));
                            return (t) => (0, i.jsx)(e, { ...t, guildId: S });
                        })
                    );
                ((b += e), (A = m[b]));
            }
        if (((L += e), null == (S = O[L]) || "" === S)) break;
        ((m = g(S, N)), (b = e < 0 ? m.length - 1 : 0));
    }
    E._.dispatch(C.jej.SHAKE_APP, { duration: 200, intensity: 2 });
}, C.ugG);
var I = n(455234),
    p = n(95701),
    N = n(734057),
    S = n(573163),
    f = n(309010),
    O = n(543465);
let L = (e, t) => {
        let n = N.A.getChannel(t);
        return (
            null != n &&
            ((0, p.Gw)(n.type) || C.kvI.GUILD_VOCAL_PRIMARY.has(n.type)
                ? S.Ay.getMentionCount(t) > 0 || f.Ay.getVoiceChannelId() === t
                : (!O.Ay.isChannelMuted(e, t) || S.Ay.getMentionCount(t) > 0) && (0, I.Y)(n))
        );
    },
    m = (e, t) =>
        t === _.P.GUILD_EVENT ? !O.Ay.isMuteScheduledEventsEnabled(e) && S.Ay.hasUnread(e, t) : S.Ay.hasUnread(e, t),
    b = (e, t) => {
        let n = N.A.getChannel(t);
        return (
            null != n &&
            !!C.kvI.GUILD_VOCAL.has(n.type) &&
            (S.Ay.getMentionCount(t) > 0 || (f.Ay.getVoiceChannelId() === t && S.Ay.getUnreadCount(t) > 0))
        );
    },
    R = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.A.getState().guildId ?? C.ME;
            return (
                T(1, {
                    channelPredicate: L,
                    guildPredicate: (t) => t === e || !O.Ay.isMuted(t),
                    guildFeaturePredicate: m,
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
                T(-1, {
                    channelPredicate: L,
                    guildPredicate: (t) => t === e || !O.Ay.isMuted(t),
                    guildFeaturePredicate: m,
                    ensureChatIsVisible: b,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    U = (e, t) => S.Ay.getMentionCount(t) > 0,
    D = {
        binds: ["mod+shift+alt+down"],
        comboKeysBindGlobal: !0,
        action: () => (T(1, { channelPredicate: U, ensureChatIsVisible: b, withVoiceChannels: !0 }), !1),
    },
    y = {
        binds: ["mod+shift+alt+up"],
        comboKeysBindGlobal: !0,
        action: () => (T(-1, { channelPredicate: U, ensureChatIsVisible: b, withVoiceChannels: !0 }), !1),
    };
