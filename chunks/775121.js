"use strict";
n.d(t, { A: () => N }), n(321073);
var r = n(507392),
    i = n.n(r),
    s = n(64460),
    a = n(626584),
    o = n(549205),
    l = n(954571),
    u = n(723702),
    c = n(652215);
let d = {},
    _ = [],
    f = !1,
    p = (0, o.I)(window),
    h = (0, u.isMac)() || (0, u.isMacWeb)() ? "cmd" : "ctrl",
    m = (0, u.isMac)() || (0, u.isMacWeb)() ? "opt" : "alt",
    E = (0, u.isMac)() || (0, u.isMacWeb)() ? "return" : "enter",
    g = [
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
    ].map((e) => e.replace("mod", h)),
    A = () => [],
    I = [];
function T(e, t) {
    let n = (e) => t(e, e.key);
    document.addEventListener(e, n), I.push(() => document.removeEventListener(e, n));
}
function S(e) {
    let t = [];
    for (let n of Object.values(e)) null != n && t.push(...n.binds);
    return t.map((e) => e.replace("mod", h));
}
function y(e, t) {
    return (n, r) => (l.default.track(c.HAw.KEYBOARD_SHORTCUT_USED, { shortcut_name: e, shortcut_combo: r }), t(n, r));
}
function v(e) {
    for (let [t, n] of Object.entries(e)) {
        if (null == n) continue;
        let e = A();
        u.isPlatformEmbedded || (e = e.concat(g));
        let r = n.binds.filter((t) => ((t = t.replace("mod", h)), 0 > e.indexOf(t)));
        if (0 === r.length) continue;
        let i = n.comboKeysBindGlobal ? p.bindGlobal : p.bind;
        if (
            (null != n.action && i.call(p, r, y(t, n.action)),
            null != n.keyup && i.call(p, r, y(t, n.keyup), "keyup"),
            null != n.keydown)
        ) {
            let e = r.indexOf("any-character");
            -1 !== e && (T("keydown", n.keydown), r.splice(e, 1)),
                r.length > 0 && i.call(p, r, y(t, n.keydown), "keydown");
        }
        null != n.keypress && i.call(p, r, y(t, n.keypress), "keypress");
    }
}
(0, u.isDesktop)() && new (i())(document.documentElement).bind("backspace", (e) => e.preventDefault());
let N = {
    combokeys: p,
    modKey: h,
    altKey: m,
    returnKey: E,
    setGetKeybindList(e) {
        A = e;
    },
    checkDupes(e) {
        let t = new Set(),
            n = [];
        for (let r of S(e)) t.has(r) && n.push(r), t.add(r);
        n.length > 0 && new a.A("Keybinds").warn("Duplicate keyboard shortcuts defined:", n);
    },
    setLayout(e) {
        d = e;
    },
    enable() {
        f || ((f = !0), this.checkDupes(d), v(d));
    },
    enableTemp(e) {
        _.push(d), (d = e), v(e), (f = !0);
    },
    disableTemp() {
        let e = _.pop();
        null != e && (d = e), this.disable(), this.enable();
    },
    disable() {
        f && ((f = !1), I.forEach((e) => e()), (I = []), p.reset());
    },
    validateKeybind(e) {
        f && this.hasBind(e) && p.unbind(e);
    },
    hasBind(e) {
        let t = S(d);
        return (e = (e = e.replace("meta", "cmd")).replace(/right |left /i, "").trim()), t.includes(e);
    },
};
