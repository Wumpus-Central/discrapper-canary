r.d(t, { v: () => s });
var n = r(685485),
    i = r(834559),
    o = r(161596);
let a = function () {
    for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
        (e = arguments[r]) &&
            (t = (function e(t) {
                var r,
                    n,
                    i = "";
                if ("string" == typeof t || "number" == typeof t) i += t;
                else if ("object" == typeof t)
                    if (Array.isArray(t)) {
                        var o = t.length;
                        for (r = 0; r < o; r++) t[r] && (n = e(t[r])) && (i && (i += " "), (i += n));
                    } else for (n in t) t[n] && (i && (i += " "), (i += n));
                return i;
            })(e)) &&
            (n && (n += " "), (n += t));
    return n;
};
function s() {
    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    let s = { ...t[0] };
    for (let e = 1; e < t.length; e++) {
        let r = t[e];
        for (let e in r) {
            let t = s[e],
                l = r[e];
            "function" == typeof t &&
            "function" == typeof l &&
            "o" === e[0] &&
            "n" === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
                ? (s[e] = (0, n.c)(t, l))
                : ("className" === e || "UNSAFE_className" === e) && "string" == typeof t && "string" == typeof l
                  ? (s[e] = a(t, l))
                  : "id" === e && t && l
                    ? (s.id = (0, i.Tw)(t, l))
                    : "ref" === e && t && l
                      ? (s.ref = (0, o.P)(t, l))
                      : (s[e] = void 0 !== l ? l : t);
        }
    }
    return s;
}
