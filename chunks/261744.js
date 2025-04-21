n.d(t, { Z: () => l }), n(388685);
var i = n(442837),
    r = n(687476),
    s = n(293810);
function l() {
    return (0, i.e7)([r.Z], () =>
        (function () {
            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [r.Z],
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
        })([r.Z])
    );
}
