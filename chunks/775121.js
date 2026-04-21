"use strict";
n.d(t, { A: () => y }), n(321073);
var r = n(507392),
    i = n.n(r),
    s = n(64460),
    a = n(626584),
    o = n(549205),
    l = n(954571),
    u = n(723702),
    c = n(649334),
    d = n(652215);
let _ = {},
    f = [],
    p = !1,
    h = (0, o.I)(window),
    m = [
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
    E = () => [],
    g = [];
function A(e, t) {
    let n = (e) => t(e, e.key);
    document.addEventListener(e, n), g.push(() => document.removeEventListener(e, n));
}
function I(e) {
    let t = [];
    for (let n of Object.values(e)) null != n && t.push(...n.binds);
    return t.map((e) => e.replace("mod", c.Mu));
}
function T(e, t) {
    return (n, r) => (l.default.track(d.HAw.KEYBOARD_SHORTCUT_USED, { shortcut_name: e, shortcut_combo: r }), t(n, r));
}
function S(e) {
    for (let [t, n] of Object.entries(e)) {
        if (null == n) continue;
        let e = E();
        u.isPlatformEmbedded || (e = e.concat(m));
        let r = n.binds.filter((t) => ((t = t.replace("mod", c.Mu)), 0 > e.indexOf(t)));
        if (0 === r.length) continue;
        let i = n.comboKeysBindGlobal ? h.bindGlobal : h.bind;
        if (
            (null != n.action && i.call(h, r, T(t, n.action)),
            null != n.keyup && i.call(h, r, T(t, n.keyup), "keyup"),
            null != n.keydown)
        ) {
            let e = r.indexOf("any-character");
            -1 !== e && (A("keydown", n.keydown), r.splice(e, 1)),
                r.length > 0 && i.call(h, r, T(t, n.keydown), "keydown");
        }
        null != n.keypress && i.call(h, r, T(t, n.keypress), "keypress");
    }
}
(0, u.isDesktop)() && new (i())(document.documentElement).bind("backspace", (e) => e.preventDefault());
let y = {
    combokeys: h,
    modKey: c.Mu,
    altKey: c.Pe,
    returnKey: c.wY,
    setGetKeybindList(e) {
        E = e;
    },
    checkDupes(e) {
        let t = new Set(),
            n = [];
        for (let r of I(e)) t.has(r) && n.push(r), t.add(r);
        n.length > 0 && new a.A("Keybinds").warn("Duplicate keyboard shortcuts defined:", n);
    },
    setLayout(e) {
        _ = e;
    },
    enable() {
        p || ((p = !0), this.checkDupes(_), S(_));
    },
    enableTemp(e) {
        f.push(_), (_ = e), S(e), (p = !0);
    },
    disableTemp() {
        let e = f.pop();
        null != e && (_ = e), this.disable(), this.enable();
    },
    disable() {
        p && ((p = !1), g.forEach((e) => e()), (g = []), h.reset());
    },
    validateKeybind(e) {
        p && this.hasBind(e) && h.unbind(e);
    },
    hasBind(e) {
        let t = I(_);
        return (e = (e = e.replace("meta", "cmd")).replace(/right |left /i, "").trim()), t.includes(e);
    },
};
