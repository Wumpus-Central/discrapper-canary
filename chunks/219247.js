n.d(e, { Z: () => c });
var i = n(924557),
    l = n(341569),
    u = n(39604),
    r = n(509613),
    s = n(358085),
    a = n(313789),
    o = n(388032);
let c = (0, r.qs)(a.n.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
    useTitle: () => o.intl.string(o.t.yXvykv),
    useSubtitle: () => o.intl.string(o.t.YP3ujk),
    useValue: () => (0, l.nq)(),
    usePredicate: () => {
        let t = (0, i.w9)(),
            e = (0, s.isWindows)();
        return t && e;
    },
    setValue: (t) =>
        u._Q({
            enabled: t,
            trackAnalytics: !0,
        }),
});
