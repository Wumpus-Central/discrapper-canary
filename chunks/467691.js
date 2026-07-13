n.d(t, { US: () => v, BD: () => D, X8: () => G, mH: () => b });
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
    A = n(645959),
    E = n(625494),
    h = n(265422),
    C = n(652215),
    g = n(790782);
function _(e, t) {
    return [
        { resourceId: e, type: g.P.GUILD_EVENT },
        ...(e === C.ME
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
            channelPredicate: g = () => !0,
            guildPredicate: I = () => !0,
            guildFeaturePredicate: T = () => !1,
            ensureChatIsVisible: N = () => !1,
            withVoiceChannels: p = !1,
        } = t,
        S = o.A.getState().guildId ?? C.ME,
        L = o.A.getState().channelId,
        m =
            ((l = S),
            (a = (r = [C.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(l)),
            e > 0
                ? r.slice(a).concat(r.slice(0, a), l)
                : (r.splice(a, 0, l), r.slice(a + 1).concat(r.slice(0, a + 1)))),
        O = e > 0 ? 0 : m.length - 1,
        f = _(S, p),
        R = f.indexOf(L) + e;
    for (; null != S && "" !== S; ) {
        if (((A = f[R]), I(S)))
            for (; null != A && "" !== A; ) {
                if ("string" == typeof A) {
                    if (g(S, A)) return (0, h.i)(S, A, !1, N(S, A));
                } else if ("object" == typeof A && T(A.resourceId, A.type))
                    return (
                        S !== c.A.getGuildId() && (0, h.i)(S, d.Ay.getDefaultChannel(S)?.id),
                        (0, s.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("85948"),
                                n.e("12940"),
                                n.e("52443"),
                                n.e("11266"),
                                n.e("4278"),
                                n.e("12124"),
                                n.e("89881"),
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
                            return (t) => (0, i.jsx)(e, { ...t, guildId: S });
                        })
                    );
                (R += e), (A = f[R]);
            }
        if (((O += e), null == (S = m[O]) || "" === S)) break;
        (f = _(S, p)), (R = e < 0 ? f.length - 1 : 0);
    }
    E._.dispatch(C.jej.SHAKE_APP, { duration: 200, intensity: 2 });
}, C.ugG);
var T = n(455234),
    N = n(95701),
    p = n(734057),
    S = n(568548),
    L = n(309010),
    m = n(543465);
let O = (e, t) => {
        let n = p.A.getChannel(t);
        return (
            null != n &&
            ((0, N.Gw)(n.type) || C.kvI.GUILD_VOCAL_PRIMARY.has(n.type)
                ? S.Ay.getMentionCount(t) > 0 || L.A.getVoiceChannelId() === t
                : (!m.Ay.isChannelMuted(e, t) || S.Ay.getMentionCount(t) > 0) && (0, T.Y)(n))
        );
    },
    f = (e, t) =>
        t === g.P.GUILD_EVENT ? !m.Ay.isMuteScheduledEventsEnabled(e) && S.Ay.hasUnread(e, t) : S.Ay.hasUnread(e, t),
    R = (e, t) => {
        let n = p.A.getChannel(t);
        return (
            null != n &&
            !!C.kvI.GUILD_VOCAL.has(n.type) &&
            (S.Ay.getMentionCount(t) > 0 || (L.A.getVoiceChannelId() === t && S.Ay.getUnreadCount(t) > 0))
        );
    },
    b = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.A.getState().guildId ?? C.ME;
            return (
                I(1, {
                    channelPredicate: O,
                    guildPredicate: (t) => t === e || !m.Ay.isMuted(t),
                    guildFeaturePredicate: f,
                    ensureChatIsVisible: R,
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
                    channelPredicate: O,
                    guildPredicate: (t) => t === e || !m.Ay.isMuted(t),
                    guildFeaturePredicate: f,
                    ensureChatIsVisible: R,
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
        action: () => (I(1, { channelPredicate: U, ensureChatIsVisible: R, withVoiceChannels: !0 }), !1),
    },
    G = {
        binds: ["mod+shift+alt+up"],
        comboKeysBindGlobal: !0,
        action: () => (I(-1, { channelPredicate: U, ensureChatIsVisible: R, withVoiceChannels: !0 }), !1),
    };
