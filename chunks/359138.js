n.d(t, { Z: () => p }), n(388685);
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
    _ = 218;
function p() {
    let e = c.Z.getCameraComponent(),
        t = (0, a.e7)([c.Z], () => c.Z.getVideoDeviceId()),
        [n, p] = i.useState(!1),
        h = (0, a.e7)([c.Z], () => c.Z.isVideoAvailable());
    return n
        ? (0, r.jsx)("div", {
              className: d.cameraWrapper,
              children: (0, r.jsxs)("div", {
                  className: d.camera,
                  children: [
                      (0, r.jsx)(e, {
                          deviceId: t,
                          width: f,
                          height: _,
                          disabled: !n,
                      }),
                      (0, r.jsx)(l.S, {}),
                  ],
              }),
          })
        : (0, r.jsx)("div", {
              className: d.cameraWrapper,
              children: (0, r.jsx)(o.u, {
                  text: h ? null : u.intl.string(u.t["8jSzSe"]),
                  children: (0, r.jsx)(s.Button, {
                      variant: "primary",
                      text: u.intl.string(u.t.JIf4v7),
                      onClick: () => p(!0),
                      disabled: !h,
                  }),
              }),
          });
}
