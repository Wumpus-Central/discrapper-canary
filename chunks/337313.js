i.d(t, { S: () => A, T: () => S });
var n = i(311907),
    l = i(233545),
    s = i(419954),
    r = i(430452),
    a = i(412780),
    u = i(287809),
    o = i(837921),
    d = i(780964),
    _ = i(731854),
    T = i(985018);
function A() {
    return (0, n.bG)([u.default, r.Ay], () => {
        let e = u.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            i = "canary" === o.Ay.releaseChannel || "development" === o.Ay.releaseChannel,
            n = r.Ay.supports(_.O5.CONNECTION_REPLAY);
        return t && i && n;
    });
}
let S = (0, s.zD)(d.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
    useTitle: () => T.intl.string(T.t.U4FgFK),
    useSubtitle: () => T.intl.string(T.t.Lm72RU),
    useValue: function () {
        return (0, n.bG)([a.Ay], () => a.Ay.shouldRecordNextConnection());
    },
    setValue: l.Et,
    usePredicate: A,
});
