n.d(t, { A: () => a });
var i = n(311907),
    s = n(384684),
    l = n(2242);
function a() {
    return (0, i.bG)([s.A], () =>
        (function () {
            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [s.A],
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
        })([s.A]),
    );
}
