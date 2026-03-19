n.d(e, { _: () => s, h: () => a });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    u = n(397927),
    d = n(716214);
function s(t) {
    let { header: e, description: n, relatedId: l, disabled: s } = t;
    return (0, i.jsxs)("div", {
        className: d.wx,
        children: [
            (0, i.jsx)(u.Heading, {
                variant: "text-md/medium",
                color: "text-strong",
                children: (0, i.jsx)("label", { htmlFor: l, className: r()(d.DD, { [d.r9]: s }), children: e }),
            }),
            (0, i.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                className: r()(d.h_, { [d.r9]: s }),
                children: n,
            }),
        ],
    });
}
function a(t) {
    let { className: e, children: n } = t;
    return (0, i.jsx)("div", { className: r()(d.kL, e), children: n });
}
