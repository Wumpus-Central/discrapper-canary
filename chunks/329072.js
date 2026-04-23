n.d(t, { A: () => b });
var i = n(627968);
n(64700);
var l = n(284009),
    s = n.n(l),
    a = n(17928),
    r = n(550079),
    o = n(477782),
    c = n(820284),
    d = n(688810),
    u = n(270816),
    h = n(287809),
    _ = n(855187),
    g = n(625903),
    f = n(474397),
    A = n(780964),
    m = n(858897),
    v = n(652215),
    p = n(985018),
    x = n(731854);
function b(e) {
    let { onClose: t, onSelect: n, minimal: l = !1, appContext: b, onInteraction: I } = e,
        { analyticsLocations: E } = (0, d.Ay)(),
        C = (0, a.bG)([h.default], () => {
            let e = h.default.getCurrentUser();
            return s()(null != e, "VideoDeviceMenu: currentUser cannot be undefined"), e;
        }),
        D = (0, u.H)({ deviceType: x.oh.VIDEO_INPUT, analyticsLocations: E, asSubmenu: l }),
        y = (0, _.A)(C.id, b),
        N = (function (e) {
            let { analyticsLocations: t } = (0, d.Ay)();
            return (0, i.jsx)(o.Dr, {
                id: "video-settings",
                label: p.intl.string(p.t.LKzQSF),
                action: () => {
                    (0, m.openUserSettings)(A.X.CAMERA_CATEGORY, { analyticsLocations: t }),
                        (0, f.A)(e, e === v.BRT.POPOUT);
                },
                icon: g.Z,
                leadingAccessory: { type: "icon", icon: g.Z },
            });
        })(b);
    return (0, i.jsx)(c.A, {
        object: v.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(r.W, {
            "data-menu-migrated": !0,
            onClose: t,
            navId: "video-device-context",
            variant: "fixed",
            "aria-label": p.intl.string(p.t.F122Gz),
            onSelect: n,
            onInteraction: I,
            children: [D, (0, i.jsxs)(o.rX, { children: [y, l ? N : null] })],
        }),
    });
}
