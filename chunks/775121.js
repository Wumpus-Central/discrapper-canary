"use strict";
n.d(t, { A: () => S }), n(321073);
var r = n(507392),
    i = n.n(r),
    s = n(64460),
    a = n(626584),
    o = n(549205),
    l = n(954571),
    u = n(723702),
    d = n(649334),
    c = n(652215);
let _ = {},
    f = [],
    E = !1,
    h = (0, o.I)(window),
    p = [
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
    ].map((e) => e.replace("mod", d.Mu)),
    m = () => [],
    g = [];
function A(e) {
    let t = [];
    for (let n of Object.values(e)) null != n && t.push(...n.binds);
    return t.map((e) => e.replace("mod", d.Mu));
}
function I(e, t) {
    return (n, r) => (l.default.track(c.HAw.KEYBOARD_SHORTCUT_USED, { shortcut_name: e, shortcut_combo: r }), t(n, r));
}
function T(e) {
    for (let [t, n] of Object.entries(e)) {
        if (null == n) continue;
        let e = m();
        u.isPlatformEmbedded || (e = e.concat(p));
        let r = n.binds.filter((t) => ((t = t.replace("mod", d.Mu)), 0 > e.indexOf(t)));
        if (0 === r.length) continue;
        let i = n.comboKeysBindGlobal ? h.bindGlobal : h.bind;
        if (
            (null != n.action && i.call(h, r, I(t, n.action)),
            null != n.keyup && i.call(h, r, I(t, n.keyup), "keyup"),
            null != n.keydown)
        ) {
            let e = r.indexOf("any-character");
            -1 !== e &&
                (!(function (e, t) {
                    let n = (e) => t(e, e.key);
                    document.addEventListener(e, n), g.push(() => document.removeEventListener(e, n));
                })("keydown", n.keydown),
                r.splice(e, 1)),
                r.length > 0 && i.call(h, r, I(t, n.keydown), "keydown");
        }
        null != n.keypress && i.call(h, r, I(t, n.keypress), "keypress");
    }
}
(0, u.isDesktop)() && new (i())(document.documentElement).bind("backspace", (e) => e.preventDefault());
let S = {
    combokeys: h,
    modKey: d.Mu,
    altKey: d.Pe,
    returnKey: d.wY,
    setGetKeybindList(e) {
        m = e;
    },
    checkDupes(e) {
        let t = new Set(),
            n = [];
        for (let r of A(e)) t.has(r) && n.push(r), t.add(r);
        n.length > 0 && new a.A("Keybinds").warn("Duplicate keyboard shortcuts defined:", n);
    },
    setLayout(e) {
        _ = e;
    },
    enable() {
        E || ((E = !0), this.checkDupes(_), T(_));
    },
    enableTemp(e) {
        f.push(_), (_ = e), T(e), (E = !0);
    },
    disableTemp() {
        let e = f.pop();
        null != e && (_ = e), this.disable(), this.enable();
    },
    disable() {
        E && ((E = !1), g.forEach((e) => e()), (g = []), h.reset());
    },
    validateKeybind(e) {
        E && this.hasBind(e) && h.unbind(e);
    },
    hasBind(e) {
        let t = A(_);
        return (e = (e = e.replace("meta", "cmd")).replace(/right |left /i, "").trim()), t.includes(e);
    },
};
