n.d(t, { X: () => s });
var r = n(627968),
    l = n(64700),
    a = n(397927),
    i = n(256181);
function s(e) {
    let { text: t, isLoading: n = !1, onClose: s } = e,
        o = l.useMemo(
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
                className: i.Mm,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        color: "currentColor",
                        children: "Transcript",
                    }),
                    (0, r.jsx)(a.DUT, {
                        onClick: s,
                        className: i.GI,
                        children: (0, r.jsx)(a.PGe, { color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsx)(a.vN3, {
                children: (0, r.jsx)(a.ArX, {
                    className: i.j5,
                    fade: !0,
                    children: (0, r.jsx)("div", {
                        className: i.FN,
                        children: n
                            ? (0, r.jsx)("div", {
                                  className: i.Cw,
                                  children: (0, r.jsx)(a.y$y, { type: a.y$y.Type.WANDERING_CUBES }),
                              })
                            : (0, r.jsx)(a.Heading, {
                                  variant: "heading-md/normal",
                                  color: "text-muted",
                                  children: o.map((e, t) => (0, r.jsx)("p", { children: e }, t)),
                              }),
                    }),
                }),
            }),
        ],
    });
}
