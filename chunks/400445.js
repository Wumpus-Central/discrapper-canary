n.d(t, { Z: () => h });
var r = n(255367),
    i = n(120356),
    l = n.n(i),
    o = n(793030),
    s = n(524437),
    a = n(453473),
    c = n(216789),
    u = n(791914),
    d = n(556871);
function h(e) {
    let { setTab: t, closePopout: n, badgeState: i } = e,
        h = (0, c.Us)({ location: "ForLaterInbox" });
    return (0, r.jsx)("div", {
        className: l()(d.container, { [d.widerInbox]: h }),
        children: (0, r.jsx)(o.y5, {
            component: (0, r.jsx)(u.Z, {
                tab: s.X.BOOKMARKS,
                setTab: t,
                closePopout: n,
                badgeState: i,
            }),
            children: (0, r.jsx)(a.K, { closePopout: n }),
        }),
    });
}
