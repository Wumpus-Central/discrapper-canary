n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(28664),
    o = n(481060),
    s = n(493773),
    l = n(747545),
    c = n(131951),
    u = n(106388),
    d = n(388032),
    f = n(79414);
let p = 387,
    _ = 218;
function m() {
    let e = c.Z.getCameraComponent(),
        t = (0, i.e7)([c.Z], () => c.Z.getVideoDeviceId()),
        n = u.Z.useField("previewEnabled"),
        m = (0, i.e7)([c.Z], () => c.Z.isVideoAvailable());
    return ((0, s.zq)(() => {
        u.Z.setState({ previewEnabled: !1 });
    }),
    n)
        ? (0, r.jsx)("div", {
              className: f.cameraWrapper,
              children: (0, r.jsxs)("div", {
                  className: f.camera,
                  children: [
                      (0, r.jsx)(e, {
                          deviceId: t,
                          width: p,
                          height: _,
                          disabled: !n,
                      }),
                      (0, r.jsx)(l.S, {}),
                  ],
              }),
          })
        : (0, r.jsx)("div", {
              className: f.cameraWrapper,
              children: (0, r.jsx)(a.u, {
                  text: m ? null : d.intl.string(d.t["8jSzSe"]),
                  children: (0, r.jsx)(o.Button, {
                      variant: "primary",
                      text: d.intl.string(d.t.JIf4v7),
                      onClick: () => u.Z.setState({ previewEnabled: !0 }),
                      disabled: !m,
                  }),
              }),
          });
}
