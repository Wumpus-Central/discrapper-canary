n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(59662),
    c = n(36361),
    u = n(530171),
    d = n(175993),
    f = n(445642);
let p = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: i, useCollapsedSubtitle: p, useNotice: b } = t,
        [y, v] = l.useState(!1),
        { navTransition: g } = (0, s.t)();
    l.useEffect(() => {
        (null == g ? void 0 : g.targetAccordionKey) === t.key && v(!0);
    }, [null == g ? void 0 : g.targetAccordionKey, t.key]);
    let h = null == n ? void 0 : n(y),
        m = null == p ? void 0 : p(),
        x = null == b ? void 0 : b();
    return (0, r.jsx)("div", {
        className: o()({ [f.open]: y }),
        children: (0, r.jsx)(a.Kqy, {
            direction: "vertical",
            gap: 8,
            children: (0, r.jsxs)(u.I, {
                title: h,
                collapsedSubtitle: m,
                isOpen: y,
                setIsOpen: v,
                children: [
                    null != x && (0, r.jsx)(d.Z, { notice: x }),
                    i.map((e) => (0, r.jsx)(c.Z, { node: e }, e.key)),
                ],
            }),
        }),
    });
});
