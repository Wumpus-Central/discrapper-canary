n.d(t, { L: () => T });
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
var m = n(657331),
    g = n(287809),
    _ = n(427262),
    x = n(985018),
    A = n(921942);
function h(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: u } = (0, d.Ay)(),
        h = (0, l.bG)([g.default], () => g.default.getUser(t)),
        p = _.Ay.getFormattedName(h),
        T = s.useCallback(() => {
            (0, c.kj)(t);
        }, [t]),
        f = s.useCallback(() => (0, m.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: u }), [t, u]);
    return (
        s.useEffect(() => {
            (0, r.wz)(t);
        }, [t]),
        (0, i.jsxs)("div", {
            className: A.uW,
            children: [
                null != h && (0, i.jsx)(o.A, { className: A.my, user: h, size: a._3J.SIZE_40 }),
                (0, i.jsxs)("div", {
                    className: A.Qq,
                    children: [
                        (0, i.jsx)(a.DUT, {
                            className: A.Xh,
                            onClick: f,
                            children: (0, i.jsx)(a.Text, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: p,
                            }),
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: x.intl.format(x.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, i.jsx)(a.DUT, { onClick: T, className: A.Qz, children: (0, i.jsx)(a.ucK, { size: "xs" }) }),
            ],
        })
    );
}
function p(e) {
    let { className: t, userId: n, verification: l, index: r } = e,
        o = (0, c.tC)(l.timestamp),
        d = s.useCallback(() => {
            (0, c.W0)(n, l.verifiedKey);
        }, [l.verifiedKey, n]);
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsxs)("div", {
                className: A.Qq,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: x.intl.format(x.t.N4qBBO, { index: r + 1 }),
                    }),
                    (0, i.jsx)(a.Text, { variant: "text-sm/medium", color: "text-default", children: o }),
                ],
            }),
            (0, i.jsx)(a.DUT, {
                className: A.Kk,
                onClick: d,
                children: (0, i.jsx)(a.PGe, { size: "md", color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function T(e) {
    let { userId: t } = e,
        n = (0, u.k)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h, { userId: t, count: n.length }),
            n.map((e, l) =>
                (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(p, { className: A.nM, userId: t, index: l, verification: e }),
                            l !== n.length - 1 && (0, i.jsx)("div", { className: A.yF }),
                        ],
                    },
                    `${l}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
n(153335);
