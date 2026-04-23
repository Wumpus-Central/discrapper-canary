n.d(e, { default: () => k });
var i = n(627968),
    a = n(64700),
    l = n(284009),
    r = n.n(l),
    s = n(189213),
    d = n(17928),
    o = n(192308),
    u = n(834730),
    c = n(876696),
    m = n(287809),
    f = n(985018),
    g = n(696850);
let k = function (t) {
    let { onClose: e, transitionState: l } = t,
        k = (0, d.bG)([m.default], () => m.default.getCurrentUser()),
        [b, p] = a.useState(!1),
        C = a.useCallback(() => (e?.(), Promise.resolve()), [e]),
        x = a.useCallback(() => {
            e?.(),
                (0, o.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([n.e("76660"), n.e("10692")]).then(n.bind(n, 121343));
                    return (e) => (0, i.jsx)(t, { ...e });
                });
        }, [e]),
        h = a.useCallback(() => {
            e?.(),
                r()(null != k, "ResendEmailVerificationButton: currentUser cannot be undefined"),
                p(!0),
                (0, c.S)(k).finally(() => p(!1));
        }, [k, e]),
        v = a.useMemo(
            () =>
                k?.email == null
                    ? [{ text: f.intl.string(f.t.ydw5nX), onClick: x, variant: "primary" }]
                    : [
                          { text: f.intl.string(f.t.Vm8akB), onClick: x, variant: "secondary" },
                          { text: f.intl.string(f.t.lm1UKt), onClick: h, variant: "primary", loading: b },
                      ],
            [k, x, h, b],
        );
    return (0, i.jsxs)(s.Modal, {
        title: f.intl.string(f.t.UZLrY1),
        transitionState: l,
        onClose: C,
        actions: v,
        children: [
            (0, i.jsx)("div", { className: g.p }),
            (0, i.jsx)(u.E, { variant: "text-md/normal", className: g.i, children: f.intl.string(f.t["0LgOKH"]) }),
        ],
    });
};
