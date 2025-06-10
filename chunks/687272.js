n.d(t, {
    QU: () => r,
    _x: () => u
});
var i = n(818083),
    l = n(432919);
let a = (0, i.B)({
        kind: 'user',
        id: '2025-06_desktop_notifications_view_tracking',
        label: 'Track when a desktop notification is viewed',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Track Notification View',
                config: { enabled: !0 }
            }
        ]
    }),
    r = (e) => {
        let { enabled: t } = a.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
        return t;
    },
    u = (e, t) => {
        if (null == t) return !1;
        let n = (0, l.h)(t),
            i = r(e);
        return n && i;
    };
