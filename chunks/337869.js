n(411104);
var r = n(992774),
    i = n(710845),
    o = n(358085),
    a = n(998502);
(0, r.f3)({
    supported() {
        try {
            if (__OVERLAY__);
            else if (o.isPlatformEmbedded) {
                let e = (0, r.zS)();
                if (null == e.VoiceConnection || (null == e.setVideoOutputSink && null == e.addVideoOutputSink)) throw Error('voe function missing');
                return !0;
            }
        } catch (e) {
            new i.Z('injectMediaEngine').error('Potentially corrupt installation:', e.message);
        }
        return !1;
    },
    supportsFeature: (e) => a.ZP.supportsFeature(e),
    setProcessPriority(e) {
        a.ZP.getDiscordUtils().setProcessPriority(e);
    },
    getVoiceEngine: () => a.ZP.getVoiceEngine(),
    getVoiceFilters: () => a.ZP.getVoiceFilters()
});
