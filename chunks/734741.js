n.d(t, {
    V: function () {
        return l;
    }
});
var i = n(331119),
    r = n(575595),
    s = n(650032);
let a = 'getWhatsNewBadgeCount',
    l = () => {
        let { enabled: e } = s._.getCurrentConfig({ location: a }, { autoTrackExposure: !1 }),
            { enabled: t } = r.r.getCurrentConfig({ location: a }, { autoTrackExposure: !1 }),
            { enabled: n } = i.C.getCurrentConfig({ location: a }, { autoTrackExposure: !1 });
        return e && !t && !n;
    };
