"use strict";
n.d(t, { US: () => b, BD: () => D, X8: () => w, mH: () => v });
var i = n(627968);
n(64700);
var r = n(735438),
    s = n.n(r),
    a = n(192308),
    o = n(310953),
    l = n(366811),
    u = n(808728),
    c = n(967198),
    d = n(711014),
    _ = n(645959),
    h = n(625494),
    f = n(265422),
    E = n(652215),
    p = n(790782);
function m(e, t) {
    return [
        { resourceId: e, type: p.P.GUILD_EVENT },
        ...(e === E.ME
            ? _.A.getPrivateChannelIds()
            : (0, o.A)(e, { withVoiceChannels: t, withCurrentVoiceChannel: !0 }).map((e) => e.id)),
    ];
}
let g = s().throttle(function (e, t) {
    var r;
    let s,
        o,
        _,
        {
            channelPredicate: p = () => !0,
            guildPredicate: g = () => !0,
            guildFeaturePredicate: A = () => !1,
            ensureChatIsVisible: I = () => !1,
            withVoiceChannels: T = !1,
        } = t,
        S = l.A.getState().guildId ?? E.ME,
        N = l.A.getState().channelId,
        C =
            ((r = S),
            (o = (s = [E.ME, ...d.Ay.getFlattenedGuildIds()]).indexOf(r)),
            e > 0
                ? s.slice(o).concat(s.slice(0, o), r)
                : (s.splice(o, 0, r), s.slice(o + 1).concat(s.slice(0, o + 1)))),
        y = e > 0 ? 0 : C.length - 1,
        O = m(S, T),
        R = O.indexOf(N) + e;
    for (; null != S && "" !== S; ) {
        if (((_ = O[R]), g(S)))
            for (; null != _ && "" !== _; ) {
                if ("string" == typeof _) {
                    if (p(S, _)) return (0, f.i)(S, _, !1, I(S, _));
                } else if ("object" == typeof _ && A(_.resourceId, _.type))
                    return (
                        S !== c.A.getGuildId() && (0, f.i)(S, u.Ay.getDefaultChannel(S)?.id),
                        (0, a.openModalLazy)(async () => {
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
                (R += e), (_ = O[R]);
            }
        if (((y += e), null == (S = C[y]) || "" === S)) break;
        (O = m(S, T)), (R = e < 0 ? O.length - 1 : 0);
    }
    h._.dispatch(E.jej.SHAKE_APP, { duration: 200, intensity: 2 });
}, E.ugG);
var A = n(455234),
    I = n(95701),
    T = n(734057),
    S = n(568548),
    N = n(309010),
    C = n(543465);
let y = (e, t) => {
        let n = T.A.getChannel(t);
        return (
            null != n &&
            ((0, I.Gw)(n.type) || E.kvI.GUILD_VOCAL_PRIMARY.has(n.type)
                ? S.Ay.getMentionCount(t) > 0 || N.A.getVoiceChannelId() === t
                : (!C.Ay.isChannelMuted(e, t) || S.Ay.getMentionCount(t) > 0) && (0, A.Y)(n))
        );
    },
    O = (e, t) =>
        t === p.P.GUILD_EVENT ? !C.Ay.isMuteScheduledEventsEnabled(e) && S.Ay.hasUnread(e, t) : S.Ay.hasUnread(e, t),
    R = (e, t) => {
        let n = T.A.getChannel(t);
        return (
            null != n &&
            !!E.kvI.GUILD_VOCAL.has(n.type) &&
            (S.Ay.getMentionCount(t) > 0 || (N.A.getVoiceChannelId() === t && S.Ay.getUnreadCount(t) > 0))
        );
    },
    v = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            let e = l.A.getState().guildId ?? E.ME;
            return (
                g(1, {
                    channelPredicate: y,
                    guildPredicate: (t) => t === e || !C.Ay.isMuted(t),
                    guildFeaturePredicate: O,
                    ensureChatIsVisible: R,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    b = {
        binds: ["alt+shift+up"],
        comboKeysBindGlobal: !0,
        action() {
            let e = l.A.getState().guildId ?? E.ME;
            return (
                g(-1, {
                    channelPredicate: y,
                    guildPredicate: (t) => t === e || !C.Ay.isMuted(t),
                    guildFeaturePredicate: O,
                    ensureChatIsVisible: R,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    L = (e, t) => S.Ay.getMentionCount(t) > 0,
    D = {
        binds: ["mod+shift+alt+down"],
        comboKeysBindGlobal: !0,
        action: () => (g(1, { channelPredicate: L, ensureChatIsVisible: R, withVoiceChannels: !0 }), !1),
    },
    w = {
        binds: ["mod+shift+alt+up"],
        comboKeysBindGlobal: !0,
        action: () => (g(-1, { channelPredicate: L, ensureChatIsVisible: R, withVoiceChannels: !0 }), !1),
    };
