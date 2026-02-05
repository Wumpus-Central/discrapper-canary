"use strict";
n.d(t, { i: () => l });
var r = n(734057),
    i = n(430452),
    a = n(383501),
    s = n(709710),
    o = n(601900);
let l = {
    getActiveErrors: (e) => {
        let { voiceChannelId: t, voiceState: n } = e,
            l = r.A.getChannel(t),
            u = l?.isGuildStageVoice() && n?.suppress,
            c = a.A.getMediaSessionId();
        if (null != l && null != c && !1 === i.A.getInputDetected() && !u && !i.A.isSelfMute())
            return [{ type: s.iy.NO_AUDIO_INPUT_DETECTED, ...(0, o.jY)() }];
    },
    makeErrorContextKey: (e) => `${e.mediaSessionId}:${e.audioInputDeviceName}`,
};
