"use strict";
function t(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
function n() {
    this._defaults = [];
}
for (
    var i = 0,
        r = [
            "use",
            "on",
            "once",
            "set",
            "query",
            "type",
            "accept",
            "auth",
            "withCredentials",
            "sortQuery",
            "retry",
            "ok",
            "redirects",
            "timeout",
            "buffer",
            "serialize",
            "parse",
            "ca",
            "key",
            "pfx",
            "cert",
            "disableTLSCerts",
        ];
    i < r.length;
    i++
) {
    let e = r[i];
    n.prototype[e] = function () {
        for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        return this._defaults.push({ fn: e, args: n }), this;
    };
}
(n.prototype._setDefaults = function (e) {
    var n,
        i = (function (e) {
            var n = ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (!n) {
                if (
                    Array.isArray(e) ||
                    (n = (function (e) {
                        if (e) {
                            if ("string" == typeof e) return t(e, void 0);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if (
                                ("Object" === n && e.constructor && (n = e.constructor.name),
                                "Map" === n || "Set" === n)
                            )
                                return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return t(e, void 0);
                        }
                    })(e))
                ) {
                    n && (e = n);
                    var i = 0,
                        r = function () {};
                    return {
                        s: r,
                        n: function () {
                            return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
                        },
                        e: function (e) {
                            throw e;
                        },
                        f: r,
                    };
                }
                throw TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            }
            var s,
                a = !0,
                o = !1;
            return {
                s: function () {
                    n = n.call(e);
                },
                n: function () {
                    var e = n.next();
                    return (a = e.done), e;
                },
                e: function (e) {
                    (o = !0), (s = e);
                },
                f: function () {
                    try {
                        a || null == n.return || n.return();
                    } finally {
                        if (o) throw s;
                    }
                },
            };
        })(this._defaults);
    try {
        for (i.s(); !(n = i.n()).done; ) {
            let t = n.value;
            e[t.fn](...t.args);
        }
    } catch (e) {
        i.e(e);
    } finally {
        i.f();
    }
}),
    (e.exports = n);
