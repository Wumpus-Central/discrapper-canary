n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(239091),
    l = n(299206),
    o = n(858042),
    s = n(388032);
function c(e) {
    let { applicationId: t, className: n, viewId: c } = e,
        d = (0, l.Z)({
            id: t,
            label: s.intl.string(s.t['FfCL+/'])
        }),
        u = (0, o.M)({
            applicationId: t,
            viewId: c
        });
    return null == d && null == u
        ? null
        : (0, i.jsx)(r.yRy, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(r.v2r, {
                      navId: 'game-profile-context',
                      onClose: () => {
                          (0, a.Zy)(), t();
                      },
                      'aria-label': s.intl.string(s.t.PNeFgY),
                      onSelect: () => {},
                      children: (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)(r.kSQ, { children: d }), (0, i.jsx)(r.kSQ, { children: u })]
                      })
                  });
              },
              children: (e) =>
                  (0, i.jsx)(r.ua7, {
                      text: s.intl.string(s.t.UKOtz8),
                      children: (t) =>
                          (0, i.jsx)(r.P3F, {
                              className: n,
                              ...t,
                              ...e,
                              children: (0, i.jsx)(r.xhG, {
                                  size: 'xs',
                                  color: r.TVs.colors.WHITE
                              })
                          })
                  })
          });
}
