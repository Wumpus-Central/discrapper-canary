n.d(t, { w: () => o });
var i = n(136722),
    l = n(311907),
    s = n(71393),
    r = n(576705),
    a = n(652215);
function o(e) {
    return (0, l.bG)([s.A, r.A], () => {
        let t = s.A.getGuild(e);
        if (null == t) return !1;
        let n = r.A.getGuildPermissions(t);
        return null != n && i.zy(n, a.xBc.VIEW_CREATOR_MONETIZATION_ANALYTICS);
    });
}
