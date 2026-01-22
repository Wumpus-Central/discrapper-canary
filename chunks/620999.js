n.d(t, {
    r: () => c,
    t: () => l,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(610084);

function l() {
    let [e] = i.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, r.jsx)("div", {
        className: s()(o.Vl, o.Yf),
        style: {
            animationDelay: "".concat(e, "s"),
        },
    });
}

function c() {
    let [e] = i.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, r.jsx)("div", {
        className: o.RC,
        style: {
            width: "".concat(e, "%"),
        },
    });
}
