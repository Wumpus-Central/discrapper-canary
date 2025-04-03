var t = (function () {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
    }
    return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
})();
function n(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
e.exports = (function () {
    function e() {
        n(this, e);
    }
    return (
        t(e, [
            {
                key: 'start',
                value: function (e, t, n, r) {}
            },
            {
                key: 'stop',
                value: function () {}
            },
            {
                key: '__debouncedOnEnd',
                value: function (e) {
                    var t = this.__onEnd;
                    (this.__onEnd = null), t && t(e);
                }
            }
        ]),
        e
    );
})();
