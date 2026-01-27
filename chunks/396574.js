n.d(t, {
    Hz: () => c,
    It: () => o,
    LU: () => _,
    PF: () => d,
    VP: () => l,
    fA: () => p,
    g7: () => u,
    zU: () => f,
});
var r,
    i = n(214958),
    a = n.n(i);
let o = parseInt(null != (r = a().version) ? r : "0", 10),
    s = void 0 !== a().ua && a().ua.indexOf("OculusBrowser") > -1,
    l = (() => {
        if ("u" > typeof window && null == window.WebSocket) return !1;
        switch (a().name) {
            case "IE":
            case "Microsoft Edge":
                return o >= 15;
            default:
                return !0;
        }
    })(),
    c =
        s ||
        ("Firefox" === a().name && o >= 80) ||
        ("Chrome" === a().name && o >= 37) ||
        ("Opera" === a().name && o >= 66) ||
        ("Node.js" === a().name && o >= 6) ||
        ("Electron" === a().name && o >= 1) ||
        ("Safari" === a().name && o >= 13) ||
        ("Microsoft Edge" === a().name && o >= 37),
    u =
        "Chrome" === a().name ||
        "Safari" === a().name ||
        ("Firefox" === a().name && o >= 80) ||
        "Opera" === a().name ||
        "Microsoft Edge" === a().name,
    d = "u" > typeof RTCPeerConnection && "function" == typeof RTCPeerConnection.prototype.addTransceiver,
    f =
        "u" > typeof RTCRtpSender &&
        ("transform" in RTCRtpSender.prototype || "createEncodedStreams" in RTCRtpSender.prototype),
    p =
        ("Chrome" === a().name && o >= 58) ||
        ("Safari" === a().name && o >= 15) ||
        ("Firefox" === a().name && o >= 108),
    _ =
        ("Chrome" === a().name && o >= 72) ||
        ("Safari" === a().name && o >= 11) ||
        ("Opera" === a().name && o >= 60) ||
        ("Microsoft Edge" === a().name && o >= 79);
