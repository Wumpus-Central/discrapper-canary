n.d(t, { B: () => u });
var i = n(955572),
    s = n(775602),
    l = n(419954),
    a = n(780964),
    r = n(358776),
    o = n(652215),
    d = n(985018);
let c = (e) => `${e.toFixed(0)}px`,
    u = (0, l.sN)(a.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => ((0, r.bp)("FontScaling") ? d.intl.string(d.t.rT3Pq5) : d.intl.string(d.t.qPOqoK)),
        useSubtitle: () => ((0, r.bp)("FontScaling") ? d.intl.string(d.t.LXUhen) : d.intl.string(d.t.XrtbPo)),
        markers: o.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: o.hH7.FONT_SIZES["0"],
        maxValue: o.hH7.FONT_SIZES[o.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => o.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => s.A.fontSize,
        onValueRender: c,
        onMarkerRender: c,
        asValueChanges: (e) => (0, i.XS)(e),
    });
