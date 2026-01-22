l.d(t, { A: () => u }), l(228524);
var r = l(627968),
    n = l(64700),
    s = l(158954),
    i = l(165655),
    a = l(468946),
    d = l(27023),
    c = l(225180),
    o = l(794567);
function u() {
    let { currentGame: e, planId: t } = (0, d.bv)(),
        l = (0, c.A)(null == e ? void 0 : e.gameId, "cover");
    if (null == e) return null;
    let u = null == e ? void 0 : e.plans.find((e) => e.id === t);
    return (0, r.jsxs)("div", {
        className: o.kL,
        children: [
            (0, r.jsxs)("div", {
                className: o.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: o.N1,
                        children: [
                            (0, r.jsx)("img", {
                                src: null != l ? l : "",
                                className: o.Sl,
                                alt: e.name,
                            }),
                            (0, r.jsxs)("div", {
                                className: o.wx,
                                children: [
                                    (0, r.jsx)(s.DZT, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: e.name,
                                    }),
                                    (0, r.jsx)(s.EYj, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: null == u ? void 0 : u.name,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != u &&
                        (0, r.jsx)("div", {
                            className: o.wL,
                            children: u.specifications.map((e, t) => {
                                var l;
                                return (0, r.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: o._Y,
                                                children: [
                                                    (0, r.jsx)(s.DZT, {
                                                        variant: "heading-sm/semibold",
                                                        color: "text-strong",
                                                        children: e.title,
                                                    }),
                                                    (0, r.jsx)(s.EYj, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        children: e.description,
                                                    }),
                                                ],
                                            }),
                                            t !==
                                                (null != (l = null == u ? void 0 : u.specifications.length) ? l : 0) -
                                                    1 && (0, r.jsx)("div", { className: o.yF }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: o.UK,
                        children: (0, r.jsx)(a.A, {}),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: o.uV,
                children: (0, r.jsx)(i.T, { imageUrl: null != l ? l : "" }),
            }),
        ],
    });
}
