n.d(t, { G: () => g });
var i = n(311907),
    s = n(775121),
    l = n(955572),
    a = n(775602),
    r = n(419954),
    o = n(723702),
    d = n(780964),
    c = n(358776),
    u = n(652215),
    m = n(985018);
let g = (0, r.sN)(d.X.APPEARANCE_ZOOM, {
    usePredicate: () => o.isPlatformEmbedded,
    useTitle: () => m.intl.string(m.t.i19n5L),
    useSubtitle: () =>
        (0, c.bp)("Zoom") ? m.intl.format(m.t["x9PK/3"], { modKey: s.A.modKey }) : m.intl.string(m.t.ip0uSf),
    markers: u.hH7.ZOOM_SCALES,
    stickToMarkers: !0,
    minValue: u.hH7.ZOOM_SCALES["0"],
    maxValue: u.hH7.ZOOM_SCALES[u.hH7.ZOOM_SCALES.length - 1],
    useDefaultValue: () => u.hH7.ZOOM_DEFAULT,
    getInitialValue: () => a.A.zoom,
    useExternalValue: () => (0, i.bG)([a.A], () => a.A.zoom),
    onValueRender: (e) => `${e.toFixed(0)}%`,
    setValue: (e) => (0, l.Qp)(e),
    useSearchTerms: () => [m.intl.string(m.t.ip0uSf)],
    useHintText: () => ((0, c.bp)("Zoom") ? null : m.intl.format(m.t.OMkSUo, { modKey: s.A.modKey })),
});
