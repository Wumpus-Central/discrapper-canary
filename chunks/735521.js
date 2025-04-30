n.d(t, { Z: () => o }), n(388685);
var r = n(73800),
    i = n(442837),
    a = n(509545);
function o() {
    let [e, t] = r.useState(void 0),
        [n, o] = r.useState(void 0),
        [s, l] = r.useState(void 0);
    return {
        selectedSkuId: e,
        selectedPlan: (0, i.e7)([a.Z], () => (null != n ? a.Z.get(n) : null)),
        setSelectedSkuId: t,
        setSelectedPlanId: o,
        selectedPlanNotification: s,
        setSelectedPlanNotification: l
    };
}
