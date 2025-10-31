n.d(e, { Z: () => c });
var i = n(442837),
    l = n(924557),
    r = n(435064),
    u = n(39604),
    s = n(509613),
    a = n(313789),
    o = n(388032);
let c = (0, s.qs)(a.n.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
    useTitle: () => o.intl.string(o.t.yXvykv),
    useSubtitle: () => o.intl.string(o.t.YP3ujk),
    useValue: () => {
        let t = (0, l.Go)(),
            e = (0, i.e7)([r.Z], () => r.Z.getSettings().decoupledClipsEnabled);
        return t && e;
    },
    usePredicate: () => {
        let t = (0, l.Go)(),
            e = r.Z.isDecoupledGameClippingEnabled();
        return t && e;
    },
    setValue: (t) =>
        u._Q({
            enabled: t,
            trackAnalytics: !0,
        }),
});
