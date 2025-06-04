n.d(t, {
    DM: () => c,
    r1: () => u,
    te: () => d
});
var r = n(442837),
    i = n(430824),
    a = n(496675),
    o = n(9156),
    s = n(594174),
    l = n(981631);
function c(e) {
    return (0, r.e7)([o.ZP, i.Z, s.default], () => {
        var t, n, r, a;
        let c = o.ZP.isOptInEnabled(e),
            u = null != (r = null == (t = i.Z.getGuild(e)) ? void 0 : t.hasFeature(l.oNc.COMMUNITY)) && r,
            d = null != (a = null == (n = s.default.getCurrentUser()) ? void 0 : n.isStaff()) && a;
        return c && (u || d);
    });
}
function u(e) {
    let t = i.Z.getGuild(e),
        n = s.default.getCurrentUser();
    return null != e && null != t && null != n && (t.hasFeature(l.oNc.COMMUNITY) || n.isStaff()) && o.ZP.isOptInEnabled(e);
}
function d(e) {
    return (0, r.e7)([i.Z, a.Z], () => {
        var t;
        let n = i.Z.getGuild(e),
            r = a.Z.can(l.Plq.MANAGE_GUILD, n),
            o = a.Z.can(l.Plq.MANAGE_ROLES, n),
            s = null != (t = null == n ? void 0 : n.hasFeature(l.oNc.GUILD_ONBOARDING_EVER_ENABLED)) && t;
        return null != n && r && o && !s;
    });
}
