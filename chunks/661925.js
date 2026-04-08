n.d(e, { default: () => g });
var i = n(627968),
    l = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(158954),
    u = n(311907),
    d = n(397927),
    o = n(876696),
    c = n(287809),
    m = n(985018),
    f = n(657346);
let g = function (t) {
    let { onClose: e, transitionState: a } = t,
        g = (0, u.bG)([c.default], () => c.default.getCurrentUser()),
        [k, b] = l.useState(!1),
        C = l.useCallback(() => (e?.(), Promise.resolve()), [e]),
        x = l.useCallback(() => {
            e?.(),
                (0, d.mMO)(async () => {
                    let { default: t } = await Promise.all([n.e("89129"), n.e("97544")]).then(n.bind(n, 354096));
                    return (e) => (0, i.jsx)(t, { ...e });
                });
        }, [e]),
        p = l.useCallback(() => {
            e?.(),
                r()(null != g, "ResendEmailVerificationButton: currentUser cannot be undefined"),
                b(!0),
                (0, o.S)(g).finally(() => b(!1));
        }, [g, e]),
        h = l.useMemo(
            () =>
                g?.email == null
                    ? [{ text: m.intl.string(m.t.ydw5nX), onClick: x, variant: "primary" }]
                    : [
                          { text: m.intl.string(m.t.Vm8akB), onClick: x, variant: "secondary" },
                          { text: m.intl.string(m.t.lm1UKt), onClick: p, variant: "primary", loading: k },
                      ],
            [g, x, p, k],
        );
    return (0, i.jsxs)(s.Modal, {
        title: m.intl.string(m.t.UZLrY1),
        transitionState: a,
        onClose: C,
        actions: h,
        children: [
            (0, i.jsx)("div", { className: f.p }),
            (0, i.jsx)(d.Text, { variant: "text-md/normal", className: f.i, children: m.intl.string(m.t["0LgOKH"]) }),
        ],
    });
};
