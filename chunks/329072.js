"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var r = n(284009),
    a = n.n(r),
    s = n(17928),
    l = n(980707),
    o = n(477782),
    d = n(820284),
    c = n(688810),
    u = n(270816),
    _ = n(287809),
    E = n(855187),
    A = n(625903),
    h = n(474397),
    I = n(780964),
    f = n(766075),
    p = n(652215),
    T = n(375708),
    m = n(731854);
function g(e) {
    let { onClose: t, onSelect: n, minimal: r = !1, appContext: g, onInteraction: S } = e,
        { analyticsLocations: N } = (0, c.Ay)(),
        C = (0, s.bG)([_.default], () => {
            let e = _.default.getCurrentUser();
            return a()(null != e, "VideoDeviceMenu: currentUser cannot be undefined"), e;
        }),
        R = (0, u.H)({ deviceType: m.oh.VIDEO_INPUT, analyticsLocations: N, asSubmenu: r }),
        O = (0, E.A)(C.id, g),
        L = (function (e) {
            let { analyticsLocations: t } = (0, c.Ay)();
            return (0, i.jsx)(o.Dr, {
                id: "video-settings",
                label: T.intl.string(T.t.LKzQSF),
                action: () => {
                    (0, f.openUserSettings)(I.X.CAMERA_CATEGORY, { analyticsLocations: t }),
                        (0, h.A)(e, e === p.BRT.POPOUT);
                },
                icon: A.Z,
                leadingAccessory: { type: "icon", icon: A.Z },
            });
        })(g);
    return (0, i.jsx)(d.A, {
        object: p.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(l.W, {
            "data-menu-migrated": !0,
            onClose: t,
            navId: "video-device-context",
            variant: "fixed",
            "aria-label": T.intl.string(T.t.F122Gz),
            onSelect: n,
            onInteraction: S,
            children: [R, (0, i.jsxs)(o.rX, { children: [O, r ? L : null] })],
        }),
    });
}
