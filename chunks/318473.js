"use strict";
r.d(t, { v: () => i });
var n = r(260431),
    a = r(985620);
let s = function () {
    for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++)
        (e = arguments[r]) &&
            (t = (function e(t) {
                var r,
                    n,
                    a = "";
                if ("string" == typeof t || "number" == typeof t) a += t;
                else if ("object" == typeof t)
                    if (Array.isArray(t)) {
                        var s = t.length;
                        for (r = 0; r < s; r++) t[r] && (n = e(t[r])) && (a && (a += " "), (a += n));
                    } else for (n in t) t[n] && (a && (a += " "), (a += n));
                return a;
            })(e)) &&
            (n && (n += " "), (n += t));
    return n;
};
function i(...e) {
    let t = { ...e[0] };
    for (let r = 1; r < e.length; r++) {
        let i = e[r];
        for (let e in i) {
            let r = t[e],
                o = i[e];
            "function" == typeof r &&
            "function" == typeof o &&
            "o" === e[0] &&
            "n" === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
                ? (t[e] = (0, n.c)(r, o))
                : ("className" === e || "UNSAFE_className" === e) && "string" == typeof r && "string" == typeof o
                  ? (t[e] = s(r, o))
                  : "id" === e && r && o
                    ? (t.id = (0, a.Tw)(r, o))
                    : (t[e] = void 0 !== o ? o : r);
        }
    }
    return t;
}
