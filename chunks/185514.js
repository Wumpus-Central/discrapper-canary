n.d(t, {
    $c: function () {
        return g;
    },
    Nx: function () {
        return h;
    },
    On: function () {
        return p;
    },
    tQ: function () {
        return u;
    },
    x5: function () {
        return m;
    }
});
var i = n(140492),
    r = n(475468),
    s = n(703656),
    a = n(769654),
    l = n(944486),
    o = n(914010),
    c = n(358085),
    d = n(981631);
let u = {
        binds: ['alt+down'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.Z)(), !1)
    },
    m = {
        binds: ['alt+up'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.Z)(-1), !1)
    },
    g = {
        binds: ['mod+alt+right'],
        comboKeysBindGlobal: !0,
        action() {
            let e;
            if (null != o.Z.getGuildId()) e = d.ME;
            else {
                let t = o.Z.getLastSelectedGuildId();
                null != t && ((e = t), (0, r.K)(t, l.Z.getChannelId(t)));
            }
            return null != e && (0, a.X)(e), !1;
        }
    },
    h = {
        binds: (0, c.isMac)() ? ['mod+['] : ['alt+left'],
        comboKeysBindGlobal: !0,
        action: () => ((0, s.op)(), !1)
    },
    p = {
        binds: (0, c.isMac)() ? ['mod+]'] : ['alt+right'],
        comboKeysBindGlobal: !0,
        action: () => ((0, s.eH)(), !1)
    };
