t.d(n, { Z: () => d });
var a = t(951288),
    i = t(647438),
    r = t(793030),
    l = t(183369),
    s = t(401561),
    o = t(388032),
    c = t(20426);
function d() {
    let { currentGame: e, planId: n } = (0, l.aj)();
    if (null == e) return null;
    let t = null == e ? void 0 : e.plans.find((e) => e.id === n);
    return (0, a.jsx)("div", {
        className: c.container,
        children: (0, a.jsxs)("div", {
            className: c.content,
            children: [
                (0, a.jsxs)("div", {
                    className: c.headerContainer,
                    children: [
                        (0, a.jsx)("img", {
                            className: c.image,
                            alt: e.name,
                        }),
                        (0, a.jsxs)("div", {
                            className: c.header,
                            children: [
                                (0, a.jsx)(r.X6, {
                                    variant: "heading-lg/semibold",
                                    color: "text-primary",
                                    children: e.name,
                                }),
                                (0, a.jsx)(r.xv, {
                                    variant: "text-md/medium",
                                    color: "text-secondary",
                                    children: e.developer,
                                }),
                            ],
                        }),
                    ],
                }),
                null != t &&
                    (0, a.jsx)("div", {
                        className: c.statsGrid,
                        children: t.specifications.map((e, n) => {
                            var l;
                            return (0, a.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: c.statItem,
                                            children: [
                                                (0, a.jsx)(r.X6, {
                                                    variant: "heading-sm/semibold",
                                                    color: "text-primary",
                                                    children: e.amount,
                                                }),
                                                (0, a.jsx)(r.xv, {
                                                    variant: "text-sm/medium",
                                                    color: "text-tertiary",
                                                    children: e.unit,
                                                }),
                                            ],
                                        }),
                                        n !==
                                            (null != (l = null == t ? void 0 : t.specifications.length) ? l : 0) - 1 &&
                                            (0, a.jsx)("div", { className: c.divider }),
                                    ],
                                },
                                n,
                            );
                        }),
                    }),
                (0, a.jsx)("div", {
                    className: c.poweredBy,
                    children: (0, a.jsx)(r.xv, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: o.intl.format(s.default.JWpue3, { developer: e.developer }),
                    }),
                }),
            ],
        }),
    });
}
