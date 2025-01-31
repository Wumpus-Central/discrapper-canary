n.d(t, {
    K: () => g,
    Z: () => f
}),
    n(47120);
var i = n(200651);
n(192379);
var s = n(704215),
    l = n(481060),
    r = n(13245),
    o = n(312839),
    a = n(706140),
    d = n(809357),
    c = n(987650),
    u = n(921944),
    h = n(388032),
    p = n(60944);
function g() {
    let [e, t] = (0, a.cv)([s.z.OVERLAY_KEYBIND_NOTIFICATION]),
        n = (0, d.Z)({
            location: 'Overlay',
            options: { autoTrackExposure: !1 }
        });
    return {
        showKeybindIndicators: null != e && n,
        dismissKeybindNotification: t
    };
}
function f(e) {
    let { markAsDismissed: t } = e,
        { trackView: n, trackClick: s } = (0, o.R)(c.n0.KeybindIndicatorsNotification, { notif_type: c.n0.KeybindIndicatorsNotification });
    return {
        icon: null,
        body: (0, i.jsxs)('div', {
            className: p.notificationBody,
            children: [
                (0, i.jsx)('div', {
                    className: p.iconContainer,
                    children: (0, i.jsx)(l.S6n, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 28,
                        width: 28
                    })
                }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    children: h.intl.string(h.t.EFRNtL)
                })
            ]
        }),
        onDismissClick: (e, n) => {
            s('dismiss'), t(u.L.DISMISS), r.Z.updateNotificationStatus(n);
        },
        onNotificationShow: () => {
            t(u.L.AUTO_DISMISS), n();
        }
    };
}
