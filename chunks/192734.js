"use strict";
r.d(t, { v: () => a });
var n = r(389979),
    i = r(709157);
let o = function () {
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
function a(...e) {
    let t = { ...e[0] };
    for (let r = 1; r < e.length; r++) {
        let a = e[r];
        for (let e in a) {
            let r = t[e],
                s = a[e];
            "function" == typeof r &&
            "function" == typeof s &&
            "o" === e[0] &&
            "n" === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
                ? (t[e] = (0, n.c)(r, s))
                : ("className" === e || "UNSAFE_className" === e) && "string" == typeof r && "string" == typeof s
                  ? (t[e] = o(r, s))
                  : "id" === e && r && s
                    ? (t.id = (0, i.Tw)(r, s))
                    : (t[e] = void 0 !== s ? s : r);
        }
    }
    return t;
}
