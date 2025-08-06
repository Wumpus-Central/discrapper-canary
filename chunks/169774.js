var r = n(947268),
    i = n(881886);
function o(e, t, n, r) {
    if (e === n) return !0;
    if (!n.startsWith(e)) return !1;
    var o = n.slice(e.length);
    return !!t && ((o = r ? r(o) : o), i.contains(o, t));
}
function a(e) {
    return 'Windows' === r.platformName ? e.replace(/^\s*NT/, '') : e;
}
e.exports = n(267100)(
    {
        isBrowser: function (e) {
            return o(r.browserName, r.browserFullVersion, e);
        },
        isBrowserArchitecture: function (e) {
            return o(r.browserArchitecture, null, e);
        },
        isDevice: function (e) {
            return o(r.deviceName, null, e);
        },
        isEngine: function (e) {
            return o(r.engineName, r.engineVersion, e);
        },
        isPlatform: function (e) {
            return o(r.platformName, r.platformFullVersion, e, a);
        },
        isPlatformArchitecture: function (e) {
            return o(r.platformArchitecture, null, e);
        }
    },
    n(746154)
);
