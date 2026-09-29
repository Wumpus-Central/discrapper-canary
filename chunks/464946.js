e.d(r, { _: () => d, h: () => h });
var s = e(477900);
e(582128);
var a = e(503698),
    n = e.n(a),
    c = e(297264),
    l = e(834730),
    i = e(140038);
function d(t) {
    let { header: r, description: e, relatedId: a, disabled: d } = t;
    return (0, s.jsxs)("div", {
        className: i.wx,
        children: [
            (0, s.jsx)(c.D, {
                variant: "text-md/medium",
                color: "text-strong",
                children: (0, s.jsx)("label", { htmlFor: a, className: n()(i.DD, { [i.r9]: d }), children: r }),
            }),
            (0, s.jsx)(l.E, {
                variant: "text-sm/normal",
                color: "text-default",
                className: n()(i.h_, { [i.r9]: d }),
                children: e,
            }),
        ],
    });
}
function h(t) {
    let { className: r, children: e } = t;
    return (0, s.jsx)("div", { className: n()(i.kL, r), children: e });
}
