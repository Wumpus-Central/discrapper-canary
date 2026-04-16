n.d(t, { V: () => d });
var i = n(955572),
    s = n(775602),
    l = n(419954),
    r = n(780964),
    a = n(652215),
    o = n(985018);
let d = (0, l.sN)(r.X.SATURATION, {
    useTitle: () => o.intl.string(o.t["5PWWCY"]),
    useSubtitle: () => o.intl.string(o.t.xf5S6P),
    markers: a.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => s.A.saturation,
    asValueChanges: (e) => (0, i.HU)(e),
});
