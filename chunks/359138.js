n.d(t, { Z: () => u }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    a = n(747545),
    o = n(131951),
    c = n(388032),
    d = n(991520);
function u() {
    let e = o.Z.getCameraComponent(),
        t = (0, l.e7)([o.Z], () => o.Z.getVideoDeviceId()),
        [n, u] = s.useState(!1),
        h = (0, l.e7)([o.Z], () => o.Z.isVideoAvailable());
    return n
        ? (0, i.jsx)('div', {
              className: d.cameraWrapper,
              children: (0, i.jsxs)('div', {
                  className: d.camera,
                  children: [
                      (0, i.jsx)(e, {
                          deviceId: t,
                          width: 387,
                          height: 218,
                          disabled: !n
                      }),
                      (0, i.jsx)(a.S, {})
                  ]
              })
          })
        : (0, i.jsxs)('div', {
              className: d.cameraWrapper,
              children: [
                  (0, i.jsx)('div', { className: d.previewImage }),
                  (0, i.jsx)(r.ua7, {
                      text: h ? null : c.intl.string(c.t['8jSzSU']),
                      children: (e) =>
                          (0, i.jsx)(r.zxk, {
                              ...e,
                              onClick: () => u(!0),
                              disabled: !h,
                              children: c.intl.string(c.t.JIf4v7)
                          })
                  })
              ]
          });
}
