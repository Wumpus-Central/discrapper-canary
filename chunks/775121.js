n.d(t, {
    A: () => I,
}),
    n(896048),
    n(747238),
    n(812715),
    n(321073),
    n(733351);
var r = n(507392),
    i = n.n(r),
    a = n(64460),
    s = n(626584),
    o = n(549205),
    l = n(954571),
    c = n(723702),
    u = n(652215);
let d = {},
    f = [],
    p = !1,
    _ = (0, o.I)(window),
    h = (0, c.isMac)() || (0, c.isMacWeb)() ? "cmd" : "ctrl",
    m = (0, c.isMac)() || (0, c.isMacWeb)() ? "opt" : "alt",
    g = (0, c.isMac)() || (0, c.isMacWeb)() ? "return" : "enter",
    E = [
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
    ].map((e) => e.replace("mod", h)),
    b = () => [],
    y = [];

function O(e, t) {
    let n = (e) => t(e, e.key);
    document.addEventListener(e, n), y.push(() => document.removeEventListener(e, n));
}

function A(e) {
    let t = [];
    for (let n of Object.values(e)) null != n && t.push(...n.binds);
    return t.map((e) => e.replace("mod", h));
}

function v(e, t) {
    return (n, r) => (
        l.default.track(u.HAw.KEYBOARD_SHORTCUT_USED, {
            shortcut_name: e,
            shortcut_combo: r,
        }),
        t(n, r)
    );
}

function S(e) {
    for (let [t, n] of Object.entries(e)) {
        if (null == n) continue;
        let e = b();
        c.isPlatformEmbedded || (e = e.concat(E));
        let r = n.binds.filter((t) => ((t = t.replace("mod", h)), 0 > e.indexOf(t)));
        if (0 === r.length) continue;
        let i = n.comboKeysBindGlobal ? _.bindGlobal : _.bind;
        if (
            (null != n.action && i.call(_, r, v(t, n.action)),
            null != n.keyup && i.call(_, r, v(t, n.keyup), "keyup"),
            null != n.keydown)
        ) {
            let e = r.indexOf("any-character");
            -1 !== e && (O("keydown", n.keydown), r.splice(e, 1)),
                r.length > 0 && i.call(_, r, v(t, n.keydown), "keydown");
        }
        null != n.keypress && i.call(_, r, v(t, n.keypress), "keypress");
    }
}
(0, c.isDesktop)() && new (i())(document.documentElement).bind("backspace", (e) => e.preventDefault());
let I = {
    combokeys: _,
    modKey: h,
    altKey: m,
    returnKey: g,
    setGetKeybindList(e) {
        b = e;
    },
    checkDupes(e) {
        let t = new Set(),
            n = [];
        for (let r of A(e)) t.has(r) && n.push(r), t.add(r);
        n.length > 0 && new s.A("Keybinds").warn("Duplicate keyboard shortcuts defined:", n);
    },
    setLayout(e) {
        d = e;
    },
    enable() {
        p || ((p = !0), this.checkDupes(d), S(d));
    },
    enableTemp(e) {
        f.push(d), (d = e), S(e), (p = !0);
    },
    disableTemp() {
        let e = f.pop();
        null != e && (d = e), this.disable(), this.enable();
    },
    disable() {
        p && ((p = !1), y.forEach((e) => e()), (y = []), _.reset());
    },
    validateKeybind(e) {
        p && this.hasBind(e) && _.unbind(e);
    },
    hasBind(e) {
        let t = A(d);
        return (e = (e = e.replace("meta", "cmd")).replace(/right |left /i, "").trim()), t.includes(e);
    },
};
