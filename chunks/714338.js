n.d(t, { Z: () => N }), n(47120), n(757143), n(653041);
var i = n(879443),
    r = n.n(i),
    a = n(414861),
    s = n.n(a),
    o = n(360038),
    l = n(710845),
    u = n(626135),
    c = n(358085),
    d = n(981631);
let f = {},
    _ = [],
    p = !1,
    h = s()(new (r())(window)),
    m = (0, c.isMac)() || (0, c.isMacWeb)() ? 'cmd' : 'ctrl',
    g = (0, c.isMac)() || (0, c.isMacWeb)() ? 'opt' : 'alt',
    E = (0, c.isMac)() || (0, c.isMacWeb)() ? 'return' : 'enter',
    v = [...o.u.binds, 'mod+shift+[', 'mod+shift+]', 'mod+[', 'mod+]', 'alt+[', 'alt+]', 'ctrl+shift+tab', 'ctrl+tab', 'mod+n', 'mod+t', 'mod+shift+t', 'mod+plus', 'mod+minus', 'mod+0'].map((e) => e.replace('mod', m)),
    y = () => [],
    I = [];
function T(e, t) {
    let n = (e) => t(e, e.key);
    document.addEventListener(e, n), I.push(() => document.removeEventListener(e, n));
}
function b(e) {
    let t = [];
    for (let n of Object.values(e)) null != n && t.push(...n.binds);
    return t.map((e) => e.replace('mod', m));
}
function S(e, t) {
    return (n, i) => (u.default.track(d.rMx.KEYBOARD_SHORTCUT_USED, { shortcut_name: e }), t(n, i));
}
function A(e) {
    for (let [t, n] of Object.entries(e)) {
        if (null == n) continue;
        let e = y();
        c.isPlatformEmbedded || (e = e.concat(v));
        let i = n.binds.filter((t) => ((t = t.replace('mod', m)), 0 > e.indexOf(t)));
        if (0 === i.length) continue;
        let r = n.comboKeysBindGlobal ? h.bindGlobal : h.bind;
        if ((null != n.action && r.call(h, i, S(t, n.action)), null != n.keyup && r.call(h, i, S(t, n.keyup), 'keyup'), null != n.keydown)) {
            let e = i.indexOf('any-character');
            -1 !== e && (T('keydown', n.keydown), i.splice(e, 1)), i.length > 0 && r.call(h, i, S(t, n.keydown), 'keydown');
        }
        null != n.keypress && r.call(h, i, S(t, n.keypress), 'keypress');
    }
}
(0, c.isDesktop)() && new (r())(document.documentElement).bind('backspace', (e) => e.preventDefault());
let N = {
    combokeys: h,
    modKey: m,
    altKey: g,
    returnKey: E,
    setGetKeybindList(e) {
        y = e;
    },
    checkDupes(e) {
        let t = new Set(),
            n = [];
        for (let i of b(e)) t.has(i) && n.push(i), t.add(i);
        n.length > 0 && new l.Z('Keybinds').warn('Duplicate keyboard shortcuts defined:', n);
    },
    setLayout(e) {
        f = e;
    },
    enable() {
        !p && ((p = !0), this.checkDupes(f), A(f));
    },
    enableTemp(e) {
        _.push(f), (f = e), A(e), (p = !0);
    },
    disableTemp() {
        let e = _.pop();
        null != e && (f = e), this.disable(), this.enable();
    },
    disable() {
        p && ((p = !1), I.forEach((e) => e()), (I = []), h.reset());
    },
    validateKeybind(e) {
        p && this.hasBind(e) && h.unbind(e);
    },
    hasBind(e) {
        let t = b(f);
        return (e = (e = e.replace('meta', 'cmd')).replace(/right |left /i, '').trim()), t.includes(e);
    }
};
