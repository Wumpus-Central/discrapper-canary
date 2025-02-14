n.d(t, { Z: () => l });
var s = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    o = n(481060),
    i = n(970533);
let l = function (e) {
    let { allowClicks: t = !1, children: n, withBorder: r = !1 } = e;
    return (0, s.jsx)(o.Rny, {
        children: (0, s.jsx)(o.Zbd, {
            className: a()(i.componentPreviewWrapper, { [i.componentPreviewWrapperBordered]: r }),
            outline: r,
            children: (0, s.jsx)('div', {
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
