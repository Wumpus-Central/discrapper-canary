n.d(e, { O: () => o });
var i = n(857595),
    l = n(607070),
    s = n(509613),
    u = n(313789),
    r = n(981631),
    a = n(388032);
let o = (0, s.UO)(u.n.SATURATION, {
    useTitle: () => a.intl.string(a.t["5PWWCY"]),
    useSubtitle: () => a.intl.string(a.t["0PbE/H"]),
    markers: r.yqN.SATURATION_INCREMENTS,
    onMarkerRender: (t) => ((100 * t) % 2 == 0 ? "".concat(100 * t, "%") : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => l.Z.saturation,
    setValue: (t) => (0, i.o2)(t),
});
