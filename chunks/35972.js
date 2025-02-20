n.d(t, { Z: () => i });
var r = n(871074);
function i() {
    if ('undefined' == typeof Reflect || !r || r.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(r(Boolean, [], function () {})), !0;
    } catch (e) {
        return !1;
    }
}
