"use strict";
n.d(t, { A: () => c, I: () => u });
var i = n(17928),
    r = n(495544),
    s = n(696451),
    a = n(317525),
    o = n(71393),
    l = n(652215);
function u(e, t) {
    let n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null == e
                  ? null
                  : s.Ay.getMember(e, r.default.getId()),
        [i] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [o.A],
        a = i.getGuild(e);
    if (null == a || null == n || !a.features.has(l.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) return !1;
    for (let e of n.roles) {
        let n = t?.[e];
        if (n?.tags?.subscription_listing_id != null) return !0;
    }
    return !1;
}
function c(e) {
    let t = (0, i.bG)([r.default, s.Ay], () => (null == e ? null : s.Ay.getMember(e, r.default.getId())));
    return (0, i.bG)([o.A, a.A], () => u(e, null != e ? a.A.getRolesSnapshot(e) : void 0, t, [o.A]), [e, t]);
}
