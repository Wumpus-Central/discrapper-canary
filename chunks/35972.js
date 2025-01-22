r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(871074);
function a() {
    if ('undefined' == typeof Reflect || !i || i.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(i(Boolean, [], function () {})), !0;
    } catch (e) {
        return !1;
    }
}
