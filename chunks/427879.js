"use strict";
function t(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function r() {
    this._defaults = [];
}
for (
    var n = 0,
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
    n < i.length;
    n++
) {
    let e = i[n];
    r.prototype[e] = function () {
        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        return this._defaults.push({ fn: e, args: r }), this;
    };
}
(r.prototype._setDefaults = function (e) {
    var r,
        n = (function (e) {
            var r = ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (!r) {
                if (
                    Array.isArray(e) ||
                    (r = (function (e) {
                        if (e) {
                            if ("string" == typeof e) return t(e, void 0);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            if (
                                ("Object" === r && e.constructor && (r = e.constructor.name),
                                "Map" === r || "Set" === r)
                            )
                                return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                return t(e, void 0);
                        }
                    })(e))
                ) {
                    r && (e = r);
                    var n = 0,
                        i = function () {};
                    return {
                        s: i,
                        n: function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
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
            var o,
                a = !0,
                s = !1;
            return {
                s: function () {
                    r = r.call(e);
                },
                n: function () {
                    var e = r.next();
                    return (a = e.done), e;
                },
                e: function (e) {
                    (s = !0), (o = e);
                },
                f: function () {
                    try {
                        a || null == r.return || r.return();
                    } finally {
                        if (s) throw o;
                    }
                },
            };
        })(this._defaults);
    try {
        for (n.s(); !(r = n.n()).done; ) {
            let t = r.value;
            e[t.fn](...t.args);
        }
    } catch (e) {
        n.e(e);
    } finally {
        n.f();
    }
}),
    (e.exports = r);
