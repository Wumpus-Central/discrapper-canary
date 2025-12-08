n.d(e, {
    B: () => E,
    I: () => S,
});
var i = n(442837),
    l = n(304680),
    s = n(509613),
    r = n(131951),
    u = n(226961),
    a = n(594174),
    o = n(998502),
    c = n(313789),
    d = n(65154),
    T = n(388032);
function E() {
    return (0, i.e7)([a.default, r.Z], () => {
        var t;
        let e = a.default.getCurrentUser(),
            n = null != (t = null == e ? void 0 : e.isStaff()) && t,
            i = "canary" === o.ZP.releaseChannel || "development" === o.ZP.releaseChannel,
            l = r.Z.supports(d.AN.CONNECTION_REPLAY);
        return n && i && l;
    });
}
let S = (0, s.qs)(c.n.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
    useTitle: () => T.intl.string(T.t.U4FgFK),
    useSubtitle: () => T.intl.string(T.t.Lm72RU),
    useValue: function () {
        return (0, i.e7)([u.ZP], () => u.ZP.shouldRecordNextConnection());
    },
    setValue: l.TC,
    usePredicate: E,
});
