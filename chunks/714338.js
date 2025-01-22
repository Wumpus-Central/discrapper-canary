var i = r(47120);
var a = r(757143);
var o = r(653041);
var s = r(879443),
    l = r.n(s),
    u = r(414861),
    c = r.n(u),
    d = r(360038),
    f = r(710845),
    p = r(626135),
    h = r(358085),
    _ = r(981631);
let m = {},
    g = [],
    E = !1,
    v = c()(new (l())(window)),
    y = (0, h.isMac)() || (0, h.isMacWeb)() ? 'cmd' : 'ctrl',
    b = (0, h.isMac)() || (0, h.isMacWeb)() ? 'opt' : 'alt',
    I = (0, h.isMac)() || (0, h.isMacWeb)() ? 'return' : 'enter',
    T = [...d.u.binds, 'mod+shift+[', 'mod+shift+]', 'mod+[', 'mod+]', 'alt+[', 'alt+]', 'ctrl+shift+tab', 'ctrl+tab', 'mod+n', 'mod+t', 'mod+shift+t', 'mod+plus', 'mod+minus', 'mod+0'].map((e) => e.replace('mod', y)),
    S = () => [],
    A = [];
function C(e, n) {
    let r = (e) => n(e, e.key);
    document.addEventListener(e, r), A.push(() => document.removeEventListener(e, r));
}
function N(e) {
    let n = [];
    for (let r of Object.values(e)) null != r && n.push(...r.binds);
    return n.map((e) => e.replace('mod', y));
}
function R(e, n) {
    return (r, i) => (p.default.track(_.rMx.KEYBOARD_SHORTCUT_USED, { shortcut_name: e }), n(r, i));
}
function O(e) {
    for (let [n, r] of Object.entries(e)) {
        if (null == r) continue;
        let e = S();
        !h.isPlatformEmbedded && (e = e.concat(T));
        let i = r.binds.filter((n) => ((n = n.replace('mod', y)), 0 > e.indexOf(n)));
        if (0 === i.length) continue;
        let a = r.comboKeysBindGlobal ? v.bindGlobal : v.bind;
        if ((null != r.action && a.call(v, i, R(n, r.action)), null != r.keyup && a.call(v, i, R(n, r.keyup), 'keyup'), null != r.keydown)) {
            let e = i.indexOf('any-character');
            -1 !== e && (C('keydown', r.keydown), i.splice(e, 1)), i.length > 0 && a.call(v, i, R(n, r.keydown), 'keydown');
        }
        null != r.keypress && a.call(v, i, R(n, r.keypress), 'keypress');
    }
}
(0, h.isDesktop)() && new (l())(document.documentElement).bind('backspace', (e) => e.preventDefault()),
    (n.Z = {
        combokeys: v,
        modKey: y,
        altKey: b,
        returnKey: I,
        setGetKeybindList(e) {
            S = e;
        },
        checkDupes(e) {
            let n = new Set(),
                r = [];
            for (let i of N(e)) n.has(i) && r.push(i), n.add(i);
            r.length > 0 && new f.Z('Keybinds').warn('Duplicate keyboard shortcuts defined:', r);
        },
        setLayout(e) {
            m = e;
        },
        enable() {
            if (!E) (E = !0), this.checkDupes(m), O(m);
        },
        enableTemp(e) {
            g.push(m), (m = e), O(e), (E = !0);
        },
        disableTemp() {
            let e = g.pop();
            null != e && (m = e), this.disable(), this.enable();
        },
        disable() {
            if (!!E) (E = !1), A.forEach((e) => e()), (A = []), v.reset();
        },
        validateKeybind(e) {
            if (!!E && !!this.hasBind(e)) v.unbind(e);
        },
        hasBind(e) {
            let n = N(m);
            return (e = (e = e.replace('meta', 'cmd')).replace(/right |left /i, '').trim()), n.includes(e);
        }
    });
