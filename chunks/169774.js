var r = n(947268),
    i = n(881886);
function a(e, t, n, r) {
    if (e === n) return !0;
    if (!n.startsWith(e)) return !1;
    var a = n.slice(e.length);
    return !!t && ((a = r ? r(a) : a), i.contains(a, t));
}
function o(e) {
    return "Windows" === r.platformName ? e.replace(/^\s*NT/, "") : e;
}
e.exports = n(267100)(
    {
        isBrowser: function (e) {
            return a(r.browserName, r.browserFullVersion, e);
        },
        isBrowserArchitecture: function (e) {
            return a(r.browserArchitecture, null, e);
        },
        isDevice: function (e) {
            return a(r.deviceName, null, e);
        },
        isEngine: function (e) {
            return a(r.engineName, r.engineVersion, e);
        },
        isPlatform: function (e) {
            return a(r.platformName, r.platformFullVersion, e, o);
        },
        isPlatformArchitecture: function (e) {
            return a(r.platformArchitecture, null, e);
        },
    },
    n(746154),
);
