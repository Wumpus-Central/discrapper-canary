n.d(t, {
    Q: () => m,
    s: () => h,
});
var r = n(64700),
    i = n(768239),
    a = n(923870);
function s() {
    return (s =
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
    return f(e) || d(e, t) || c(e, t) || l();
}
function l() {
    throw TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
}
function c(e, t) {
    if (e) {
        if ("string" == typeof e) return u(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n))
            return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t);
    }
}
function u(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function d(e, t) {
    if ("u" > typeof Symbol && Symbol.iterator in Object(e)) {
        var n = [],
            r = !0,
            i = !1,
            a = void 0;
        try {
            for (
                var s, o = e[Symbol.iterator]();
                !(r = (s = o.next()).done) && (n.push(s.value), !t || n.length !== t);
                r = !0
            );
        } catch (e) {
            (i = !0), (a = e);
        } finally {
            try {
                r || null == o.return || o.return();
            } finally {
                if (i) throw a;
            }
        }
        return n;
    }
}
function f(e) {
    if (Array.isArray(e)) return e;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var h = (0, r.createContext)(null),
    m = function (e) {
        var t = e.portal,
            n = p(e, ["portal"]),
            l = o((0, r.useState)(null), 2),
            c = l[0],
            u = l[1];
        return r.createElement(
            h.Provider,
            { value: null != t ? t : c },
            r.createElement(i.Q, s({ backend: a.e }, n)),
            t ? null : r.createElement("div", { ref: u }),
        );
    };
