n.d(t, {
    A: () => b,
    B: () => f,
}),
    n(896048);
var i = n(627968);
n(64700);
var r = n(554146),
    s = n(397927),
    l = n(684013),
    o = n(684748),
    a = n(160761),
    c = n(994322),
    d = n(672396),
    u = n(49999),
    h = n(985018),
    p = n(199563);

function f() {
    let e = (0, c.A)({
            location: "Overlay",
            options: {
                autoTrackExposure: !1,
            },
        }),
        [t, n] = (0, a.DP)(e ? [r.M.OVERLAY_KEYBIND_NOTIFICATION] : []);
    return {
        showKeybindIndicators: null != t && e,
        dismissKeybindNotification: n,
    };
}

function b(e) {
    let { markAsDismissed: t } = e,
        { trackView: n, trackClick: r } = (0, o.Y)(d.KS.KeybindIndicatorsNotification, {
            notif_type: d.KS.KeybindIndicatorsNotification,
        });
    return {
        icon: null,
        body: (0, i.jsxs)("div", {
            className: p.A,
            children: [
                (0, i.jsx)("div", {
                    className: p.z,
                    children: (0, i.jsx)(s.cNw, {
                        size: "custom",
                        color: "currentColor",
                        height: 28,
                        width: 28,
                    }),
                }),
                (0, i.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    children: h.intl.string(h.t.EFRNtK),
                }),
            ],
        }),
        onDismissClick: (e, n) => {
            r("dismiss"), t(u.i.DISMISS), l.A.updateNotificationStatus(n);
        },
        onNotificationShow: () => {
            t(u.i.AUTO_DISMISS), n();
        },
    };
}
