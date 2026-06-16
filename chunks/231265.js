n.d(t, { C: () => u, _: () => c });
var r = n(960851),
    l = n(478097),
    a = n(196042),
    i = n(374200),
    o = n(375708);
async function u() {
    let e = i.A.bogoPromotion,
        t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        n = await (0, r.nq)(),
        o = (0, a.RK)("bogo announcement modal eligibility"),
        u = (0, l.BI)("bogo announcement modal marketing");
    return t && u && o && n;
}
function c() {
    return o.intl.string(o.t.iQTfWx);
}
