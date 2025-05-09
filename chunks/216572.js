n.d(t, {
    HL: () => u,
    Q_: () => a
});
var i = n(442837),
    r = n(430824),
    l = n(982168);
function a(e) {
    return (0, i.e7)([r.Z], () => {
        if (null == e) return !1;
        let t = r.Z.getGuild(e);
        return null != t && t.getModeratorReportingEnabled() && null != t.getModeratorReportChannelId();
    });
}
function u(e) {
    return (0, l.P0)(e);
}
