"use strict";
n.d(t, { A: () => S }), n(321073);
var i = n(507392),
    r = n.n(i),
    s = n(64460),
    a = n(626584),
    o = n(549205),
    l = n(174459),
    u = n(723702),
    c = n(649334),
    d = n(652215);
let _ = {},
    h = [],
    f = !1,
    p = (0, o.I)(window),
    E = [
        ...s.J.binds,
        "mod+shift+[",
        "mod+shift+]",
        "mod+[",
        "mod+]",
        "alt+[",
        "alt+]",
        "ctrl+shift+tab",
        "ctrl+tab",
        "mod+n",
        "mod+t",
        "mod+shift+t",
        "mod+plus",
        "mod+minus",
        "mod+0",
        "cmd+shift+/",
    ].map((e) => e.replace("mod", c.Mu)),
    m = () => [],
    g = [];
function A(e) {
    let t = [];
    for (let n of Object.values(e)) null != n && t.push(...n.binds);
    return t.map((e) => e.replace("mod", c.Mu));
}
function I(e, t) {
    return (n, i) => (l.default.track(d.HAw.KEYBOARD_SHORTCUT_USED, { shortcut_name: e, shortcut_combo: i }), t(n, i));
}
function T(e) {
    for (let [t, n] of Object.entries(e)) {
        if (null == n) continue;
        let e = m();
        u.isPlatformEmbedded || (e = e.concat(E));
        let i = n.binds.filter((t) => ((t = t.replace("mod", c.Mu)), 0 > e.indexOf(t)));
        if (0 === i.length) continue;
        let r = n.comboKeysBindGlobal ? p.bindGlobal : p.bind;
        if (
            (null != n.action && r.call(p, i, I(t, n.action)),
            null != n.keyup && r.call(p, i, I(t, n.keyup), "keyup"),
            null != n.keydown)
        ) {
            let e = i.indexOf("any-character");
            -1 !== e &&
                (!(function (e, t) {
                    function n(e) {
                        return t(e, e.key);
                    }
                    document.addEventListener(e, n), g.push(() => document.removeEventListener(e, n));
                })("keydown", n.keydown),
                i.splice(e, 1)),
                i.length > 0 && r.call(p, i, I(t, n.keydown), "keydown");
        }
        null != n.keypress && r.call(p, i, I(t, n.keypress), "keypress");
    }
}
(0, u.isDesktop)() && new (r())(document.documentElement).bind("backspace", (e) => e.preventDefault());
let S = {
    combokeys: p,
    modKey: c.Mu,
    altKey: c.Pe,
    returnKey: c.wY,
    setGetKeybindList(e) {
        m = e;
    },
    checkDupes(e) {
        let t = new Set(),
            n = [];
        for (let i of A(e)) t.has(i) && n.push(i), t.add(i);
        n.length > 0 && new a.A("Keybinds").warn("Duplicate keyboard shortcuts defined:", n);
    },
    setLayout(e) {
        _ = e;
    },
    enable() {
        f || ((f = !0), this.checkDupes(_), T(_));
    },
    enableTemp(e) {
        h.push(_), (_ = e), T(e), (f = !0);
    },
    disableTemp() {
        let e = h.pop();
        null != e && (_ = e), this.disable(), this.enable();
    },
    disable() {
        f && ((f = !1), g.forEach((e) => e()), (g = []), p.reset());
    },
    validateKeybind(e) {
        f && this.hasBind(e) && p.unbind(e);
    },
    hasBind(e) {
        let t = A(_);
        return (e = (e = e.replace("meta", "cmd")).replace(/right |left /i, "").trim()), t.includes(e);
    },
};
