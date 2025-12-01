n.d(t, {
    $c: () => p,
    Nx: () => _,
    On: () => m,
    tQ: () => d,
    x5: () => f,
});
var r = n(140492),
    i = n(475468),
    a = n(891304),
    o = n(769654),
    s = n(944486),
    l = n(914010),
    c = n(358085),
    u = n(981631);
let d = {
        binds: ["alt+down"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.Z)(), !1),
    },
    f = {
        binds: ["alt+up"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.Z)(-1), !1),
    },
    p = {
        binds: ["mod+alt+right"],
        comboKeysBindGlobal: !0,
        action() {
            let e;
            if (null != l.Z.getGuildId()) e = u.ME;
            else {
                let t = l.Z.getLastSelectedGuildId();
                null != t && ((e = t), (0, i.K)(t, s.Z.getChannelId(t)));
            }
            return null != e && (0, o.X)(e), !1;
        },
    },
    _ = {
        binds: (0, c.isMac)() ? ["mod+["] : ["alt+left"],
        comboKeysBindGlobal: !0,
        action: () => ((0, a.Hm)("keybind"), !1),
    },
    m = {
        binds: (0, c.isMac)() ? ["mod+]"] : ["alt+right"],
        comboKeysBindGlobal: !0,
        action: () => ((0, a.TL)("keybind"), !1),
    };
