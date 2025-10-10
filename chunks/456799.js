n.d(t, { Z: () => l });
var r = n(951288);
n(647438);
var s = n(120356),
    o = n.n(s),
    a = n(481060),
    i = n(188764);
let l = function (e) {
    let { allowClicks: t = !1, children: n, withBorder: s = !1 } = e;
    return (0, r.jsx)(a.Rny, {
        children: (0, r.jsx)(a.Zbd, {
            className: o()(i.componentPreviewWrapper, { [i.componentPreviewWrapperBordered]: s }),
            outline: s,
            children: (0, r.jsx)("div", {
                className: i.componentPreview,
                onClickCapture: t
                    ? void 0
                    : function (e) {
                          e.stopPropagation();
                      },
                children: n,
            }),
        }),
    });
};
