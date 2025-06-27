n.d(e, {
    QU: () => r,
    _x: () => o
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
    r = (t) => {
        let { enabled: e } = a.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
        return e;
    },
    o = (t, e) => {
        if (null == e) return !1;
        let n = (0, l.h)(e),
            i = r(t);
        return n && i;
    };
