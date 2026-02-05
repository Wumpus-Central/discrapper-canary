"use strict";
n.d(t, { Hz: () => l, It: () => a, LU: () => f, PF: () => c, VP: () => o, fA: () => _, g7: () => u, zU: () => d });
var r = n(214958),
    i = n.n(r);
let a = parseInt(i().version ?? "0", 10),
    s = null != i().ua && i().ua.indexOf("OculusBrowser") > -1,
    o = (() => {
        if ("u" > typeof window && null == window.WebSocket) return !1;
        switch (i().name) {
            case "IE":
            case "Microsoft Edge":
                return a >= 15;
            default:
                return !0;
        }
    })(),
    l =
        s ||
        ("Firefox" === i().name && a >= 80) ||
        ("Chrome" === i().name && a >= 37) ||
        ("Opera" === i().name && a >= 66) ||
        ("Node.js" === i().name && a >= 6) ||
        ("Electron" === i().name && a >= 1) ||
        ("Safari" === i().name && a >= 13) ||
        ("Microsoft Edge" === i().name && a >= 37),
    u =
        "Chrome" === i().name ||
        "Safari" === i().name ||
        ("Firefox" === i().name && a >= 80) ||
        "Opera" === i().name ||
        "Microsoft Edge" === i().name,
    c = "u" > typeof RTCPeerConnection && "function" == typeof RTCPeerConnection.prototype.addTransceiver,
    d =
        "u" > typeof RTCRtpSender &&
        ("transform" in RTCRtpSender.prototype || "createEncodedStreams" in RTCRtpSender.prototype),
    _ =
        ("Chrome" === i().name && a >= 58) ||
        ("Safari" === i().name && a >= 15) ||
        ("Firefox" === i().name && a >= 108),
    f =
        ("Chrome" === i().name && a >= 72) ||
        ("Safari" === i().name && a >= 11) ||
        ("Opera" === i().name && a >= 60) ||
        ("Microsoft Edge" === i().name && a >= 79);
