r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(442837),
    s = r(509545);
function l() {
    let [e, n] = a.useState(void 0),
        [r, i] = a.useState(void 0),
        [l, u] = a.useState(void 0);
    return {
        selectedSkuId: e,
        selectedPlan: (0, o.e7)([s.Z], () => (null != r ? s.Z.get(r) : null)),
        setSelectedSkuId: n,
        setSelectedPlanId: i,
        selectedPlanNotification: l,
        setSelectedPlanNotification: u
    };
}
