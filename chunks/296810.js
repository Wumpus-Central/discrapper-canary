n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(993413),
    l = n(388032),
    c = n(34747);
function u(e) {
    let {
            children: t,
            className: n,
            layoutClassName: i,
            profilePreview: u,
            profilePreviewTitle: d,
            nameplatePreview: f,
        } = e,
        _ = () =>
            null != f
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(s.Z, {
                              title: null != d ? d : l.intl.string(l.t.Zb06yM),
                              hideDivider: !0,
                              className: c.preview,
                              showViewFullProfileButton: !0,
                              children: u,
                          }),
                          null != f
                              ? (0, r.jsx)(s.Z, {
                                    title: l.intl.string(l.t["7KRt6e"]),
                                    className: c.preview,
                                    hideDivider: !0,
                                    children: f,
                                })
                              : null,
                      ],
                  })
                : (0, r.jsx)(s.Z, {
                      title: null != d ? d : l.intl.string(l.t.Zb06yM),
                      hideDivider: !0,
                      className: c.preview,
                      showViewFullProfileButton: !0,
                      children: u,
                  });
    return (0, r.jsx)("div", {
        className: n,
        children: (0, r.jsx)(o.hjN, {
            className: c.profileCustomizationSection,
            children: (0, r.jsxs)("div", {
                className: a()(c.baseLayout, i),
                children: [t, _()],
            }),
        }),
    });
}
