n.d(t, { A: () => E, I: () => o });
var i = n(17928),
    r = n(495544),
    a = n(696451),
    s = n(317525),
    _ = n(71393),
    l = n(652215);
function o(e, t) {
    let n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null == e
                  ? null
                  : a.Ay.getMember(e, r.default.getId()),
        [i] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [_.A],
        s = i.getGuild(e);
    if (null == s || null == n || !s.features.has(l.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) return !1;
    for (let e of n.roles) {
        let n = t?.[e];
        if (n?.tags?.subscription_listing_id != null) return !0;
    }
    return !1;
}
function E(e) {
    let t = (0, i.bG)([r.default, a.Ay], () => (null == e ? null : a.Ay.getMember(e, r.default.getId())));
    return (0, i.bG)([_.A, s.A], () => o(e, null != e ? s.A.getRolesSnapshot(e) : void 0, t, [_.A]), [e, t]);
}
