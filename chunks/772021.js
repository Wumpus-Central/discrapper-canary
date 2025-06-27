n.d(t, {
    U: () => c,
    Z: () => u
}),
    n(388685);
var r = n(442837),
    i = n(314897),
    a = n(271383),
    o = n(485386),
    s = n(430824),
    l = n(981631);
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == e ? null : a.ZP.getMember(e, i.default.getId()),
        [r] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [s.Z],
        o = r.getGuild(e);
    if (null == o || null == n || !o.hasFeature(l.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) return !1;
    for (let e of n.roles) {
        var c;
        let n = null == t ? void 0 : t[e];
        if ((null == n || null == (c = n.tags) ? void 0 : c.subscription_listing_id) != null) return !0;
    }
    return !1;
}
function u(e) {
    let t = (0, r.e7)([i.default, a.ZP], () => (null == e ? null : a.ZP.getMember(e, i.default.getId())));
    return (0, r.e7)([s.Z, o.Z], () => c(e, null != e ? o.Z.getRoles(e) : void 0, t, [s.Z]), [e, t]);
}
