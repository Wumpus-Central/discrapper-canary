i.d(e, { G: () => T });
var n = i(775121),
    l = i(955572),
    s = i(775602),
    r = i(419954),
    a = i(723702),
    u = i(780964),
    o = i(652215),
    d = i(985018);
let T = (0, r.sN)(u.X.APPEARANCE_ZOOM, {
    usePredicate: () => a.isPlatformEmbedded,
    useTitle: () => d.intl.string(d.t.i19n5L),
    useSubtitle: () => d.intl.string(d.t.ip0uSf),
    markers: o.hH7.ZOOM_SCALES,
    stickToMarkers: !0,
    minValue: o.hH7.ZOOM_SCALES["0"],
    maxValue: o.hH7.ZOOM_SCALES[o.hH7.ZOOM_SCALES.length - 1],
    useDefaultValue: () => o.hH7.ZOOM_DEFAULT,
    getInitialValue: () => s.A.zoom,
    onValueRender: (t) => `${t.toFixed(0)}%`,
    asValueChanges: (t) => (0, l.Qp)(t),
    useSearchTerms: () => [d.intl.string(d.t.ip0uSf)],
    useHintText: () => d.intl.format(d.t.OMkSUo, { modKey: n.A.modKey }),
});
