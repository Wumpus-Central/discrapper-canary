i.d(e, {
    s: () => a,
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    u = i(780964);
let a = (0, s.zD)(u.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
    useTitle: () => "Only Show Preview App Collections",
    useSubtitle: () =>
        "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
    useValue: () => (0, n.bG)([r.default], () => r.default.onlyShowPreviewAppCollections),
    setValue: (t) =>
        (0, l.x)({
            onlyShowPreviewAppCollections: t,
        }),
});
