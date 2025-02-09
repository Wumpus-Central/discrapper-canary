t.d(n, {
    $c: () => p,
    Nx: () => b,
    On: () => C,
    tQ: () => u,
    x5: () => E
});
var i = t(140492),
    r = t(475468),
    s = t(703656),
    l = t(769654),
    o = t(944486),
    a = t(914010),
    d = t(358085),
    c = t(981631);
let u = {
        binds: ['alt+down'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.Z)(), !1)
    },
    E = {
        binds: ['alt+up'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.Z)(-1), !1)
    },
    p = {
        binds: ['mod+alt+right'],
        comboKeysBindGlobal: !0,
        action() {
            let e;
            if (null != a.Z.getGuildId()) e = c.ME;
            else {
                let n = a.Z.getLastSelectedGuildId();
                null != n && ((e = n), (0, r.K)(n, o.Z.getChannelId(n)));
            }
            return null != e && (0, l.X)(e), !1;
        }
    },
    b = {
        binds: (0, d.isMac)() ? ['mod+['] : ['alt+left'],
        comboKeysBindGlobal: !0,
        action: () => ((0, s.op)(), !1)
    },
    C = {
        binds: (0, d.isMac)() ? ['mod+]'] : ['alt+right'],
        comboKeysBindGlobal: !0,
        action: () => ((0, s.eH)(), !1)
    };
