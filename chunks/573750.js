"use strict";
var n = r(949542),
    i = r(256937);
function o(t, e, r, n) {
    if (t === r) return !0;
    if (!r.startsWith(t)) return !1;
    var o = r.slice(t.length);
    return !!e && ((o = n ? n(o) : o), i.contains(o, e));
}
function a(t) {
    return "Windows" === n.platformName ? t.replace(/^\s*NT/, "") : t;
}
t.exports = r(816627)(
    {
        isBrowser: function (t) {
            return o(n.browserName, n.browserFullVersion, t);
        },
        isBrowserArchitecture: function (t) {
            return o(n.browserArchitecture, null, t);
        },
        isDevice: function (t) {
            return o(n.deviceName, null, t);
        },
        isEngine: function (t) {
            return o(n.engineName, n.engineVersion, t);
        },
        isPlatform: function (t) {
            return o(n.platformName, n.platformFullVersion, t, a);
        },
        isPlatformArchitecture: function (t) {
            return o(n.platformArchitecture, null, t);
        },
    },
    r(531465),
);
