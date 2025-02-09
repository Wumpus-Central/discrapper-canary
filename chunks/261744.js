n.d(t, { Z: () => r }), n(47120);
var i = n(442837),
    s = n(687476),
    l = n(293810);
function r() {
    return (0, i.e7)([s.Z], () =>
        (function () {
            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [s.Z],
                t = e.getGuildIdsWithPurchasableRoles(),
                n = !1;
            return (t.forEach((t) => {
                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
            }),
            n)
                ? l.PY.SUBSCRIBED
                : 0 === t.size
                  ? l.PY.NONE
                  : l.PY.IN_SUBSCRIPTION_SERVER;
        })([s.Z])
    );
}
