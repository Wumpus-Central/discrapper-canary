var i = n(481613),
    r = n.n(i);
let a = (r().name ?? "unknown").toLowerCase(),
    s = "chrome" === a.toLowerCase() ? parseInt(r().version ?? "", 10) : -1;
function l() {
    return s;
}
let o = "electron" === a.toLowerCase() ? parseInt(r().version ?? "", 10) : -1,
    d = "firefox" === a.toLowerCase() ? parseInt(r().version ?? "", 10) : -1;
function c() {
    return d;
}
let u = "edge" === a.toLowerCase() ? parseInt(r().version ?? "", 10) : -1,
    _ = "safari" === a.toLowerCase() ? parseInt(r().version ?? "", 10) : -1;
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent,
        t = e.toLowerCase();
    return -1 !== t.indexOf("safari") && -1 === t.indexOf("chrome") && -1 !== t.indexOf("version/");
}
n.d(
    t,
    {},
    {
        EL: c,
        TM: function () {
            let e = window.navigator,
                t = e.mediaCapabilities?.decodingInfo != null;
            return E(e.userAgent) && t;
        },
        Z5: l,
        cy: function () {
            return -1 !== l() || -1 !== o || -1 !== c() || -1 !== u || _ >= 14;
        },
        gm: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent;
            return -1 !== e.toLowerCase().indexOf("firefox");
        },
        nr: E,
    },
);
