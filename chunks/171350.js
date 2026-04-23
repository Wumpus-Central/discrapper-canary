n.d(t, { L: () => C });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(778712),
    r = n(939249),
    o = n(834730),
    d = n(241326),
    u = n(789645),
    c = n(827734),
    g = n(803306),
    m = n(966327),
    _ = n(688810);
n(936388), n(714763);
var A = n(814278),
    h = n(699978);
n(818143);
var p = n(657331),
    x = n(287809),
    E = n(427262),
    T = n(985018),
    S = n(882129);
function f(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: u } = (0, _.Ay)(),
        c = (0, l.bG)([x.default], () => x.default.getUser(t)),
        h = E.Ay.getFormattedName(c),
        f = s.useCallback(() => {
            (0, A.kj)(t);
        }, [t]),
        b = s.useCallback(() => (0, p.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: u }), [t, u]);
    return (
        s.useEffect(() => {
            (0, g.wz)(t);
        }, [t]),
        (0, i.jsxs)("div", {
            className: S.uW,
            children: [
                null != c && (0, i.jsx)(m.A, { className: S.my, user: c, size: a._3.SIZE_40 }),
                (0, i.jsxs)("div", {
                    className: S.Qq,
                    children: [
                        (0, i.jsx)(r.D, {
                            className: S.Xh,
                            onClick: b,
                            children: (0, i.jsx)(o.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: h,
                            }),
                        }),
                        (0, i.jsx)(o.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: T.intl.format(T.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, i.jsx)(r.D, { onClick: f, className: S.Qz, children: (0, i.jsx)(d.u, { size: "xs" }) }),
            ],
        })
    );
}
function b(e) {
    let { className: t, userId: n, verification: l, index: a } = e,
        d = (0, A.tC)(l.timestamp),
        g = s.useCallback(() => {
            (0, A.W0)(n, l.verifiedKey);
        }, [l.verifiedKey, n]);
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsxs)("div", {
                className: S.Qq,
                children: [
                    (0, i.jsx)(o.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: T.intl.format(T.t.N4qBBO, { index: a + 1 }),
                    }),
                    (0, i.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: d }),
                ],
            }),
            (0, i.jsx)(r.D, {
                className: S.Kk,
                onClick: g,
                children: (0, i.jsx)(u.P, { size: "md", color: c.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function C(e) {
    let { userId: t } = e,
        n = (0, h.k)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f, { userId: t, count: n.length }),
            n.map((e, l) =>
                (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(b, { className: S.nM, userId: t, index: l, verification: e }),
                            l !== n.length - 1 && (0, i.jsx)("div", { className: S.yF }),
                        ],
                    },
                    `${l}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
n(818050);
