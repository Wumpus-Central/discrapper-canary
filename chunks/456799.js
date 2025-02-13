a.d(s, { Z: () => o });
var i = a(200651);
a(192379);
var t = a(120356),
    n = a.n(t),
    l = a(481060),
    r = a(970533);
let o = function (e) {
    let { allowClicks: s = !1, children: a, withBorder: t = !1 } = e;
    return (0, i.jsx)(l.Rny, {
        children: (0, i.jsx)(l.Zbd, {
            className: n()(r.componentPreviewWrapper, { [r.componentPreviewWrapperBordered]: t }),
            outline: t,
            children: (0, i.jsx)('div', {
                className: r.componentPreview,
                onClickCapture: s
                    ? void 0
                    : function (e) {
                          e.stopPropagation();
                      },
                children: a
            })
        })
    });
};
