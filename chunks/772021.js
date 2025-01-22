r.d(n, {
    U: function () {
        return c;
    },
    Z: function () {
        return d;
    }
});
var i = r(47120);
var a = r(442837),
    o = r(314897),
    s = r(271383),
    l = r(430824),
    u = r(981631);
function c(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == e ? null : s.ZP.getMember(e, o.default.getId()),
        [i] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [l.Z],
        a = i.getGuild(e);
    if (null == a || null == r || !a.hasFeature(u.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) return !1;
    for (let e of r.roles) {
        var c;
        let r = null == n ? void 0 : n[e];
        if ((null == r ? void 0 : null === (c = r.tags) || void 0 === c ? void 0 : c.subscription_listing_id) != null) return !0;
    }
    return !1;
}
function d(e) {
    let n = (0, a.e7)([o.default, s.ZP], () => (null == e ? null : s.ZP.getMember(e, o.default.getId())));
    return (0, a.e7)([l.Z], () => c(e, null != e ? l.Z.getRoles(e) : void 0, n, [l.Z]), [e, n]);
}
