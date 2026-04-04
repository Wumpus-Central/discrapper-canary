n.d(t, { S: () => g, T: () => _ });
var i = n(311907),
    s = n(233545),
    l = n(419954),
    a = n(430452),
    r = n(412780),
    o = n(287809),
    d = n(837921),
    c = n(780964),
    u = n(731854),
    m = n(985018);
function g() {
    return (0, i.bG)([o.default, a.Ay], () => {
        let e = o.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === d.Ay.releaseChannel || "development" === d.Ay.releaseChannel,
            i = a.Ay.supports(u.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let _ = (0, l.zD)(c.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
    useTitle: () => m.intl.string(m.t.U4FgFK),
    useSubtitle: () => m.intl.string(m.t.Lm72RU),
    useValue: function () {
        return (0, i.bG)([r.Ay], () => r.Ay.shouldRecordNextConnection());
    },
    setValue: s.Et,
    usePredicate: g,
});
