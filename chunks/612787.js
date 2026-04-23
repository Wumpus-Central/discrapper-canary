"use strict";
n.d(t, { Q: () => u, s: () => l });
var r = n(64700),
    i = n(768239),
    s = n(923870);
function a() {
    return (a =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function o(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
var l = (0, r.createContext)(null),
    u = function (e) {
        var t,
            n = e.portal,
            u = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++)
                        (n = s[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ["portal"]),
            c =
                (function (e) {
                    if (Array.isArray(e)) return e;
                })((t = (0, r.useState)(null))) ||
                (function (e) {
                    if ("u" > typeof Symbol && Symbol.iterator in Object(e)) {
                        var t = [],
                            n = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (
                                var s, a = e[Symbol.iterator]();
                                !(n = (s = a.next()).done) && (t.push(s.value), 2 !== t.length);
                                n = !0
                            );
                        } catch (e) {
                            (r = !0), (i = e);
                        } finally {
                            try {
                                n || null == a.return || a.return();
                            } finally {
                                if (r) throw i;
                            }
                        }
                        return t;
                    }
                })(t) ||
                (function (e) {
                    if (e) {
                        if ("string" == typeof e) return o(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                            return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(e, 2);
                    }
                })(t) ||
                (function () {
                    throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })(),
            d = c[0],
            _ = c[1];
        return r.createElement(
            l.Provider,
            { value: null != n ? n : d },
            r.createElement(i.Q, a({ backend: s.e }, u)),
            n ? null : r.createElement("div", { ref: _ }),
        );
    };
