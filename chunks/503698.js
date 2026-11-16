!(function () {
    "use strict";
    var t = {}.hasOwnProperty;
    function r() {
        for (var e = "", i = 0; i < arguments.length; i++) {
            var o = arguments[i];
            o &&
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
                        var i = "";
                        for (var o in e) t.call(e, o) && e[o] && (i = n(i, o));
                        return i;
                    })(o),
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
