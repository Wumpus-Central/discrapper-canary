n.d(t, {
    Qs: () => l,
    T0: () => s,
    mY: () => c,
});
var r = n(84483),
    i = n(287809),
    a = n(474090),
    o = n(788868);

function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils",
        { isInTreatment: t } = (0, r.v9)(e);
    return t;
}

function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ProgramRewardsUtils",
        { isInTreatment: t } = (0, r.uX)(e);
    return t;
}

function c(e) {
    let t = null != e ? e : i.default.getCurrentUser();
    return (0, a.YE)(t, o.PremiumTypes.TIER_2);
}
