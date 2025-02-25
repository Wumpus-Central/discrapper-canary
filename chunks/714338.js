n.d(t, { Z: () => T }), n(47120), n(757143), n(301563), n(653041), n(566702);
var r = n(879443),
    i = n.n(r),
    o = n(360038),
    a = n(710845),
    s = n(280049),
    l = n(626135),
    c = n(358085),
    u = n(981631);
let d = {},
    f = [],
    p = !1,
    _ = (0, s.r)(window),
    h = (0, c.isMac)() || (0, c.isMacWeb)() ? 'cmd' : 'ctrl',
    m = (0, c.isMac)() || (0, c.isMacWeb)() ? 'opt' : 'alt',
    g = (0, c.isMac)() || (0, c.isMacWeb)() ? 'return' : 'enter',
    E = [...o.u.binds, 'mod+shift+[', 'mod+shift+]', 'mod+[', 'mod+]', 'alt+[', 'alt+]', 'ctrl+shift+tab', 'ctrl+tab', 'mod+n', 'mod+t', 'mod+shift+t', 'mod+plus', 'mod+minus', 'mod+0'].map((e) => e.replace('mod', h)),
    v = () => [],
    b = [];
function y(e, t) {
    let n = (e) => t(e, e.key);
    document.addEventListener(e, n), b.push(() => document.removeEventListener(e, n));
}
function O(e) {
    let t = [];
    for (let n of Object.values(e)) null != n && t.push(...n.binds);
    return t.map((e) => e.replace('mod', h));
}
function S(e, t) {
    return (n, r) => (l.default.track(u.rMx.KEYBOARD_SHORTCUT_USED, { shortcut_name: e }), t(n, r));
}
function I(e) {
    for (let [t, n] of Object.entries(e)) {
        if (null == n) continue;
        let e = v();
        c.isPlatformEmbedded || (e = e.concat(E));
        let r = n.binds.filter((t) => ((t = t.replace('mod', h)), 0 > e.indexOf(t)));
        if (0 === r.length) continue;
        let i = n.comboKeysBindGlobal ? _.bindGlobal : _.bind;
        if ((null != n.action && i.call(_, r, S(t, n.action)), null != n.keyup && i.call(_, r, S(t, n.keyup), 'keyup'), null != n.keydown)) {
            let e = r.indexOf('any-character');
            -1 !== e && (y('keydown', n.keydown), r.splice(e, 1)), r.length > 0 && i.call(_, r, S(t, n.keydown), 'keydown');
        }
        null != n.keypress && i.call(_, r, S(t, n.keypress), 'keypress');
    }
}
(0, c.isDesktop)() && new (i())(document.documentElement).bind('backspace', (e) => e.preventDefault());
let T = {
    combokeys: _,
    modKey: h,
    altKey: m,
    returnKey: g,
    setGetKeybindList(e) {
        v = e;
    },
    checkDupes(e) {
        let t = new Set(),
            n = [];
        for (let r of O(e)) t.has(r) && n.push(r), t.add(r);
        n.length > 0 && new a.Z('Keybinds').warn('Duplicate keyboard shortcuts defined:', n);
    },
    setLayout(e) {
        d = e;
    },
    enable() {
        !p && ((p = !0), this.checkDupes(d), I(d));
    },
    enableTemp(e) {
        f.push(d), (d = e), I(e), (p = !0);
    },
    disableTemp() {
        let e = f.pop();
        null != e && (d = e), this.disable(), this.enable();
    },
    disable() {
        p && ((p = !1), b.forEach((e) => e()), (b = []), _.reset());
    },
    validateKeybind(e) {
        p && this.hasBind(e) && _.unbind(e);
    },
    hasBind(e) {
        let t = O(d);
        return (e = (e = e.replace('meta', 'cmd')).replace(/right |left /i, '').trim()), t.includes(e);
    }
};
