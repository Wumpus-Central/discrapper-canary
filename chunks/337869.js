var i = r(411104);
var a = r(992774),
    o = r(710845),
    s = r(358085),
    l = r(998502);
(0, a.f3)({
    supported() {
        try {
            if (__OVERLAY__);
            else if (s.isPlatformEmbedded) {
                let e = (0, a.zS)();
                if (null == e.VoiceConnection || (null == e.setVideoOutputSink && null == e.addVideoOutputSink)) throw Error('voe function missing');
                return !0;
            }
        } catch (e) {
            new o.Z('injectMediaEngine').error('Potentially corrupt installation:', e.message);
        }
        return !1;
    },
    supportsFeature: (e) => l.ZP.supportsFeature(e),
    setProcessPriority(e) {
        l.ZP.getDiscordUtils().setProcessPriority(e);
    },
    getVoiceEngine: () => l.ZP.getVoiceEngine()
});
