n.d(t, { Z: () => c }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(59662),
    i = n(36361),
    a = n(530171),
    s = n(445642);
let c = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: c, useSubtitle: u } = t,
        [d, f] = l.useState(!1),
        { navTransition: m } = (0, o.t)();
    l.useEffect(() => {
        var e;
        (null == m || null == (e = m.targetAccordion) ? void 0 : e.key) === t.key && f(!0);
    }, [null == m ? void 0 : m.targetAccordion, t.key]);
    let b = null == n ? void 0 : n(d),
        j = null == u ? void 0 : u();
    return (0, r.jsx)("div", {
        className: s.accordion,
        children: (0, r.jsx)(a.I, {
            title: b,
            subtitle: j,
            isOpen: d,
            setIsOpen: f,
            children: c.map((e) => (0, r.jsx)(i.Z, { node: e }, e.key)),
        }),
    });
});
