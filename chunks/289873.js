"use strict";
n.d(t, { t: () => c, y: () => _ });
var r,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(844222),
    u = n(460890),
    d = n(165980),
    c =
        (((r = {}).WANDERING_CUBES = "wanderingCubes"),
        (r.CHASING_DOTS = "chasingDots"),
        (r.PULSING_ELLIPSIS = "pulsingEllipsis"),
        (r.SPINNING_CIRCLE = "spinningCircle"),
        (r.SPINNING_CIRCLE_SIMPLE = "spinningCircleSimple"),
        (r.LOW_MOTION = "lowMotion"),
        r);
function _(e) {
    let { type: t = "wanderingCubes", animated: n = !0, className: r, itemClassName: a, ...c } = e,
        { i18n: _ } = (0, u.G9)(),
        { reducedMotion: f } = s.useContext(l.C),
        E = f.enabled
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
        h = c["aria-label"] ?? _.SPINNER_LOADING_LABEL;
    if ("spinningCircle" === E || "spinningCircleSimple" === E)
        return (0, i.jsx)("div", {
            className: o()(d.spinner, d[E], r, { [d.stopAnimation]: !n }),
            role: "img",
            ...c,
            "aria-label": h,
            children: (0, i.jsx)("div", {
                className: d.spinningCircleInner,
                children: (0, i.jsxs)("svg", {
                    className: d.circular,
                    viewBox: "25 25 50 50",
                    children: [
                        "spinningCircle" === E &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("circle", {
                                        className: o()(d.path, d.path3, a),
                                        cx: "50",
                                        cy: "50",
                                        r: "20",
                                    }),
                                    (0, i.jsx)("circle", {
                                        className: o()(d.path, d.path2, a),
                                        cx: "50",
                                        cy: "50",
                                        r: "20",
                                    }),
                                ],
                            }),
                        (0, i.jsx)("circle", { className: o()(d.path, a), cx: "50", cy: "50", r: "20" }),
                    ],
                }),
            }),
        });
    let p = o()(d.item, a);
    return (0, i.jsx)("span", {
        className: o()(d.spinner, r, { [d.stopAnimation]: !n }),
        role: "img",
        "aria-label": h,
        ...c,
        children: (0, i.jsxs)("span", {
            className: o()(d.inner, d[E]),
            children: [
                (0, i.jsx)("span", { className: p }),
                (0, i.jsx)("span", { className: p }),
                "pulsingEllipsis" === E || "lowMotion" === E ? (0, i.jsx)("span", { className: p }) : null,
            ],
        }),
    });
}
_.Type = c;
