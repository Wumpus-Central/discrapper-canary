"use strict";
n.d(t, { X: () => u });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(354361),
    o = n(985018),
    l = n(246878);
function u(e) {
    let { text: t, isLoading: n = !1, onClose: u } = e,
        c = i.useMemo(
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
                className: l.Mm,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-md/semibold",
                        color: "currentColor",
                        children: o.intl.string(a.default["VZkd/n"]),
                    }),
                    (0, r.jsx)(s.DUT, {
                        onClick: u,
                        className: l.GI,
                        "aria-label": o.intl.string(a.default["6/dkHh"]),
                        children: (0, r.jsx)(s.PGe, { color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsx)(s.vN3, {
                children: (0, r.jsx)(s.ArX, {
                    className: l.j5,
                    fade: !0,
                    children: (0, r.jsx)("div", {
                        className: l.FN,
                        children: n
                            ? (0, r.jsx)("div", {
                                  className: l.Cw,
                                  children: (0, r.jsx)(s.y$y, { type: s.y$y.Type.WANDERING_CUBES }),
                              })
                            : (0, r.jsx)(s.Heading, {
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
