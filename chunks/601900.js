"use strict";
n.d(t, { id: () => c, jY: () => u });
var r = n(205693),
    i = n(652896),
    a = n(430452),
    s = n(383501),
    o = n(309010),
    l = n(162605);
function u() {
    return {
        channelId: o.A.getVoiceChannelId() ?? void 0,
        mediaSessionId: s.A.getMediaSessionId() ?? void 0,
        rtcConnectionId: s.A.getRTCConnectionId(),
        mediaContext: r.x.DEFAULT,
        ...d(),
    };
}
function c(e) {
    let { channelId: t, ownerId: n } = (0, i.Iy)(e),
        a = l.A.getRTCConnection(e);
    return {
        channelId: t,
        mediaSessionId: a?.getMediaSessionId() ?? void 0,
        rtcConnectionId: a?.getRTCConnectionId(),
        mediaContext: r.x.STREAM,
        streamKey: e,
        userId: n,
        ...d(),
    };
}
function d() {
    return {
        videoDeviceName: a.A.getVideoDevices()[a.A.getVideoDeviceId()]?.name,
        audioInputDeviceName: a.A.getInputDevices()[a.A.getInputDeviceId()]?.name,
        audioOutputDeviceName: a.A.getOutputDevices()[a.A.getOutputDeviceId()]?.name,
    };
}
