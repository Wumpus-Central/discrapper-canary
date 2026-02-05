"use strict";
n.d(t, { B: () => i, O: () => r });
let r = globalThis;
function i(e, t, n) {
    let i = n || r,
        a = (i.__SENTRY__ = i.__SENTRY__ || {}),
        s = (a["8.31.0"] = a["8.31.0"] || {});
    return s[e] || (s[e] = t());
}
