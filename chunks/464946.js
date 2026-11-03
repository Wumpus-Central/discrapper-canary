s.d(e, { _: () => i, h: () => o });
var t = s(477900);
s(582128);
var a = s(503698),
    n = s.n(a),
    c = s(534514),
    d = s(834730),
    l = s(140038);
function i(r) {
    let { header: e, description: s, relatedId: a, disabled: i } = r;
    return (0, t.jsxs)("div", {
        className: l.wx,
        children: [
            (0, t.jsx)(c.D, {
                variant: "body-md/medium",
                color: "text-strong",
                children: (0, t.jsx)("label", { htmlFor: a, className: n()(l.DD, { [l.r9]: i }), children: e }),
            }),
            (0, t.jsx)(d.E, {
                variant: "body-sm/normal",
                color: "text-default",
                className: n()(l.h_, { [l.r9]: i }),
                children: s,
            }),
        ],
    });
}
function o(r) {
    let { className: e, children: s } = r;
    return (0, t.jsx)("div", { className: n()(l.kL, e), children: s });
}
