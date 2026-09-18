n.d(t, { US: () => R, BD: () => D, X8: () => y, mH: () => v });
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
            withVoiceChannels: N = !1,
        } = t,
        S = o.A.getState().guildId ?? g.ME,
        f = o.A.getState().channelId,
        m =
            ((l = S),
            (a = (r = [g.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(l)),
            e > 0
                ? r.slice(a).concat(r.slice(0, a), l)
                : (r.splice(a, 0, l), r.slice(a + 1).concat(r.slice(0, a + 1)))),
        L = e > 0 ? 0 : m.length - 1,
        O = _(S, N),
        b = O.indexOf(f) + e;
    for (; null != S && "" !== S;) {
        if (((A = O[b]), I(S)))
            for (; null != A && "" !== A;) {
                if ("string" == typeof A) {
                    if (C(S, A)) return (0, E.i)(S, A, !1, p(S, A));
                } else if ("object" == typeof A && T(A.resourceId, A.type))
                    return (
                        S !== c.A.getGuildId() && (0, E.i)(S, d.Ay.getDefaultChannel(S)?.id),
                        (0, s.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("489565"),
                                n.e("684231"),
                                n.e("570690"),
                                n.e("886631"),
                                n.e("476227"),
                                n.e("998835"),
                                n.e("74336"),
                                n.e("947359"),
                                n.e("694303"),
                                n.e("147626"),
                                n.e("632756"),
                                n.e("256373"),
                                n.e("970644"),
                                n.e("901922"),
                                n.e("752695"),
                                n.e("449347"),
                                n.e("464287"),
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
                ((b += e), (A = O[b]));
            }
        if (((L += e), null == (S = m[L]) || "" === S)) break;
        ((O = _(S, N)), (b = e < 0 ? O.length - 1 : 0));
    }
    h._.dispatch(g.jej.SHAKE_APP, { duration: 200, intensity: 2 });
}, g.ugG);
var T = n(455234),
    p = n(95701),
    N = n(734057),
    S = n(573163),
    f = n(309010),
    m = n(543465);
let L = (e, t) => {
        let n = N.A.getChannel(t);
        return (
            null != n &&
            ((0, p.Gw)(n.type) || g.kvI.GUILD_VOCAL_PRIMARY.has(n.type)
                ? S.Ay.getMentionCount(t) > 0 || f.Ay.getVoiceChannelId() === t
                : (!m.Ay.isChannelMuted(e, t) || S.Ay.getMentionCount(t) > 0) && (0, T.Y)(n))
        );
    },
    O = (e, t) =>
        t === C.P.GUILD_EVENT ? !m.Ay.isMuteScheduledEventsEnabled(e) && S.Ay.hasUnread(e, t) : S.Ay.hasUnread(e, t),
    b = (e, t) => {
        let n = N.A.getChannel(t);
        return (
            null != n &&
            !!g.kvI.GUILD_VOCAL.has(n.type) &&
            (S.Ay.getMentionCount(t) > 0 || (f.Ay.getVoiceChannelId() === t && S.Ay.getUnreadCount(t) > 0))
        );
    },
    v = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.A.getState().guildId ?? g.ME;
            return (
                I(1, {
                    channelPredicate: L,
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
                    channelPredicate: L,
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
    D = {
        binds: ["mod+shift+alt+down"],
        comboKeysBindGlobal: !0,
        action: () => (I(1, { channelPredicate: U, ensureChatIsVisible: b, withVoiceChannels: !0 }), !1),
    },
    y = {
        binds: ["mod+shift+alt+up"],
        comboKeysBindGlobal: !0,
        action: () => (I(-1, { channelPredicate: U, ensureChatIsVisible: b, withVoiceChannels: !0 }), !1),
    };
