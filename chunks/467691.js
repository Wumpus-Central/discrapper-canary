"use strict";
n.d(t, { US: () => y, BD: () => b, X8: () => M, mH: () => D });
var i = n(627968);
n(64700);
var r = n(435558),
    a = n.n(r),
    s = n(192308),
    l = n(310953),
    o = n(366811),
    d = n(808728),
    c = n(967198),
    u = n(711014),
    _ = n(645959),
    E = n(625494),
    A = n(265422),
    h = n(652215),
    I = n(790782);
function f(e, t) {
    return [
        { resourceId: e, type: I.P.GUILD_EVENT },
        ...(e === h.ME
            ? _.A.getPrivateChannelIds()
            : (0, l.A)(e, { withVoiceChannels: t, withCurrentVoiceChannel: !0 }).map((e) => e.id)),
    ];
}
let p = a().throttle(function (e, t) {
    var r;
    let a,
        l,
        _,
        {
            channelPredicate: I = () => !0,
            guildPredicate: p = () => !0,
            guildFeaturePredicate: T = () => !1,
            ensureChatIsVisible: m = () => !1,
            withVoiceChannels: g = !1,
        } = t,
        S = o.A.getState().guildId ?? h.ME,
        N = o.A.getState().channelId,
        C =
            ((r = S),
            (l = (a = [h.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(r)),
            e > 0
                ? a.slice(l).concat(a.slice(0, l), r)
                : (a.splice(l, 0, r), a.slice(l + 1).concat(a.slice(0, l + 1)))),
        R = e > 0 ? 0 : C.length - 1,
        O = f(S, g),
        L = O.indexOf(N) + e;
    for (; null != S && "" !== S; ) {
        if (((_ = O[L]), p(S)))
            for (; null != _ && "" !== _; ) {
                if ("string" == typeof _) {
                    if (I(S, _)) return (0, A.i)(S, _, !1, m(S, _));
                } else if ("object" == typeof _ && T(_.resourceId, _.type))
                    return (
                        S !== c.A.getGuildId() && (0, A.i)(S, d.Ay.getDefaultChannel(S)?.id),
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
                (L += e), (_ = O[L]);
            }
        if (((R += e), null == (S = C[R]) || "" === S)) break;
        (O = f(S, g)), (L = e < 0 ? O.length - 1 : 0);
    }
    E._.dispatch(h.jej.SHAKE_APP, { duration: 200, intensity: 2 });
}, h.ugG);
var T = n(455234),
    m = n(95701),
    g = n(734057),
    S = n(568548),
    N = n(309010),
    C = n(543465);
let R = (e, t) => {
        let n = g.A.getChannel(t);
        return (
            null != n &&
            ((0, m.Gw)(n.type) || h.kvI.GUILD_VOCAL_PRIMARY.has(n.type)
                ? S.Ay.getMentionCount(t) > 0 || N.A.getVoiceChannelId() === t
                : (!C.Ay.isChannelMuted(e, t) || S.Ay.getMentionCount(t) > 0) && (0, T.Y)(n))
        );
    },
    O = (e, t) =>
        t === I.P.GUILD_EVENT ? !C.Ay.isMuteScheduledEventsEnabled(e) && S.Ay.hasUnread(e, t) : S.Ay.hasUnread(e, t),
    L = (e, t) => {
        let n = g.A.getChannel(t);
        return (
            null != n &&
            !!h.kvI.GUILD_VOCAL.has(n.type) &&
            (S.Ay.getMentionCount(t) > 0 || (N.A.getVoiceChannelId() === t && S.Ay.getUnreadCount(t) > 0))
        );
    },
    D = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.A.getState().guildId ?? h.ME;
            return (
                p(1, {
                    channelPredicate: R,
                    guildPredicate: (t) => t === e || !C.Ay.isMuted(t),
                    guildFeaturePredicate: O,
                    ensureChatIsVisible: L,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    y = {
        binds: ["alt+shift+up"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.A.getState().guildId ?? h.ME;
            return (
                p(-1, {
                    channelPredicate: R,
                    guildPredicate: (t) => t === e || !C.Ay.isMuted(t),
                    guildFeaturePredicate: O,
                    ensureChatIsVisible: L,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    v = (e, t) => S.Ay.getMentionCount(t) > 0,
    b = {
        binds: ["mod+shift+alt+down"],
        comboKeysBindGlobal: !0,
        action: () => (p(1, { channelPredicate: v, ensureChatIsVisible: L, withVoiceChannels: !0 }), !1),
    },
    M = {
        binds: ["mod+shift+alt+up"],
        comboKeysBindGlobal: !0,
        action: () => (p(-1, { channelPredicate: v, ensureChatIsVisible: L, withVoiceChannels: !0 }), !1),
    };
