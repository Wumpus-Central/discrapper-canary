n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(397927),
    o = n(985018),
    c = n(997021);
let d = s.createContext({ isOpen: !1, toggleOpen: () => {} });
function u(e) {
    let { children: t } = e,
        [n, r] = s.useReducer((e) => !e, !1),
        a = s.useMemo(() => ({ isOpen: n, toggleOpen: r }), [n]);
    return (0, i.jsx)(d.Provider, { value: a, children: t(n) });
}
u.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: r, toggleOpen: u } = s.useContext(d),
        _ = r ? l.tN5 : l.abt,
        m = null != n ? n : r ? o.intl.string(o.t.fgq1gs) : o.intl.string(o.t.XJuakA);
    return (0, i.jsxs)(l.DUT, {
        className: a()(c.L, t),
        onClick: u,
        children: [
            (0, i.jsx)(l.Text, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: m }),
            (0, i.jsx)(_, { size: "sm", color: "currentColor" }),
        ],
    });
};
