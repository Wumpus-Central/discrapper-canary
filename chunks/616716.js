"use strict";
n.d(t, { W: () => r });
let i = "_errors";
function r(e) {
    return (function e(t, n) {
        let r = t[i];
        if (null != r && Array.isArray(r)) return r[0];
        for (let [r, s] of Object.entries(t)) if (r !== i && null != s && "object" == typeof s) return e(s, n ?? r);
        return null;
    })(e, void 0);
}
