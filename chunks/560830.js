n.d(t, { t: () => o });
var i = n(311907),
    s = n(926919),
    l = n(419954),
    a = n(111162),
    r = n(780964);
let o = (0, l.zD)(r.X.DISABLE_APP_COLLECTIONS_CACHE, {
    useTitle: () => "Disable Application Collections Cache",
    useSubtitle: () => "Forces application collection updates to be shown immediately.",
    useDisabled: () => (0, i.bG)([a.default], () => a.default.onlyShowPreviewAppCollections),
    useValue: () =>
        (0, i.bG)([a.default], () => a.default.disableAppCollectionsCache || a.default.onlyShowPreviewAppCollections),
    setValue: (e) => (0, s.x)({ disableAppCollectionsCache: e }),
});
