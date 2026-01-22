n.d(t, { L: () => b });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(803306),
    l = n(966327),
    c = n(688810);
n(936388), n(714763);
var u = n(814278),
    d = n(699978);
n(818143);
var f = n(657331),
    p = n(287809),
    _ = n(427262),
    h = n(985018),
    m = n(32086);
function g(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: d } = (0, c.Ay)(),
        g = (0, a.bG)([p.default], () => p.default.getUser(t)),
        E = _.Ay.getFormattedName(g),
        b = i.useCallback(() => {
            (0, u.kj)(t);
        }, [t]),
        y = i.useCallback(
            () =>
                (0, f.openUserProfileModal)({
                    userId: t,
                    sourceAnalyticsLocations: d,
                }),
            [t, d],
        );
    return (
        i.useEffect(() => {
            (0, o.wz)(t);
        }, [t]),
        (0, r.jsxs)("div", {
            className: m.uW,
            children: [
                null != g &&
                    (0, r.jsx)(l.A, {
                        className: m.my,
                        user: g,
                        size: s._3J.SIZE_40,
                    }),
                (0, r.jsxs)("div", {
                    className: m.Qq,
                    children: [
                        (0, r.jsx)(s.DUT, {
                            className: m.Xh,
                            onClick: y,
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: E,
                            }),
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: h.intl.format(h.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, r.jsx)(s.DUT, {
                    onClick: b,
                    className: m.Qz,
                    children: (0, r.jsx)(s.ucK, { size: "xs" }),
                }),
            ],
        })
    );
}
function E(e) {
    let { className: t, userId: n, verification: a, index: o } = e,
        l = (0, u.tC)(a.timestamp),
        c = i.useCallback(() => {
            (0, u.W0)(n, a.verifiedKey);
        }, [a.verifiedKey, n]);
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsxs)("div", {
                className: m.Qq,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: h.intl.format(h.t.N4qBBO, { index: o + 1 }),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: l,
                    }),
                ],
            }),
            (0, r.jsx)(s.DUT, {
                className: m.Kk,
                onClick: c,
                children: (0, r.jsx)(s.PGe, {
                    size: "md",
                    color: s.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                }),
            }),
        ],
    });
}
function b(e) {
    let { userId: t } = e,
        n = (0, d.k)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g, {
                userId: t,
                count: n.length,
            }),
            n.map((e, a) =>
                (0, r.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, r.jsx)(E, {
                                className: m.nM,
                                userId: t,
                                index: a,
                                verification: e,
                            }),
                            a !== n.length - 1 && (0, r.jsx)("div", { className: m.yF }),
                        ],
                    },
                    "".concat(a, "-").concat(e.timestamp),
                ),
            ),
        ],
    });
}
n(473169);
