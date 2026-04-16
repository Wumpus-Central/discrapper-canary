n.d(t, { B: () => c });
var i = n(955572),
    s = n(775602),
    l = n(419954),
    r = n(780964),
    a = n(652215),
    o = n(985018);
let d = (e) => `${e.toFixed(0)}px`,
    c = (0, l.sN)(r.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => o.intl.string(o.t.rT3Pq5),
        useSubtitle: () => o.intl.string(o.t.LXUhen),
        markers: a.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: a.hH7.FONT_SIZES["0"],
        maxValue: a.hH7.FONT_SIZES[a.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => a.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => s.A.fontSize,
        onValueRender: d,
        onMarkerRender: d,
        asValueChanges: (e) => (0, i.XS)(e),
    });
