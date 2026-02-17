i.d(e, { G: () => T });
var n = i(775121),
    l = i(955572),
    s = i(775602),
    r = i(419954),
    a = i(723702),
    u = i(780964),
    o = i(358776),
    d = i(652215),
    A = i(985018);
let T = (0, r.sN)(u.X.APPEARANCE_ZOOM, {
    usePredicate: () => a.isPlatformEmbedded,
    useTitle: () => A.intl.string(A.t.i19n5L),
    useSubtitle: () =>
        (0, o.bp)("Zoom") ? A.intl.format(A.t["x9PK/3"], { modKey: n.A.modKey }) : A.intl.string(A.t.ip0uSf),
    markers: d.hH7.ZOOM_SCALES,
    stickToMarkers: !0,
    minValue: d.hH7.ZOOM_SCALES["0"],
    maxValue: d.hH7.ZOOM_SCALES[d.hH7.ZOOM_SCALES.length - 1],
    useDefaultValue: () => d.hH7.ZOOM_DEFAULT,
    getInitialValue: () => s.A.zoom,
    onValueRender: (t) => `${t.toFixed(0)}%`,
    asValueChanges: (t) => (0, l.Qp)(t),
    useSearchTerms: () => [A.intl.string(A.t.ip0uSf)],
    useHintText: () => ((0, o.bp)("Zoom") ? null : A.intl.format(A.t.OMkSUo, { modKey: n.A.modKey })),
});
