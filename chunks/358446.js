n.d(t, {
    K: () => f,
    Z: () => g
}),
    n(388685);
var i = n(255367);
n(73800);
var r = n(704215),
    o = n(481060),
    s = n(13245),
    l = n(312839),
    a = n(706140),
    c = n(809357),
    d = n(987650),
    u = n(921944),
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
        { trackView: n, trackClick: r } = (0, l.R)(d.n0.KeybindIndicatorsNotification, { notif_type: d.n0.KeybindIndicatorsNotification });
    return {
        icon: null,
        body: (0, i.jsxs)('div', {
            className: p.notificationBody,
            children: [
                (0, i.jsx)('div', {
                    className: p.iconContainer,
                    children: (0, i.jsx)(o.S6n, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 28,
                        width: 28
                    })
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    children: h.intl.string(h.t.EFRNtL)
                })
            ]
        }),
        onDismissClick: (e, n) => {
            r('dismiss'), t(u.L.DISMISS), s.Z.updateNotificationStatus(n);
        },
        onNotificationShow: () => {
            t(u.L.AUTO_DISMISS), n();
        }
    };
}
