n.d(t, {
    Q_: () => o,
    wL: () => s
});
var r = n(442837),
    i = n(592125),
    l = n(430824);
function o(e) {
    return (0, r.e7)([l.Z], () => {
        let t = l.Z.getGuild(e);
        return null != t && t.getModeratorReportingEnabled() && null != t.getModeratorReportChannelId();
    });
}
function s(e) {
    var t;
    let n =
            ((t = e.guild_id),
            (0, r.e7)([l.Z], () => {
                var e;
                let n = null != t ? l.Z.getGuild(t) : null;
                return null == n ? null : null != (e = n.getModeratorReportChannelId()) ? e : null;
            })),
        o = (0, r.e7)([i.Z], () => i.Z.getChannel(null == e ? void 0 : e.parent_id));
    return ((null == e ? void 0 : e.id) != null || (null == o ? void 0 : o.id) != null) && ((null == e ? void 0 : e.id) === n || (null == o ? void 0 : o.id) === n);
}
