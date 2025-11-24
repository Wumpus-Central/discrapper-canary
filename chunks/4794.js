n.d(t, { Z: () => u }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(481060),
    o = n(59662),
    a = n(36361),
    s = n(530171),
    c = n(175993);
let u = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: u, useCollapsedSubtitle: d, useNotice: f } = t,
        [b, y] = l.useState(!1),
        { navTransition: p } = (0, o.t)();
    l.useEffect(() => {
        (null == p ? void 0 : p.targetAccordionKey) === t.key && y(!0);
    }, [null == p ? void 0 : p.targetAccordionKey, t.key]);
    let v = null == n ? void 0 : n(b),
        j = null == d ? void 0 : d(),
        g = null == f ? void 0 : f();
    return (0, r.jsx)(i.Kqy, {
        direction: "vertical",
        gap: 8,
        children: (0, r.jsxs)(s.I, {
            title: v,
            collapsedSubtitle: j,
            isOpen: b,
            setIsOpen: y,
            children: [null != g && (0, r.jsx)(c.Z, { notice: g }), u.map((e) => (0, r.jsx)(a.Z, { node: e }, e.key))],
        }),
    });
});
