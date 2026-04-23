n.d(t, { Fv: () => A, GY: () => E, M$: () => I, Oc: () => _, kF: () => u });
var i = n(949645),
    l = n(265422),
    r = n(963169),
    s = n(345942),
    o = n(309010),
    a = n(967198),
    d = n(723702),
    c = n(652215);
let u = { binds: ["alt+down"], comboKeysBindGlobal: !0, action: () => ((0, i.A)(), !1) },
    _ = { binds: ["alt+up"], comboKeysBindGlobal: !0, action: () => ((0, i.A)(-1), !1) },
    A = {
        binds: ["mod+alt+right"],
        comboKeysBindGlobal: !0,
        action() {
            let e;
            if (null != a.A.getGuildId()) e = c.ME;
            else {
                let t = a.A.getLastSelectedGuildId();
                null != t && ((e = t), (0, l.i)(t, o.A.getChannelId(t)));
            }
            return null != e && (0, s.u)(e), !1;
        },
    },
    E = {
        binds: (0, d.isMac)() || (0, d.isMacWeb)() ? ["mod+["] : ["alt+left"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.OE)("keybind"), !1),
    },
    I = {
        binds: (0, d.isMac)() || (0, d.isMacWeb)() ? ["mod+]"] : ["alt+right"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.Qb)("keybind"), !1),
    };
