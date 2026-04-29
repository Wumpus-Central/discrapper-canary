n.d(t, { US: () => R, BD: () => y, X8: () => G, mH: () => L });
var i = n(627968);
n(64700);
var l = n(735438),
    s = n.n(l),
    r = n(192308),
    a = n(310953),
    o = n(366811),
    d = n(808728),
    c = n(967198),
    u = n(711014),
    h = n(567761),
    g = n(625494),
    A = n(265422),
    E = n(652215),
    p = n(790782);
function I(e, t) {
    return [
        { resourceId: e, type: p.P.GUILD_EVENT },
        ...(e === E.ME
            ? h.default.getPrivateChannelIds()
            : (0, a.A)(e, { withVoiceChannels: t, withCurrentVoiceChannel: !0 }).map((e) => e.id)),
    ];
}
let C = s().throttle(function (e, t) {
    var l;
    let s,
        a,
        h,
        {
            channelPredicate: p = () => !0,
            guildPredicate: C = () => !0,
            guildFeaturePredicate: m = () => !1,
            ensureChatIsVisible: _ = () => !1,
            withVoiceChannels: b = !1,
        } = t,
        N = o.A.getState().guildId ?? E.ME,
        v = o.A.getState().channelId,
        f =
            ((l = N),
            (a = (s = [E.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(l)),
            e > 0
                ? s.slice(a).concat(s.slice(0, a), l)
                : (s.splice(a, 0, l), s.slice(a + 1).concat(s.slice(0, a + 1)))),
        T = e > 0 ? 0 : f.length - 1,
        S = I(N, b),
        O = S.indexOf(v) + e;
    for (; null != N && "" !== N; ) {
        if (((h = S[O]), C(N)))
            for (; null != h && "" !== h; ) {
                if ("string" == typeof h) {
                    if (p(N, h)) return (0, A.i)(N, h, !1, _(N, h));
                } else if ("object" == typeof h && m(h.resourceId, h.type))
                    return (
                        N !== c.A.getGuildId() && (0, A.i)(N, d.Ay.getDefaultChannel(N)?.id),
                        (0, r.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("62349"),
                                n.e("8909"),
                                n.e("80731"),
                                n.e("43513"),
                                n.e("26295"),
                                n.e("37187"),
                                n.e("55973"),
                                n.e("14041"),
                                n.e("22855"),
                                n.e("56373"),
                                n.e("70644"),
                                n.e("52695"),
                                n.e("49347"),
                                n.e("64287"),
                                n.e("19346"),
                                n.e("53934"),
                                n.e("68248"),
                                n.e("43267"),
                                n.e("69647"),
                                n.e("98354"),
                                n.e("11588"),
                            ]).then(n.bind(n, 15823));
                            return (t) => (0, i.jsx)(e, { ...t, guildId: N });
                        })
                    );
                (O += e), (h = S[O]);
            }
        if (((T += e), null == (N = f[T]) || "" === N)) break;
        (S = I(N, b)), (O = e < 0 ? S.length - 1 : 0);
    }
    g._.dispatch(E.jej.SHAKE_APP, { duration: 200, intensity: 2 });
}, E.ugG);
var m = n(455234),
    _ = n(95701),
    b = n(734057),
    N = n(222823),
    v = n(309010),
    f = n(543465);
let T = (e, t) => {
        let n = b.A.getChannel(t);
        return (
            null != n &&
            ((0, _.Gw)(n.type) || E.kvI.GUILD_VOCAL.has(n.type)
                ? N.Ay.getMentionCount(t) > 0 || v.A.getVoiceChannelId() === t
                : (!f.Ay.isChannelMuted(e, t) || N.Ay.getMentionCount(t) > 0) && (0, m.Y)(n))
        );
    },
    S = (e, t) =>
        t === p.P.GUILD_EVENT ? !f.Ay.isMuteScheduledEventsEnabled(e) && N.Ay.hasUnread(e, t) : N.Ay.hasUnread(e, t),
    O = (e, t) => {
        let n = b.A.getChannel(t);
        return (
            null != n &&
            !!E.kvI.GUILD_VOCAL.has(n.type) &&
            (N.Ay.getMentionCount(t) > 0 || (v.A.getVoiceChannelId() === t && N.Ay.getUnreadCount(t) > 0))
        );
    },
    L = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.A.getState().guildId ?? E.ME;
            return (
                C(1, {
                    channelPredicate: T,
                    guildPredicate: (t) => t === e || !f.Ay.isMuted(t),
                    guildFeaturePredicate: S,
                    ensureChatIsVisible: O,
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
            let e = o.A.getState().guildId ?? E.ME;
            return (
                C(-1, {
                    channelPredicate: T,
                    guildPredicate: (t) => t === e || !f.Ay.isMuted(t),
                    guildFeaturePredicate: S,
                    ensureChatIsVisible: O,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    M = (e, t) => N.Ay.getMentionCount(t) > 0,
    y = {
        binds: ["mod+shift+alt+down"],
        comboKeysBindGlobal: !0,
        action: () => (C(1, { channelPredicate: M, ensureChatIsVisible: O, withVoiceChannels: !0 }), !1),
    },
    G = {
        binds: ["mod+shift+alt+up"],
        comboKeysBindGlobal: !0,
        action: () => (C(-1, { channelPredicate: M, ensureChatIsVisible: O, withVoiceChannels: !0 }), !1),
    };
