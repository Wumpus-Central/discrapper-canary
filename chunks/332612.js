n.d(t, { L: () => C });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    a = n(397927),
    l = n(803306),
    o = n(966327),
    c = n(688810);
n(936388), n(714763);
var d = n(814278),
    u = n(699978);
n(818143);
var _ = n(657331),
    m = n(287809),
    A = n(427262),
    g = n(985018),
    E = n(32086);
function h(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: u } = (0, c.Ay)(),
        h = (0, r.bG)([m.default], () => m.default.getUser(t)),
        p = A.Ay.getFormattedName(h),
        C = s.useCallback(() => {
            (0, d.kj)(t);
        }, [t]),
        x = s.useCallback(() => (0, _.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: u }), [t, u]);
    return (
        s.useEffect(() => {
            (0, l.wz)(t);
        }, [t]),
        (0, i.jsxs)("div", {
            className: E.uW,
            children: [
                null != h && (0, i.jsx)(o.A, { className: E.my, user: h, size: a._3J.SIZE_40 }),
                (0, i.jsxs)("div", {
                    className: E.Qq,
                    children: [
                        (0, i.jsx)(a.DUT, {
                            className: E.Xh,
                            onClick: x,
                            children: (0, i.jsx)(a.Text, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: p,
                            }),
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: g.intl.format(g.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, i.jsx)(a.DUT, { onClick: C, className: E.Qz, children: (0, i.jsx)(a.ucK, { size: "xs" }) }),
            ],
        })
    );
}
function p(e) {
    let { className: t, userId: n, verification: r, index: l } = e,
        o = (0, d.tC)(r.timestamp),
        c = s.useCallback(() => {
            (0, d.W0)(n, r.verifiedKey);
        }, [r.verifiedKey, n]);
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsxs)("div", {
                className: E.Qq,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: g.intl.format(g.t.N4qBBO, { index: l + 1 }),
                    }),
                    (0, i.jsx)(a.Text, { variant: "text-sm/medium", color: "text-default", children: o }),
                ],
            }),
            (0, i.jsx)(a.DUT, {
                className: E.Kk,
                onClick: c,
                children: (0, i.jsx)(a.PGe, { size: "md", color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function C(e) {
    let { userId: t } = e,
        n = (0, u.k)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h, { userId: t, count: n.length }),
            n.map((e, r) =>
                (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(p, { className: E.nM, userId: t, index: r, verification: e }),
                            r !== n.length - 1 && (0, i.jsx)("div", { className: E.yF }),
                        ],
                    },
                    `${r}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
n(473169);
