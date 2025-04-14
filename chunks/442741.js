n.d(t, {
    Y9: () => d,
    rT: () => f
});
var r = n(46973),
    i = n(569545),
    o = n(131951),
    a = n(19780),
    s = n(944486),
    l = n(959457);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d() {
    var e;
    let t = s.Z.getVoiceChannelId();
    return u(
        {
            channelId: null != t ? t : void 0,
            mediaSessionId: null != (e = a.Z.getMediaSessionId()) ? e : void 0,
            rtcConnectionId: a.Z.getRTCConnectionId(),
            mediaContext: r.Yn.DEFAULT
        },
        _()
    );
}
function f(e) {
    var t;
    let { channelId: n } = (0, i.my)(e),
        o = l.Z.getRTCConnection(e);
    return u(
        {
            channelId: n,
            mediaSessionId: null != (t = null == o ? void 0 : o.getMediaSessionId()) ? t : void 0,
            rtcConnectionId: null == o ? void 0 : o.getRTCConnectionId(),
            mediaContext: r.Yn.STREAM,
            streamKey: e
        },
        _()
    );
}
function _() {
    var e, t, n;
    return {
        videoDeviceName: null == (e = o.Z.getVideoDevices()[o.Z.getVideoDeviceId()]) ? void 0 : e.name,
        audioInputDeviceName: null == (t = o.Z.getInputDevices()[o.Z.getInputDeviceId()]) ? void 0 : t.name,
        audioOutputDeviceName: null == (n = o.Z.getOutputDevices()[o.Z.getOutputDeviceId()]) ? void 0 : n.name
    };
}
