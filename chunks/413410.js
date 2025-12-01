n.d(e, {
    B: () => S,
    Z: () => T,
});
var i = n(442837),
    r = n(304680),
    l = n(509613),
    u = n(131951),
    s = n(226961),
    a = n(594174),
    o = n(998502),
    c = n(313789),
    d = n(65154),
    E = n(388032);
function S() {
    return (0, i.e7)([a.default, u.Z], () => {
        var t;
        let e = a.default.getCurrentUser(),
            n = null != (t = null == e ? void 0 : e.isStaff()) && t,
            i = "canary" === o.ZP.releaseChannel || "development" === o.ZP.releaseChannel,
            r = u.Z.supports(d.AN.CONNECTION_REPLAY);
        return n && i && r;
    });
}
let T = (0, l.qs)(c.n.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
    useTitle: () => E.intl.string(E.t.U4FgFK),
    useSubtitle: () => E.intl.string(E.t.Lm72RU),
    usePredicate: S,
    useValue: function () {
        return (0, i.e7)([s.ZP], () => s.ZP.shouldRecordNextConnection());
    },
    setValue: r.TC,
});
