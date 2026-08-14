n.d(t, { C: () => u, _: () => c });
var r = n(960851),
    i = n(478097),
    l = n(196042),
    o = n(412260),
    a = n(375708);
async function u() {
    let e = o.A.bogoPromotion,
        t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        n = await (0, r.nq)(),
        a = (0, l.RK)("bogo announcement modal eligibility"),
        u = (0, i.BI)("bogo announcement modal marketing");
    return t && u && a && n;
}
function c() {
    return a.intl.string(a.t.iQTfWx);
}
