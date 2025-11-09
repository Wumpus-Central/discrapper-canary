n.d(t, { q: () => b });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(232567),
    l = n(700582),
    c = n(906732);
n(90641), n(615830);
var u = n(630759),
    d = n(931500);
n(921157);
var f = n(892001),
    _ = n(594174),
    p = n(51144),
    h = n(388032),
    m = n(806222);
function g(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: d } = (0, c.ZP)(),
        g = (0, a.e7)([_.default], () => _.default.getUser(t)),
        E = p.ZP.getFormattedName(g),
        b = i.useCallback(() => {
            (0, u.Zn)(t);
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
            (0, s.PR)(t);
        }, [t]),
        (0, r.jsxs)("div", {
            className: m.section,
            children: [
                null != g &&
                    (0, r.jsx)(l.Z, {
                        className: m.avatar,
                        user: g,
                        size: o.EFr.SIZE_40,
                    }),
                (0, r.jsxs)("div", {
                    className: m.text,
                    children: [
                        (0, r.jsx)(o.P3F, {
                            className: m.username,
                            onClick: y,
                            children: (0, r.jsx)(o.Text, {
                                variant: "text-md/semibold",
                                color: "interactive-active",
                                children: E,
                            }),
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: h.intl.format(h.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, r.jsx)(o.P3F, {
                    onClick: b,
                    className: m.sectionIconContainer,
                    children: (0, r.jsx)(o.XHJ, { size: "xs" }),
                }),
            ],
        })
    );
}
function E(e) {
    let { className: t, userId: n, verification: a, index: s } = e,
        l = (0, u.bo)(a.timestamp),
        c = i.useCallback(() => {
            (0, u.ZU)(n, a.verifiedKey);
        }, [a.verifiedKey, n]);
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsxs)("div", {
                className: m.text,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        color: "interactive-active",
                        children: h.intl.format(h.t.N4qBBO, { index: s + 1 }),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        children: l,
                    }),
                ],
            }),
            (0, r.jsx)(o.P3F, {
                className: m.icon,
                onClick: c,
                children: (0, r.jsx)(o.Dio, {
                    size: "md",
                    color: o.TVs.colors.INTERACTIVE_NORMAL,
                }),
            }),
        ],
    });
}
function b(e) {
    let { userId: t } = e,
        n = (0, d._)(t);
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
                                className: m.row,
                                userId: t,
                                index: a,
                                verification: e,
                            }),
                            a !== n.length - 1 && (0, r.jsx)("div", { className: m.divider }),
                        ],
                    },
                    "".concat(a, "-").concat(e.timestamp),
                ),
            ),
        ],
    });
}
n(10198);
