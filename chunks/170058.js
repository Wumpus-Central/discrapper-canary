var i = Object.prototype.toString;
if (n(322499)()) {
    var r = Symbol.prototype.toString,
        a = /^Symbol\(.*\)$/,
        s = function (e) {
            return 'symbol' == typeof e.valueOf() && a.test(r.call(e));
        };
    e.exports = function (e) {
        if ('symbol' == typeof e) return !0;
        if ('[object Symbol]' !== i.call(e)) return !1;
        try {
            return s(e);
        } catch (e) {
            return !1;
        }
    };
} else
    e.exports = function (e) {
        return !1;
    };
