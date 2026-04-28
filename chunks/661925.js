n.d(e, { default: () => C });
var a = n(627968),
    i = n(64700),
    l = n(284009),
    r = n.n(l),
    s = n(189213),
    o = n(17928),
    c = n(192308),
    d = n(834730),
    u = n(876696),
    m = n(287809),
    k = n(985018),
    p = n(696850);
let C = function (t) {
    let { onClose: e, transitionState: l } = t,
        C = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
        [b, f] = i.useState(!1),
        g = i.useCallback(() => (e?.(), Promise.resolve()), [e]),
        h = i.useCallback(() => {
            e?.(),
                (0, c.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("28450"),
                        n.e("77598"),
                        n.e("88941"),
                        n.e("62680"),
                        n.e("85502"),
                        n.e("27323"),
                        n.e("20577"),
                        n.e("53983"),
                        n.e("76660"),
                    ]).then(n.bind(n, 121343));
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
