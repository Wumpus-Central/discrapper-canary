n.d(t, { Z: () => s }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(59662),
    i = n(36361),
    a = n(530171),
    c = n(445642);
let s = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: s, useSubtitle: u } = t,
        [d, f] = l.useState(!1),
        { navTransition: b } = (0, o.t)();
    l.useEffect(() => {
        (null == b ? void 0 : b.targetAccordionKey) === t.key && f(!0);
    }, [null == b ? void 0 : b.targetAccordionKey, t.key]);
    let p = null == n ? void 0 : n(d),
        y = null == u ? void 0 : u();
    return (0, r.jsx)("div", {
        className: c.accordion,
        children: (0, r.jsx)(a.I, {
            title: p,
            subtitle: y,
            isOpen: d,
            setIsOpen: f,
            children: s.map((e) => (0, r.jsx)(i.Z, { node: e }, e.key)),
        }),
    });
});
