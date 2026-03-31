n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(744808),
    a = n(672385),
    r = n(985018),
    o = n(986849);
function c(e) {
    let { context: t, analyticsLocations: n, profileFrame: c, handleOpenProfile: d } = e,
        u = (0, i.jsx)("div", {
            className: o.qr,
            children: (0, i.jsx)(l.DUT, {
                onClick: () => {
                    d(), (0, a.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: n, ...t });
                },
                className: o.wC,
                children: (0, i.jsx)(l.Text, {
                    color: "text-strong",
                    variant: "text-sm/normal",
                    children: r.intl.string(r.t["+Xp3hq"]),
                }),
            }),
        });
    return null != c ? (0, i.jsxs)("div", { className: o.xQ, children: [(0, i.jsx)(s.A, { frame: c }), u] }) : u;
}
