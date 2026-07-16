"use strict";
n.d(t, { id: () => c, jY: () => d });
var i = n(459838),
    r = n(652896),
    a = n(186295),
    s = n(763827),
    l = n(309010),
    o = n(116956);
function d() {
    return {
        channelId: l.Ay.getVoiceChannelId() ?? void 0,
        mediaSessionId: s.A.getMediaSessionId() ?? void 0,
        rtcConnectionId: s.A.getRTCConnectionId(),
        mediaContext: i.x.DEFAULT,
        ...u(),
    };
}
function c(e) {
    let { channelId: t, ownerId: n } = (0, r.Iy)(e),
        a = o.A.getRTCConnection(e);
    return {
        channelId: t,
        mediaSessionId: a?.getMediaSessionId() ?? void 0,
        rtcConnectionId: a?.getRTCConnectionId(),
        mediaContext: i.x.STREAM,
        streamKey: e,
        userId: n,
        ...u(),
    };
}
function u() {
    return {
        videoDeviceName: a.Ay.getVideoDevices()[a.Ay.getVideoDeviceId()]?.name,
        audioInputDeviceName: a.Ay.getInputDevices()[a.Ay.getInputDeviceId()]?.name,
        audioOutputDeviceName: a.Ay.getOutputDevices()[a.Ay.getOutputDeviceId()]?.name,
    };
}
