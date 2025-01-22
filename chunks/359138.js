n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(747545),
    o = n(131951),
    c = n(388032),
    d = n(31181);
let u = 387,
    m = 218;
function g() {
    let e = o.Z.getCameraComponent(),
        t = (0, s.e7)([o.Z], () => o.Z.getVideoDeviceId()),
        [n, g] = r.useState(!1),
        h = (0, s.e7)([o.Z], () => Object.values(o.Z.getVideoDevices()).length > 0);
    return n
        ? (0, i.jsx)('div', {
              className: d.cameraWrapper,
              children: (0, i.jsxs)('div', {
                  className: d.camera,
                  children: [
                      (0, i.jsx)(e, {
                          deviceId: t,
                          width: u,
                          height: m,
                          disabled: !n
                      }),
                      (0, i.jsx)(l.S, {})
                  ]
              })
          })
        : (0, i.jsxs)('div', {
              className: d.cameraWrapper,
              children: [
                  (0, i.jsx)('div', { className: d.previewImage }),
                  (0, i.jsx)(a.Tooltip, {
                      text: h ? null : c.intl.string(c.t['8jSzSU']),
                      children: (e) =>
                          (0, i.jsx)(a.Button, {
                              ...e,
                              onClick: () => g(!0),
                              disabled: !h,
                              children: c.intl.string(c.t.JIf4v7)
                          })
                  })
              ]
          });
}
