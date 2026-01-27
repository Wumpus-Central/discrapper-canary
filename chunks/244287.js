n.d(t, {
    A: () => s,
}),
    n(896048);
var r = n(311907),
    i = n(384684),
    l = n(2242);

function s() {
    return (0, r.bG)([i.A], () =>
        (function () {
            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [i.A],
                t = e.getGuildIdsWithPurchasableRoles(),
                n = !1;
            return (t.forEach((t) => {
                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
            }),
            n)
                ? l.M_.SUBSCRIBED
                : 0 === t.size
                  ? l.M_.NONE
                  : l.M_.IN_SUBSCRIPTION_SERVER;
        })([i.A]),
    );
}
