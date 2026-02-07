var n = t(214958),
    a = t.n(n);
let o = parseInt(a().version ?? "0", 10),
    i = null != a().ua && a().ua.indexOf("OculusBrowser") > -1;
(() => {
    if (!("u" > typeof window) || null != window.WebSocket) return a().name;
})(),
    i ||
        ("Firefox" === a().name && o >= 80) ||
        ("Chrome" === a().name && o >= 37) ||
        ("Opera" === a().name && o >= 66) ||
        ("Node.js" === a().name && o >= 6) ||
        ("Electron" === a().name && o >= 1) ||
        ("Safari" === a().name && o >= 13) ||
        a().name,
    "Chrome" === a().name ||
        "Safari" === a().name ||
        ("Firefox" === a().name && o >= 80) ||
        "Opera" === a().name ||
        a().name,
    "u" > typeof RTCPeerConnection && RTCPeerConnection.prototype.addTransceiver,
    "u" > typeof RTCRtpSender && ("transform" in RTCRtpSender.prototype || RTCRtpSender.prototype),
    ("Chrome" === a().name && o >= 58) || ("Safari" === a().name && o >= 15) || a().name,
    ("Chrome" === a().name && o >= 72) ||
        ("Safari" === a().name && o >= 11) ||
        ("Opera" === a().name && o >= 60) ||
        a().name;
