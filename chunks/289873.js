"use strict";
n.d(t, { t: () => u, y: () => _ });
var i,
    r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(844222),
    d = n(460890),
    c = n(165980),
    u =
        (((i = {}).WANDERING_CUBES = "wanderingCubes"),
        (i.CHASING_DOTS = "chasingDots"),
        (i.PULSING_ELLIPSIS = "pulsingEllipsis"),
        (i.SPINNING_CIRCLE = "spinningCircle"),
        (i.SPINNING_CIRCLE_SIMPLE = "spinningCircleSimple"),
        (i.LOW_MOTION = "lowMotion"),
        i);
function _(e) {
    let { type: t = "wanderingCubes", animated: n = !0, className: i, itemClassName: s, ...u } = e,
        { i18n: _ } = (0, d.G9)(),
        { reducedMotion: E } = a.useContext(o.C),
        A = E.enabled
            ? (function (e) {
                  switch (e) {
                      case "wanderingCubes":
                      case "chasingDots":
                          return "lowMotion";
                      default:
                          return e;
                  }
              })(t)
            : t,
        h = u["aria-label"] ?? _.SPINNER_LOADING_LABEL;
    if ("spinningCircle" === A || "spinningCircleSimple" === A)
        return (0, r.jsx)("div", {
            className: l()(c.spinner, c[A], i, { [c.stopAnimation]: !n }),
            role: "img",
            ...u,
            "aria-label": h,
            children: (0, r.jsx)("div", {
                className: c.spinningCircleInner,
                children: (0, r.jsxs)("svg", {
                    className: c.circular,
                    viewBox: "25 25 50 50",
                    children: [
                        "spinningCircle" === A &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("circle", {
                                        className: l()(c.path, c.path3, s),
                                        cx: "50",
                                        cy: "50",
                                        r: "20",
                                    }),
                                    (0, r.jsx)("circle", {
                                        className: l()(c.path, c.path2, s),
                                        cx: "50",
                                        cy: "50",
                                        r: "20",
                                    }),
                                ],
                            }),
                        (0, r.jsx)("circle", { className: l()(c.path, s), cx: "50", cy: "50", r: "20" }),
                    ],
                }),
            }),
        });
    let I = l()(c.item, s);
    return (0, r.jsx)("span", {
        className: l()(c.spinner, i, { [c.stopAnimation]: !n }),
        role: "img",
        "aria-label": h,
        ...u,
        children: (0, r.jsxs)("span", {
            className: l()(c.inner, c[A]),
            children: [
                (0, r.jsx)("span", { className: I }),
                (0, r.jsx)("span", { className: I }),
                "pulsingEllipsis" === A || "lowMotion" === A ? (0, r.jsx)("span", { className: I }) : null,
            ],
        }),
    });
}
_.Type = u;
