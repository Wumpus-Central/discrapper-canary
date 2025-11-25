n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(59662),
    s = n(36361),
    c = n(530171),
    u = n(175993),
    d = n(445642);
let f = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: i, useCollapsedSubtitle: f, useNotice: p } = t,
        [b, y] = l.useState(!1),
        { navTransition: g } = (0, a.t)();
    l.useEffect(() => {
        (null == g ? void 0 : g.targetAccordionKey) === t.key && y(!0);
    }, [null == g ? void 0 : g.targetAccordionKey, t.key]);
    let v = null == n ? void 0 : n(b),
        h = null == f ? void 0 : f(),
        m = null == p ? void 0 : p();
    return (0, r.jsx)("div", {
        className: o()({ [d.open]: b }),
        children: (0, r.jsxs)(c.I, {
            title: v,
            collapsedSubtitle: h,
            isOpen: b,
            setIsOpen: y,
            children: [null != m && (0, r.jsx)(u.Z, { notice: m }), i.map((e) => (0, r.jsx)(s.Z, { node: e }, e.key))],
        }),
    });
});
