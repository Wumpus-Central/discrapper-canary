"use strict";
n.d(t, { US: () => b, BD: () => L, X8: () => w, mH: () => O });
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
    _ = n(567761),
    h = n(625494),
    f = n(265422),
    p = n(652215),
    E = n(790782);
function m(e, t) {
    return [
        { resourceId: e, type: E.P.GUILD_EVENT },
        ...(e === p.ME
            ? _.default.getPrivateChannelIds()
            : (0, o.A)(e, { withVoiceChannels: t, withCurrentVoiceChannel: !0 }).map((e) => e.id)),
    ];
}
let g = s().throttle(function (e, t) {
    var r;
    let s,
        o,
        _,
        {
            channelPredicate: E = () => !0,
            guildPredicate: g = () => !0,
            guildFeaturePredicate: A = () => !1,
            ensureChatIsVisible: I = () => !1,
            withVoiceChannels: T = !1,
        } = t,
        S = l.A.getState().guildId ?? p.ME,
        y = l.A.getState().channelId,
        N =
            ((r = S),
            (o = (s = [p.ME, ...d.Ay.getFlattenedGuildIds()]).indexOf(r)),
            e > 0
                ? s.slice(o).concat(s.slice(0, o), r)
                : (s.splice(o, 0, r), s.slice(o + 1).concat(s.slice(0, o + 1)))),
        v = e > 0 ? 0 : N.length - 1,
        C = m(S, T),
        R = C.indexOf(y) + e;
    for (; null != S && "" !== S; ) {
        if (((_ = C[R]), g(S)))
            for (; null != _ && "" !== _; ) {
                if ("string" == typeof _) {
                    if (E(S, _)) return (0, f.i)(S, _, !1, I(S, _));
                } else if ("object" == typeof _ && A(_.resourceId, _.type))
                    return (
                        S !== c.A.getGuildId() && (0, f.i)(S, u.Ay.getDefaultChannel(S)?.id),
                        (0, a.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("37168"),
                                n.e("52443"),
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
                (R += e), (_ = C[R]);
            }
        if (((v += e), null == (S = N[v]) || "" === S)) break;
        (C = m(S, T)), (R = e < 0 ? C.length - 1 : 0);
    }
    h._.dispatch(p.jej.SHAKE_APP, { duration: 200, intensity: 2 });
}, p.ugG);
var A = n(455234),
    I = n(95701),
    T = n(734057),
    S = n(222823),
    y = n(309010),
    N = n(543465);
let v = (e, t) => {
        let n = T.A.getChannel(t);
        return (
            null != n &&
            ((0, I.Gw)(n.type) || p.kvI.GUILD_VOCAL.has(n.type)
                ? S.Ay.getMentionCount(t) > 0 || y.A.getVoiceChannelId() === t
                : (!N.Ay.isChannelMuted(e, t) || S.Ay.getMentionCount(t) > 0) && (0, A.Y)(n))
        );
    },
    C = (e, t) =>
        t === E.P.GUILD_EVENT ? !N.Ay.isMuteScheduledEventsEnabled(e) && S.Ay.hasUnread(e, t) : S.Ay.hasUnread(e, t),
    R = (e, t) => {
        let n = T.A.getChannel(t);
        return (
            null != n &&
            !!p.kvI.GUILD_VOCAL.has(n.type) &&
            (S.Ay.getMentionCount(t) > 0 || (y.A.getVoiceChannelId() === t && S.Ay.getUnreadCount(t) > 0))
        );
    },
    O = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            let e = l.A.getState().guildId ?? p.ME;
            return (
                g(1, {
                    channelPredicate: v,
                    guildPredicate: (t) => t === e || !N.Ay.isMuted(t),
                    guildFeaturePredicate: C,
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
            let e = l.A.getState().guildId ?? p.ME;
            return (
                g(-1, {
                    channelPredicate: v,
                    guildPredicate: (t) => t === e || !N.Ay.isMuted(t),
                    guildFeaturePredicate: C,
                    ensureChatIsVisible: R,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    D = (e, t) => S.Ay.getMentionCount(t) > 0,
    L = {
        binds: ["mod+shift+alt+down"],
        comboKeysBindGlobal: !0,
        action: () => (g(1, { channelPredicate: D, ensureChatIsVisible: R, withVoiceChannels: !0 }), !1),
    },
    w = {
        binds: ["mod+shift+alt+up"],
        comboKeysBindGlobal: !0,
        action: () => (g(-1, { channelPredicate: D, ensureChatIsVisible: R, withVoiceChannels: !0 }), !1),
    };
