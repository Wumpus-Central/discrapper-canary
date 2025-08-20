n.d(t, { Z: () => s }), n(388685);
var r = n(442837),
    i = n(687476),
    a = n(293810);
function o() {
    let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [i.Z],
        t = e.getGuildIdsWithPurchasableRoles(),
        n = !1;
    return (t.forEach((t) => {
        e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
    }),
    n)
        ? a.PY.SUBSCRIBED
        : 0 === t.size
          ? a.PY.NONE
          : a.PY.IN_SUBSCRIPTION_SERVER;
}
function s() {
    return (0, r.e7)([i.Z], () => o([i.Z]));
}
