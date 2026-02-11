"use strict";
n.d(t, { A: () => f, B: () => A });
var i = n(627968);
n(64700);
var s = n(554146),
    l = n(397927),
    a = n(684013),
    r = n(684748),
    o = n(160761),
    d = n(994322),
    c = n(672396),
    u = n(49999),
    h = n(985018),
    p = n(96353);
function A() {
    let e = (0, d.A)({ location: "Overlay", options: { autoTrackExposure: !1 } }),
        [t, n] = (0, o.DP)(e ? [s.M.OVERLAY_KEYBIND_NOTIFICATION] : []);
    return { showKeybindIndicators: null != t && e, dismissKeybindNotification: n };
}
function f(e) {
    let { markAsDismissed: t } = e,
        { trackView: n, trackClick: s } = (0, r.Y)(c.KS.KeybindIndicatorsNotification, {
            notif_type: c.KS.KeybindIndicatorsNotification,
        });
    return {
        icon: null,
        body: (0, i.jsxs)("div", {
            className: p.A,
            children: [
                (0, i.jsx)("div", {
                    className: p.z,
                    children: (0, i.jsx)(l.cNw, { size: "custom", color: "currentColor", height: 28, width: 28 }),
                }),
                (0, i.jsx)(l.Text, { variant: "text-sm/normal", children: h.intl.string(h.t.EFRNtK) }),
            ],
        }),
        onDismissClick: (e, n) => {
            s("dismiss"), t(u.i.DISMISS), a.A.updateNotificationStatus(n);
        },
        onNotificationShow: () => {
            t(u.i.AUTO_DISMISS), n();
        },
    };
}
