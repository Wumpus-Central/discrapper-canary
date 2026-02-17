"use strict";
n.d(t, { X: () => o });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(681636);
function o(e) {
    let { text: t, isLoading: n = !1, onClose: o } = e,
        l = i.useMemo(
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
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        color: "currentColor",
                        children: "Transcript",
                    }),
                    (0, r.jsx)(a.DUT, {
                        onClick: o,
                        className: s.GI,
                        children: (0, r.jsx)(a.PGe, { color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsx)(a.vN3, {
                children: (0, r.jsx)(a.ArX, {
                    className: s.j5,
                    fade: !0,
                    children: (0, r.jsx)("div", {
                        className: s.FN,
                        children: n
                            ? (0, r.jsx)("div", {
                                  className: s.Cw,
                                  children: (0, r.jsx)(a.y$y, { type: a.y$y.Type.WANDERING_CUBES }),
                              })
                            : (0, r.jsx)(a.Heading, {
                                  variant: "heading-md/normal",
                                  color: "text-muted",
                                  children: l.map((e, t) => (0, r.jsx)("p", { children: e }, t)),
                              }),
                    }),
                }),
            }),
        ],
    });
}
