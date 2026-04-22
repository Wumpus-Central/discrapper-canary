"use strict";
n.d(t, { W: () => i });
let r = "_errors";
function i(e) {
    return (function e(t, n) {
        let i = t[r];
        if (null != i && Array.isArray(i)) return i[0];
        for (let [i, s] of Object.entries(t)) if (i !== r && null != s && "object" == typeof s) return e(s, n ?? i);
        return null;
    })(e, void 0);
}
