i.d(e, { S: () => o });
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(430452),
    u = i(780964),
    a = i(985018);
let o = (0, s.zD)(u.X.STREAMING_ADVANCED_SCREENSHARE, {
    useTitle: () => a.intl.string(a.t.GmWk2E),
    useSearchTerms: () => [a.intl.string(a.t["Fj/xn1"])],
    useSubtitle: () => a.intl.string(a.t["Fj/xn1"]),
    useValue: function () {
        return (0, n.bG)([r.A], () => r.A.getVideoHook());
    },
    setValue: l.A.setVideoHook,
    usePredicate: function () {
        return (0, n.bG)([r.A], () => r.A.supportsVideoHook());
    },
});
