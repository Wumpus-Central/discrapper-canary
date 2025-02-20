n.d(t, { Z: () => a }), n(47120);
var r = n(442837),
    i = n(687476),
    s = n(293810);
function a() {
    return (0, r.e7)([i.Z], () =>
        (function () {
            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [i.Z],
                t = e.getGuildIdsWithPurchasableRoles(),
                n = !1;
            return (t.forEach((t) => {
                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
            }),
            n)
                ? s.PY.SUBSCRIBED
                : 0 === t.size
                  ? s.PY.NONE
                  : s.PY.IN_SUBSCRIPTION_SERVER;
        })([i.Z])
    );
}
