n.d(t, { Z: () => u }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(59662),
    i = n(36361),
    a = n(530171),
    c = n(175993),
    s = n(445642);
let u = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: u, useSubtitle: d, notice: f } = t,
        [b, p] = l.useState(!1),
        { navTransition: y } = (0, o.t)();
    l.useEffect(() => {
        (null == y ? void 0 : y.targetAccordionKey) === t.key && p(!0);
    }, [null == y ? void 0 : y.targetAccordionKey, t.key]);
    let j = null == n ? void 0 : n(b),
        m = null == d ? void 0 : d();
    return (0, r.jsx)("div", {
        className: s.accordion,
        children: (0, r.jsxs)(a.I, {
            title: j,
            subtitle: m,
            isOpen: b,
            setIsOpen: p,
            children: [
                null != f &&
                    (0, r.jsx)("div", {
                        className: s.notice,
                        children: (0, r.jsx)(c.Z, { notice: f }),
                    }),
                u.map((e) => (0, r.jsx)(i.Z, { node: e }, e.key)),
            ],
        }),
    });
});
