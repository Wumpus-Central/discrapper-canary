n.d(t, { A: () => c, I: () => d });
var i = n(17928),
    a = n(495544),
    r = n(696451),
    s = n(317525),
    l = n(71393),
    o = n(652215);
function d(e, t) {
    let n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null == e
                  ? null
                  : r.Ay.getMember(e, a.default.getId()),
        [i] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [l.A],
        s = i.getGuild(e);
    if (null == s || null == n || !s.features.has(o.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) return !1;
    for (let e of n.roles) {
        let n = t?.[e];
        if (n?.tags?.subscription_listing_id != null) return !0;
    }
    return !1;
}
function c(e) {
    let t = (0, i.bG)([a.default, r.Ay], () => (null == e ? null : r.Ay.getMember(e, a.default.getId())));
    return (0, i.bG)([l.A, s.A], () => d(e, null != e ? s.A.getRolesSnapshot(e) : void 0, t, [l.A]), [e, t]);
}
