n.d(t, { y: () => o });
var r = n(358085),
    i = n(998502),
    l = n(293162),
    a = n(981631);
function o(e) {
    let { location: t } = e,
        n = l.Z.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled,
        o = r.isPlatformEmbedded && i.ZP.supportsFeature(a.eRX.POPOUT_WINDOWS);
    return n && (!r.isPlatformEmbedded || o);
}
