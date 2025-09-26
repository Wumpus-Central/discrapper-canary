t.d(n, { Z: () => u }), t(953529);
var r = t(951288),
    i = t(647438),
    l = t(793030),
    a = t(183369),
    o = t(943970),
    s = t(440589),
    c = t(388032),
    d = t(233019);
function u() {
    let { currentGame: e, planId: n } = (0, a.aj)(),
        t = (0, o.Z)(null == e ? void 0 : e.gameId, "cover");
    if (null == e) return null;
    let u = null == e ? void 0 : e.plans.find((e) => e.id === n);
    return (0, r.jsx)("div", {
        className: d.container,
        children: (0, r.jsxs)("div", {
            className: d.content,
            children: [
                (0, r.jsxs)("div", {
                    className: d.headerContainer,
                    children: [
                        (0, r.jsx)("img", {
                            src: null != t ? t : "",
                            className: d.image,
                            alt: e.name,
                        }),
                        (0, r.jsxs)("div", {
                            className: d.header,
                            children: [
                                (0, r.jsx)(l.X6q, {
                                    variant: "heading-lg/semibold",
                                    color: "text-primary",
                                    children: e.name,
                                }),
                                (0, r.jsx)(l.xvT, {
                                    variant: "text-md/medium",
                                    color: "text-secondary",
                                    children: null == u ? void 0 : u.name,
                                }),
                            ],
                        }),
                    ],
                }),
                null != u &&
                    (0, r.jsx)("div", {
                        className: d.statsGrid,
                        children: u.specifications.map((e, n) => {
                            var t;
                            return (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: d.statItem,
                                            children: [
                                                (0, r.jsx)(l.X6q, {
                                                    variant: "heading-sm/semibold",
                                                    color: "text-primary",
                                                    children: e.title,
                                                }),
                                                (0, r.jsx)(l.xvT, {
                                                    variant: "text-sm/medium",
                                                    color: "text-tertiary",
                                                    children: e.description,
                                                }),
                                            ],
                                        }),
                                        n !==
                                            (null != (t = null == u ? void 0 : u.specifications.length) ? t : 0) - 1 &&
                                            (0, r.jsx)("div", { className: d.divider }),
                                    ],
                                },
                                n,
                            );
                        }),
                    }),
                (0, r.jsx)("div", {
                    className: d.poweredBy,
                    children: (0, r.jsx)(l.xvT, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: c.intl.format(s.default.JWpue3, { developer: e.developer }),
                    }),
                }),
            ],
        }),
    });
}
