n.d(t, { V: () => l });
var i = n(331119),
    r = n(575595),
    a = n(650032);
let s = 'getWhatsNewBadgeCount',
    l = () => {
        let { enabled: e } = a._.getCurrentConfig({ location: s }, { autoTrackExposure: !1 }),
            { enabled: t } = r.r.getCurrentConfig({ location: s }, { autoTrackExposure: !1 }),
            { enabled: n } = i.C.getCurrentConfig({ location: s }, { autoTrackExposure: !1 });
        return e && !t && !n;
    };
