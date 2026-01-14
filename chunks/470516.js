n.d(e, { T: () => d });
var i = n(765250),
    l = n(610394),
    s = n(340101),
    u = n(509613),
    r = n(355863),
    a = n(313789),
    o = n(794704),
    T = n(981631),
    S = n(501787),
    c = n(388032);
function E() {
    let t = l.Z.getWidgetByType(T.Odu.VOICE_V3);
    if (null == t) return null;
    let e = r.Z.getWidget(t.id);
    return null != e && (0, s.Aw)(e) ? e : null;
}
let d = (0, u.UO)(a.n.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    fieldLayout: "horizontal",
    useTitle: () => c.intl.string(c.t["X/Uyzc"]),
    minValue: o.o3 - 1,
    maxValue: o.IM,
    markers: o.oo,
    onMarkerRender: (t) => (t < o.o3 ? c.intl.string(c.t.nrUzFL) : t),
    getInitialValue: () => {
        var t;
        let e = E();
        return null != (t = null == e ? void 0 : e.meta.voiceStatesMaxShown) ? t : S.At;
    },
    onValueRender: function (t) {
        return t < o.o3 ? c.intl.string(c.t.nrUzFL) : "".concat(Math.floor(t));
    },
    setValue: (t) => {
        let e = E();
        null != e &&
            (t < o.o3
                ? (0, i.zG)(e.id, { voiceStatesMaxShown: S.Og })
                : (0, i.zG)(e.id, { voiceStatesMaxShown: Math.floor(t) }));
    },
});
