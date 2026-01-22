n.d(t, {
    C: () => l,
    _: () => c,
});
var r = n(40185),
    i = n(478097),
    a = n(196042),
    s = n(412260),
    o = n(985018);
async function l() {
    let e = s.A.bogoPromotion,
        t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        n = await (0, r.nq)(),
        { enabled: o } = a.oy.getCurrentConfig({ location: "153d31_6" }, { autoTrackExposure: !1 }),
        { enabled: l } = i.A.getCurrentConfig({ location: "153d31_7" }, { autoTrackExposure: t && o && n });
    return t && l && o && n;
}
function c() {
    return o.intl.string(o.t.iQTfWx);
}
