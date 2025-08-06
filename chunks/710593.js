(n.d(t, {
    M: () => f,
    c: () => d
}),
    n(35282));
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(358085),
    s = n(388032),
    l = n(890797);
function c(e) {
    let { direction: t = 'up' } = e;
    return (0, r.jsx)('svg', {
        width: '10',
        height: '10',
        xmlns: 'http://www.w3.org/2000/svg',
        className: o()(l.bindArrow, l[t]),
        children: (0, r.jsx)('g', {
            fill: '#FFFFFF',
            children: (0, r.jsx)('polygon', {
                transform: 'translate(5.025000, 5.000000) scale(1, -1) translate(-5.025000, -5.000000) ',
                points: '4.16666667 10 4.16666672 3.33333333 1.25 6.25 0.05 5 5.00000005 0 9.99999967 5 8.75 6.25 5.83333338 3.33333333 5.83333333 10'
            })
        })
    });
}
function u(e) {
    let { children: t, text: n, macText: i, label: o, macLabel: s } = e,
        c = (0, a.isMac)() || (0, a.isMacWeb)(),
        u = c && null != i ? l.systemFont : void 0,
        d = c && null != s ? s : o,
        f = c && null != i ? i : null != t ? t : n;
    return (0, r.jsx)('span', {
        className: u,
        role: null != d ? 'img' : void 0,
        'aria-label': null != d ? d : void 0,
        children: f
    });
}
let d = {
    ctrl: () =>
        (0, r.jsx)(u, {
            macText: '\u2303',
            text: 'ctrl',
            label: s.intl.string(s.t.jm6v8v)
        }),
    cmd: () =>
        (0, r.jsx)(u, {
            macText: '\u2318',
            text: 'cmd',
            label: s.intl.string(s.t.pYkiQk)
        }),
    mod: () =>
        (0, r.jsx)(u, {
            macText: '\u2318',
            text: 'ctrl',
            label: s.intl.string(s.t.jm6v8v),
            macLabel: s.intl.string(s.t.pYkiQk)
        }),
    alt: () =>
        (0, r.jsx)(u, {
            macText: '\u2325',
            text: 'alt',
            label: s.intl.string(s.t.R2n7d3),
            macLabel: s.intl.string(s.t.FMYSJS)
        }),
    shift: () =>
        (0, r.jsx)(u, {
            macText: '\u21E7',
            text: s.intl.string(s.t['L+jWo6']),
            label: s.intl.string(s.t['q+/2+f'])
        }),
    up: () =>
        (0, r.jsx)(u, {
            label: s.intl.string(s.t.HxzHDQ),
            children: (0, r.jsx)(c, { direction: 'up' })
        }),
    down: () =>
        (0, r.jsx)(u, {
            label: s.intl.string(s.t['a+iRlJ']),
            children: (0, r.jsx)(c, { direction: 'down' })
        }),
    left: () =>
        (0, r.jsx)(u, {
            label: s.intl.string(s.t.xFjIVF),
            children: (0, r.jsx)(c, { direction: 'left' })
        }),
    right: () =>
        (0, r.jsx)(u, {
            label: s.intl.string(s.t.BT3jf3),
            children: (0, r.jsx)(c, { direction: 'right' })
        }),
    pageup: () => s.intl.string(s.t.VdCWGB),
    pagedown: () => s.intl.string(s.t.gpSh3d),
    'any-character': () => s.intl.string(s.t.CkGpcX),
    plus: () => '+',
    return: () =>
        (0, r.jsx)(u, {
            macText: '\u23CE',
            text: s.intl.string(s.t.SUweGx),
            label: s.intl.string(s.t.yLNalZ),
            macLabel: s.intl.string(s.t.V7nPj4)
        }),
    enter: () =>
        (0, r.jsx)(u, {
            macText: '\u23CE',
            text: s.intl.string(s.t.SUweGx),
            label: s.intl.string(s.t.yLNalZ),
            macLabel: s.intl.string(s.t.V7nPj4)
        }),
    escape: () =>
        (0, r.jsx)(u, {
            macText: '\u238B',
            text: s.intl.string(s.t.cQmsQE),
            label: s.intl.string(s.t['2qsw5+'])
        }),
    esc: () =>
        (0, r.jsx)(u, {
            macText: '\u238B',
            text: s.intl.string(s.t.cQmsQE),
            label: s.intl.string(s.t['2qsw5+'])
        }),
    backspace: () =>
        (0, r.jsx)(u, {
            macText: '\u232B',
            text: s.intl.string(s.t['L+36+v']),
            label: s.intl.string(s.t['9c/Ikp']),
            macLabel: s.intl.string(s.t.BTFDmp)
        })
};
function f(e) {
    let { shortcut: t, dim: n = !1, className: i, keyClassName: a } = e,
        s = Array.isArray(t) ? t : t.split('+');
    return (0, r.jsx)('div', {
        className: o()(l.combo, i, { [l.dim]: n }),
        children: s
            .map((e) => (null != d[e] ? d[e]() : e))
            .map((e, t) =>
                (0, r.jsx)(
                    'span',
                    {
                        className: o()(l.key, a),
                        children: e
                    },
                    t
                )
            )
    });
}
