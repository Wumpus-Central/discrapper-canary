!(function () {
    var t = {}.hasOwnProperty;
    function n() {
        for (var e = [], i = 0; i < arguments.length; i++) {
            var r = arguments[i];
            if (r) {
                var a = typeof r;
                if ('string' === a || 'number' === a) e.push(r);
                else if (Array.isArray(r)) {
                    if (r.length) {
                        var s = n.apply(null, r);
                        s && e.push(s);
                    }
                } else if ('object' === a) {
                    if (r.toString === Object.prototype.toString) for (var o in r) t.call(r, o) && r[o] && e.push(o);
                    else e.push(r.toString());
                }
            }
        }
        return e.join(' ');
    }
    e.exports
        ? ((n.default = n), (e.exports = n))
        : 'function' == typeof define && 'object' == typeof define.amd && define.amd
          ? define('classnames', [], function () {
                return n;
            })
          : (window.classNames = n);
})();
