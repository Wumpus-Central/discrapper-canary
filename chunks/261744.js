n.d(t, { Z: () => l }), n(47120);
var i = n(442837),
    s = n(687476),
    r = n(293810);
function l() {
    return (0, i.e7)([s.Z], () =>
        (function () {
            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [s.Z],
                t = e.getGuildIdsWithPurchasableRoles(),
                n = !1;
            return (t.forEach((t) => {
                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
            }),
            n)
                ? r.PY.SUBSCRIBED
                : 0 === t.size
                  ? r.PY.NONE
                  : r.PY.IN_SUBSCRIPTION_SERVER;
        })([s.Z])
    );
}
