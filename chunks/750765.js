n.d(t, {
    A: () => g,
});
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
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
        { analyticsLocations: b } = (0, c.Ay)(),
        y = (0, s.bG)([d.default], () => {
            let e = d.default.getCurrentUser();
            return a()(null != e, "VideoDeviceMenu: currentUser cannot be undefined"), e;
        }),
        O = (0, u.H)({
            deviceType: h.oh.VIDEO_INPUT,
            analyticsLocations: b,
            showAllDevices: !0,
            asSubmenu: i,
        }),
        A = (0, f.A)(y.id, g),
        v = (0, p.A)(g);
    return (0, r.jsx)(l.A, {
        object: _.ZSU.CONTEXT_MENU,
        children: (0, r.jsxs)(o.W1t, {
            onClose: t,
            navId: "video-device-context",
            variant: "fixed",
            "aria-label": m.intl.string(m.t.F122Gz),
            onSelect: n,
            onInteraction: E,
            children: [
                O,
                (0, r.jsxs)(o.rXV, {
                    children: [A, i ? v : null],
                }),
            ],
        }),
    });
}
