i.d(e, { t: () => u });
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    a = i(780964);
let u = (0, s.zD)(a.X.DISABLE_APP_COLLECTIONS_CACHE, {
    useTitle: () => "Disable Application Collections Cache",
    useSubtitle: () => "Forces application collection updates to be shown immediately.",
    useDisabled: () => (0, n.bG)([r.default], () => r.default.onlyShowPreviewAppCollections),
    useValue: () =>
        (0, n.bG)([r.default], () => r.default.disableAppCollectionsCache || r.default.onlyShowPreviewAppCollections),
    setValue: (t) => (0, l.x)({ disableAppCollectionsCache: t }),
});
