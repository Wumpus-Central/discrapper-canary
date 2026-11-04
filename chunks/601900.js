var i = n(205693),
    r = n(652896),
    a = n(718197),
    s = n(495867),
    l = n(309010),
    o = n(753181);
function d() {
    return {
        videoDeviceName: a.Ay.getVideoDevices()[a.Ay.getVideoDeviceId()]?.name,
        audioInputDeviceName: a.Ay.getInputDevices()[a.Ay.getInputDeviceId()]?.name,
        audioOutputDeviceName: a.Ay.getOutputDevices()[a.Ay.getOutputDeviceId()]?.name,
    };
}
n.d(
    t,
    {},
    {
        id: function (e) {
            let { channelId: t, ownerId: n } = (0, r.Iy)(e),
                a = o.A.getRTCConnection(e);
            return {
                channelId: t,
                mediaSessionId: a?.getMediaSessionId() ?? void 0,
                rtcConnectionId: a?.getRTCConnectionId(),
                mediaContext: i.x.STREAM,
                streamKey: e,
                userId: n,
                ...d(),
            };
        },
        jY: function () {
            return {
                channelId: l.Ay.getVoiceChannelId() ?? void 0,
                mediaSessionId: s.A.getMediaSessionId() ?? void 0,
                rtcConnectionId: s.A.getRTCConnectionId(),
                mediaContext: i.x.DEFAULT,
                ...d(),
            };
        },
    },
);
