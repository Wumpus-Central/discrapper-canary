n.d(t, { Fv: () => m, GY: () => A, M$: () => g, Oc: () => _, kF: () => u });
var i = n(949645),
    s = n(265422),
    r = n(963169),
    a = n(345942),
    l = n(309010),
    o = n(967198),
    c = n(723702),
    d = n(652215);
let u = { binds: ["alt+down"], comboKeysBindGlobal: !0, action: () => ((0, i.A)(), !1) },
    _ = { binds: ["alt+up"], comboKeysBindGlobal: !0, action: () => ((0, i.A)(-1), !1) },
    m = {
        binds: ["mod+alt+right"],
        comboKeysBindGlobal: !0,
        action() {
            let e;
            if (null != o.A.getGuildId()) e = d.ME;
            else {
                let t = o.A.getLastSelectedGuildId();
                null != t && ((e = t), (0, s.i)(t, l.A.getChannelId(t)));
            }
            return null != e && (0, a.u)(e), !1;
        },
    },
    A = {
        binds: (0, c.isMac)() ? ["mod+["] : ["alt+left"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.OE)("keybind"), !1),
    },
    g = {
        binds: (0, c.isMac)() ? ["mod+]"] : ["alt+right"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.Qb)("keybind"), !1),
    };
