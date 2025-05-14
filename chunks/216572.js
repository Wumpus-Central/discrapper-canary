n.d(t, {
    HL: () => o,
    Q_: () => l,
    nw: () => u
});
var i = n(442837),
    r = n(430824),
    a = n(982168);
function l(e) {
    return (0, i.e7)([r.Z], () => {
        if (null == e) return !1;
        let t = r.Z.getGuild(e);
        return null != t && t.getModeratorReportingEnabled() && null != t.getModeratorReportChannelId();
    });
}
function o(e) {
    return (0, a.P0)(e);
}
function u(e) {
    return (0, a.gT)(e);
}
