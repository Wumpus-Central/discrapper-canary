n.d(t, { Z: () => r });
var i = n(871074);
function r() {
    if ('undefined' == typeof Reflect || !i || i.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(i(Boolean, [], function () {})), !0;
    } catch (e) {
        return !1;
    }
}
