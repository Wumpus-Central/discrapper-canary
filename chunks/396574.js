n.d(t, {
    Hz: () => c,
    It: () => s,
    LU: () => p,
    PF: () => d,
    VP: () => l,
    fA: () => f,
    g7: () => u,
});
var r,
    i = n(214958),
    a = n.n(i);
let s = parseInt(null != (r = a().version) ? r : "0", 10),
    o = void 0 !== a().ua && a().ua.indexOf("OculusBrowser") > -1,
    l = (() => {
        if ("u" > typeof window && null == window.WebSocket) return !1;
        switch (a().name) {
            case "IE":
            case "Microsoft Edge":
                return s >= 15;
            default:
                return !0;
        }
    })(),
    c =
        o ||
        ("Firefox" === a().name && s >= 80) ||
        ("Chrome" === a().name && s >= 37) ||
        ("Opera" === a().name && s >= 66) ||
        ("Node.js" === a().name && s >= 6) ||
        ("Electron" === a().name && s >= 1) ||
        ("Safari" === a().name && s >= 13) ||
        ("Microsoft Edge" === a().name && s >= 37),
    u =
        "Chrome" === a().name ||
        "Safari" === a().name ||
        ("Firefox" === a().name && s >= 80) ||
        "Opera" === a().name ||
        "Microsoft Edge" === a().name,
    d =
        o ||
        ("Firefox" === a().name && s >= 73) ||
        ("Safari" === a().name && s >= 13) ||
        ("Chrome" === a().name && s >= 80) ||
        ("Microsoft Edge" === a().name && s >= 80),
    f =
        ("Chrome" === a().name && s >= 58) ||
        ("Safari" === a().name && s >= 15) ||
        ("Firefox" === a().name && s >= 108),
    p =
        ("Chrome" === a().name && s >= 72) ||
        ("Safari" === a().name && s >= 11) ||
        ("Opera" === a().name && s >= 60) ||
        ("Microsoft Edge" === a().name && s >= 79);
