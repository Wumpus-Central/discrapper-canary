n.d(t, { X: () => u });
var r = n(627968),
    l = n(64700),
    a = n(397927),
    i = n(961432),
    s = n(985018),
    o = n(246878);
function u(e) {
    let { text: t, isLoading: n = !1, onClose: u } = e,
        c = l.useMemo(
            () =>
                (t ?? "")
                    .split("\n")
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0),
            [t],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o.Mm,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        color: "currentColor",
                        children: s.intl.string(i.default["VZkd/n"]),
                    }),
                    (0, r.jsx)(a.DUT, {
                        onClick: u,
                        className: o.GI,
                        "aria-label": s.intl.string(i.default["6/dkHh"]),
                        children: (0, r.jsx)(a.PGe, { color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsx)(a.vN3, {
                children: (0, r.jsx)(a.ArX, {
                    className: o.j5,
                    fade: !0,
                    children: (0, r.jsx)("div", {
                        className: o.FN,
                        children: n
                            ? (0, r.jsx)("div", {
                                  className: o.Cw,
                                  children: (0, r.jsx)(a.y$y, { type: a.y$y.Type.WANDERING_CUBES }),
                              })
                            : (0, r.jsx)(a.Heading, {
                                  variant: "heading-md/normal",
                                  color: "text-muted",
                                  children: c.map((e, t) => (0, r.jsx)("p", { children: e }, t)),
                              }),
                    }),
                }),
            }),
        ],
    });
}
