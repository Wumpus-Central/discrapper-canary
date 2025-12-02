n.d(e, { Z: () => d });
var i = n(924557),
    r = n(509613),
    l = n(313789),
    s = n(161799),
    u = n(758620),
    a = n(90235),
    o = n(759743),
    c = n(388032);
let d = (0, r.k4)(l.n.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
    useTitle: () => c.intl.string(c.t.sA0WKL),
    buildLayout: () => [s.Z, u.Z, a.Z, o.Z],
    usePredicate: () => {
        let { enableAdvancedSignals: t } = i.NV.useExperiment(
            { location: "ClipsAutomaticClippingCategory" },
            { autoTrackExposure: !1 },
        );
        return t;
    },
});
