n.d(t, {
    K: () => p,
    Z: () => g,
}),
    n(388685);
var i = n(54381);
n(473749);
var r = n(704215),
    a = n(481060),
    s = n(13245),
    o = n(312839),
    l = n(706140),
    c = n(809357),
    d = n(987650),
    u = n(921944),
    f = n(388032),
    h = n(849356);
function p() {
    let e = (0, c.Z)({
            location: "Overlay",
            options: { autoTrackExposure: !1 },
        }),
        [t, n] = (0, l.cv)(e ? [r.z.OVERLAY_KEYBIND_NOTIFICATION] : []);
    return {
        showKeybindIndicators: null != t && e,
        dismissKeybindNotification: n,
    };
}
function g(e) {
    let { markAsDismissed: t } = e,
        { trackView: n, trackClick: r } = (0, o.R)(d.n0.KeybindIndicatorsNotification, {
            notif_type: d.n0.KeybindIndicatorsNotification,
        });
    return {
        icon: null,
        body: (0, i.jsxs)("div", {
            className: h.notificationBody,
            children: [
                (0, i.jsx)("div", {
                    className: h.iconContainer,
                    children: (0, i.jsx)(a.S6n, {
                        size: "custom",
                        color: "currentColor",
                        height: 28,
                        width: 28,
                    }),
                }),
                (0, i.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    children: f.intl.string(f.t.EFRNtK),
                }),
            ],
        }),
        onDismissClick: (e, n) => {
            r("dismiss"), t(u.L.DISMISS), s.Z.updateNotificationStatus(n);
        },
        onNotificationShow: () => {
            t(u.L.AUTO_DISMISS), n();
        },
    };
}
