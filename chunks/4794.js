n.d(t, { Z: () => u }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(59662),
    o = n(36361),
    a = n(530171),
    c = n(175993),
    s = n(475528);
let u = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: u, useSubtitle: d, useNotice: f } = t,
        [b, p] = l.useState(!1),
        { navTransition: y } = (0, i.t)();
    l.useEffect(() => {
        (null == y ? void 0 : y.targetAccordionKey) === t.key && p(!0);
    }, [null == y ? void 0 : y.targetAccordionKey, t.key]);
    let j = null == n ? void 0 : n(b),
        m = null == d ? void 0 : d(),
        v = null == f ? void 0 : f();
    return (0, r.jsx)("div", {
        className: s.accordion,
        children: (0, r.jsxs)(a.I, {
            title: j,
            subtitle: m,
            isOpen: b,
            setIsOpen: p,
            children: [
                null != v &&
                    (0, r.jsx)("div", {
                        className: s.notice,
                        children: (0, r.jsx)(c.Z, { notice: v }),
                    }),
                u.map((e) => (0, r.jsx)(o.Z, { node: e }, e.key)),
            ],
        }),
    });
});
