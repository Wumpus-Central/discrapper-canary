i.d(e, {
    g: () => d,
});
var n = i(311907),
    l = i(274372),
    s = i(915618),
    r = i(399925),
    u = i(670470),
    a = i(419954),
    o = i(430452),
    T = i(780964),
    A = i(985018);
let d = (0, a.zD)(T.X.CLIPS_VIEWERSIDE_CLIPS_SETTING, {
    useTitle: () => A.intl.string(A.t.NWw7kY),
    useSubtitle: () => A.intl.string(A.t["0vjy8N"]),
    useValue: function () {
        return (0, n.bG)([l.A], () => l.A.getSettings().viewerClipsEnabled);
    },
    setValue: (t) =>
        r.Wn({
            enabled: t,
            trackAnalytics: !0,
        }),
    usePredicate: function () {
        let { enableViewerClipping: t } = u.A.useExperiment(
                {
                    location: "Data & Privacy",
                },
                {
                    autoTrackExposure: !1,
                },
            ),
            e = (0, n.bG)([o.A], () => (0, s.A)(o.A));
        return t && e;
    },
});
