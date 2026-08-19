!(function () {
    "use strict";
    var t = {}.hasOwnProperty;
    function r() {
        for (var e = "", o = 0; o < arguments.length; o++) {
            var i = arguments[o];
            i &&
                (e = n(
                    e,
                    (function (e) {
                        if ("string" == typeof e || "number" == typeof e) return e;
                        if ("object" != typeof e) return "";
                        if (Array.isArray(e)) return r.apply(null, e);
                        if (
                            e.toString !== Object.prototype.toString &&
                            !e.toString.toString().includes("[native code]")
                        )
                            return e.toString();
                        var o = "";
                        for (var i in e) t.call(e, i) && e[i] && (o = n(o, i));
                        return o;
                    })(i),
                ));
        }
        return e;
    }
    function n(e, t) {
        return t ? (e ? e + " " + t : e + t) : e;
    }
    e.exports
        ? ((r.default = r), (e.exports = r))
        : "function" == typeof define && "object" == typeof define.amd && define.amd
          ? define("classnames", [], function () {
                return r;
            })
          : (window.classNames = r);
})();
