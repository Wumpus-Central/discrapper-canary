n.d(t, {
    A: () => g,
});
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    o = n(311907),
    s = n(397927),
    l = n(820284),
    c = n(688810),
    u = n(48435),
    d = n(287809),
    f = n(855187),
    p = n(555572),
    _ = n(652215),
    h = n(731854),
    m = n(985018);

function g(e) {
    let { onClose: t, onSelect: n, minimal: i = !1, appContext: g, onInteraction: E } = e,
        { analyticsLocations: y } = (0, c.Ay)(),
        b = (0, o.bG)([d.default], () => {
            let e = d.default.getCurrentUser();
            return a()(null != e, "VideoDeviceMenu: currentUser cannot be undefined"), e;
        }),
        O = (0, u.H)({
            deviceType: h.oh.VIDEO_INPUT,
            analyticsLocations: y,
            showAllDevices: !0,
            asSubmenu: i,
        }),
        v = (0, f.A)(b.id, g),
        A = (0, p.A)(g);
    return (0, r.jsx)(l.A, {
        object: _.ZSU.CONTEXT_MENU,
        children: (0, r.jsxs)(s.W1t, {
            "data-menu-migrated": !0,
            onClose: t,
            navId: "video-device-context",
            variant: "fixed",
            "aria-label": m.intl.string(m.t.F122Gz),
            onSelect: n,
            onInteraction: E,
            children: [
                O,
                (0, r.jsxs)(s.rXV, {
                    children: [v, i ? A : null],
                }),
            ],
        }),
    });
}
