n.d(t, { g: () => o });
var i = n(311907),
    s = n(926919),
    l = n(419954),
    a = n(111162),
    r = n(780964);
let o = (0, l.zD)(r.X.FORCE_CANARY_API, {
    useTitle: () => "Force Canary API",
    useSubtitle: () => "Routes all API requests to Canary instances.",
    useValue: () => (0, i.bG)([a.default], () => a.default.isForcedCanary),
    setValue: (e) => {
        (0, s.x)({ canary: e });
    },
});
