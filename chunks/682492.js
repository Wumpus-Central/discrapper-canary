"use strict";
function i(e, t) {
    let [, , n, i] = e.split("/"),
        r = {};
    if (null != t && "" !== t) for (let [e, n] of new URLSearchParams(t)) r[e] = n;
    return { collection: n ?? null, story: i ?? null, controlOverrides: r };
}
n.r(t), n.d(t, { parsePlaygroundUrl: () => i }), n(323874), n(14289), n(35956);
