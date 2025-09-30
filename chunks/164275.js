n.d(t, {
    M: () => c,
    P: () => u,
});
var r = n(873546),
    i = n(325100),
    a = n(47280),
    o = n(227862),
    s = n(474936);
function l(e, t, n) {
    return !e && n === s.Si.TIER_2 && !t;
}
function c(e, t, n) {
    return (
        l(e, t, n) && !((0, o.gJ)("wowMomentEligibilityUtils") || (0, a.YI)({ location: "wowMomentEligibilityUtils" }))
    );
}
function u(e, t, n) {
    return (
        l(e, t, n) &&
        ((0, o.gJ)("wowMomentEligibilityUtils") || (0, a.YI)({ location: "wowMomentEligibilityUtils" })) &&
        !r.eL &&
        !r.bO &&
        !(0, i.Ak)({ location: "wowMomentEligibilityUtils" })
    );
}
