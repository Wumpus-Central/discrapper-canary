i.d(t, { S: () => o });
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(430452),
    a = i(780964),
    u = i(985018);
let o = (0, s.zD)(a.X.STREAMING_ADVANCED_SCREENSHARE, {
    useTitle: () => u.intl.string(u.t.GmWk2E),
    useSearchTerms: () => [u.intl.string(u.t["Fj/xn1"])],
    useSubtitle: () => u.intl.string(u.t["Fj/xn1"]),
    useValue: function () {
        return (0, n.bG)([r.Ay], () => r.Ay.getVideoHook());
    },
    setValue: l.A.setVideoHook,
    usePredicate: function () {
        return (0, n.bG)([r.Ay], () => r.Ay.supportsVideoHook());
    },
});
