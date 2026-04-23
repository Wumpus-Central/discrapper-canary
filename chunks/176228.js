n.d(t, { B: () => u });
var i = n(955572),
    s = n(775602),
    l = n(419954),
    a = n(780964),
    r = n(652215),
    o = n(985018);
let d = (e) => `${e.toFixed(0)}px`,
    u = (0, l.sN)(a.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => o.intl.string(o.t.rT3Pq5),
        useSubtitle: () => o.intl.string(o.t.LXUhen),
        markers: r.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: r.hH7.FONT_SIZES["0"],
        maxValue: r.hH7.FONT_SIZES[r.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => r.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => s.A.fontSize,
        onValueRender: d,
        onMarkerRender: d,
        asValueChanges: (e) => (0, i.XS)(e),
    });
