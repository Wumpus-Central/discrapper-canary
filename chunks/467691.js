n.d(t, { US: () => G, BD: () => M, X8: () => v, mH: () => y });
var i = n(627968);
n(64700);
var s = n(735438),
    l = n.n(s),
    r = n(192308),
    a = n(310953),
    o = n(366811),
    d = n(808728),
    c = n(967198),
    u = n(711014),
    A = n(567761),
    g = n(625494),
    h = n(265422),
    E = n(652215),
    p = n(790782);
function I(e, t) {
    return [
        { resourceId: e, type: p.P.GUILD_EVENT },
        ...(e === E.ME
            ? A.default.getPrivateChannelIds()
            : (0, a.A)(e, { withVoiceChannels: t, withCurrentVoiceChannel: !0 }).map((e) => e.id)),
    ];
}
let _ = l().throttle(function (e, t) {
    var s;
    let l,
        a,
        A,
        {
            channelPredicate: p = () => !0,
            guildPredicate: _ = () => !0,
            guildFeaturePredicate: C = () => !1,
            ensureChatIsVisible: b = () => !1,
            withVoiceChannels: S = !1,
        } = t,
        m = o.A.getState().guildId ?? E.ME,
        N = o.A.getState().channelId,
        T =
            ((s = m),
            (a = (l = [E.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(s)),
            e > 0
                ? l.slice(a).concat(l.slice(0, a), s)
                : (l.splice(a, 0, s), l.slice(a + 1).concat(l.slice(0, a + 1)))),
        f = e > 0 ? 0 : T.length - 1,
        O = I(m, S),
        L = O.indexOf(N) + e;
    for (; null != m && "" !== m; ) {
        if (((A = O[L]), _(m)))
            for (; null != A && "" !== A; ) {
                if ("string" == typeof A) {
                    if (p(m, A)) return (0, h.i)(m, A, !1, b(m, A));
                } else if ("object" == typeof A && C(A.resourceId, A.type))
                    return (
                        m !== c.A.getGuildId() && (0, h.i)(m, d.Ay.getDefaultChannel(m)?.id),
                        (0, r.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("22021"), n.e("26816"), n.e("8206")]).then(
                                n.bind(n, 15823),
                            );
                            return (t) => (0, i.jsx)(e, { ...t, guildId: m });
                        })
                    );
                (L += e), (A = O[L]);
            }
        if (((f += e), null == (m = T[f]) || "" === m)) break;
        (O = I(m, S)), (L = e < 0 ? O.length - 1 : 0);
    }
    g._.dispatch(E.jej.SHAKE_APP, { duration: 200, intensity: 2 });
}, E.ugG);
var C = n(455234),
    b = n(95701),
    S = n(734057),
    m = n(222823),
    N = n(309010),
    T = n(543465);
let f = (e, t) => {
        let n = S.A.getChannel(t);
        return (
            null != n &&
            ((0, b.Gw)(n.type) || E.kvI.GUILD_VOCAL.has(n.type)
                ? m.Ay.getMentionCount(t) > 0 || N.A.getVoiceChannelId() === t
                : (!T.Ay.isChannelMuted(e, t) || m.Ay.getMentionCount(t) > 0) && (0, C.Y)(n))
        );
    },
    O = (e, t) =>
        t === p.P.GUILD_EVENT ? !T.Ay.isMuteScheduledEventsEnabled(e) && m.Ay.hasUnread(e, t) : m.Ay.hasUnread(e, t),
    L = (e, t) => {
        let n = S.A.getChannel(t);
        return (
            null != n &&
            !!E.kvI.GUILD_VOCAL.has(n.type) &&
            (m.Ay.getMentionCount(t) > 0 || (N.A.getVoiceChannelId() === t && m.Ay.getUnreadCount(t) > 0))
        );
    },
    y = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.A.getState().guildId ?? E.ME;
            return (
                _(1, {
                    channelPredicate: f,
                    guildPredicate: (t) => t === e || !T.Ay.isMuted(t),
                    guildFeaturePredicate: O,
                    ensureChatIsVisible: L,
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
            let e = o.A.getState().guildId ?? E.ME;
            return (
                _(-1, {
                    channelPredicate: f,
                    guildPredicate: (t) => t === e || !T.Ay.isMuted(t),
                    guildFeaturePredicate: O,
                    ensureChatIsVisible: L,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    R = (e, t) => m.Ay.getMentionCount(t) > 0,
    M = {
        binds: ["mod+shift+alt+down"],
        comboKeysBindGlobal: !0,
        action: () => (_(1, { channelPredicate: R, ensureChatIsVisible: L, withVoiceChannels: !0 }), !1),
    },
    v = {
        binds: ["mod+shift+alt+up"],
        comboKeysBindGlobal: !0,
        action: () => (_(-1, { channelPredicate: R, ensureChatIsVisible: L, withVoiceChannels: !0 }), !1),
    };
