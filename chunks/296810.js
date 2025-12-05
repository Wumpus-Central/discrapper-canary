n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(993413),
    s = n(388032),
    l = n(34747);
function c(e) {
    let {
            children: t,
            className: n,
            layoutClassName: i,
            profilePreview: c,
            profilePreviewTitle: u,
            nameplatePreview: d,
        } = e,
        f = () =>
            null != d
                ? (0, r.jsxs)("div", {
                      className: l.previewsContainer,
                      children: [
                          (0, r.jsx)(o.Z, {
                              title: null != u ? u : s.intl.string(s.t.Zb06yP),
                              hideDivider: !0,
                              className: l.previewItem,
                              children: c,
                          }),
                          (0, r.jsx)(o.Z, {
                              title: s.intl.string(s.t["7KRt6R"]),
                              className: l.previewItem,
                              hideDivider: !0,
                              children: d,
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: l.previewsContainer,
                      children: (0, r.jsx)(o.Z, {
                          title: null != u ? u : s.intl.string(s.t.Zb06yP),
                          hideDivider: !0,
                          className: l.previewItem,
                          children: c,
                      }),
                  });
    return (0, r.jsx)("div", {
        className: n,
        children: (0, r.jsx)("div", {
            className: l.profileCustomizationSection,
            children: (0, r.jsxs)("div", {
                className: a()(l.baseLayout, i),
                children: [t, f()],
            }),
        }),
    });
}
