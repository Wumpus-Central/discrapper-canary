"use strict";
function r(e) {
    var t,
        n,
        i = "";
    if ("string" == typeof e || "number" == typeof e) i += e;
    else if ("object" == typeof e)
        if (Array.isArray(e)) {
            var a = e.length;
            for (t = 0; t < a; t++) e[t] && (n = r(e[t])) && (i && (i += " "), (i += n));
        } else for (n in e) e[n] && (i && (i += " "), (i += n));
    return i;
}
n.d(t, { A: () => i });
let i = function () {
    for (var e, t, n = 0, i = "", a = arguments.length; n < a; n++)
        (e = arguments[n]) && (t = r(e)) && (i && (i += " "), (i += t));
    return i;
};
