n.d(t, { _: () => s, h: () => a });
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    u = n(534514),
    o = n(834730),
    d = n(448633);
function s(e) {
    let { header: t, description: n, relatedId: r, disabled: s } = e;
    return (0, l.jsxs)("div", {
        className: d.wx,
        children: [
            (0, l.jsx)(u.D, {
                variant: "text-md/medium",
                color: "text-strong",
                children: (0, l.jsx)("label", { htmlFor: r, className: i()(d.DD, { [d.r9]: s }), children: t }),
            }),
            (0, l.jsx)(o.E, {
                variant: "text-sm/normal",
                color: "text-default",
                className: i()(d.h_, { [d.r9]: s }),
                children: n,
            }),
        ],
    });
}
function a(e) {
    let { className: t, children: n } = e;
    return (0, l.jsx)("div", { className: i()(d.kL, t), children: n });
}
