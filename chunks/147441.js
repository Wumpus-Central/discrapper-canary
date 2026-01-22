n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(985018),
    c = n(997021);
let u = i.createContext({
    isOpen: !1,
    toggleOpen: () => {},
});

function d(e) {
    let { children: t } = e,
        [n, a] = i.useReducer((e) => !e, !1),
        s = i.useMemo(
            () => ({
                isOpen: n,
                toggleOpen: a,
            }),
            [n],
        );
    return (0, r.jsx)(u.Provider, {
        value: s,
        children: t(n),
    });
}
d.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: a, toggleOpen: d } = i.useContext(u),
        f = a ? o.tN5 : o.abt,
        p = null != n ? n : a ? l.intl.string(l.t.fgq1gs) : l.intl.string(l.t.XJuakA);
    return (0, r.jsxs)(o.DUT, {
        className: s()(c.L, t),
        onClick: d,
        children: [
            (0, r.jsx)(o.Text, {
                variant: "heading-sm/semibold",
                tag: "div",
                color: "currentColor",
                children: p,
            }),
            (0, r.jsx)(f, {
                size: "sm",
                color: "currentColor",
            }),
        ],
    });
};
