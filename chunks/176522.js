"use strict";
n.d(t, { M$: () => v, Fv: () => O, kF: () => C, Oc: () => y, GY: () => R }), n(667532);
var i = n(310953),
    r = n(473529),
    s = n(519059),
    a = n(380335),
    o = n(157550),
    l = n(366811),
    u = n(885386),
    c = n(189081),
    d = n(839067),
    _ = n(645959),
    h = n(403362),
    f = n(265422),
    E = n(652215),
    p = n(746080);
let m = () => {
    let e = a.A.getMessageRequestsCount() > 0 || o.A.getSpamChannelsCount() > 0;
    return [
        E.BVt.FRIENDS,
        (0, s.HF)("navigateToChannel") ? E.BVt.ICYMI : null,
        c.A.hasLibraryApplication() && !u.l_.getSetting() ? E.BVt.APPLICATION_LIBRARY : null,
        e ? E.BVt.MESSAGE_REQUESTS : null,
        E.BVt.APPLICATION_STORE,
        E.BVt.COLLECTIBLES_SHOP,
        u.dm.getSetting() ? E.BVt.FAMILY_CENTER : null,
        E.BVt.QUEST_HOME,
    ].filter(h.Vq);
};
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = l.A.getState().guildId;
    if (null == t)
        !(function (e) {
            var t, n;
            let { channelId: i, path: r, basePath: s } = l.A.getState(),
                a = _.A.getPrivateChannelIds(),
                o = __OVERLAY__ ? a : [...m(), ...a],
                u =
                    (null == i ? ((t = r ?? s), m().findIndex((e) => t.startsWith(e))) : null != i ? o.indexOf(i) : 0) +
                    e;
            u >= o.length ? (u = 0) : u < 0 && (u = o.length - 1);
            let c = o[u];
            if (m().includes(c)) {
                let e;
                (e = d.A.getCurrentRoute()), c === E.BVt.APPLICATION_STORE && null != e ? (0, f.a)(e) : (0, f.a)(c);
            } else (n = E.ME), (0, f.i)(n, c);
        })(e);
    else {
        var n, s, a;
        let o, u;
        (o = l.A.getState().channelId),
            (u = (0, i.A)(t, { withCurrentVoiceChannel: !0 }).map((e) => e.id)),
            (0, r.K)(t) && u.unshift(p.VV.GUILD_HOME),
            (n = (null != o ? u.indexOf(o) : -1) + e),
            (s = u.length),
            (a = u[n < 0 ? s - 1 : n >= s ? 0 : n]),
            (0, f.i)(t, a);
    }
}
var A = n(963169),
    I = n(345942),
    T = n(309010),
    S = n(967198),
    N = n(723702);
let C = { binds: ["alt+down"], comboKeysBindGlobal: !0, action: () => (g(), !1) },
    y = { binds: ["alt+up"], comboKeysBindGlobal: !0, action: () => (g(-1), !1) },
    O = {
        binds: ["mod+alt+right"],
        comboKeysBindGlobal: !0,
        action() {
            let e;
            if (null != S.A.getGuildId()) e = E.ME;
            else {
                let t = S.A.getLastSelectedGuildId();
                null != t && ((e = t), (0, f.i)(t, T.A.getChannelId(t)));
            }
            return null != e && (0, I.u)(e), !1;
        },
    },
    R = {
        binds: (0, N.isMac)() || (0, N.isMacWeb)() ? ["mod+["] : ["alt+left"],
        comboKeysBindGlobal: !0,
        action: () => ((0, A.OE)("keybind"), !1),
    },
    v = {
        binds: (0, N.isMac)() || (0, N.isMacWeb)() ? ["mod+]"] : ["alt+right"],
        comboKeysBindGlobal: !0,
        action: () => ((0, A.Qb)("keybind"), !1),
    };
