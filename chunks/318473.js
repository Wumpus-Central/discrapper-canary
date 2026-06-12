"use strict";
n.d(t, { v: () => a });
var i = n(260431),
    r = n(985620);
let s = function () {
    for (var e, t, n = 0, i = "", r = arguments.length; n < r; n++)
        (e = arguments[n]) &&
            (t = (function e(t) {
                var n,
                    i,
                    r = "";
                if ("string" == typeof t || "number" == typeof t) r += t;
                else if ("object" == typeof t)
                    if (Array.isArray(t)) {
                        var s = t.length;
                        for (n = 0; n < s; n++) t[n] && (i = e(t[n])) && (r && (r += " "), (r += i));
                    } else for (i in t) t[i] && (r && (r += " "), (r += i));
                return r;
            })(e)) &&
            (i && (i += " "), (i += t));
    return i;
};
function a(...e) {
    let t = { ...e[0] };
    for (let n = 1; n < e.length; n++) {
        let a = e[n];
        for (let e in a) {
            let n = t[e],
                o = a[e];
            "function" == typeof n &&
            "function" == typeof o &&
            "o" === e[0] &&
            "n" === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
                ? (t[e] = (0, i.c)(n, o))
                : ("className" === e || "UNSAFE_className" === e) && "string" == typeof n && "string" == typeof o
                  ? (t[e] = s(n, o))
                  : "id" === e && n && o
                    ? (t.id = (0, r.Tw)(n, o))
                    : (t[e] = void 0 !== o ? o : n);
        }
    }
    return t;
}
