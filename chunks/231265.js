a.d(t, { C: () => r, _: () => c });
var n = a(960851),
    i = a(478097),
    o = a(196042),
    l = a(374200),
    s = a(375708);
async function r() {
    let e = l.A.bogoPromotion,
        t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        a = await (0, n.nq)(),
        s = (0, o.RK)("bogo announcement modal eligibility"),
        r = (0, i.BI)("bogo announcement modal marketing");
    return t && r && s && a;
}
function c() {
    return s.intl.string(s.t.iQTfWx);
}
