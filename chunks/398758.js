r.d(n, {
    DM: function () {
        return c;
    },
    r1: function () {
        return d;
    },
    te: function () {
        return f;
    }
});
var i = r(442837),
    a = r(430824),
    o = r(496675),
    s = r(9156),
    l = r(594174),
    u = r(981631);
function c(e) {
    return (0, i.e7)([s.ZP, a.Z, l.default], () => {
        var n, r, i, o;
        let c = s.ZP.isOptInEnabled(e),
            d = null !== (i = null === (n = a.Z.getGuild(e)) || void 0 === n ? void 0 : n.hasFeature(u.oNc.COMMUNITY)) && void 0 !== i && i,
            f = null !== (o = null === (r = l.default.getCurrentUser()) || void 0 === r ? void 0 : r.isStaff()) && void 0 !== o && o;
        return c && (d || f);
    });
}
function d(e) {
    let n = a.Z.getGuild(e),
        r = l.default.getCurrentUser();
    return null != e && null != n && null != r && (n.hasFeature(u.oNc.COMMUNITY) || r.isStaff()) && s.ZP.isOptInEnabled(e);
}
function f(e) {
    return (0, i.e7)([a.Z, o.Z], () => {
        var n;
        let r = a.Z.getGuild(e),
            i = o.Z.can(u.Plq.MANAGE_GUILD, r),
            s = o.Z.can(u.Plq.MANAGE_ROLES, r),
            l = null !== (n = null == r ? void 0 : r.hasFeature(u.oNc.GUILD_ONBOARDING_EVER_ENABLED)) && void 0 !== n && n;
        return null != r && i && s && !l;
    });
}
