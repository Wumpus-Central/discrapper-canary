n.d(t, { V: () => l });
var r = n(331119),
    i = n(575595),
    s = n(650032);
let a = 'getWhatsNewBadgeCount',
    l = () => {
        let { enabled: e } = s._.getCurrentConfig({ location: a }, { autoTrackExposure: !1 }),
            { enabled: t } = i.r.getCurrentConfig({ location: a }, { autoTrackExposure: !1 }),
            { enabled: n } = r.C.getCurrentConfig({ location: a }, { autoTrackExposure: !1 });
        return e && !t && !n;
    };
