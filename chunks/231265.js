"use strict";
r.d(t, { C: () => o, _: () => c });
var a = r(40185),
    i = r(478097),
    n = r(196042),
    l = r(412260),
    s = r(985018);
async function o() {
    let e = l.A.bogoPromotion,
        t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        r = await (0, a.nq)(),
        s = (0, n.RK)("bogo announcement modal eligibility"),
        o = (0, i.BI)("bogo announcement modal marketing");
    return t && o && s && r;
}
function c() {
    return s.intl.string(s.t.iQTfWx);
}
