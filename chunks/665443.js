!(function () {
    var t = {}.hasOwnProperty;
    function n() {
        for (var e = [], r = 0; r < arguments.length; r++) {
            var i = arguments[r];
            if (i) {
                var o = typeof i;
                if ('string' === o || 'number' === o) e.push(i);
                else if (Array.isArray(i)) {
                    if (i.length) {
                        var a = n.apply(null, i);
                        a && e.push(a);
                    }
                } else if ('object' === o)
                    if (i.toString === Object.prototype.toString) for (var s in i) t.call(i, s) && i[s] && e.push(s);
                    else e.push(i.toString());
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
