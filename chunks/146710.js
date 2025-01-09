n.d(t, {
    u: function () {
        return o;
    }
});
var i = n(149765),
    r = n(442837),
    l = n(430824),
    s = n(496675),
    a = n(981631);
function o(e) {
    return (0, r.e7)([l.Z, s.Z], () => {
        let t = l.Z.getGuild(e);
        if (null == t) return !1;
        let n = s.Z.getGuildPermissions(t);
        return null != n && i.e$(n, a.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS);
    });
}
