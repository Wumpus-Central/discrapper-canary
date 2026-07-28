"use strict";
n.d(t, { v: () => o });
var r = n(389979),
    i = n(709157);
let a = function () {
    for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
        (e = arguments[n]) &&
            (t = (function e(t) {
                var n,
                    r,
                    i = "";
                if ("string" == typeof t || "number" == typeof t) i += t;
                else if ("object" == typeof t)
                    if (Array.isArray(t)) {
                        var a = t.length;
                        for (n = 0; n < a; n++) t[n] && (r = e(t[n])) && (i && (i += " "), (i += r));
                    } else for (r in t) t[r] && (i && (i += " "), (i += r));
                return i;
            })(e)) &&
            (r && (r += " "), (r += t));
    return r;
};
function o(...e) {
    let t = { ...e[0] };
    for (let n = 1; n < e.length; n++) {
        let o = e[n];
        for (let e in o) {
            let n = t[e],
                s = o[e];
            "function" == typeof n &&
            "function" == typeof s &&
            "o" === e[0] &&
            "n" === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
                ? (t[e] = (0, r.c)(n, s))
                : ("className" === e || "UNSAFE_className" === e) && "string" == typeof n && "string" == typeof s
                  ? (t[e] = a(n, s))
                  : "id" === e && n && s
                    ? (t.id = (0, i.Tw)(n, s))
                    : (t[e] = void 0 !== s ? s : n);
        }
    }
    return t;
}
