i.d(e, {
    G: () => A,
});
var n = i(775121),
    l = i(955572),
    s = i(775602),
    r = i(419954),
    u = i(723702),
    a = i(780964),
    o = i(652215),
    T = i(985018);
let A = (0, r.sN)(a.X.APPEARANCE_ZOOM, {
    usePredicate: () => u.isPlatformEmbedded,
    useTitle: () => T.intl.string(T.t.i19n5L),
    useSubtitle: () => T.intl.string(T.t.ip0uSf),
    markers: o.hH7.ZOOM_SCALES,
    stickToMarkers: !0,
    minValue: o.hH7.ZOOM_SCALES["0"],
    maxValue: o.hH7.ZOOM_SCALES[o.hH7.ZOOM_SCALES.length - 1],
    useDefaultValue: () => o.hH7.ZOOM_DEFAULT,
    getInitialValue: () => s.A.zoom,
    onValueRender: (t) => "".concat(t.toFixed(0), "%"),
    asValueChanges: (t) => (0, l.Qp)(t),
    useSearchTerms: () => [T.intl.string(T.t.ip0uSf)],
    useHintText: () =>
        T.intl.format(T.t.OMkSUo, {
            modKey: n.A.modKey,
        }),
});
