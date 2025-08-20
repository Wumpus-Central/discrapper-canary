n.d(t, {
    W: () => c,
    k: () => l,
});
var r = n(367074),
    i = n(617799),
    a = n(61196),
    o = n(1844),
    s = n(388032);
async function l() {
    let e = o.Z.bogoPromotion,
        t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        n = await (0, r.Qw)(),
        { enabled: s } = a.Am.getCurrentConfig({ location: "153d31_6" }, { autoTrackExposure: !1 }),
        { enabled: l } = i.Z.getCurrentConfig({ location: "153d31_7" }, { autoTrackExposure: t && s && n });
    return t && l && s && n;
}
function c() {
    return s.intl.string(s.t.iQTfW1);
}
