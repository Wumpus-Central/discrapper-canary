n.d(t, { L: () => E });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(803306),
    o = n(966327),
    d = n(688810);
n(936388), n(714763);
var c = n(814278),
    u = n(699978);
n(818143);
var _ = n(657331),
    g = n(287809),
    A = n(427262),
    m = n(985018),
    h = n(704288);
function p(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: u } = (0, d.Ay)(),
        p = (0, l.bG)([g.default], () => g.default.getUser(t)),
        x = A.Ay.getFormattedName(p),
        E = s.useCallback(() => {
            (0, c.kj)(t);
        }, [t]),
        T = s.useCallback(() => (0, _.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: u }), [t, u]);
    return (
        s.useEffect(() => {
            (0, r.wz)(t);
        }, [t]),
        (0, i.jsxs)("div", {
            className: h.uW,
            children: [
                null != p && (0, i.jsx)(o.A, { className: h.my, user: p, size: a._3J.SIZE_40 }),
                (0, i.jsxs)("div", {
                    className: h.Qq,
                    children: [
                        (0, i.jsx)(a.DUT, {
                            className: h.Xh,
                            onClick: T,
                            children: (0, i.jsx)(a.Text, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: x,
                            }),
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: m.intl.format(m.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, i.jsx)(a.DUT, { onClick: E, className: h.Qz, children: (0, i.jsx)(a.ucK, { size: "xs" }) }),
            ],
        })
    );
}
function x(e) {
    let { className: t, userId: n, verification: l, index: r } = e,
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
                    (0, i.jsx)(a.Text, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: m.intl.format(m.t.N4qBBO, { index: r + 1 }),
                    }),
                    (0, i.jsx)(a.Text, { variant: "text-sm/medium", color: "text-default", children: o }),
                ],
            }),
            (0, i.jsx)(a.DUT, {
                className: h.Kk,
                onClick: d,
                children: (0, i.jsx)(a.PGe, { size: "md", color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function E(e) {
    let { userId: t } = e,
        n = (0, u.k)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p, { userId: t, count: n.length }),
            n.map((e, l) =>
                (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(x, { className: h.nM, userId: t, index: l, verification: e }),
                            l !== n.length - 1 && (0, i.jsx)("div", { className: h.yF }),
                        ],
                    },
                    `${l}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
n(522759);
