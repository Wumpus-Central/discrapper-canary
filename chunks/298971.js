n.d(t, { V: () => c });
var i = n(955572),
    s = n(775602),
    l = n(419954),
    a = n(780964),
    r = n(358776),
    o = n(652215),
    d = n(985018);
let c = (0, l.sN)(a.X.SATURATION, {
    useTitle: () => d.intl.string(d.t["5PWWCY"]),
    useSubtitle: () => ((0, r.bp)("Saturation") ? d.intl.string(d.t.xf5S6P) : d.intl.string(d.t["0PbE/H"])),
    markers: o.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => s.A.saturation,
    asValueChanges: (e) => (0, i.HU)(e),
});
