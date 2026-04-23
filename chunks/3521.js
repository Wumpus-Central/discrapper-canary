n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(990078),
    a = n(821609),
    r = n(964486),
    o = n(745317),
    d = n(430452),
    u = n(248864),
    c = n(985018),
    g = n(698292);
function m() {
    let e = d.Ay.getCameraComponent(),
        t = (0, s.bG)([d.Ay], () => d.Ay.getVideoDeviceId()),
        n = u.A.useField("previewEnabled"),
        m = (0, s.bG)([d.Ay], () => d.Ay.isVideoAvailable());
    return ((0, r.l0)(() => {
        u.A.setState({ previewEnabled: !1 });
    }),
    n)
        ? (0, i.jsx)("div", {
              className: g.T,
              children: (0, i.jsxs)("div", {
                  className: g.U,
                  children: [
                      (0, i.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                      (0, i.jsx)(o.k, {}),
                  ],
              }),
          })
        : (0, i.jsx)("div", {
              className: g.T,
              children: (0, i.jsx)(l.m, {
                  text: m ? null : c.intl.string(c.t["8jSzSe"]),
                  children: (0, i.jsx)(a.$, {
                      variant: "primary",
                      text: c.intl.string(c.t.JIf4v7),
                      onClick: () => u.A.setState({ previewEnabled: !0 }),
                      disabled: !m,
                  }),
              }),
          });
}
