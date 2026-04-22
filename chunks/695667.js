t.d(n, { A: () => m });
var l = t(627968),
    r = t(64700),
    a = t(534514),
    i = t(834730),
    s = t(165655),
    d = t(468946),
    o = t(27023),
    c = t(225180),
    u = t(35030);
function m() {
    let { currentGame: e, planId: n } = (0, o.bv)(),
        t = (0, c.A)(e?.gameId, "cover");
    if (null == e) return null;
    let m = e?.plans.find((e) => e.id === n);
    return (0, l.jsxs)("div", {
        className: u.kL,
        children: [
            (0, l.jsxs)("div", {
                className: u.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: u.N1,
                        children: [
                            (0, l.jsx)("img", { src: t ?? "", className: u.Sl, alt: e.name }),
                            (0, l.jsxs)("div", {
                                className: u.wx,
                                children: [
                                    (0, l.jsx)(a.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: e.name,
                                    }),
                                    (0, l.jsx)(i.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: m?.name,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != m &&
                        (0, l.jsx)("div", {
                            className: u.wL,
                            children: m.specifications.map((e, n) =>
                                (0, l.jsxs)(
                                    r.Fragment,
                                    {
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: u._Y,
                                                children: [
                                                    (0, l.jsx)(a.D, {
                                                        variant: "heading-sm/semibold",
                                                        color: "text-strong",
                                                        children: e.title,
                                                    }),
                                                    (0, l.jsx)(i.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        children: e.description,
                                                    }),
                                                ],
                                            }),
                                            n !== (m?.specifications.length ?? 0) - 1 &&
                                                (0, l.jsx)("div", { className: u.yF }),
                                        ],
                                    },
                                    n,
                                ),
                            ),
                        }),
                    (0, l.jsx)("div", { className: u.UK, children: (0, l.jsx)(d.A, {}) }),
                ],
            }),
            (0, l.jsx)("div", { className: u.uV, children: (0, l.jsx)(s.T, { imageUrl: t ?? "" }) }),
        ],
    });
}
