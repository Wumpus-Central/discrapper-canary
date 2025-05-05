n.d(t, { s: () => h });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(1561),
    l = n(993365),
    c = n(964423);
function u(e) {
    switch (e) {
        case 'tab':
        default:
            return c.tabContainer;
        case 'pill':
            return c.pillContainer;
    }
}
function d(e) {
    switch (e) {
        case 'tab':
        default:
            return c.tabItem;
        case 'pill':
            return c.pillItem;
    }
}
function f(e) {
    switch (e) {
        case 'tab':
        default:
            return c.tabItemSelected;
        case 'pill':
            return c.pillItemSelected;
    }
}
function _(e) {
    return 'pill' === e ? c.pillItemText : void 0;
}
function p(e) {
    let { option: t, selected: n, onClick: a, look: u, className: p } = e,
        h = i.useCallback((e) => a(t, e), [a, t]);
    return (0, r.jsx)(s.P, {
        className: o()(d(u), p, { [f(u)]: n }),
        onClick: h,
        children: (0, r.jsxs)(l.x, {
            className: o()(c.controlText, _(u)),
            variant: 'text-sm/medium',
            color: 'none',
            children: [null != t.icon ? (0, r.jsx)(t.icon, { className: c.icon }) : null, t.name]
        })
    });
}
function h(e) {
    let { options: t, value: n, onChange: a, look: s = 'tab', className: l, optionClassName: c } = e,
        d = i.useCallback(
            (e) => {
                var t;
                let i = n === e.value;
                return (0, r.jsx)(
                    p,
                    {
                        selected: i,
                        option: e,
                        look: s,
                        onClick: a,
                        className: c
                    },
                    null != (t = e.key) ? t : String(e.value)
                );
            },
            [n, s, a, c]
        );
    return (0, r.jsx)('div', {
        className: o()(u(s), l),
        children: t.map(d)
    });
}
