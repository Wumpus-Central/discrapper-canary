n.d(t, {
    Q_: () => a,
    wL: () => o
});
var i = n(442837),
    l = n(592125),
    r = n(430824);
function a(e) {
    return (0, i.e7)([r.Z], () => {
        let t = r.Z.getGuild(e);
        return null != t && t.getModeratorReportingEnabled() && null != t.getModeratorReportChannelId();
    });
}
function o(e) {
    var t;
    let n =
            ((t = e.guild_id),
            (0, i.e7)([r.Z], () => {
                var e;
                let n = null != t ? r.Z.getGuild(t) : null;
                return null == n ? null : null != (e = n.getModeratorReportChannelId()) ? e : null;
            })),
        a = (0, i.e7)([l.Z], () => l.Z.getChannel(null == e ? void 0 : e.parent_id));
    return ((null == e ? void 0 : e.id) != null || (null == a ? void 0 : a.id) != null) && ((null == e ? void 0 : e.id) === n || (null == a ? void 0 : a.id) === n);
}
