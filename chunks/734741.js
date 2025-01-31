n.d(t, { V: () => a });
var i = n(331119),
    s = n(575595),
    r = n(650032);
let l = 'getWhatsNewBadgeCount',
    a = () => {
        let { enabled: e } = r._.getCurrentConfig({ location: l }, { autoTrackExposure: !1 }),
            { enabled: t } = s.r.getCurrentConfig({ location: l }, { autoTrackExposure: !1 }),
            { enabled: n } = i.C.getCurrentConfig({ location: l }, { autoTrackExposure: !1 });
        return e && !t && !n;
    };
