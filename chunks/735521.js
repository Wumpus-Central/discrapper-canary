n.d(t, { Z: () => s }), n(47120);
var i = n(192379),
    r = n(442837),
    a = n(509545);
function s() {
    let [e, t] = i.useState(void 0),
        [n, s] = i.useState(void 0),
        [o, l] = i.useState(void 0);
    return {
        selectedSkuId: e,
        selectedPlan: (0, r.e7)([a.Z], () => (null != n ? a.Z.get(n) : null)),
        setSelectedSkuId: t,
        setSelectedPlanId: s,
        selectedPlanNotification: o,
        setSelectedPlanNotification: l
    };
}
