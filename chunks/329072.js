t.d(n, { A: () => U });
var i = t(477900);
t(582128);
var r = t(284009),
    c = t.n(r),
    s = t(17928),
    d = t(980707),
    o = t(477782),
    a = t(820284),
    l = t(688810),
    u = t(270816),
    p = t(287809),
    A = t(855187),
    g = t(625903),
    h = t(474397),
    v = t(780964),
    b = t(766075),
    C = t(652215),
    S = t(375708),
    T = t(731854);
function U(e) {
    let { onClose: n, onSelect: t, minimal: r = !1, appContext: U, onInteraction: f } = e,
        { analyticsLocations: x } = (0, l.Ay)(),
        I = (0, s.bG)([p.default], () => {
            let e = p.default.getCurrentUser();
            return c()(null != e, "VideoDeviceMenu: currentUser cannot be undefined"), e;
        }),
        j = (0, u.H)({ deviceType: T.oh.VIDEO_INPUT, analyticsLocations: x, asSubmenu: r }),
        y = (0, A.A)(I.id, U),
        E = (function (e) {
            let { analyticsLocations: n } = (0, l.Ay)();
            return (0, i.jsx)(o.Dr, {
                id: "video-settings",
                label: S.intl.string(S.t.LKzQSF),
                action: () => {
                    (0, b.openUserSettings)(v.X.CAMERA_CATEGORY, { analyticsLocations: n }),
                        (0, h.A)(e, e === C.BRT.POPOUT);
                },
                icon: g.SettingsIcon,
                leadingAccessory: { type: "icon", icon: g.SettingsIcon },
            });
        })(U);
    return (0, i.jsx)(a.A, {
        object: C.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(d.W, {
            "data-menu-migrated": !0,
            onClose: n,
            navId: "video-device-context",
            variant: "fixed",
            "aria-label": S.intl.string(S.t.F122Gz),
            onSelect: t,
            onInteraction: f,
            children: [j, (0, i.jsxs)(o.rX, { children: [y, r ? E : null] })],
        }),
    });
}
