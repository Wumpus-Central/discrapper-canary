"use strict";
n.d(t, { n: () => i });
let r = "_errors";
function i(e) {
    let t = {};
    for (let n in e) {
        let i = e[n];
        if (null == i || (n === r && (t._misc = e[n].map((e) => e.message)), Array.isArray(i))) continue;
        let s = i[r];
        null != s ? (t[n] = s.map((e) => e.message)) : (t[n] = [Object.keys(i)[0]]);
    }
    return t;
}
