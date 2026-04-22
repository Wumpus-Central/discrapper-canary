"use strict";
function t(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function n() {
    this._defaults = [];
}
for (
    var r = 0,
        i = [
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
    r < i.length;
    r++
) {
    let e = i[r];
    n.prototype[e] = function () {
        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return this._defaults.push({ fn: e, args: n }), this;
    };
}
(n.prototype._setDefaults = function (e) {
    var n,
        r = (function (e) {
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
                    var r = 0,
                        i = function () {};
                    return {
                        s: i,
                        n: function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        },
                        e: function (e) {
                            throw e;
                        },
                        f: i,
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
        for (r.s(); !(n = r.n()).done; ) {
            let t = n.value;
            e[t.fn](...t.args);
        }
    } catch (e) {
        r.e(e);
    } finally {
        r.f();
    }
}),
    (e.exports = n);
