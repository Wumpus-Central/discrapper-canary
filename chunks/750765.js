"use strict";
n.d(t, { A: () => E });
var r = n(627968);
n(64700);
var i = n(284009),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    l = n(820284),
    u = n(688810),
    c = n(48435),
    d = n(287809),
    _ = n(855187),
    f = n(555572),
    p = n(652215),
    h = n(731854),
    m = n(985018);
function E(e) {
    let { onClose: t, onSelect: n, minimal: i = !1, appContext: E, onInteraction: g } = e,
        { analyticsLocations: A } = (0, u.Ay)(),
        I = (0, a.bG)([d.default], () => {
            let e = d.default.getCurrentUser();
            return s()(null != e, "VideoDeviceMenu: currentUser cannot be undefined"), e;
        }),
        T = (0, c.H)({ deviceType: h.oh.VIDEO_INPUT, analyticsLocations: A, asSubmenu: i }),
        S = (0, _.A)(I.id, E),
        y = (0, f.A)(E);
    return (0, r.jsx)(l.A, {
        object: p.ZSU.CONTEXT_MENU,
        children: (0, r.jsxs)(o.W1t, {
            "data-menu-migrated": !0,
            onClose: t,
            navId: "video-device-context",
            variant: "fixed",
            "aria-label": m.intl.string(m.t.F122Gz),
            onSelect: n,
            onInteraction: g,
            children: [T, (0, r.jsxs)(o.rXV, { children: [S, i ? y : null] })],
        }),
    });
}
