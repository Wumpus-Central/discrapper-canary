n.d(t, { Z: () => d });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(993413),
    o = n(388032),
    c = n(775853);
function d(e) {
    let { children: t, className: n, layoutClassName: r, profilePreview: d, profilePreviewTitle: u, nameplatePreview: m, showViewFullProfileButton: p } = e;
    return (0, i.jsx)('div', {
        className: n,
        children: (0, i.jsx)(a.hjN, {
            className: c.profileCustomizationSection,
            children: (0, i.jsxs)('div', {
                className: s()(c.baseLayout, r),
                children: [
                    t,
                    null != m
                        ? (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(l.Z, {
                                      title: null != u ? u : o.intl.string(o.t.Zb06yM),
                                      showViewFullProfileButton: p,
                                      hideDivider: !0,
                                      className: c.preview,
                                      children: d
                                  }),
                                  null != m
                                      ? (0, i.jsx)(l.Z, {
                                            title: o.intl.string(o.t['7KRt6e']),
                                            className: c.preview,
                                            hideDivider: !0,
                                            children: m
                                        })
                                      : null
                              ]
                          })
                        : (0, i.jsx)(l.Z, {
                              title: null != u ? u : o.intl.string(o.t.Zb06yM),
                              showViewFullProfileButton: p,
                              hideDivider: !0,
                              className: c.preview,
                              children: d
                          })
                ]
            })
        })
    });
}
