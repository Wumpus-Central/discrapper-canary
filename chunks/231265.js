n.d(t, { C: () => o, _: () => c });
var r = n(960851),
    l = n(478097),
    i = n(196042),
    a = n(616431),
    u = n(375708);
async function o() {
    let e = a.A.bogoPromotion,
        t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        n = await (0, r.nq)(),
        u = (0, i.RK)("bogo announcement modal eligibility"),
        o = (0, l.BI)("bogo announcement modal marketing");
    return t && o && u && n;
}
function c() {
    return u.intl.string(u.t.iQTfWx);
}
