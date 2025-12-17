n.d(t, { Z: () => o });
var a = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    i = n(481060),
    s = n(607814);
let o = function (e) {
    let { allowClicks: t = !1, children: n, withBorder: r = !1 } = e;
    return (0, a.jsx)(i.Rny, {
        children: (0, a.jsx)(i.Zbd, {
            className: l()(s.componentPreviewWrapper, { [s.componentPreviewWrapperBordered]: r }),
            outline: r,
            children: (0, a.jsx)("div", {
                className: s.componentPreview,
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
