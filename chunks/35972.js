n.d(t, { Z: () => o });
var r = n(871074);
function o() {
    if ('undefined' == typeof Reflect || !r || r.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(r(Boolean, [], function () {})), !0;
    } catch (e) {
        return !1;
    }
}
