i.d(e, { g: () => E });
var n = i(311907),
    l = i(274372),
    s = i(915618),
    r = i(399925),
    u = i(670470),
    a = i(419954),
    o = i(430452),
    T = i(780964),
    A = i(358776),
    S = i(985018);
let E = (0, a.zD)(T.X.CLIPS_VIEWERSIDE_CLIPS_SETTING, {
    useTitle: () => S.intl.string(S.t.NWw7kY),
    useSubtitle: () => S.intl.string(S.t["0vjy8N"]),
    useValue: function () {
        return (0, n.bG)([l.A], () => l.A.getSettings().viewerClipsEnabled);
    },
    setValue: (t) =>
        r.Wn({
            enabled: t,
            trackAnalytics: !0,
        }),
    usePredicate: function () {
        let t = (0, A.$m)("DataAndPrivacyPanel"),
            { enableViewerClipping: e } = u.A.useExperiment({ location: "Data & Privacy" }, { autoTrackExposure: !1 }),
            i = (0, n.bG)([o.A], () => (0, s.A)(o.A));
        return t && e && i;
    },
});
