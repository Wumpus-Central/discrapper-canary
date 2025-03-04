n.d(t, { V: () => a });
var r = n(331119),
    i = n(575595);
let s = 'getWhatsNewBadgeCount',
    a = () => {
        let { enabled: e } = i.r.getCurrentConfig({ location: s }, { autoTrackExposure: !1 }),
            { enabled: t } = r.C.getCurrentConfig({ location: s }, { autoTrackExposure: !1 });
        return !e && !t;
    };
