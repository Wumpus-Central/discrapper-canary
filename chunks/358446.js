n.d(t, {
    K: () => f,
    Z: () => g,
}),
    n(388685);
var i = n(951288);
n(647438);
var r = n(704215),
    o = n(481060),
    l = n(13245),
    a = n(312839),
    s = n(706140),
    c = n(809357),
    d = n(987650),
    u = n(921944),
    h = n(388032),
    p = n(892701);
function f() {
    let e = (0, c.Z)({
            location: "Overlay",
            options: { autoTrackExposure: !1 },
        }),
        [t, n] = (0, s.cv)(e ? [r.z.OVERLAY_KEYBIND_NOTIFICATION] : []);
    return {
        showKeybindIndicators: null != t && e,
        dismissKeybindNotification: n,
    };
}
function g(e) {
    let { markAsDismissed: t } = e,
        { trackView: n, trackClick: r } = (0, a.R)(d.n0.KeybindIndicatorsNotification, {
            notif_type: d.n0.KeybindIndicatorsNotification,
        });
    return {
        icon: null,
        body: (0, i.jsxs)("div", {
            className: p.notificationBody,
            children: [
                (0, i.jsx)("div", {
                    className: p.iconContainer,
                    children: (0, i.jsx)(o.S6n, {
                        size: "custom",
                        color: "currentColor",
                        height: 28,
                        width: 28,
                    }),
                }),
                (0, i.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: h.intl.string(h.t.EFRNtK),
                }),
            ],
        }),
        onDismissClick: (e, n) => {
            r("dismiss"), t(u.L.DISMISS), l.Z.updateNotificationStatus(n);
        },
        onNotificationShow: () => {
            t(u.L.AUTO_DISMISS), n();
        },
    };
}
