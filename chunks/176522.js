n.d(t, { M$: () => L, Fv: () => S, kF: () => f, Oc: () => T, GY: () => O }), n(667532);
var i = n(310953),
    l = n(473529),
    s = n(875448),
    r = n(380335),
    a = n(157550),
    o = n(366811),
    d = n(253932),
    c = n(189081),
    u = n(839067),
    h = n(567761),
    g = n(403362),
    A = n(265422),
    E = n(652215),
    p = n(746080);
let I = () => {
    let e = r.A.getMessageRequestsCount() > 0 || a.A.getSpamChannelsCount() > 0;
    return [
        E.BVt.FRIENDS,
        (0, s.HF)("navigateToChannel") ? E.BVt.ICYMI : null,
        c.A.hasLibraryApplication() && !d.l_.getSetting() ? E.BVt.APPLICATION_LIBRARY : null,
        e ? E.BVt.MESSAGE_REQUESTS : null,
        E.BVt.APPLICATION_STORE,
        E.BVt.COLLECTIBLES_SHOP,
        d.dm.getSetting() ? E.BVt.FAMILY_CENTER : null,
        E.BVt.QUEST_HOME,
    ].filter(g.Vq);
};
function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = o.A.getState().guildId;
    if (null == t)
        !(function (e) {
            var t, n;
            let { channelId: i, path: l, basePath: s } = o.A.getState(),
                r = h.default.getPrivateChannelIds(),
                a = __OVERLAY__ ? r : [...I(), ...r],
                d =
                    (null == i ? ((t = l ?? s), I().findIndex((e) => t.startsWith(e))) : null != i ? a.indexOf(i) : 0) +
                    e;
            d >= a.length ? (d = 0) : d < 0 && (d = a.length - 1);
            let c = a[d];
            if (I().includes(c)) {
                let e;
                (e = u.A.getCurrentRoute()), c === E.BVt.APPLICATION_STORE && null != e ? (0, A.a)(e) : (0, A.a)(c);
            } else (n = E.ME), (0, A.i)(n, c);
        })(e);
    else {
        var n, s, r;
        let a, d;
        (a = o.A.getState().channelId),
            (d = (0, i.A)(t, { withCurrentVoiceChannel: !0 }).map((e) => e.id)),
            (0, l.K)(t) && d.unshift(p.VV.GUILD_HOME),
            (n = (null != a ? d.indexOf(a) : -1) + e),
            (s = d.length),
            (r = d[n < 0 ? s - 1 : n >= s ? 0 : n]),
            (0, A.i)(t, r);
    }
}
var m = n(963169),
    _ = n(345942),
    b = n(309010),
    N = n(967198),
    v = n(723702);
let f = { binds: ["alt+down"], comboKeysBindGlobal: !0, action: () => (C(), !1) },
    T = { binds: ["alt+up"], comboKeysBindGlobal: !0, action: () => (C(-1), !1) },
    S = {
        binds: ["mod+alt+right"],
        comboKeysBindGlobal: !0,
        action() {
            let e;
            if (null != N.A.getGuildId()) e = E.ME;
            else {
                let t = N.A.getLastSelectedGuildId();
                null != t && ((e = t), (0, A.i)(t, b.A.getChannelId(t)));
            }
            return null != e && (0, _.u)(e), !1;
        },
    },
    O = {
        binds: (0, v.isMac)() || (0, v.isMacWeb)() ? ["mod+["] : ["alt+left"],
        comboKeysBindGlobal: !0,
        action: () => ((0, m.OE)("keybind"), !1),
    },
    L = {
        binds: (0, v.isMac)() || (0, v.isMacWeb)() ? ["mod+]"] : ["alt+right"],
        comboKeysBindGlobal: !0,
        action: () => ((0, m.Qb)("keybind"), !1),
    };
