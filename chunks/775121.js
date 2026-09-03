n.d(t, { A: () => S }), n(321073);
var i = n(507392),
    r = n.n(i),
    a = n(64460),
    s = n(626584),
    l = n(549205),
    o = n(174459),
    d = n(723702),
    c = n(649334),
    u = n(652215);
let _ = {},
    E = [],
    A = !1,
    h = (0, l.I)(window),
    I = [
        ...a.J.binds,
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
    f = () => [],
    p = [];
function T(e) {
    let t = [];
    for (let n of Object.values(e)) null != n && t.push(...n.binds);
    return t.map((e) => e.replace("mod", c.Mu));
}
function m(e, t) {
    return (n, i) => (o.default.track(u.HAw.KEYBOARD_SHORTCUT_USED, { shortcut_name: e, shortcut_combo: i }), t(n, i));
}
function g(e) {
    for (let [t, n] of Object.entries(e)) {
        if (null == n) continue;
        let e = f();
        d.isPlatformEmbedded || (e = e.concat(I));
        let i = n.binds.filter((t) => ((t = t.replace("mod", c.Mu)), 0 > e.indexOf(t)));
        if (0 === i.length) continue;
        let r = n.comboKeysBindGlobal ? h.bindGlobal : h.bind;
        if (
            (null != n.action && r.call(h, i, m(t, n.action)),
            null != n.keyup && r.call(h, i, m(t, n.keyup), "keyup"),
            null != n.keydown)
        ) {
            let e = i.indexOf("any-character");
            -1 !== e &&
                (!(function (e, t) {
                    function n(e) {
                        return t(e, e.key);
                    }
                    document.addEventListener(e, n), p.push(() => document.removeEventListener(e, n));
                })("keydown", n.keydown),
                i.splice(e, 1)),
                i.length > 0 && r.call(h, i, m(t, n.keydown), "keydown");
        }
        null != n.keypress && r.call(h, i, m(t, n.keypress), "keypress");
    }
}
(0, d.isDesktop)() && new (r())(document.documentElement).bind("backspace", (e) => e.preventDefault());
let S = {
    combokeys: h,
    modKey: c.Mu,
    altKey: c.Pe,
    returnKey: c.wY,
    setGetKeybindList(e) {
        f = e;
    },
    checkDupes(e) {
        let t = new Set(),
            n = [];
        for (let i of T(e)) t.has(i) && n.push(i), t.add(i);
        n.length > 0 && new s.A("Keybinds").warn("Duplicate keyboard shortcuts defined:", n);
    },
    setLayout(e) {
        _ = e;
    },
    enable() {
        A || ((A = !0), this.checkDupes(_), g(_));
    },
    enableTemp(e) {
        E.push(_), (_ = e), g(e), (A = !0);
    },
    disableTemp() {
        let e = E.pop();
        null != e && (_ = e), this.disable(), this.enable();
    },
    disable() {
        A && ((A = !1), p.forEach((e) => e()), (p = []), h.reset());
    },
    validateKeybind(e) {
        A && this.hasBind(e) && h.unbind(e);
    },
    hasBind(e) {
        let t = T(_);
        return (e = (e = e.replace("meta", "cmd")).replace(/right |left /i, "").trim()), t.includes(e);
    },
};
