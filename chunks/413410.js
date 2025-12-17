n.d(e, {
    B: () => E,
    I: () => d,
});
var i = n(442837),
    l = n(304680),
    s = n(509613),
    u = n(131951),
    r = n(226961),
    a = n(594174),
    o = n(998502),
    S = n(313789),
    T = n(65154),
    c = n(388032);
function E() {
    return (0, i.e7)([a.default, u.Z], () => {
        var t;
        let e = a.default.getCurrentUser(),
            n = null != (t = null == e ? void 0 : e.isStaff()) && t,
            i = "canary" === o.ZP.releaseChannel || "development" === o.ZP.releaseChannel,
            l = u.Z.supports(T.AN.CONNECTION_REPLAY);
        return n && i && l;
    });
}
let d = (0, s.qs)(S.n.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
    useTitle: () => c.intl.string(c.t.U4FgFK),
    useSubtitle: () => c.intl.string(c.t.Lm72RU),
    useValue: function () {
        return (0, i.e7)([r.ZP], () => r.ZP.shouldRecordNextConnection());
    },
    setValue: l.TC,
    usePredicate: E,
});
