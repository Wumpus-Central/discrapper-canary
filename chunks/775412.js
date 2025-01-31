n.d(t, {
    J0: () => d,
    _O: () => u,
    rT: () => c
});
var i = n(442837),
    r = n(594174),
    a = n(78839),
    s = n(431),
    o = n(786397),
    l = n(474936);
let u = () => {
    let e = (0, i.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription());
    return (null == e ? void 0 : e.trialId) != null;
};
function c() {
    let e = (0, i.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription()),
        t = (0, i.e7)([r.default], () => r.default.getCurrentUser());
    return (null == e ? void 0 : e.trialId) != null ? (null == t ? void 0 : t.premiumType) : null;
}
function d() {
    return l.CR.map((e) => s.Z.getUserTrialOffer(e))
        .filter((e) => null != e && !(0, o.B)(e))
        .shift();
}
