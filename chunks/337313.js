i.d(e, {
    S: () => E,
    T: () => d,
});
var n = i(311907),
    l = i(233545),
    s = i(419954),
    r = i(430452),
    u = i(412780),
    a = i(287809),
    o = i(837921),
    T = i(780964),
    A = i(731854),
    S = i(985018);
function E() {
    return (0, n.bG)([a.default, r.A], () => {
        var t;
        let e = a.default.getCurrentUser(),
            i = null != (t = null == e ? void 0 : e.isStaff()) && t,
            n = "canary" === o.Ay.releaseChannel || "development" === o.Ay.releaseChannel,
            l = r.A.supports(A.O5.CONNECTION_REPLAY);
        return i && n && l;
    });
}
let d = (0, s.zD)(T.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
    useTitle: () => S.intl.string(S.t.U4FgFK),
    useSubtitle: () => S.intl.string(S.t.Lm72RU),
    useValue: function () {
        return (0, n.bG)([u.Ay], () => u.Ay.shouldRecordNextConnection());
    },
    setValue: l.Et,
    usePredicate: E,
});
