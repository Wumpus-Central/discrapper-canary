n.d(t, { Z: () => u }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(747545),
    o = n(131951),
    c = n(388032),
    d = n(31181);
function u() {
    let e = o.Z.getCameraComponent(),
        t = (0, r.e7)([o.Z], () => o.Z.getVideoDeviceId()),
        [n, u] = s.useState(!1),
        m = (0, r.e7)([o.Z], () => Object.values(o.Z.getVideoDevices()).length > 0);
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
                  (0, i.jsx)(l.ua7, {
                      text: m ? null : c.intl.string(c.t['8jSzSU']),
                      children: (e) =>
                          (0, i.jsx)(l.zxk, {
                              ...e,
                              onClick: () => u(!0),
                              disabled: !m,
                              children: c.intl.string(c.t.JIf4v7)
                          })
                  })
              ]
          });
}
