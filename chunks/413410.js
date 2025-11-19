n.d(e, {
    B: () => T,
    Z: () => d,
});
var i = n(442837),
    l = n(304680),
    u = n(509613),
    r = n(131951),
    s = n(226961),
    a = n(594174),
    o = n(998502),
    c = n(313789),
    E = n(65154),
    S = n(388032);
function T() {
    return (0, i.e7)([a.default, r.Z], () => {
        var t;
        let e = a.default.getCurrentUser(),
            n = null != (t = null == e ? void 0 : e.isStaff()) && t,
            i = "canary" === o.ZP.releaseChannel || "development" === o.ZP.releaseChannel,
            l = r.Z.supports(E.AN.CONNECTION_REPLAY);
        return n && i && l;
    });
}
let d = (0, u.qs)(c.n.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
    useTitle: () => S.intl.string(S.t.U4FgFK),
    useSubtitle: () => S.intl.string(S.t.Lm72RU),
    usePredicate: T,
    useValue: function () {
        return (0, i.e7)([s.ZP], () => s.ZP.shouldRecordNextConnection());
    },
    setValue: l.TC,
});
