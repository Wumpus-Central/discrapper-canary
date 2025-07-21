i.d(t, {
    W: () => c,
    k: () => o
});
var n = i(367074),
    r = i(617799),
    l = i(61196),
    a = i(1844),
    s = i(388032);
async function o() {
    let e = a.Z.bogoPromotion,
        t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        i = await (0, n.Qw)(),
        { enabled: s } = l.Am.getCurrentConfig({ location: '153d31_6' }, { autoTrackExposure: !1 }),
        { enabled: o } = r.Z.getCurrentConfig({ location: '153d31_7' }, { autoTrackExposure: t && s && i });
    return t && o && s && i;
}
function c() {
    return s.intl.string(s.t.iQTfW1);
}
