n.d(t, {
    DM: () => u,
    r1: () => c,
    te: () => d
});
var i = n(442837),
    r = n(430824),
    a = n(496675),
    s = n(9156),
    o = n(594174),
    l = n(981631);
function u(e) {
    return (0, i.e7)([s.ZP, r.Z, o.default], () => {
        var t, n, i, a;
        let u = s.ZP.isOptInEnabled(e),
            c = null !== (i = null === (t = r.Z.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(l.oNc.COMMUNITY)) && void 0 !== i && i,
            d = null !== (a = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.isStaff()) && void 0 !== a && a;
        return u && (c || d);
    });
}
function c(e) {
    let t = r.Z.getGuild(e),
        n = o.default.getCurrentUser();
    return null != e && null != t && null != n && (t.hasFeature(l.oNc.COMMUNITY) || n.isStaff()) && s.ZP.isOptInEnabled(e);
}
function d(e) {
    return (0, i.e7)([r.Z, a.Z], () => {
        var t;
        let n = r.Z.getGuild(e),
            i = a.Z.can(l.Plq.MANAGE_GUILD, n),
            s = a.Z.can(l.Plq.MANAGE_ROLES, n),
            o = null !== (t = null == n ? void 0 : n.hasFeature(l.oNc.GUILD_ONBOARDING_EVER_ENABLED)) && void 0 !== t && t;
        return null != n && i && s && !o;
    });
}
