n.d(t, { C: () => a, _: () => c });
var r = n(960851),
    i = n(478097),
    l = n(196042),
    o = n(412260),
    u = n(375708);
async function a() {
    let e = o.A.bogoPromotion,
        t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        n = await (0, r.nq)(),
        u = (0, l.RK)("bogo announcement modal eligibility"),
        a = (0, i.BI)("bogo announcement modal marketing");
    return t && a && u && n;
}
function c() {
    return u.intl.string(u.t.iQTfWx);
}
