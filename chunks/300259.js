var i = n(192308),
    r = n(793322),
    a = n(174768),
    s = n(186111),
    l = n(114129),
    o = n(442325),
    d = n(716099);
n.d(
    t,
    {},
    {
        P$: {
            binds: ["mod+shift+p"],
            comboKeysBindGlobal: !0,
            action() {
                if (!o.A.isEnabled()) return;
                let e = o.A.getActiveTab();
                if (null != e) return ((0, l.RL)(e.id, !e.pinned, "keyboard_shortcut"), !1);
            },
        },
        T3: {
            binds: ["mod+t"],
            comboKeysBindGlobal: !0,
            action: () =>
                !a.A.isOpen() &&
                (o.A.isEnabled() ? !(0, d.k)("keyboard_shortcut") && void 0 : (s.A.hasLayers() || (0, r.WU)(), !1)),
        },
        nK: {
            binds: ["mod+w"],
            comboKeysBindGlobal: !0,
            action() {
                if (!o.A.isEnabled() || s.A.hasLayers() || (0, i.ue)() || a.A.isOpen()) return;
                let e = o.A.getActiveTab();
                if (null != e && !(o.A.getTabs().length <= 1)) return ((0, l.f5)(e.id, "keyboard_shortcut"), !1);
            },
        },
    },
);
