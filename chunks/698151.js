n.d(e, { K: () => d });
var i = n(924557),
    l = n(509613),
    s = n(313789),
    r = n(161799),
    u = n(758620),
    a = n(90235),
    o = n(759743),
    c = n(388032);
let d = (0, l.k4)(s.n.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
    useTitle: () => c.intl.string(c.t.sA0WKL),
    usePredicate: () => {
        let { enableAdvancedSignals: t } = i.NV.useExperiment(
            { location: "ClipsAutomaticClippingCategory" },
            { autoTrackExposure: !1 },
        );
        return t;
    },
    buildLayout: () => [r.z, u.C, a.f, o.a],
});
