n.d(e, { I: () => E });
var i = n(442837),
    l = n(435064),
    s = n(779618),
    u = n(39604),
    r = n(441167),
    a = n(509613),
    o = n(131951),
    S = n(313789),
    T = n(526665),
    c = n(388032);
let E = (0, a.qs)(S.n.CLIPS_VIEWERSIDE_CLIPS_SETTING, {
    useTitle: () => c.intl.string(c.t.NWw7kY),
    useSubtitle: () => c.intl.string(c.t["0vjy8N"]),
    useValue: function () {
        return (0, i.e7)([l.Z], () => l.Z.getSettings().viewerClipsEnabled);
    },
    setValue: (t) =>
        u.yl({
            enabled: t,
            trackAnalytics: !0,
        }),
    usePredicate: function () {
        let t = (0, T.BK)("DataAndPrivacyPanel"),
            { enableViewerClipping: e } = r.Z.useExperiment({ location: "Data & Privacy" }, { autoTrackExposure: !1 }),
            n = (0, i.e7)([o.Z], () => (0, s.Z)(o.Z));
        return t && e && n;
    },
});
