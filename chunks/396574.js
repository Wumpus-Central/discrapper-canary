"use strict";
n.d(t, { Hz: () => o, It: () => a, LU: () => E, PF: () => c, VP: () => l, fA: () => _, g7: () => d, zU: () => u });
var i = n(214958),
    r = n.n(i);
let a = parseInt(r().version ?? "0", 10),
    s = null != r().ua && r().ua.indexOf("OculusBrowser") > -1,
    l = (() => {
        if ("u" > typeof window && null == window.WebSocket) return !1;
        switch (r().name) {
            case "IE":
            case "Microsoft Edge":
                return a >= 15;
            default:
                return !0;
        }
    })(),
    o =
        s ||
        ("Firefox" === r().name && a >= 80) ||
        ("Chrome" === r().name && a >= 37) ||
        ("Opera" === r().name && a >= 66) ||
        ("Node.js" === r().name && a >= 6) ||
        ("Electron" === r().name && a >= 1) ||
        ("Safari" === r().name && a >= 13) ||
        ("Microsoft Edge" === r().name && a >= 37),
    d =
        "Chrome" === r().name ||
        "Safari" === r().name ||
        ("Firefox" === r().name && a >= 80) ||
        "Opera" === r().name ||
        "Microsoft Edge" === r().name,
    c = "u" > typeof RTCPeerConnection && "function" == typeof RTCPeerConnection.prototype.addTransceiver,
    u =
        "u" > typeof RTCRtpSender &&
        ("transform" in RTCRtpSender.prototype || "createEncodedStreams" in RTCRtpSender.prototype),
    _ =
        ("Chrome" === r().name && a >= 58) ||
        ("Safari" === r().name && a >= 15) ||
        ("Firefox" === r().name && a >= 108),
    E =
        ("Chrome" === r().name && a >= 72) ||
        ("Safari" === r().name && a >= 11) ||
        ("Opera" === r().name && a >= 60) ||
        ("Microsoft Edge" === r().name && a >= 79);
