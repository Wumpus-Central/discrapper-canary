n.d(t, { L: () => E });
var i = n(627968),
    s = n(64700),
    a = n(311907),
    l = n(397927),
    r = n(803306),
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
    h = n(704288);
function x(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: u } = (0, c.Ay)(),
        x = (0, a.bG)([m.default], () => m.default.getUser(t)),
        p = A.Ay.getFormattedName(x),
        E = s.useCallback(() => {
            (0, d.kj)(t);
        }, [t]),
        C = s.useCallback(() => (0, _.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: u }), [t, u]);
    return (
        s.useEffect(() => {
            (0, r.wz)(t);
        }, [t]),
        (0, i.jsxs)("div", {
            className: h.uW,
            children: [
                null != x && (0, i.jsx)(o.A, { className: h.my, user: x, size: l._3J.SIZE_40 }),
                (0, i.jsxs)("div", {
                    className: h.Qq,
                    children: [
                        (0, i.jsx)(l.DUT, {
                            className: h.Xh,
                            onClick: C,
                            children: (0, i.jsx)(l.Text, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: p,
                            }),
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: g.intl.format(g.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, i.jsx)(l.DUT, { onClick: E, className: h.Qz, children: (0, i.jsx)(l.ucK, { size: "xs" }) }),
            ],
        })
    );
}
function p(e) {
    let { className: t, userId: n, verification: a, index: r } = e,
        o = (0, d.tC)(a.timestamp),
        c = s.useCallback(() => {
            (0, d.W0)(n, a.verifiedKey);
        }, [a.verifiedKey, n]);
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsxs)("div", {
                className: h.Qq,
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: g.intl.format(g.t.N4qBBO, { index: r + 1 }),
                    }),
                    (0, i.jsx)(l.Text, { variant: "text-sm/medium", color: "text-default", children: o }),
                ],
            }),
            (0, i.jsx)(l.DUT, {
                className: h.Kk,
                onClick: c,
                children: (0, i.jsx)(l.PGe, { size: "md", color: l.LU0.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function E(e) {
    let { userId: t } = e,
        n = (0, u.k)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x, { userId: t, count: n.length }),
            n.map((e, a) =>
                (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(p, { className: h.nM, userId: t, index: a, verification: e }),
                            a !== n.length - 1 && (0, i.jsx)("div", { className: h.yF }),
                        ],
                    },
                    `${a}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
n(522759);
