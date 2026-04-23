t.d(i, { C: () => l, _: () => c });
var r = t(40185),
    a = t(478097),
    n = t(196042),
    o = t(412260),
    s = t(985018);
async function l() {
    let e = o.A.bogoPromotion,
        i = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        t = await (0, r.nq)(),
        s = (0, n.RK)("bogo announcement modal eligibility"),
        l = (0, a.BI)("bogo announcement modal marketing");
    return i && l && s && t;
}
function c() {
    return s.intl.string(s.t.iQTfWx);
}
