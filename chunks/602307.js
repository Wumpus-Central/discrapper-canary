n.d(t, { Z: () => s });
var r = n(473749),
    i = n(442837),
    a = n(80721),
    o = n(643281);
function s() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = (0, i.e7)([o.Z], () => o.Z.getSubscriptionId());
    return (
        (0, r.useEffect)(() => {
            !(async function () {
                !e || o.Z.isFetchingMembership() || o.Z.hasFetchedMembership() || null != t || (await (0, a.WH)());
            })();
        }, [t, e]),
        t
    );
}
