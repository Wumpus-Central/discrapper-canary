n.d(t, { US: () => G, BD: () => R, X8: () => M, mH: () => y });
var i = n(627968);
n(64700);
var r = n(735438),
    s = n.n(r),
    l = n(192308),
    o = n(310953),
    a = n(366811),
    d = n(808728),
    c = n(967198),
    _ = n(711014),
    u = n(567761),
    g = n(625494),
    h = n(265422),
    A = n(652215),
    p = n(790782);
function I(e, t) {
    return [
        { resourceId: e, type: p.P.GUILD_EVENT },
        ...(e === A.ME
            ? u.default.getPrivateChannelIds()
            : (0, o.A)(e, { withVoiceChannels: t, withCurrentVoiceChannel: !0 }).map((e) => e.id)),
    ];
}
let E = s().throttle(function (e, t) {
    var r;
    let s,
        o,
        u,
        {
            channelPredicate: p = () => !0,
            guildPredicate: E = () => !0,
            guildFeaturePredicate: b = () => !1,
            ensureChatIsVisible: C = () => !1,
            withVoiceChannels: S = !1,
        } = t,
        m = a.A.getState().guildId ?? A.ME,
        f = a.A.getState().channelId,
        N =
            ((r = m),
            (o = (s = [A.ME, ..._.Ay.getFlattenedGuildIds()]).indexOf(r)),
            e > 0
                ? s.slice(o).concat(s.slice(0, o), r)
                : (s.splice(o, 0, r), s.slice(o + 1).concat(s.slice(0, o + 1)))),
        T = e > 0 ? 0 : N.length - 1,
        L = I(m, S),
        O = L.indexOf(f) + e;
    for (; null != m && "" !== m; ) {
        if (((u = L[O]), E(m)))
            for (; null != u && "" !== u; ) {
                if ("string" == typeof u) {
                    if (p(m, u)) return (0, h.i)(m, u, !1, C(m, u));
                } else if ("object" == typeof u && b(u.resourceId, u.type))
                    return (
                        m !== c.A.getGuildId() && (0, h.i)(m, d.Ay.getDefaultChannel(m)?.id),
                        (0, l.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("22021"), n.e("26816"), n.e("19452")]).then(
                                n.bind(n, 15823),
                            );
                            return (t) => (0, i.jsx)(e, { ...t, guildId: m });
                        })
                    );
                (O += e), (u = L[O]);
            }
        if (((T += e), null == (m = N[T]) || "" === m)) break;
        (L = I(m, S)), (O = e < 0 ? L.length - 1 : 0);
    }
    g._.dispatch(A.jej.SHAKE_APP, { duration: 200, intensity: 2 });
}, A.ugG);
var b = n(455234),
    C = n(95701),
    S = n(734057),
    m = n(222823),
    f = n(309010),
    N = n(543465);
let T = (e, t) => {
        let n = S.A.getChannel(t);
        return (
            null != n &&
            ((0, C.Gw)(n.type) || A.kvI.GUILD_VOCAL.has(n.type)
                ? m.Ay.getMentionCount(t) > 0 || f.A.getVoiceChannelId() === t
                : (!N.Ay.isChannelMuted(e, t) || m.Ay.getMentionCount(t) > 0) && (0, b.Y)(n))
        );
    },
    L = (e, t) =>
        t === p.P.GUILD_EVENT ? !N.Ay.isMuteScheduledEventsEnabled(e) && m.Ay.hasUnread(e, t) : m.Ay.hasUnread(e, t),
    O = (e, t) => {
        let n = S.A.getChannel(t);
        return (
            null != n &&
            !!A.kvI.GUILD_VOCAL.has(n.type) &&
            (m.Ay.getMentionCount(t) > 0 || (f.A.getVoiceChannelId() === t && m.Ay.getUnreadCount(t) > 0))
        );
    },
    y = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            let e = a.A.getState().guildId ?? A.ME;
            return (
                E(1, {
                    channelPredicate: T,
                    guildPredicate: (t) => t === e || !N.Ay.isMuted(t),
                    guildFeaturePredicate: L,
                    ensureChatIsVisible: O,
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
            let e = a.A.getState().guildId ?? A.ME;
            return (
                E(-1, {
                    channelPredicate: T,
                    guildPredicate: (t) => t === e || !N.Ay.isMuted(t),
                    guildFeaturePredicate: L,
                    ensureChatIsVisible: O,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    x = (e, t) => m.Ay.getMentionCount(t) > 0,
    R = {
        binds: ["mod+shift+alt+down"],
        comboKeysBindGlobal: !0,
        action: () => (E(1, { channelPredicate: x, ensureChatIsVisible: O, withVoiceChannels: !0 }), !1),
    },
    M = {
        binds: ["mod+shift+alt+up"],
        comboKeysBindGlobal: !0,
        action: () => (E(-1, { channelPredicate: x, ensureChatIsVisible: O, withVoiceChannels: !0 }), !1),
    };
