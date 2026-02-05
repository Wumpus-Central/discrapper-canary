"use strict";
n.d(t, { t: () => c, y: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(844222),
    l = n(460890),
    u = n(423161),
    c = (function (e) {
        return (
            (e.WANDERING_CUBES = "wanderingCubes"),
            (e.CHASING_DOTS = "chasingDots"),
            (e.PULSING_ELLIPSIS = "pulsingEllipsis"),
            (e.SPINNING_CIRCLE = "spinningCircle"),
            (e.SPINNING_CIRCLE_SIMPLE = "spinningCircleSimple"),
            (e.LOW_MOTION = "lowMotion"),
            e
        );
    })({});
function d(e) {
    switch (e) {
        case "wanderingCubes":
        case "chasingDots":
            return "lowMotion";
        default:
            return e;
    }
}
function _(e) {
    let { type: t = "wanderingCubes", animated: n = !0, className: a, itemClassName: c, ..._ } = e,
        { i18n: f } = (0, l.G9)(),
        { reducedMotion: p } = i.useContext(o.C),
        h = p.enabled ? d(t) : t,
        m = _["aria-label"] ?? f.SPINNER_LOADING_LABEL;
    if ("spinningCircle" === h || "spinningCircleSimple" === h)
        return (0, r.jsx)("div", {
            className: s()(u.spinner, u[h], a, { [u.stopAnimation]: !n }),
            role: "img",
            ..._,
            "aria-label": m,
            children: (0, r.jsx)("div", {
                className: u.spinningCircleInner,
                children: (0, r.jsxs)("svg", {
                    className: u.circular,
                    viewBox: "25 25 50 50",
                    children: [
                        "spinningCircle" === h &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("circle", {
                                        className: s()(u.path, u.path3, c),
                                        cx: "50",
                                        cy: "50",
                                        r: "20",
                                    }),
                                    (0, r.jsx)("circle", {
                                        className: s()(u.path, u.path2, c),
                                        cx: "50",
                                        cy: "50",
                                        r: "20",
                                    }),
                                ],
                            }),
                        (0, r.jsx)("circle", { className: s()(u.path, c), cx: "50", cy: "50", r: "20" }),
                    ],
                }),
            }),
        });
    let g = s()(u.item, c);
    return (0, r.jsx)("span", {
        className: s()(u.spinner, a, { [u.stopAnimation]: !n }),
        role: "img",
        "aria-label": m,
        ..._,
        children: (0, r.jsxs)("span", {
            className: s()(u.inner, u[h]),
            children: [
                (0, r.jsx)("span", { className: g }),
                (0, r.jsx)("span", { className: g }),
                "pulsingEllipsis" === h || "lowMotion" === h ? (0, r.jsx)("span", { className: g }) : null,
            ],
        }),
    });
}
_.Type = c;
