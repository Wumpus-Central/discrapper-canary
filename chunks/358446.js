n.d(t, {
    K: function () {
        return f;
    },
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var s = n(704215),
    r = n(481060),
    o = n(13245),
    a = n(312839),
    l = n(706140),
    c = n(809357),
    d = n(987650),
    u = n(921944),
    h = n(388032),
    p = n(60944);
function f() {
    let [e, t] = (0, l.cv)([s.z.OVERLAY_KEYBIND_NOTIFICATION]),
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
        { trackView: n, trackClick: s } = (0, a.R)(d.n0.KeybindIndicatorsNotification, { notif_type: d.n0.KeybindIndicatorsNotification });
    return {
        icon: null,
        body: (0, i.jsxs)('div', {
            className: p.notificationBody,
            children: [
                (0, i.jsx)('div', {
                    className: p.iconContainer,
                    children: (0, i.jsx)(r.MicrophoneIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 28,
                        width: 28
                    })
                }),
                (0, i.jsx)(r.Text, {
                    variant: 'text-sm/normal',
                    children: h.intl.string(h.t.EFRNtL)
                })
            ]
        }),
        onDismissClick: (e, n) => {
            s('dismiss'), t(u.L.DISMISS), o.Z.updateNotificationStatus(n);
        },
        onNotificationShow: () => {
            t(u.L.AUTO_DISMISS), n();
        }
    };
}
