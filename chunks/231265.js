"use strict";
n.d(t, { C: () => o, _: () => d });
var i = n(960851),
    r = n(478097),
    a = n(196042),
    s = n(412260),
    l = n(375708);
async function o() {
    let e = s.A.bogoPromotion,
        t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        n = await (0, i.nq)(),
        l = (0, a.RK)("bogo announcement modal eligibility"),
        o = (0, r.BI)("bogo announcement modal marketing");
    return t && o && l && n;
}
function d() {
    return l.intl.string(l.t.iQTfWx);
}
