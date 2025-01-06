n.d(t, {
    u: function () {
        return o;
    }
});
var i = n(149765),
    r = n(442837),
    l = n(430824),
    a = n(496675),
    s = n(981631);
function o(e) {
    return (0, r.e7)([l.Z, a.Z], () => {
        let t = l.Z.getGuild(e);
        if (null == t) return !1;
        let n = a.Z.getGuildPermissions(t);
        return null != n && i.e$(n, s.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS);
    });
}
