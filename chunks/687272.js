n.d(t, {
    QU: () => a,
    _x: () => o,
});
var l = n(818083),
    i = n(432919);
let r = (0, l.B)({
        kind: "user",
        id: "2025-06_desktop_notifications_view_tracking",
        label: "Track when a desktop notification is viewed",
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: "Track Notification View",
                config: { enabled: !0 },
            },
        ],
    }),
    a = (e) => {
        let { enabled: t } = r.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
        return t;
    },
    o = (e, t) => {
        if (null == t) return !1;
        let n = (0, i.h)(t),
            l = a(e);
        return n && l;
    };
