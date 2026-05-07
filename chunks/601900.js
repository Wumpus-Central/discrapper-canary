"use strict";
n.d(t, { id: () => c, jY: () => u });
var i = n(459838),
    r = n(652896),
    s = n(235058),
    a = n(763827),
    o = n(309010),
    l = n(116956);
function u() {
    return {
        channelId: o.A.getVoiceChannelId() ?? void 0,
        mediaSessionId: a.A.getMediaSessionId() ?? void 0,
        rtcConnectionId: a.A.getRTCConnectionId(),
        mediaContext: i.x.DEFAULT,
        ...d(),
    };
}
function c(e) {
    let { channelId: t, ownerId: n } = (0, r.Iy)(e),
        s = l.A.getRTCConnection(e);
    return {
        channelId: t,
        mediaSessionId: s?.getMediaSessionId() ?? void 0,
        rtcConnectionId: s?.getRTCConnectionId(),
        mediaContext: i.x.STREAM,
        streamKey: e,
        userId: n,
        ...d(),
    };
}
function d() {
    return {
        videoDeviceName: s.Ay.getVideoDevices()[s.Ay.getVideoDeviceId()]?.name,
        audioInputDeviceName: s.Ay.getInputDevices()[s.Ay.getInputDeviceId()]?.name,
        audioOutputDeviceName: s.Ay.getOutputDevices()[s.Ay.getOutputDeviceId()]?.name,
    };
}
