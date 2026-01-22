n.d(t, {
    Fv: () => p,
    GY: () => _,
    M$: () => h,
    Oc: () => f,
    kF: () => d,
});
var r = n(949645),
    i = n(265422),
    a = n(963169),
    s = n(345942),
    o = n(309010),
    l = n(967198),
    c = n(723702),
    u = n(652215);
let d = {
        binds: ["alt+down"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.A)(), !1),
    },
    f = {
        binds: ["alt+up"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.A)(-1), !1),
    },
    p = {
        binds: ["mod+alt+right"],
        comboKeysBindGlobal: !0,
        action() {
            let e;
            if (null != l.A.getGuildId()) e = u.ME;
            else {
                let t = l.A.getLastSelectedGuildId();
                null != t && ((e = t), (0, i.i)(t, o.A.getChannelId(t)));
            }
            return null != e && (0, s.u)(e), !1;
        },
    },
    _ = {
        binds: (0, c.isMac)() ? ["mod+["] : ["alt+left"],
        comboKeysBindGlobal: !0,
        action: () => ((0, a.OE)("keybind"), !1),
    },
    h = {
        binds: (0, c.isMac)() ? ["mod+]"] : ["alt+right"],
        comboKeysBindGlobal: !0,
        action: () => ((0, a.Qb)("keybind"), !1),
    };
