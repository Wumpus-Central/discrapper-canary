n.d(t, {
    V: function () {
        return l;
    }
});
var i = n(331119),
    s = n(575595),
    r = n(650032);
let a = 'getWhatsNewBadgeCount',
    l = () => {
        let { enabled: e } = r._.getCurrentConfig({ location: a }, { autoTrackExposure: !1 }),
            { enabled: t } = s.r.getCurrentConfig({ location: a }, { autoTrackExposure: !1 }),
            { enabled: n } = i.C.getCurrentConfig({ location: a }, { autoTrackExposure: !1 });
        return e && !t && !n;
    };
