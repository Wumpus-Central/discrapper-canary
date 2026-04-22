n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(939249),
    s = n(834730),
    a = n(744808),
    r = n(672385),
    o = n(985018),
    d = n(416497);
function c(e) {
    let { context: t, analyticsLocations: n, profileFrame: c, handleOpenProfile: u } = e,
        h = (0, i.jsx)("div", {
            className: d.qr,
            children: (0, i.jsx)(l.D, {
                onClick: () => {
                    u(), (0, r.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: n, ...t });
                },
                className: d.wC,
                children: (0, i.jsx)(s.E, {
                    color: "text-strong",
                    variant: "text-sm/normal",
                    children: o.intl.string(o.t["+Xp3hq"]),
                }),
            }),
        });
    return null != c
        ? (0, i.jsxs)("div", { className: d.xQ, children: [(0, i.jsx)(a.A, { frame: c, layout: "SIDEBAR" }), h] })
        : h;
}
