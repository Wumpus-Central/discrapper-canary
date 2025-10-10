n.d(t, { u: () => o });
var r = n(149765),
    i = n(442837),
    l = n(430824),
    s = n(496675),
    a = n(981631);
function o(e) {
    return (0, i.e7)([l.Z, s.Z], () => {
        let t = l.Z.getGuild(e);
        if (null == t) return !1;
        let n = s.Z.getGuildPermissions(t);
        return null != n && r.e$(n, a.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS);
    });
}
