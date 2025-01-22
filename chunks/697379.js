r.d(n, {
    W: function () {
        return h;
    },
    v: function () {
        return p;
    }
});
var i = r(192379),
    a = r(442837),
    o = r(430824),
    s = r(496675),
    l = r(863249),
    u = r(944163),
    c = r(246364),
    d = r(983736),
    f = r(981631);
function p(e) {
    let n = o.Z.getGuild(e);
    return null != n && n.hasFeature(f.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && s.Z.can(f.Plq.KICK_MEMBERS, n);
}
function h(e) {
    let n = (0, a.e7)([o.Z], () => o.Z.getGuild(e)),
        r = s.Z.can(f.Plq.KICK_MEMBERS, n) || s.Z.can(f.Plq.MANAGE_GUILD, n),
        p = null != n && n.hasFeature(f.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && r && (0, d.Dc)(n),
        h = (0, a.e7)([u.Z], () => u.Z.get(e), [e]);
    i.useEffect(() => {
        p && l.ZP.fetchVerificationForm(e);
    }, [p, e]);
    let _ = i.useMemo(() => {
        var e;
        return (null !== (e = null == h ? void 0 : h.formFields) && void 0 !== e ? e : []).some((e) => !(0, c.J)(e));
    }, [null == h ? void 0 : h.formFields]);
    return p && _;
}
