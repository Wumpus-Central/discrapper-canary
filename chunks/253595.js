n.d(e, {
    W: () => d,
    Z: () => S,
});
var i = n(818710),
    l = n(442837),
    r = n(579806),
    u = n(509613),
    s = n(131951),
    a = n(313789),
    o = n(710808),
    c = n(65154),
    E = n(388032);
function d() {
    let t = (0, l.e7)([s.Z], () => s.Z.supports(c.AN.DEBUG_LOGGING));
    return i.FB && t && null != r.Z.fileManager.readLogFiles;
}
let S = (0, u.qs)(a.n.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useTitle: () => E.intl.string(E.t["726JHL"]),
    useSubtitle: () => E.intl.string(E.t["/7ak9Q"]),
    usePredicate: d,
    useValue: function () {
        return (0, l.e7)([s.Z], () => s.Z.getDebugLogging());
    },
    setValue: o.rT,
});
