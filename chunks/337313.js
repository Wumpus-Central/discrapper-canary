i.d(e, { S: () => S, T: () => E });
var n = i(311907),
    l = i(233545),
    s = i(419954),
    r = i(430452),
    a = i(412780),
    u = i(287809),
    o = i(837921),
    d = i(780964),
    T = i(731854),
    A = i(985018);
function S() {
    return (0, n.bG)([u.default, r.A], () => {
        let t = u.default.getCurrentUser(),
            e = t?.isStaff() ?? !1,
            i = "canary" === o.Ay.releaseChannel || "development" === o.Ay.releaseChannel,
            n = r.A.supports(T.O5.CONNECTION_REPLAY);
        return e && i && n;
    });
}
let E = (0, s.zD)(d.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
    useTitle: () => A.intl.string(A.t.U4FgFK),
    useSubtitle: () => A.intl.string(A.t.Lm72RU),
    useValue: function () {
        return (0, n.bG)([a.Ay], () => a.Ay.shouldRecordNextConnection());
    },
    setValue: l.Et,
    usePredicate: S,
});
