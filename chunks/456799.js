n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var o = n(120356),
    s = n.n(o),
    a = n(481060),
    i = n(409667);
let l = function (e) {
    let { allowClicks: t = !1, children: n, withBorder: o = !1 } = e;
    return (0, r.jsx)(a.Rny, {
        children: (0, r.jsx)(a.Zbd, {
            className: s()(i.componentPreviewWrapper, { [i.componentPreviewWrapperBordered]: o }),
            outline: o,
            children: (0, r.jsx)('div', {
                className: i.componentPreview,
                onClickCapture: t
                    ? void 0
                    : function (e) {
                          e.stopPropagation();
                      },
                children: n
            })
        })
    });
};
