n.d(e, {
    B: () => S,
    Z: () => O,
});
var i = n(442837),
    l = n(304680),
    r = n(509613),
    u = n(131951),
    s = n(226961),
    a = n(594174),
    o = n(998502),
    c = n(313789),
    E = n(65154),
    d = n(388032);
function S() {
    return (0, i.e7)([a.default, u.Z], () => {
        var t;
        let e = a.default.getCurrentUser(),
            n = null != (t = null == e ? void 0 : e.isStaff()) && t,
            i = "canary" === o.ZP.releaseChannel || "development" === o.ZP.releaseChannel,
            l = u.Z.supports(E.AN.CONNECTION_REPLAY);
        return n && i && l;
    });
}
let O = (0, r.qs)(c.n.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
    useTitle: () => d.intl.string(d.t.U4FgFK),
    useSubtitle: () => d.intl.string(d.t.Lm72RU),
    usePredicate: S,
    useValue: function () {
        return (0, i.e7)([s.ZP], () => s.ZP.shouldRecordNextConnection());
    },
    setValue: l.TC,
});
