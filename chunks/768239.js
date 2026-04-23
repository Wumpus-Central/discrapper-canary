"use strict";
n.d(t, { Q: () => d });
var r = n(627968),
    i = n(64700),
    s = n(45077),
    a = n(75375),
    o = ["children"];
function l(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
var u = 0,
    c = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"),
    d = (0, i.memo)(function (e) {
        var t,
            n,
            d = e.children,
            f =
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(
                    (n =
                        "manager" in
                        (t = (function (e, t) {
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
                                        !(t.indexOf(n) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                                            (i[n] = e[n]);
                            }
                            return i;
                        })(e, o))
                            ? [{ dragDropManager: t.manager }, !1]
                            : [
                                  (function (e) {
                                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _(),
                                          n = arguments.length > 2 ? arguments[2] : void 0,
                                          r = arguments.length > 3 ? arguments[3] : void 0;
                                      return t[c] || (t[c] = { dragDropManager: (0, s.b)(e, t, n, r) }), t[c];
                                  })(t.backend, t.context, t.options, t.debugMode),
                                  !t.context,
                              ]),
                ) ||
                (function (e) {
                    var t,
                        n,
                        r = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                    if (null != r) {
                        var i = [],
                            s = !0,
                            a = !1;
                        try {
                            for (
                                r = r.call(e);
                                !(s = (t = r.next()).done) && (i.push(t.value), 2 !== i.length);
                                s = !0
                            );
                        } catch (e) {
                            (a = !0), (n = e);
                        } finally {
                            try {
                                s || null == r.return || r.return();
                            } finally {
                                if (a) throw n;
                            }
                        }
                        return i;
                    }
                })(n) ||
                (function (e) {
                    if (e) {
                        if ("string" == typeof e) return l(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                            return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return l(e, 2);
                    }
                })(n) ||
                (function () {
                    throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })(),
            p = f[0],
            h = f[1];
        return (
            (0, i.useEffect)(function () {
                if (h) {
                    var e = _();
                    return (
                        ++u,
                        function () {
                            0 == --u && (e[c] = null);
                        }
                    );
                }
            }, []),
            (0, r.jsx)(a.M.Provider, Object.assign({ value: p }, { children: d }), void 0)
        );
    });
function _() {
    return void 0 !== n.g ? n.g : window;
}
