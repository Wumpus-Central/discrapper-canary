n.d(e, { L: () => S });
var i = n(714338),
    l = n(857595),
    s = n(607070),
    u = n(509613),
    r = n(358085),
    a = n(313789),
    o = n(981631),
    T = n(388032);
let S = (0, u.UO)(a.n.APPEARANCE_ZOOM, {
    usePredicate: () => r.isPlatformEmbedded,
    useTitle: () => T.intl.string(T.t.i19n5L),
    useSubtitle: () => T.intl.string(T.t.ip0uSf),
    markers: o.yqN.ZOOM_SCALES,
    stickToMarkers: !0,
    minValue: o.yqN.ZOOM_SCALES["0"],
    maxValue: o.yqN.ZOOM_SCALES[o.yqN.ZOOM_SCALES.length - 1],
    useDefaultValue: () => o.yqN.ZOOM_DEFAULT,
    getInitialValue: () => s.Z.zoom,
    onValueRender: (t) => "".concat(t.toFixed(0), "%"),
    asValueChanges: (t) => (0, l.cq)(t),
    useSearchTerms: () => [T.intl.string(T.t.ip0uSf)],
    useHintText: () => T.intl.format(T.t.OMkSUo, { modKey: i.Z.modKey }),
});
