n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(900797),
    o = n(847374),
    d = n(939249),
    u = n(834730),
    c = n(985018),
    g = n(5502);
let m = s.createContext({ isOpen: !1, toggleOpen: () => {} });
function _(e) {
    let { children: t } = e,
        [n, l] = s.useReducer((e) => !e, !1),
        a = s.useMemo(() => ({ isOpen: n, toggleOpen: l }), [n]);
    return (0, i.jsx)(m.Provider, { value: a, children: t(n) });
}
_.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: l, toggleOpen: _ } = s.useContext(m),
        A = l ? r.t : o.a,
        h = null != n ? n : l ? c.intl.string(c.t.fgq1gs) : c.intl.string(c.t.XJuakA);
    return (0, i.jsxs)(d.D, {
        className: a()(g.L, t),
        onClick: _,
        children: [
            (0, i.jsx)(u.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: h }),
            (0, i.jsx)(A, { size: "sm", color: "currentColor" }),
        ],
    });
};
