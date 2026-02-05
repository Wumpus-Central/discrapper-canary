i.d(e, { g: () => A });
var n = i(311907),
    l = i(274372),
    s = i(915618),
    r = i(399925),
    a = i(670470),
    u = i(419954),
    o = i(430452),
    d = i(780964),
    T = i(985018);
let A = (0, u.zD)(d.X.CLIPS_VIEWERSIDE_CLIPS_SETTING, {
    useTitle: () => T.intl.string(T.t.NWw7kY),
    useSubtitle: () => T.intl.string(T.t["0vjy8N"]),
    useValue: function () {
        return (0, n.bG)([l.A], () => l.A.getSettings().viewerClipsEnabled);
    },
    setValue: (t) => r.Wn({ enabled: t, trackAnalytics: !0 }),
    usePredicate: function () {
        let { enableViewerClipping: t } = a.A.useExperiment({ location: "Data & Privacy" }, { autoTrackExposure: !1 }),
            e = (0, n.bG)([o.A], () => (0, s.A)(o.A));
        return t && e;
    },
});
