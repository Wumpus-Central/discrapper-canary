n.d(t, { US: () => v, BD: () => D, X8: () => G, mH: () => R });
var i = n(627968);
n(64700);
var l = n(735438),
    r = n.n(l),
    s = n(192308),
    a = n(310953),
    o = n(366811),
    d = n(808728),
    c = n(967198),
    u = n(711014),
    h = n(567761),
    A = n(625494),
    E = n(265422),
    g = n(652215),
    C = n(790782);
function _(e, t) {
    return [
        { resourceId: e, type: C.P.GUILD_EVENT },
        ...(e === g.ME
            ? h.default.getPrivateChannelIds()
            : (0, a.A)(e, { withVoiceChannels: t, withCurrentVoiceChannel: !0 }).map((e) => e.id)),
    ];
}
let I = r().throttle(function (e, t) {
    var l;
    let r,
        a,
        h,
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
        O = e > 0 ? 0 : m.length - 1,
        f = _(N, S),
        b = f.indexOf(L) + e;
    for (; null != N && "" !== N; ) {
        if (((h = f[b]), I(N)))
            for (; null != h && "" !== h; ) {
                if ("string" == typeof h) {
                    if (C(N, h)) return (0, E.i)(N, h, !1, p(N, h));
                } else if ("object" == typeof h && T(h.resourceId, h.type))
                    return (
                        N !== c.A.getGuildId() && (0, E.i)(N, d.Ay.getDefaultChannel(N)?.id),
                        (0, s.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("30272"),
                                n.e("8909"),
                                n.e("42641"),
                                n.e("43513"),
                                n.e("47626"),
                                n.e("32756"),
                                n.e("56373"),
                                n.e("70644"),
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
                (b += e), (h = f[b]);
            }
        if (((O += e), null == (N = m[O]) || "" === N)) break;
        (f = _(N, S)), (b = e < 0 ? f.length - 1 : 0);
    }
    A._.dispatch(g.jej.SHAKE_APP, { duration: 200, intensity: 2 });
}, g.ugG);
var T = n(455234),
    p = n(95701),
    S = n(734057),
    N = n(222823),
    L = n(309010),
    m = n(543465);
let O = (e, t) => {
        let n = S.A.getChannel(t);
        return (
            null != n &&
            ((0, p.Gw)(n.type) || g.kvI.GUILD_VOCAL.has(n.type)
                ? N.Ay.getMentionCount(t) > 0 || L.A.getVoiceChannelId() === t
                : (!m.Ay.isChannelMuted(e, t) || N.Ay.getMentionCount(t) > 0) && (0, T.Y)(n))
        );
    },
    f = (e, t) =>
        t === C.P.GUILD_EVENT ? !m.Ay.isMuteScheduledEventsEnabled(e) && N.Ay.hasUnread(e, t) : N.Ay.hasUnread(e, t),
    b = (e, t) => {
        let n = S.A.getChannel(t);
        return (
            null != n &&
            !!g.kvI.GUILD_VOCAL.has(n.type) &&
            (N.Ay.getMentionCount(t) > 0 || (L.A.getVoiceChannelId() === t && N.Ay.getUnreadCount(t) > 0))
        );
    },
    R = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.A.getState().guildId ?? g.ME;
            return (
                I(1, {
                    channelPredicate: O,
                    guildPredicate: (t) => t === e || !m.Ay.isMuted(t),
                    guildFeaturePredicate: f,
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
            let e = o.A.getState().guildId ?? g.ME;
            return (
                I(-1, {
                    channelPredicate: O,
                    guildPredicate: (t) => t === e || !m.Ay.isMuted(t),
                    guildFeaturePredicate: f,
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
