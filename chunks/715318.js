n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var a = n(481060),
    i = n(239091),
    o = n(299206),
    l = n(858042),
    s = n(388032);
function c(e) {
    let { applicationId: t, className: n, viewId: c } = e,
        d = (0, o.Z)({
            id: t,
            label: s.intl.string(s.t['FfCL+/'])
        }),
        u = (0, l.M)({
            applicationId: t,
            viewId: c
        });
    return null == d && null == u
        ? null
        : (0, r.jsx)(a.yRy, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(a.v2r, {
                      navId: 'game-profile-context',
                      onClose: () => {
                          (0, i.Zy)(), t();
                      },
                      'aria-label': s.intl.string(s.t.PNeFgY),
                      onSelect: () => {},
                      children: (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(a.kSQ, { children: d }), (0, r.jsx)(a.kSQ, { children: u })]
                      })
                  });
              },
              children: (e) =>
                  (0, r.jsx)(a.ua7, {
                      text: s.intl.string(s.t.UKOtz8),
                      children: (t) =>
                          (0, r.jsx)(a.P3F, {
                              className: n,
                              ...t,
                              ...e,
                              children: (0, r.jsx)(a.xhG, {
                                  size: 'xs',
                                  color: a.TVs.colors.WHITE
                              })
                          })
                  })
          });
}
