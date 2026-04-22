l.d(t, { A: () => m });
var n = l(627968);
l(64700);
var i = l(284009),
    s = l.n(i),
    a = l(311907),
    r = l(861672),
    o = l(477782),
    c = l(820284),
    d = l(688810),
    u = l(270816),
    h = l(287809),
    g = l(855187),
    f = l(555572),
    A = l(652215),
    v = l(731854),
    _ = l(985018);
function m(e) {
    let { onClose: t, onSelect: l, minimal: i = !1, appContext: m, onInteraction: p } = e,
        { analyticsLocations: x } = (0, d.Ay)(),
        C = (0, a.bG)([h.default], () => {
            let e = h.default.getCurrentUser();
            return s()(null != e, "VideoDeviceMenu: currentUser cannot be undefined"), e;
        }),
        E = (0, u.H)({ deviceType: v.oh.VIDEO_INPUT, analyticsLocations: x, asSubmenu: i }),
        I = (0, g.A)(C.id, m),
        N = (0, f.A)(m);
    return (0, n.jsx)(c.A, {
        object: A.ZSU.CONTEXT_MENU,
        children: (0, n.jsxs)(r.W, {
            "data-menu-migrated": !0,
            onClose: t,
            navId: "video-device-context",
            variant: "fixed",
            "aria-label": _.intl.string(_.t.F122Gz),
            onSelect: l,
            onInteraction: p,
            children: [E, (0, n.jsxs)(o.rX, { children: [I, i ? N : null] })],
        }),
    });
}
