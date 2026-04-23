n.d(t, { A: () => v });
var i = n(627968);
n(64700);
var l = n(284009),
    s = n.n(l),
    a = n(311907),
    r = n(861672),
    o = n(477782),
    d = n(820284),
    c = n(688810),
    u = n(270816),
    h = n(287809),
    _ = n(855187),
    g = n(555572),
    A = n(652215),
    f = n(731854),
    m = n(985018);
function v(e) {
    let { onClose: t, onSelect: n, minimal: l = !1, appContext: v, onInteraction: p } = e,
        { analyticsLocations: x } = (0, c.Ay)(),
        b = (0, a.bG)([h.default], () => {
            let e = h.default.getCurrentUser();
            return s()(null != e, "VideoDeviceMenu: currentUser cannot be undefined"), e;
        }),
        I = (0, u.H)({ deviceType: f.oh.VIDEO_INPUT, analyticsLocations: x, asSubmenu: l }),
        E = (0, _.A)(b.id, v),
        C = (0, g.A)(v);
    return (0, i.jsx)(d.A, {
        object: A.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(r.W, {
            "data-menu-migrated": !0,
            onClose: t,
            navId: "video-device-context",
            variant: "fixed",
            "aria-label": m.intl.string(m.t.F122Gz),
            onSelect: n,
            onInteraction: p,
            children: [I, (0, i.jsxs)(o.rX, { children: [E, l ? C : null] })],
        }),
    });
}
