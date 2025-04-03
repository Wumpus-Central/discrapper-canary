n.d(t, {
    K: () => f,
    Z: () => g
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(704215),
    s = n(481060),
    o = n(13245),
    l = n(312839),
    a = n(706140),
    c = n(809357),
    u = n(987650),
    d = n(921944),
    h = n(388032),
    p = n(204283);
function f() {
    let [e, t] = (0, a.cv)([r.z.OVERLAY_KEYBIND_NOTIFICATION]),
        n = (0, c.Z)({
            location: 'Overlay',
            options: { autoTrackExposure: !1 }
        });
    return {
        showKeybindIndicators: null != e && n,
        dismissKeybindNotification: t
    };
}
function g(e) {
    let { markAsDismissed: t } = e,
        { trackView: n, trackClick: r } = (0, l.R)(u.n0.KeybindIndicatorsNotification, { notif_type: u.n0.KeybindIndicatorsNotification });
    return {
        icon: null,
        body: (0, i.jsxs)('div', {
            className: p.notificationBody,
            children: [
                (0, i.jsx)('div', {
                    className: p.iconContainer,
                    children: (0, i.jsx)(s.S6n, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 28,
                        width: 28
                    })
                }),
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    children: h.NW.string(h.t.EFRNtL)
                })
            ]
        }),
        onDismissClick: (e, n) => {
            r('dismiss'), t(d.L.DISMISS), o.Z.updateNotificationStatus(n);
        },
        onNotificationShow: () => {
            t(d.L.AUTO_DISMISS), n();
        }
    };
}
