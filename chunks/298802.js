i.d(e, { G: () => S });
var n = i(311907),
    l = i(775121),
    s = i(955572),
    r = i(775602),
    a = i(419954),
    u = i(723702),
    o = i(780964),
    d = i(358776),
    A = i(652215),
    T = i(985018);
let S = (0, a.sN)(o.X.APPEARANCE_ZOOM, {
    usePredicate: () => u.isPlatformEmbedded,
    useTitle: () => T.intl.string(T.t.i19n5L),
    useSubtitle: () =>
        (0, d.bp)("Zoom") ? T.intl.format(T.t["x9PK/3"], { modKey: l.A.modKey }) : T.intl.string(T.t.ip0uSf),
    markers: A.hH7.ZOOM_SCALES,
    stickToMarkers: !0,
    minValue: A.hH7.ZOOM_SCALES["0"],
    maxValue: A.hH7.ZOOM_SCALES[A.hH7.ZOOM_SCALES.length - 1],
    useDefaultValue: () => A.hH7.ZOOM_DEFAULT,
    getInitialValue: () => r.A.zoom,
    useExternalValue: () => (0, n.bG)([r.A], () => r.A.zoom),
    onValueRender: (t) => `${t.toFixed(0)}%`,
    setValue: (t) => (0, s.Qp)(t),
    useSearchTerms: () => [T.intl.string(T.t.ip0uSf)],
    useHintText: () => ((0, d.bp)("Zoom") ? null : T.intl.format(T.t.OMkSUo, { modKey: l.A.modKey })),
});
