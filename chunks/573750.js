var r = n(949542),
    i = n(256937);
function a(e, t, n, r) {
    if (e === n) return !0;
    if (!n.startsWith(e)) return !1;
    var a = n.slice(e.length);
    return !!t && ((a = r ? r(a) : a), i.contains(a, t));
}
function s(e) {
    return "Windows" === r.platformName ? e.replace(/^\s*NT/, "") : e;
}
e.exports = n(816627)(
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
            return a(r.platformName, r.platformFullVersion, e, s);
        },
        isPlatformArchitecture: function (e) {
            return a(r.platformArchitecture, null, e);
        },
    },
    n(531465),
);
