i.d(t, { g: () => T });
var n = i(311907),
    l = i(274372),
    s = i(915618),
    r = i(399925),
    a = i(670470),
    u = i(419954),
    o = i(430452),
    d = i(780964),
    _ = i(985018);
let T = (0, u.zD)(d.X.CLIPS_VIEWERSIDE_CLIPS_SETTING, {
    useTitle: () => _.intl.string(_.t.NWw7kY),
    useSubtitle: () => _.intl.string(_.t["0vjy8N"]),
    useValue: function () {
        return (0, n.bG)([l.A], () => l.A.getSettings().viewerClipsEnabled);
    },
    setValue: (e) => r.Wn({ enabled: e, trackAnalytics: !0 }),
    usePredicate: function () {
        let { enableViewerClipping: e } = a.A.useExperiment({ location: "Data & Privacy" }, { autoTrackExposure: !1 }),
            t = (0, n.bG)([o.Ay], () => (0, s.A)(o.Ay));
        return e && t;
    },
});
