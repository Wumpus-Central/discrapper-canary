n.d(e, {
    B: () => T,
    I: () => E,
});
var i = n(442837),
    l = n(304680),
    s = n(509613),
    u = n(131951),
    r = n(226961),
    a = n(594174),
    o = n(998502),
    c = n(313789),
    d = n(65154),
    S = n(388032);
function T() {
    return (0, i.e7)([a.default, u.Z], () => {
        var t;
        let e = a.default.getCurrentUser(),
            n = null != (t = null == e ? void 0 : e.isStaff()) && t,
            i = "canary" === o.ZP.releaseChannel || "development" === o.ZP.releaseChannel,
            l = u.Z.supports(d.AN.CONNECTION_REPLAY);
        return n && i && l;
    });
}
let E = (0, s.qs)(c.n.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
    useTitle: () => S.intl.string(S.t.U4FgFK),
    useSubtitle: () => S.intl.string(S.t.Lm72RU),
    useValue: function () {
        return (0, i.e7)([r.ZP], () => r.ZP.shouldRecordNextConnection());
    },
    setValue: l.TC,
    usePredicate: T,
});
