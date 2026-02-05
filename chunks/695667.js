n.d(t, { A: () => u });
var l = n(627968),
    r = n(64700),
    i = n(158954),
    s = n(165655),
    a = n(468946),
    d = n(27023),
    c = n(225180),
    o = n(794567);
function u() {
    let { currentGame: e, planId: t } = (0, d.bv)(),
        n = (0, c.A)(e?.gameId, "cover");
    if (null == e) return null;
    let u = e?.plans.find((e) => e.id === t);
    return (0, l.jsxs)("div", {
        className: o.kL,
        children: [
            (0, l.jsxs)("div", {
                className: o.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: o.N1,
                        children: [
                            (0, l.jsx)("img", { src: n ?? "", className: o.Sl, alt: e.name }),
                            (0, l.jsxs)("div", {
                                className: o.wx,
                                children: [
                                    (0, l.jsx)(i.DZT, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: e.name,
                                    }),
                                    (0, l.jsx)(i.EYj, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: u?.name,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != u &&
                        (0, l.jsx)("div", {
                            className: o.wL,
                            children: u.specifications.map((e, t) =>
                                (0, l.jsxs)(
                                    r.Fragment,
                                    {
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: o._Y,
                                                children: [
                                                    (0, l.jsx)(i.DZT, {
                                                        variant: "heading-sm/semibold",
                                                        color: "text-strong",
                                                        children: e.title,
                                                    }),
                                                    (0, l.jsx)(i.EYj, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        children: e.description,
                                                    }),
                                                ],
                                            }),
                                            t !== (u?.specifications.length ?? 0) - 1 &&
                                                (0, l.jsx)("div", { className: o.yF }),
                                        ],
                                    },
                                    t,
                                ),
                            ),
                        }),
                    (0, l.jsx)("div", { className: o.UK, children: (0, l.jsx)(a.A, {}) }),
                ],
            }),
            (0, l.jsx)("div", { className: o.uV, children: (0, l.jsx)(s.T, { imageUrl: n ?? "" }) }),
        ],
    });
}
