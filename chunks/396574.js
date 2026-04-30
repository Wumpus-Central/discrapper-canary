"use strict";
n.d(t, { Hz: () => l, It: () => s, LU: () => f, PF: () => c, VP: () => o, fA: () => _, g7: () => u, zU: () => d });
var i = n(214958),
    r = n.n(i);
let s = parseInt(r().version ?? "0", 10),
    a = null != r().ua && r().ua.indexOf("OculusBrowser") > -1,
    o = (() => {
        if ("u" > typeof window && null == window.WebSocket) return !1;
        switch (r().name) {
            case "IE":
            case "Microsoft Edge":
                return s >= 15;
            default:
                return !0;
        }
    })(),
    l =
        a ||
        ("Firefox" === r().name && s >= 80) ||
        ("Chrome" === r().name && s >= 37) ||
        ("Opera" === r().name && s >= 66) ||
        ("Node.js" === r().name && s >= 6) ||
        ("Electron" === r().name && s >= 1) ||
        ("Safari" === r().name && s >= 13) ||
        ("Microsoft Edge" === r().name && s >= 37),
    u =
        "Chrome" === r().name ||
        "Safari" === r().name ||
        ("Firefox" === r().name && s >= 80) ||
        "Opera" === r().name ||
        "Microsoft Edge" === r().name,
    c = "u" > typeof RTCPeerConnection && "function" == typeof RTCPeerConnection.prototype.addTransceiver,
    d =
        "u" > typeof RTCRtpSender &&
        ("transform" in RTCRtpSender.prototype || "createEncodedStreams" in RTCRtpSender.prototype),
    _ =
        ("Chrome" === r().name && s >= 58) ||
        ("Safari" === r().name && s >= 15) ||
        ("Firefox" === r().name && s >= 108),
    f =
        ("Chrome" === r().name && s >= 72) ||
        ("Safari" === r().name && s >= 11) ||
        ("Opera" === r().name && s >= 60) ||
        ("Microsoft Edge" === r().name && s >= 79);
