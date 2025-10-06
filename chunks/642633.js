t.d(n, { Z: () => u }), t(953529);
var r = t(951288),
    i = t(647438),
    a = t(793030),
    l = t(310978),
    o = t(535895),
    s = t(183369),
    c = t(943970),
    d = t(20426);
function u() {
    let { currentGame: e, planId: n } = (0, s.aj)(),
        t = (0, c.Z)(null == e ? void 0 : e.gameId, "cover");
    if (null == e) return null;
    let u = null == e ? void 0 : e.plans.find((e) => e.id === n);
    return (0, r.jsxs)("div", {
        className: d.container,
        children: [
            (0, r.jsxs)("div", {
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
                                    (0, r.jsx)(a.X6q, {
                                        variant: "heading-lg/semibold",
                                        color: "text-primary",
                                        children: e.name,
                                    }),
                                    (0, r.jsx)(a.xvT, {
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
                                                    (0, r.jsx)(a.X6q, {
                                                        variant: "heading-sm/semibold",
                                                        color: "text-primary",
                                                        children: e.title,
                                                    }),
                                                    (0, r.jsx)(a.xvT, {
                                                        variant: "text-sm/medium",
                                                        color: "text-tertiary",
                                                        children: e.description,
                                                    }),
                                                ],
                                            }),
                                            n !==
                                                (null != (t = null == u ? void 0 : u.specifications.length) ? t : 0) -
                                                    1 && (0, r.jsx)("div", { className: d.divider }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: d.poweredBy,
                        children: (0, r.jsx)(o.Z, {}),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: d.imageBackground,
                children: (0, r.jsx)(l.M, { imageUrl: null != t ? t : "" }),
            }),
        ],
    });
}
