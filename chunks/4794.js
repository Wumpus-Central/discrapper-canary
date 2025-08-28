n.d(t, { Z: () => u }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(59662),
    o = n(36361),
    s = n(530171),
    a = n(445642);
let u = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: u, useSubtitle: c } = t,
        [d, g] = l.useState(!1),
        { navTransition: f } = (0, i.t)();
    l.useEffect(() => {
        var e;
        (null == f || null == (e = f.targetAccordion) ? void 0 : e.key) === t.key && g(!0);
    }, [null == f ? void 0 : f.targetAccordion, t.key]);
    let y = null == n ? void 0 : n(d),
        v = null == c ? void 0 : c();
    return (0, r.jsx)("div", {
        className: a.accordion,
        children: (0, r.jsx)(s.I, {
            title: y,
            subtitle: v,
            isOpen: d,
            setIsOpen: g,
            children: u.map((e) => (0, r.jsx)(o.Z, { node: e }, e.key)),
        }),
    });
});
