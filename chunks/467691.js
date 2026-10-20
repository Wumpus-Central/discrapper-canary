(n.d(t, { US: () => G, BD: () => P, X8: () => x, mH: () => y }), n(667532));
var i = n(477900);
n(582128);
var l = n(435558),
    r = n.n(l),
    s = n(192308),
    a = n(310953),
    o = n(749884),
    d = n(366811),
    c = n(808728),
    u = n(967198),
    A = n(711014),
    E = n(645959),
    h = n(625494),
    C = n(265422),
    _ = n(652215),
    g = n(790782);
function T(e, t) {
    return [
        { resourceId: e, type: g.P.GUILD_EVENT },
        ...(e === _.ME
            ? E.A.getPrivateChannelIds()
            : (0, a.A)(e, { withVoiceChannels: t, withCurrentVoiceChannel: !0 }).map((e) => e.id)),
    ];
}
let I = r().throttle(function (e, t) {
    var l;
    let r,
        a,
        E,
        {
            channelPredicate: g = () => !0,
            guildPredicate: I = () => !0,
            guildFeaturePredicate: p = () => !1,
            ensureChatIsVisible: N = () => !1,
            withVoiceChannels: S = !1,
        } = t,
        f = d.A.getState().guildId ?? _.ME,
        O = d.A.getState().channelId,
        L =
            ((l = f),
            (r = [...((0, o.J)() ? [_.YYv] : []), _.ME, ...A.Ay.getFlattenedGuildIds()]).includes(l) || r.unshift(l),
            (a = r.indexOf(l)),
            e > 0
                ? r.slice(a).concat(r.slice(0, a), l)
                : (r.splice(a, 0, l), r.slice(a + 1).concat(r.slice(0, a + 1)))),
        m = e > 0 ? 0 : L.length - 1,
        b = T(f, S),
        v = b.indexOf(O) + e;
    for (; null != f && "" !== f;) {
        if (((E = b[v]), I(f)))
            for (; null != E && "" !== E;) {
                if ("string" == typeof E) {
                    if (g(f, E)) return (0, C.i)(f, E, !1, N(f, E));
                } else if ("object" == typeof E && p(E.resourceId, E.type))
                    return (
                        f !== u.A.getGuildId() && (0, C.i)(f, c.Ay.getDefaultChannel(f)?.id),
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
                            return (t) => (0, i.jsx)(e, { ...t, guildId: f });
                        })
                    );
                ((v += e), (E = b[v]));
            }
        if (((m += e), null == (f = L[m]) || "" === f)) break;
        ((b = T(f, S)), (v = e < 0 ? b.length - 1 : 0));
    }
    h._.dispatch(_.jej.SHAKE_APP, { duration: 200, intensity: 2 });
}, _.ugG);
var p = n(181079),
    N = n(5180),
    S = n(455234),
    f = n(95701),
    O = n(734057),
    L = n(573163),
    m = n(309010),
    b = n(543465);
let v = (e, t) => {
        let n = O.A.getChannel(t);
        return (
            null != n &&
            ((0, f.Gw)(n.type) || _.kvI.GUILD_VOCAL_PRIMARY.has(n.type)
                ? L.Ay.getMentionCount(t) > 0 || m.Ay.getVoiceChannelId() === t
                : (!b.Ay.isChannelMuted(e, t) || L.Ay.getMentionCount(t) > 0) && (0, S.Y)(n))
        );
    },
    R = (e, t) =>
        t === g.P.GUILD_EVENT ? !b.Ay.isMuteScheduledEventsEnabled(e) && L.Ay.hasUnread(e, t) : L.Ay.hasUnread(e, t);
function U(e) {
    return (0, N.ai)(e) ? p.A.favoriteGuildMuted : b.Ay.isMuted(e);
}
let D = (e, t) => {
        let n = O.A.getChannel(t);
        return (
            null != n &&
            !!_.kvI.GUILD_VOCAL.has(n.type) &&
            (L.Ay.getMentionCount(t) > 0 || (m.Ay.getVoiceChannelId() === t && L.Ay.getUnreadCount(t) > 0))
        );
    },
    y = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            let e = d.A.getState().guildId ?? _.ME;
            return (
                I(1, {
                    channelPredicate: v,
                    guildPredicate: (t) => t === e || !U(t),
                    guildFeaturePredicate: R,
                    ensureChatIsVisible: D,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    G = {
        binds: ["alt+shift+up"],
        comboKeysBindGlobal: !0,
        action() {
            let e = d.A.getState().guildId ?? _.ME;
            return (
                I(-1, {
                    channelPredicate: v,
                    guildPredicate: (t) => t === e || !U(t),
                    guildFeaturePredicate: R,
                    ensureChatIsVisible: D,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    M = (e, t) => L.Ay.getMentionCount(t) > 0,
    P = {
        binds: ["mod+shift+alt+down"],
        comboKeysBindGlobal: !0,
        action: () => (I(1, { channelPredicate: M, ensureChatIsVisible: D, withVoiceChannels: !0 }), !1),
    },
    x = {
        binds: ["mod+shift+alt+up"],
        comboKeysBindGlobal: !0,
        action: () => (I(-1, { channelPredicate: M, ensureChatIsVisible: D, withVoiceChannels: !0 }), !1),
    };
