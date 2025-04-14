n.d(t, { u: () => o });
var r = n(149765),
    i = n(442837),
    s = n(430824),
    l = n(496675),
    a = n(981631);
function o(e) {
    return (0, i.e7)([s.Z, l.Z], () => {
        let t = s.Z.getGuild(e);
        if (null == t) return !1;
        let n = l.Z.getGuildPermissions(t);
        return null != n && r.e$(n, a.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS);
    });
}
