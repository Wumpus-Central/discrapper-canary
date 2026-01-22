n.d(t, {
    A: () => u,
    I: () => c,
}),
    n(896048);
var r = n(311907),
    i = n(961350),
    a = n(696451),
    s = n(317525),
    o = n(71393),
    l = n(652215);
function c(e, t) {
    let n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null == e
                  ? null
                  : a.Ay.getMember(e, i.default.getId()),
        [r] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [o.A],
        s = r.getGuild(e);
    if (null == s || null == n || !s.features.has(l.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) return !1;
    for (let e of n.roles) {
        var c;
        let n = null == t ? void 0 : t[e];
        if ((null == n || null == (c = n.tags) ? void 0 : c.subscription_listing_id) != null) return !0;
    }
    return !1;
}
function u(e) {
    let t = (0, r.bG)([i.default, a.Ay], () => (null == e ? null : a.Ay.getMember(e, i.default.getId())));
    return (0, r.bG)([o.A, s.A], () => c(e, null != e ? s.A.getRolesSnapshot(e) : void 0, t, [o.A]), [e, t]);
}
