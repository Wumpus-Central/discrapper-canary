n.d(t, { X: () => a });
var r = n(627968),
    l = n(64700),
    i = n(397927),
    s = n(681636);
function a(e) {
    let { text: t, isLoading: n = !1, onClose: a } = e,
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
                className: s.Mm,
                children: [
                    (0, r.jsx)(i.Heading, {
                        variant: "heading-md/semibold",
                        color: "currentColor",
                        children: "Transcript",
                    }),
                    (0, r.jsx)(i.DUT, {
                        onClick: a,
                        className: s.GI,
                        children: (0, r.jsx)(i.PGe, { color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsx)(i.vN3, {
                children: (0, r.jsx)(i.ArX, {
                    className: s.j5,
                    fade: !0,
                    children: (0, r.jsx)("div", {
                        className: s.FN,
                        children: n
                            ? (0, r.jsx)("div", {
                                  className: s.Cw,
                                  children: (0, r.jsx)(i.y$y, { type: i.y$y.Type.WANDERING_CUBES }),
                              })
                            : (0, r.jsx)(i.Heading, {
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
