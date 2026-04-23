n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(939249),
    s = n(834730),
    a = n(744808),
    r = n(672385),
    o = n(901703),
    d = n(985018),
    c = n(416497);
function u(e) {
    let { context: t, analyticsLocations: n, profileFrame: u, handleOpenProfile: h } = e,
        { showButton: A } = o.A.useConfig({ location: "UserProfileSidebarFooter" }),
        _ = A
            ? (0, i.jsx)("div", {
                  className: c.qr,
                  children: (0, i.jsx)(l.D, {
                      onClick: () => {
                          h(), (0, r.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: n, ...t });
                      },
                      className: c.wC,
                      children: (0, i.jsx)(s.E, {
                          color: "text-strong",
                          variant: "text-sm/normal",
                          children: d.intl.string(d.t["+Xp3hq"]),
                      }),
                  }),
              })
            : null;
    return null != u
        ? (0, i.jsxs)("div", { className: c.xQ, children: [(0, i.jsx)(a.A, { frame: u, layout: "SIDEBAR" }), _] })
        : _;
}
