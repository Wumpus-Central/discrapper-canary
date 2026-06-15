n.d(t, { X: () => f });
var r = n(627968),
    l = n(64700),
    a = n(534514),
    i = n(939249),
    s = n(789645),
    u = n(187322),
    o = n(364522),
    c = n(289873),
    d = n(445563),
    m = n(375708),
    h = n(834926);
function f(e) {
    let { text: t, isLoading: n = !1, onClose: f } = e,
        p = l.useMemo(
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
                className: h.Mm,
                children: [
                    (0, r.jsx)(a.D, {
                        variant: "heading-md/semibold",
                        color: "currentColor",
                        children: m.intl.string(d.default["VZkd/n"]),
                    }),
                    (0, r.jsx)(i.D, {
                        onClick: f,
                        className: h.GI,
                        "aria-label": m.intl.string(d.default["6/dkHh"]),
                        children: (0, r.jsx)(s.P, { color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsx)(u.vN, {
                children: (0, r.jsx)(o.Ar, {
                    className: h.j5,
                    fade: !0,
                    children: (0, r.jsx)("div", {
                        className: h.FN,
                        children: n
                            ? (0, r.jsx)("div", {
                                  className: h.Cw,
                                  children: (0, r.jsx)(c.y, { type: c.y.Type.WANDERING_CUBES }),
                              })
                            : (0, r.jsx)(a.D, {
                                  variant: "heading-md/normal",
                                  color: "text-muted",
                                  children: p.map((e, t) => (0, r.jsx)("p", { children: e }, t)),
                              }),
                    }),
                }),
            }),
        ],
    });
}
