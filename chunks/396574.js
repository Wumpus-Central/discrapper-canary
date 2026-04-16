"use strict";
n.d(t, { Hz: () => l, It: () => s, LU: () => f, PF: () => c, VP: () => o, fA: () => _, g7: () => u, zU: () => d });
var r = n(214958),
    i = n.n(r);
let s = parseInt(i().version ?? "0", 10),
    a = null != i().ua && i().ua.indexOf("OculusBrowser") > -1,
    o = (() => {
        if ("u" > typeof window && null == window.WebSocket) return !1;
        switch (i().name) {
            case "IE":
            case "Microsoft Edge":
                return s >= 15;
            default:
                return !0;
        }
    })(),
    l =
        a ||
        ("Firefox" === i().name && s >= 80) ||
        ("Chrome" === i().name && s >= 37) ||
        ("Opera" === i().name && s >= 66) ||
        ("Node.js" === i().name && s >= 6) ||
        ("Electron" === i().name && s >= 1) ||
        ("Safari" === i().name && s >= 13) ||
        ("Microsoft Edge" === i().name && s >= 37),
    u =
        "Chrome" === i().name ||
        "Safari" === i().name ||
        ("Firefox" === i().name && s >= 80) ||
        "Opera" === i().name ||
        "Microsoft Edge" === i().name,
    c = "u" > typeof RTCPeerConnection && "function" == typeof RTCPeerConnection.prototype.addTransceiver,
    d =
        "u" > typeof RTCRtpSender &&
        ("transform" in RTCRtpSender.prototype || "createEncodedStreams" in RTCRtpSender.prototype),
    _ =
        ("Chrome" === i().name && s >= 58) ||
        ("Safari" === i().name && s >= 15) ||
        ("Firefox" === i().name && s >= 108),
    f =
        ("Chrome" === i().name && s >= 72) ||
        ("Safari" === i().name && s >= 11) ||
        ("Opera" === i().name && s >= 60) ||
        ("Microsoft Edge" === i().name && s >= 79);
