n.d(t, { y: () => a });
var r = n(358085),
    i = n(998502),
    l = n(293162),
    o = n(981631);
function a(e) {
    let { location: t } = e,
        n = l.Z.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled,
        a = r.isPlatformEmbedded && i.ZP.supportsFeature(o.eRX.POPOUT_WINDOWS);
    return n && (!r.isPlatformEmbedded || a);
}
