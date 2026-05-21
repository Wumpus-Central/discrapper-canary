"use strict";
n.d(t, { C: () => l, _: () => u });
var i = n(960851),
    r = n(478097),
    s = n(196042),
    a = n(374200),
    o = n(375708);
async function l() {
    let e = a.A.bogoPromotion,
        t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        n = await (0, i.nq)(),
        o = (0, s.RK)("bogo announcement modal eligibility"),
        l = (0, r.BI)("bogo announcement modal marketing");
    return t && l && o && n;
}
function u() {
    return o.intl.string(o.t.iQTfWx);
}
