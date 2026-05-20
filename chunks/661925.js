n.d(t, { default: () => C });
var a = n(627968),
    i = n(64700),
    l = n(284009),
    r = n.n(l),
    s = n(189213),
    o = n(17928),
    c = n(192308),
    d = n(834730),
    u = n(940856),
    m = n(287809),
    k = n(375708),
    p = n(696850);
let C = function (e) {
    let { onClose: t, transitionState: l } = e,
        C = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
        [b, f] = i.useState(!1),
        g = i.useCallback(() => (t?.(), Promise.resolve()), [t]),
        h = i.useCallback(() => {
            t?.(),
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("97570"),
                        n.e("8516"),
                        n.e("88941"),
                        n.e("62680"),
                        n.e("41043"),
                        n.e("18441"),
                        n.e("32606"),
                        n.e("27323"),
                        n.e("20577"),
                        n.e("47999"),
                        n.e("65861"),
                    ]).then(n.bind(n, 97060));
                    return (t) => (0, a.jsx)(e, { ...t });
                });
        }, [t]),
        x = i.useCallback(() => {
            t?.(),
                r()(null != C, "ResendEmailVerificationButton: currentUser cannot be undefined"),
                f(!0),
                (0, u.S)(C).finally(() => f(!1));
        }, [C, t]),
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
