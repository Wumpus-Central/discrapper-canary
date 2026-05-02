"use strict";
n.d(t, { M$: () => R, Fv: () => v, kF: () => y, Oc: () => C, GY: () => O }), n(667532);
var i = n(310953),
    r = n(473529),
    s = n(519059),
    a = n(380335),
    o = n(157550),
    l = n(366811),
    u = n(885386),
    c = n(189081),
    d = n(839067),
    _ = n(567761),
    f = n(403362),
    h = n(265422),
    p = n(652215),
    E = n(746080);
let m = () => {
    let e = a.A.getMessageRequestsCount() > 0 || o.A.getSpamChannelsCount() > 0;
    return [
        p.BVt.FRIENDS,
        (0, s.HF)("navigateToChannel") ? p.BVt.ICYMI : null,
        c.A.hasLibraryApplication() && !u.l_.getSetting() ? p.BVt.APPLICATION_LIBRARY : null,
        e ? p.BVt.MESSAGE_REQUESTS : null,
        p.BVt.APPLICATION_STORE,
        p.BVt.COLLECTIBLES_SHOP,
        u.dm.getSetting() ? p.BVt.FAMILY_CENTER : null,
        p.BVt.QUEST_HOME,
    ].filter(f.Vq);
};
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = l.A.getState().guildId;
    if (null == t)
        !(function (e) {
            var t, n;
            let { channelId: i, path: r, basePath: s } = l.A.getState(),
                a = _.default.getPrivateChannelIds(),
                o = __OVERLAY__ ? a : [...m(), ...a],
                u =
                    (null == i ? ((t = r ?? s), m().findIndex((e) => t.startsWith(e))) : null != i ? o.indexOf(i) : 0) +
                    e;
            u >= o.length ? (u = 0) : u < 0 && (u = o.length - 1);
            let c = o[u];
            if (m().includes(c)) {
                let e;
                (e = d.A.getCurrentRoute()), c === p.BVt.APPLICATION_STORE && null != e ? (0, h.a)(e) : (0, h.a)(c);
            } else (n = p.ME), (0, h.i)(n, c);
        })(e);
    else {
        var n, s, a;
        let o, u;
        (o = l.A.getState().channelId),
            (u = (0, i.A)(t, { withCurrentVoiceChannel: !0 }).map((e) => e.id)),
            (0, r.K)(t) && u.unshift(E.VV.GUILD_HOME),
            (n = (null != o ? u.indexOf(o) : -1) + e),
            (s = u.length),
            (a = u[n < 0 ? s - 1 : n >= s ? 0 : n]),
            (0, h.i)(t, a);
    }
}
var A = n(963169),
    I = n(345942),
    T = n(309010),
    S = n(967198),
    N = n(723702);
let y = { binds: ["alt+down"], comboKeysBindGlobal: !0, action: () => (g(), !1) },
    C = { binds: ["alt+up"], comboKeysBindGlobal: !0, action: () => (g(-1), !1) },
    v = {
        binds: ["mod+alt+right"],
        comboKeysBindGlobal: !0,
        action() {
            let e;
            if (null != S.A.getGuildId()) e = p.ME;
            else {
                let t = S.A.getLastSelectedGuildId();
                null != t && ((e = t), (0, h.i)(t, T.A.getChannelId(t)));
            }
            return null != e && (0, I.u)(e), !1;
        },
    },
    O = {
        binds: (0, N.isMac)() || (0, N.isMacWeb)() ? ["mod+["] : ["alt+left"],
        comboKeysBindGlobal: !0,
        action: () => ((0, A.OE)("keybind"), !1),
    },
    R = {
        binds: (0, N.isMac)() || (0, N.isMacWeb)() ? ["mod+]"] : ["alt+right"],
        comboKeysBindGlobal: !0,
        action: () => ((0, A.Qb)("keybind"), !1),
    };
