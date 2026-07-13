"use strict";
n.d(t, { M$: () => D, Fv: () => R, kF: () => C, Oc: () => O, GY: () => L }), n(667532);
var i = n(310953),
    r = n(473529),
    a = n(519059),
    s = n(380335),
    l = n(157550),
    o = n(366811),
    d = n(885386),
    c = n(189081),
    u = n(839067),
    _ = n(645959),
    E = n(403362),
    A = n(265422),
    h = n(652215),
    I = n(746080);
let f = () => {
    let e = s.A.getMessageRequestsCount() > 0 || l.A.getSpamChannelsCount() > 0;
    return [
        h.BVt.FRIENDS,
        (0, a.HF)("navigateToChannel") ? h.BVt.ICYMI : null,
        c.A.hasLibraryApplication() && !d.l_.getSetting() ? h.BVt.APPLICATION_LIBRARY : null,
        e ? h.BVt.MESSAGE_REQUESTS : null,
        h.BVt.APPLICATION_STORE,
        h.BVt.COLLECTIBLES_SHOP,
        d.dm.getSetting() ? h.BVt.FAMILY_CENTER : null,
        h.BVt.QUEST_HOME,
    ].filter(E.Vq);
};
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = o.A.getState().guildId;
    if (null == t)
        !(function (e) {
            var t, n;
            let { channelId: i, path: r, basePath: a } = o.A.getState(),
                s = _.A.getPrivateChannelIds(),
                l = __OVERLAY__ ? s : [...f(), ...s],
                d =
                    (null == i ? ((t = r ?? a), f().findIndex((e) => t.startsWith(e))) : null != i ? l.indexOf(i) : 0) +
                    e;
            d >= l.length ? (d = 0) : d < 0 && (d = l.length - 1);
            let c = l[d];
            if (f().includes(c)) {
                let e;
                (e = u.A.getCurrentRoute()), c === h.BVt.APPLICATION_STORE && null != e ? (0, A.a)(e) : (0, A.a)(c);
            } else (n = h.ME), (0, A.i)(n, c);
        })(e);
    else {
        var n, a, s;
        let l, d;
        (l = o.A.getState().channelId),
            (d = (0, i.A)(t, { withCurrentVoiceChannel: !0 }).map((e) => e.id)),
            (0, r.K)(t) && d.unshift(I.VV.GUILD_HOME),
            (n = (null != l ? d.indexOf(l) : -1) + e),
            (a = d.length),
            (s = d[n < 0 ? a - 1 : n >= a ? 0 : n]),
            (0, A.i)(t, s);
    }
}
var T = n(963169),
    m = n(345942),
    g = n(309010),
    S = n(967198),
    N = n(723702);
let C = { binds: ["alt+down"], comboKeysBindGlobal: !0, action: () => (p(), !1) },
    O = { binds: ["alt+up"], comboKeysBindGlobal: !0, action: () => (p(-1), !1) },
    R = {
        binds: ["mod+alt+right"],
        comboKeysBindGlobal: !0,
        action() {
            let e;
            if (null != S.A.getGuildId()) e = h.ME;
            else {
                let t = S.A.getLastSelectedGuildId();
                null != t && ((e = t), (0, A.i)(t, g.A.getChannelId(t)));
            }
            return null != e && (0, m.u)(e), !1;
        },
    },
    L = {
        binds: (0, N.isMac)() || (0, N.isMacWeb)() ? ["mod+["] : ["alt+left"],
        comboKeysBindGlobal: !0,
        action: () => ((0, T.OE)("keybind"), !1),
    },
    D = {
        binds: (0, N.isMac)() || (0, N.isMacWeb)() ? ["mod+]"] : ["alt+right"],
        comboKeysBindGlobal: !0,
        action: () => ((0, T.Qb)("keybind"), !1),
    };
