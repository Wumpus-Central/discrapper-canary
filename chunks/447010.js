"use strict";
n.d(t, { h: () => l });
var r = n(734057),
    i = n(430452),
    s = n(383501),
    a = n(487329),
    o = n(601900);
let l = {
    getActiveErrors: (e) => {
        let { voiceChannelId: t, voiceState: n } = e,
            l = r.A.getChannel(t),
            u = l?.isGuildStageVoice() && n?.suppress,
            c = 0 === Object.keys(i.Ay.getInputDevices()).length,
            d = s.A.getMediaSessionId();
        if (c && null != l && null != d && !u) return [{ type: a.iy.NO_INPUT_DEVICES, ...(0, o.jY)() }];
    },
    makeErrorContextKey: (e) => `${e.mediaSessionId}`,
};
