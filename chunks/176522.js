n.d(t, { M$: () => y, Fv: () => L, kF: () => N, Oc: () => T, GY: () => O }), n(667532);
var i = n(310953),
    r = n(473529),
    s = n(875448),
    l = n(380335),
    o = n(157550),
    a = n(366811),
    d = n(253932),
    c = n(189081),
    _ = n(839067),
    u = n(567761),
    g = n(403362),
    h = n(265422),
    A = n(652215),
    p = n(746080);
let I = () => {
    let e = l.A.getMessageRequestsCount() > 0 || o.A.getSpamChannelsCount() > 0;
    return [
        A.BVt.FRIENDS,
        (0, s.HF)("navigateToChannel") ? A.BVt.ICYMI : null,
        c.A.hasLibraryApplication() && !d.l_.getSetting() ? A.BVt.APPLICATION_LIBRARY : null,
        e ? A.BVt.MESSAGE_REQUESTS : null,
        A.BVt.APPLICATION_STORE,
        A.BVt.COLLECTIBLES_SHOP,
        d.dm.getSetting() ? A.BVt.FAMILY_CENTER : null,
        A.BVt.QUEST_HOME,
    ].filter(g.Vq);
};
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = a.A.getState().guildId;
    if (null == t)
        !(function (e) {
            var t, n;
            let { channelId: i, path: r, basePath: s } = a.A.getState(),
                l = u.default.getPrivateChannelIds(),
                o = __OVERLAY__ ? l : [...I(), ...l],
                d =
                    (null == i ? ((t = r ?? s), I().findIndex((e) => t.startsWith(e))) : null != i ? o.indexOf(i) : 0) +
                    e;
            d >= o.length ? (d = 0) : d < 0 && (d = o.length - 1);
            let c = o[d];
            if (I().includes(c)) {
                let e;
                (e = _.A.getCurrentRoute()), c === A.BVt.APPLICATION_STORE && null != e ? (0, h.a)(e) : (0, h.a)(c);
            } else (n = A.ME), (0, h.i)(n, c);
        })(e);
    else {
        var n, s, l;
        let o, d;
        (o = a.A.getState().channelId),
            (d = (0, i.A)(t, { withCurrentVoiceChannel: !0 }).map((e) => e.id)),
            (0, r.K)(t) && d.unshift(p.VV.GUILD_HOME),
            (n = (null != o ? d.indexOf(o) : -1) + e),
            (s = d.length),
            (l = d[n < 0 ? s - 1 : n >= s ? 0 : n]),
            (0, h.i)(t, l);
    }
}
var b = n(963169),
    C = n(345942),
    S = n(309010),
    m = n(967198),
    f = n(723702);
let N = { binds: ["alt+down"], comboKeysBindGlobal: !0, action: () => (E(), !1) },
    T = { binds: ["alt+up"], comboKeysBindGlobal: !0, action: () => (E(-1), !1) },
    L = {
        binds: ["mod+alt+right"],
        comboKeysBindGlobal: !0,
        action() {
            let e;
            if (null != m.A.getGuildId()) e = A.ME;
            else {
                let t = m.A.getLastSelectedGuildId();
                null != t && ((e = t), (0, h.i)(t, S.A.getChannelId(t)));
            }
            return null != e && (0, C.u)(e), !1;
        },
    },
    O = {
        binds: (0, f.isMac)() || (0, f.isMacWeb)() ? ["mod+["] : ["alt+left"],
        comboKeysBindGlobal: !0,
        action: () => ((0, b.OE)("keybind"), !1),
    },
    y = {
        binds: (0, f.isMac)() || (0, f.isMacWeb)() ? ["mod+]"] : ["alt+right"],
        comboKeysBindGlobal: !0,
        action: () => ((0, b.Qb)("keybind"), !1),
    };
