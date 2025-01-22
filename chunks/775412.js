r.d(n, {
    J0: function () {
        return f;
    },
    _O: function () {
        return c;
    },
    rT: function () {
        return d;
    }
});
var i = r(442837),
    a = r(594174),
    o = r(78839),
    s = r(431),
    l = r(786397),
    u = r(474936);
let c = () => {
    let e = (0, i.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription());
    return (null == e ? void 0 : e.trialId) != null;
};
function d() {
    let e = (0, i.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription()),
        n = (0, i.e7)([a.default], () => a.default.getCurrentUser());
    return (null == e ? void 0 : e.trialId) != null ? (null == n ? void 0 : n.premiumType) : null;
}
function f() {
    return u.CR.map((e) => s.Z.getUserTrialOffer(e))
        .filter((e) => null != e && !(0, l.B)(e))
        .shift();
}
