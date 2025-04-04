n.d(t, {
    U: () => l,
    Z: () => c
}),
    n(47120);
var r = n(442837),
    i = n(314897),
    o = n(271383),
    a = n(430824),
    s = n(981631);
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == e ? null : o.ZP.getMember(e, i.default.getId()),
        [r] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [a.Z],
        l = r.getGuild(e);
    if (null == l || null == n || !l.hasFeature(s.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) return !1;
    for (let e of n.roles) {
        var c;
        let n = null == t ? void 0 : t[e];
        if ((null == n || null == (c = n.tags) ? void 0 : c.subscription_listing_id) != null) return !0;
    }
    return !1;
}
function c(e) {
    let t = (0, r.e7)([i.default, o.ZP], () => (null == e ? null : o.ZP.getMember(e, i.default.getId())));
    return (0, r.e7)([a.Z], () => l(e, null != e ? a.Z.getRoles(e) : void 0, t, [a.Z]), [e, t]);
}
