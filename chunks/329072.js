"use strict";
n.d(t, { A: () => T });
var i = n(627968);
n(64700);
var r = n(284009),
    s = n.n(r),
    a = n(17928),
    o = n(980707),
    l = n(477782),
    u = n(820284),
    c = n(688810),
    d = n(270816),
    _ = n(287809),
    f = n(855187),
    h = n(625903),
    p = n(474397),
    E = n(780964),
    m = n(858897),
    g = n(652215),
    A = n(375708),
    I = n(731854);
function T(e) {
    let { onClose: t, onSelect: n, minimal: r = !1, appContext: T, onInteraction: S } = e,
        { analyticsLocations: N } = (0, c.Ay)(),
        y = (0, a.bG)([_.default], () => {
            let e = _.default.getCurrentUser();
            return s()(null != e, "VideoDeviceMenu: currentUser cannot be undefined"), e;
        }),
        C = (0, d.H)({ deviceType: I.oh.VIDEO_INPUT, analyticsLocations: N, asSubmenu: r }),
        v = (0, f.A)(y.id, T),
        O = (function (e) {
            let { analyticsLocations: t } = (0, c.Ay)();
            return (0, i.jsx)(l.Dr, {
                id: "video-settings",
                label: A.intl.string(A.t.LKzQSF),
                action: () => {
                    (0, m.openUserSettings)(E.X.CAMERA_CATEGORY, { analyticsLocations: t }),
                        (0, p.A)(e, e === g.BRT.POPOUT);
                },
                icon: h.Z,
                leadingAccessory: { type: "icon", icon: h.Z },
            });
        })(T);
    return (0, i.jsx)(u.A, {
        object: g.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(o.W, {
            "data-menu-migrated": !0,
            onClose: t,
            navId: "video-device-context",
            variant: "fixed",
            "aria-label": A.intl.string(A.t.F122Gz),
            onSelect: n,
            onInteraction: S,
            children: [C, (0, i.jsxs)(l.rX, { children: [v, r ? O : null] })],
        }),
    });
}
