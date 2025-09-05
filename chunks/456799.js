n.d(t, { Z: () => l });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(99542);
let l = function (e) {
    let { allowClicks: t = !1, children: n, withBorder: i = !1 } = e;
    function l(e) {
        e.stopPropagation();
    }
    return (0, r.jsx)(o.Rny, {
        children: (0, r.jsx)(o.Zbd, {
            className: a()(s.componentPreviewWrapper, { [s.componentPreviewWrapperBordered]: i }),
            outline: i,
            children: (0, r.jsx)("div", {
                className: s.componentPreview,
                onClickCapture: t ? void 0 : l,
                children: n,
            }),
        }),
    });
};
