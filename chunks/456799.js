s.d(t, { Z: () => o });
var n = s(951288);
s(647438);
var r = s(120356),
    a = s.n(r),
    i = s(481060),
    l = s(188764);
let o = function (e) {
    let { allowClicks: t = !1, children: s, withBorder: r = !1 } = e;
    return (0, n.jsx)(i.Rny, {
        children: (0, n.jsx)(i.Zbd, {
            className: a()(l.componentPreviewWrapper, { [l.componentPreviewWrapperBordered]: r }),
            outline: r,
            children: (0, n.jsx)("div", {
                className: l.componentPreview,
                onClickCapture: t
                    ? void 0
                    : function (e) {
                          e.stopPropagation();
                      },
                children: s,
            }),
        }),
    });
};
