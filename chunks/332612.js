n.d(t, { L: () => T });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(803306),
    o = n(966327),
    d = n(688810);
n(936388), n(714763);
var c = n(814278),
    u = n(699978);
n(818143);
var _ = n(657331),
    m = n(287809),
    g = n(427262),
    A = n(985018),
    h = n(32086);
function x(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: u } = (0, d.Ay)(),
        x = (0, l.bG)([m.default], () => m.default.getUser(t)),
        p = g.Ay.getFormattedName(x),
        T = s.useCallback(() => {
            (0, c.kj)(t);
        }, [t]),
        E = s.useCallback(() => (0, _.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: u }), [t, u]);
    return (
        s.useEffect(() => {
            (0, a.wz)(t);
        }, [t]),
        (0, i.jsxs)("div", {
            className: h.uW,
            children: [
                null != x && (0, i.jsx)(o.A, { className: h.my, user: x, size: r._3J.SIZE_40 }),
                (0, i.jsxs)("div", {
                    className: h.Qq,
                    children: [
                        (0, i.jsx)(r.DUT, {
                            className: h.Xh,
                            onClick: E,
                            children: (0, i.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: p,
                            }),
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: A.intl.format(A.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, i.jsx)(r.DUT, { onClick: T, className: h.Qz, children: (0, i.jsx)(r.ucK, { size: "xs" }) }),
            ],
        })
    );
}
function p(e) {
    let { className: t, userId: n, verification: l, index: a } = e,
        o = (0, c.tC)(l.timestamp),
        d = s.useCallback(() => {
            (0, c.W0)(n, l.verifiedKey);
        }, [l.verifiedKey, n]);
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsxs)("div", {
                className: h.Qq,
                children: [
                    (0, i.jsx)(r.Text, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: A.intl.format(A.t.N4qBBO, { index: a + 1 }),
                    }),
                    (0, i.jsx)(r.Text, { variant: "text-sm/medium", color: "text-default", children: o }),
                ],
            }),
            (0, i.jsx)(r.DUT, {
                className: h.Kk,
                onClick: d,
                children: (0, i.jsx)(r.PGe, { size: "md", color: r.LU0.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function T(e) {
    let { userId: t } = e,
        n = (0, u.k)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x, { userId: t, count: n.length }),
            n.map((e, l) =>
                (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(p, { className: h.nM, userId: t, index: l, verification: e }),
                            l !== n.length - 1 && (0, i.jsx)("div", { className: h.yF }),
                        ],
                    },
                    `${l}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
n(473169);
