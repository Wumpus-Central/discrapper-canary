n.d(t, { default: () => C });
var a = n(477900),
    i = n(582128),
    l = n(284009),
    r = n.n(l),
    s = n(17928),
    o = n(189213),
    c = n(192308),
    d = n(834730),
    u = n(940856),
    m = n(287809),
    k = n(105292),
    p = n(446244);
let C = function (e) {
    let { onClose: t, transitionState: l } = e,
        C = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        [b, f] = i.useState(!1),
        g = i.useCallback(() => (t?.(), Promise.resolve()), [t]),
        h = i.useCallback(() => {
            (t?.(),
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("279385"),
                        n.e("144909"),
                        n.e("454048"),
                        n.e("188941"),
                        n.e("349619"),
                        n.e("932606"),
                        n.e("627323"),
                        n.e("420577"),
                        n.e("647999"),
                        n.e("465861"),
                    ]).then(n.bind(n, 97060));
                    return (t) => (0, a.jsx)(e, { ...t });
                }));
        }, [t]),
        y = i.useCallback(() => {
            (t?.(),
                r()(null != C, "ResendEmailVerificationButton: currentUser cannot be undefined"),
                f(!0),
                (0, u.S)(C).finally(() => f(!1)));
        }, [C, t]),
        v = i.useMemo(
            () =>
                C?.email == null
                    ? [{ text: k.intl.string(k.t.ydw5nX), onClick: h, variant: "primary" }]
                    : [
                          { text: k.intl.string(k.t.Vm8akB), onClick: h, variant: "secondary" },
                          { text: k.intl.string(k.t.lm1UKt), onClick: y, variant: "primary", loading: b },
                      ],
            [C, h, y, b],
        );
    return (0, a.jsxs)(o.a, {
        title: k.intl.string(k.t.UZLrY1),
        transitionState: l,
        onClose: g,
        actions: v,
        children: [
            (0, a.jsx)("div", { className: p.p }),
            (0, a.jsx)(d.E, { variant: "body-md/normal", className: p.i, children: k.intl.string(k.t["0LgOKH"]) }),
        ],
    });
};
