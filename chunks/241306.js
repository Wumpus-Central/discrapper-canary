t.d(n, { Z: () => u }), t(953529);
var r = t(54381),
    i = t(473749),
    l = t(793030),
    a = t(441494),
    o = t(296643),
    s = t(343312),
    d = t(162190),
    c = t(333275);
function u() {
    let { currentGame: e, planId: n } = (0, s.JL)(),
        t = (0, d.Z)(null == e ? void 0 : e.gameId, "cover");
    if (null == e) return null;
    let u = null == e ? void 0 : e.plans.find((e) => e.id === n);
    return (0, r.jsxs)("div", {
        className: c.container,
        children: [
            (0, r.jsxs)("div", {
                className: c.content,
                children: [
                    (0, r.jsxs)("div", {
                        className: c.headerContainer,
                        children: [
                            (0, r.jsx)("img", {
                                src: null != t ? t : "",
                                className: c.image,
                                alt: e.name,
                            }),
                            (0, r.jsxs)("div", {
                                className: c.header,
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
                            className: c.statsGrid,
                            children: u.specifications.map((e, n) => {
                                var t;
                                return (0, r.jsxs)(
                                    i.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: c.statItem,
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
                                                (null != (t = null == u ? void 0 : u.specifications.length) ? t : 0) -
                                                    1 && (0, r.jsx)("div", { className: c.divider }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: c.poweredBy,
                        children: (0, r.jsx)(o.Z, {}),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: c.imageBackground,
                children: (0, r.jsx)(a.b, { imageUrl: null != t ? t : "" }),
            }),
        ],
    });
}
