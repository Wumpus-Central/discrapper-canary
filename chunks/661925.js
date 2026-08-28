n.d(e, { default: () => C });
var a = n(477900),
    i = n(582128),
    l = n(284009),
    r = n.n(l),
    s = n(189213),
    o = n(17928),
    c = n(192308),
    d = n(834730),
    u = n(940856),
    m = n(287809),
    k = n(375708),
    p = n(446244);
let C = function (t) {
    let { onClose: e, transitionState: l } = t,
        C = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
        [b, f] = i.useState(!1),
        g = i.useCallback(() => (e?.(), Promise.resolve()), [e]),
        h = i.useCallback(() => {
            e?.(),
                (0, c.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("279385"),
                        n.e("722514"),
                        n.e("454048"),
                        n.e("188941"),
                        n.e("349619"),
                        n.e("932606"),
                        n.e("627323"),
                        n.e("420577"),
                        n.e("647999"),
                        n.e("465861"),
                    ]).then(n.bind(n, 97060));
                    return (e) => (0, a.jsx)(t, { ...e });
                });
        }, [e]),
        x = i.useCallback(() => {
            e?.(),
                r()(null != C, "ResendEmailVerificationButton: currentUser cannot be undefined"),
                f(!0),
                (0, u.S)(C).finally(() => f(!1));
        }, [C, e]),
        v = i.useMemo(
            () =>
                C?.email == null
                    ? [{ text: k.intl.string(k.t.ydw5nX), onClick: h, variant: "primary" }]
                    : [
                          { text: k.intl.string(k.t.Vm8akB), onClick: h, variant: "secondary" },
                          { text: k.intl.string(k.t.lm1UKt), onClick: x, variant: "primary", loading: b },
                      ],
            [C, h, x, b],
        );
    return (0, a.jsxs)(s.Modal, {
        title: k.intl.string(k.t.UZLrY1),
        transitionState: l,
        onClose: g,
        actions: v,
        children: [
            (0, a.jsx)("div", { className: p.p }),
            (0, a.jsx)(d.E, { variant: "text-md/normal", className: p.i, children: k.intl.string(k.t["0LgOKH"]) }),
        ],
    });
};
