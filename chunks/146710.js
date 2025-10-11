n.d(t, { u: () => o });
var r = n(149765),
    i = n(442837),
    l = n(430824),
    a = n(496675),
    s = n(981631);
function o(e) {
    return (0, i.e7)([l.Z, a.Z], () => {
        let t = l.Z.getGuild(e);
        if (null == t) return !1;
        let n = a.Z.getGuildPermissions(t);
        return null != n && r.e$(n, s.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS);
    });
}
