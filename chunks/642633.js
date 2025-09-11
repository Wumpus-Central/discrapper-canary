t.d(n, { Z: () => d }), t(953529);
var i = t(951288),
    r = t(647438),
    a = t(793030),
    l = t(183369),
    o = t(401561),
    s = t(388032),
    c = t(20426);
function d() {
    let { currentGame: e, planId: n } = (0, l.aj)();
    if (null == e) return null;
    let t = null == e ? void 0 : e.plans.find((e) => e.id === n);
    return (0, i.jsx)("div", {
        className: c.container,
        children: (0, i.jsxs)("div", {
            className: c.content,
            children: [
                (0, i.jsxs)("div", {
                    className: c.headerContainer,
                    children: [
                        (0, i.jsx)("img", {
                            className: c.image,
                            alt: e.name,
                        }),
                        (0, i.jsxs)("div", {
                            className: c.header,
                            children: [
                                (0, i.jsx)(a.X6q, {
                                    variant: "heading-lg/semibold",
                                    color: "text-primary",
                                    children: e.name,
                                }),
                                (0, i.jsx)(a.xvT, {
                                    variant: "text-md/medium",
                                    color: "text-secondary",
                                    children: null == t ? void 0 : t.name,
                                }),
                            ],
                        }),
                    ],
                }),
                null != t &&
                    (0, i.jsx)("div", {
                        className: c.statsGrid,
                        children: t.specifications.map((e, n) => {
                            var l;
                            return (0, i.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: c.statItem,
                                            children: [
                                                (0, i.jsx)(a.X6q, {
                                                    variant: "heading-sm/semibold",
                                                    color: "text-primary",
                                                    children: e.title,
                                                }),
                                                (0, i.jsx)(a.xvT, {
                                                    variant: "text-sm/medium",
                                                    color: "text-tertiary",
                                                    children: e.description,
                                                }),
                                            ],
                                        }),
                                        n !==
                                            (null != (l = null == t ? void 0 : t.specifications.length) ? l : 0) - 1 &&
                                            (0, i.jsx)("div", { className: c.divider }),
                                    ],
                                },
                                n,
                            );
                        }),
                    }),
                (0, i.jsx)("div", {
                    className: c.poweredBy,
                    children: (0, i.jsx)(a.xvT, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: s.intl.format(o.default.JWpue3, { developer: e.developer }),
                    }),
                }),
            ],
        }),
    });
}
