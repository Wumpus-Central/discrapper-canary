"use strict";
r.d(t, { v: () => a });
var n = r(389979),
    o = r(709157);
let i = function () {
    for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
        (e = arguments[r]) &&
            (t = (function e(t) {
                var r,
                    n,
                    o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t)
                    if (Array.isArray(t)) {
                        var i = t.length;
                        for (r = 0; r < i; r++) t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                    } else for (n in t) t[n] && (o && (o += " "), (o += n));
                return o;
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
                  ? (t[e] = i(r, s))
                  : "id" === e && r && s
                    ? (t.id = (0, o.Tw)(r, s))
                    : (t[e] = void 0 !== s ? s : r);
        }
    }
    return t;
}
