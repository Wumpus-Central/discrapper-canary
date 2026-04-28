n.d(t, { US: () => R, BD: () => y, X8: () => x, mH: () => G });
var i = n(627968);
n(64700);
var l = n(735438),
    s = n.n(l),
    r = n(192308),
    o = n(310953),
    a = n(366811),
    d = n(808728),
    c = n(967198),
    u = n(711014),
    g = n(567761),
    A = n(625494),
    h = n(265422),
    E = n(652215),
    I = n(790782);
function p(e, t) {
    return [
        { resourceId: e, type: I.P.GUILD_EVENT },
        ...(e === E.ME
            ? g.default.getPrivateChannelIds()
            : (0, o.A)(e, { withVoiceChannels: t, withCurrentVoiceChannel: !0 }).map((e) => e.id)),
    ];
}
let C = s().throttle(function (e, t) {
    var l;
    let s,
        o,
        g,
        {
            channelPredicate: I = () => !0,
            guildPredicate: C = () => !0,
            guildFeaturePredicate: b = () => !1,
            ensureChatIsVisible: _ = () => !1,
            withVoiceChannels: N = !1,
        } = t,
        m = a.A.getState().guildId ?? E.ME,
        S = a.A.getState().channelId,
        T =
            ((l = m),
            (o = (s = [E.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(l)),
            e > 0
                ? s.slice(o).concat(s.slice(0, o), l)
                : (s.splice(o, 0, l), s.slice(o + 1).concat(s.slice(0, o + 1)))),
        O = e > 0 ? 0 : T.length - 1,
        L = p(m, N),
        f = L.indexOf(S) + e;
    for (; null != m && "" !== m; ) {
        if (((g = L[f]), C(m)))
            for (; null != g && "" !== g; ) {
                if ("string" == typeof g) {
                    if (I(m, g)) return (0, h.i)(m, g, !1, _(m, g));
                } else if ("object" == typeof g && b(g.resourceId, g.type))
                    return (
                        m !== c.A.getGuildId() && (0, h.i)(m, d.Ay.getDefaultChannel(m)?.id),
                        (0, r.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("31788"),
                                n.e("6287"),
                                n.e("8357"),
                                n.e("35964"),
                                n.e("58337"),
                                n.e("26295"),
                                n.e("37187"),
                                n.e("55973"),
                                n.e("59414"),
                                n.e("14041"),
                                n.e("22855"),
                                n.e("56373"),
                                n.e("52695"),
                                n.e("70644"),
                                n.e("19346"),
                                n.e("43267"),
                                n.e("49347"),
                                n.e("64287"),
                                n.e("53934"),
                                n.e("68248"),
                                n.e("69647"),
                                n.e("98354"),
                                n.e("11588"),
                            ]).then(n.bind(n, 15823));
                            return (t) => (0, i.jsx)(e, { ...t, guildId: m });
                        })
                    );
                (f += e), (g = L[f]);
            }
        if (((O += e), null == (m = T[O]) || "" === m)) break;
        (L = p(m, N)), (f = e < 0 ? L.length - 1 : 0);
    }
    A._.dispatch(E.jej.SHAKE_APP, { duration: 200, intensity: 2 });
}, E.ugG);
var b = n(455234),
    _ = n(95701),
    N = n(734057),
    m = n(222823),
    S = n(309010),
    T = n(543465);
let O = (e, t) => {
        let n = N.A.getChannel(t);
        return (
            null != n &&
            ((0, _.Gw)(n.type) || E.kvI.GUILD_VOCAL.has(n.type)
                ? m.Ay.getMentionCount(t) > 0 || S.A.getVoiceChannelId() === t
                : (!T.Ay.isChannelMuted(e, t) || m.Ay.getMentionCount(t) > 0) && (0, b.Y)(n))
        );
    },
    L = (e, t) =>
        t === I.P.GUILD_EVENT ? !T.Ay.isMuteScheduledEventsEnabled(e) && m.Ay.hasUnread(e, t) : m.Ay.hasUnread(e, t),
    f = (e, t) => {
        let n = N.A.getChannel(t);
        return (
            null != n &&
            !!E.kvI.GUILD_VOCAL.has(n.type) &&
            (m.Ay.getMentionCount(t) > 0 || (S.A.getVoiceChannelId() === t && m.Ay.getUnreadCount(t) > 0))
        );
    },
    G = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            let e = a.A.getState().guildId ?? E.ME;
            return (
                C(1, {
                    channelPredicate: O,
                    guildPredicate: (t) => t === e || !T.Ay.isMuted(t),
                    guildFeaturePredicate: L,
                    ensureChatIsVisible: f,
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
            let e = a.A.getState().guildId ?? E.ME;
            return (
                C(-1, {
                    channelPredicate: O,
                    guildPredicate: (t) => t === e || !T.Ay.isMuted(t),
                    guildFeaturePredicate: L,
                    ensureChatIsVisible: f,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    M = (e, t) => m.Ay.getMentionCount(t) > 0,
    y = {
        binds: ["mod+shift+alt+down"],
        comboKeysBindGlobal: !0,
        action: () => (C(1, { channelPredicate: M, ensureChatIsVisible: f, withVoiceChannels: !0 }), !1),
    },
    x = {
        binds: ["mod+shift+alt+up"],
        comboKeysBindGlobal: !0,
        action: () => (C(-1, { channelPredicate: M, ensureChatIsVisible: f, withVoiceChannels: !0 }), !1),
    };
