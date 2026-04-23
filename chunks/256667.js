"use strict";
n.d(t, { i: () => u });
var r = n(734057),
    i = n(430452),
    s = n(383501),
    a = n(487329),
    o = n(601900),
    l = n(652215);
let u = {
    getActiveErrors: (e) => {
        let { voiceChannelId: t, voiceState: n } = e,
            u = r.A.getChannel(t),
            c = u?.isGuildStageVoice() && n?.suppress,
            d = s.A.getMediaSessionId();
        if (
            null != u &&
            null != d &&
            !i.Ay.getInputDetectedThisConnection() &&
            s.A.getState() === l.S7L.RTC_CONNECTED &&
            i.Ay.getSettings().mode === l.TBI.VOICE_ACTIVITY &&
            i.Ay.getSettings().silenceWarning &&
            !1 === i.Ay.getInputDetected() &&
            !c &&
            !i.Ay.isSelfMute()
        )
            return [{ type: a.iy.NO_AUDIO_INPUT_DETECTED, ...(0, o.jY)() }];
    },
    makeErrorContextKey: (e) => `${e.mediaSessionId}:${e.audioInputDeviceName}`,
};
