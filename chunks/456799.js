var o = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    i = n(102787);
t.Z = function (e) {
    let { allowClicks: t = !1, children: n, withBorder: r = !1 } = e;
    return (0, o.jsx)(a.FocusBlock, {
        children: (0, o.jsx)(a.Card, {
            className: s()(i.componentPreviewWrapper, { [i.componentPreviewWrapperBordered]: r }),
            outline: r,
            children: (0, o.jsx)('div', {
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
