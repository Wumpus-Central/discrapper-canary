n.d(t, { Z: () => _ }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(28664),
    s = n(481060),
    l = n(747545),
    c = n(131951),
    u = n(388032),
    d = n(745343);
let f = 387,
    p = 218;
function _() {
    let e = c.Z.getCameraComponent(),
        t = (0, a.e7)([c.Z], () => c.Z.getVideoDeviceId()),
        [n, _] = i.useState(!1),
        m = (0, a.e7)([c.Z], () => c.Z.isVideoAvailable());
    return n
        ? (0, r.jsx)("div", {
              className: d.cameraWrapper,
              children: (0, r.jsxs)("div", {
                  className: d.camera,
                  children: [
                      (0, r.jsx)(e, {
                          deviceId: t,
                          width: f,
                          height: p,
                          disabled: !n,
                      }),
                      (0, r.jsx)(l.S, {}),
                  ],
              }),
          })
        : (0, r.jsx)("div", {
              className: d.cameraWrapper,
              children: (0, r.jsx)(o.u, {
                  text: m ? null : u.intl.string(u.t["8jSzSe"]),
                  children: (0, r.jsx)(s.Button, {
                      variant: "primary",
                      text: u.intl.string(u.t.JIf4v7),
                      onClick: () => _(!0),
                      disabled: !m,
                  }),
              }),
          });
}
