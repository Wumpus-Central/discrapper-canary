i.d(t, { C: () => o, _: () => c });
var r = i(40185),
    n = i(478097),
    s = i(196042),
    a = i(412260),
    l = i(985018);
async function o() {
    let e = a.A.bogoPromotion,
        t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        i = await (0, r.nq)(),
        { enabled: l } = s.oy.getCurrentConfig({ location: "153d31_6" }, { autoTrackExposure: !1 }),
        { enabled: o } = n.A.getCurrentConfig({ location: "153d31_7" }, { autoTrackExposure: t && l && i });
    return t && o && l && i;
}
function c() {
    return l.intl.string(l.t.iQTfWx);
}
