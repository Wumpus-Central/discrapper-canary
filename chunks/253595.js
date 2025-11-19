n.d(e, {
    W: () => S,
    Z: () => T,
});
var i = n(818710),
    l = n(442837),
    u = n(579806),
    r = n(509613),
    s = n(131951),
    a = n(313789),
    o = n(710808),
    c = n(65154),
    E = n(388032);
function S() {
    let t = (0, l.e7)([s.Z], () => s.Z.supports(c.AN.DEBUG_LOGGING));
    return i.FB && t && null != u.Z.fileManager.readLogFiles;
}
let T = (0, r.qs)(a.n.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useTitle: () => E.intl.string(E.t["726JHL"]),
    useSubtitle: () => E.intl.string(E.t["/7ak9Q"]),
    usePredicate: S,
    useValue: function () {
        return (0, l.e7)([s.Z], () => s.Z.getDebugLogging());
    },
    setValue: o.rT,
});
