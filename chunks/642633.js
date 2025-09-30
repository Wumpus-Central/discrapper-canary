t.d(n, { Z: () => m }), t(953529);
var r = t(951288),
    i = t(647438),
    l = t(793030),
    a = t(310978),
    o = t(183369),
    s = t(943970),
    c = t(401561),
    d = t(388032),
    u = t(20426);
function m() {
    let { currentGame: e, planId: n } = (0, o.aj)(),
        t = (0, s.Z)(null == e ? void 0 : e.gameId, "cover");
    if (null == e) return null;
    let m = null == e ? void 0 : e.plans.find((e) => e.id === n);
    return (0, r.jsxs)("div", {
        className: u.container,
        children: [
            (0, r.jsxs)("div", {
                className: u.content,
                children: [
                    (0, r.jsxs)("div", {
                        className: u.headerContainer,
                        children: [
                            (0, r.jsx)("img", {
                                src: null != t ? t : "",
                                className: u.image,
                                alt: e.name,
                            }),
                            (0, r.jsxs)("div", {
                                className: u.header,
                                children: [
                                    (0, r.jsx)(l.X6q, {
                                        variant: "heading-lg/semibold",
                                        color: "text-primary",
                                        children: e.name,
                                    }),
                                    (0, r.jsx)(l.xvT, {
                                        variant: "text-md/medium",
                                        color: "text-secondary",
                                        children: null == m ? void 0 : m.name,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != m &&
                        (0, r.jsx)("div", {
                            className: u.statsGrid,
                            children: m.specifications.map((e, n) => {
                                var t;
                                return (0, r.jsxs)(
                                    i.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: u.statItem,
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
                                                (null != (t = null == m ? void 0 : m.specifications.length) ? t : 0) -
                                                    1 && (0, r.jsx)("div", { className: u.divider }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: u.poweredBy,
                        children: (0, r.jsx)(l.xvT, {
                            variant: "text-sm/medium",
                            color: "text-secondary",
                            children: d.intl.format(c.default.JWpue3, { developer: e.developer }),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: u.imageBackground,
                children: (0, r.jsx)(a.M, { imageUrl: null != t ? t : "" }),
            }),
        ],
    });
}
