n.d(t, { A: () => o }), n(896048);
var r = n(311907),
    i = n(384684),
    a = n(2242);
function s() {
    let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [i.A],
        t = e.getGuildIdsWithPurchasableRoles(),
        n = !1;
    return (t.forEach((t) => {
        e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
    }),
    n)
        ? a.M_.SUBSCRIBED
        : 0 === t.size
          ? a.M_.NONE
          : a.M_.IN_SUBSCRIPTION_SERVER;
}
function o() {
    return (0, r.bG)([i.A], () => s([i.A]));
}
