n.d(e, { L: () => g });
var i = n(54381),
    l = n(481060),
    s = n(714338),
    u = n(857595),
    r = n(607070),
    a = n(509613),
    o = n(358085),
    S = n(313789),
    T = n(981631),
    c = n(388032);
let E = (0, a.UO)(S.n.APPEARANCE_ZOOM, {
        useTitle: () => c.intl.string(c.t.i19n5L),
        useSubtitle: () => c.intl.string(c.t.ip0uSf),
        markers: T.yqN.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: T.yqN.ZOOM_SCALES["0"],
        maxValue: T.yqN.ZOOM_SCALES[T.yqN.ZOOM_SCALES.length - 1],
        getInitialValue: () => r.Z.zoom,
        onValueRender: (t) => "".concat(t.toFixed(0), "%"),
        asValueChanges: (t) => (0, u.cq)(t),
    }),
    d = (0, a.ON)(S.n.APPEARANCE_ZOOM_HELPER_TEXT, {
        useSearchTerms: () => [c.intl.string(c.t.i19n5L), c.intl.string(c.t.ip0uSf)],
        Component: () =>
            (0, i.jsx)(l.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: c.intl.format(c.t.OMkSUo, { modKey: s.Z.modKey }),
            }),
    }),
    g = (0, a.$l)(S.n.APPEARANCE_ZOOM_LIST, {
        usePredicate: () => o.isPlatformEmbedded,
        buildLayout: () => [E, d],
    });
