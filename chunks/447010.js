"use strict";
n.d(t, { h: () => l });
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
            c = 0 === Object.keys(i.Ay.getInputDevices()).length,
            d = a.A.getMediaSessionId();
        if (c && null != l && null != d && !u) return [{ type: s.iy.NO_INPUT_DEVICES, ...(0, o.jY)() }];
    },
    makeErrorContextKey: (e) => `${e.mediaSessionId}`,
};
