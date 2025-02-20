n.d(t, {
    J0: () => d,
    _O: () => c,
    rT: () => u
});
var r = n(442837),
    i = n(594174),
    o = n(78839),
    a = n(431),
    s = n(786397),
    l = n(474936);
let c = () => {
    let e = (0, r.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription());
    return (null == e ? void 0 : e.trialId) != null;
};
function u() {
    let e = (0, r.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription()),
        t = (0, r.e7)([i.default], () => i.default.getCurrentUser());
    return (null == e ? void 0 : e.trialId) != null ? (null == t ? void 0 : t.premiumType) : null;
}
function d() {
    return l.CR.map((e) => a.Z.getUserTrialOffer(e))
        .filter((e) => null != e && !(0, s.B)(e))
        .shift();
}
