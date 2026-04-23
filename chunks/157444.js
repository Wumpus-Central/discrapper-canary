"use strict";
function r(e, t = Date.now()) {
    let n = parseInt(`${e}`, 10);
    if (!isNaN(n)) return 1e3 * n;
    let i = Date.parse(`${e}`);
    return isNaN(i) ? 6e4 : i - t;
}
function i(e, t, n = Date.now()) {
    return (e[t] || e.all || 0) > n;
}
function o(e, { statusCode: t, headers: n }, i = Date.now()) {
    let a = { ...e },
        s = n && n["x-sentry-rate-limits"],
        l = n && n["retry-after"];
    if (s)
        for (let e of s.trim().split(",")) {
            let [t, n, , , r] = e.split(":", 5),
                o = parseInt(t, 10),
                s = (isNaN(o) ? 60 : o) * 1e3;
            if (n)
                for (let e of n.split(";"))
                    "metric_bucket" === e ? (!r || r.split(";").includes("custom")) && (a[e] = i + s) : (a[e] = i + s);
            else a.all = i + s;
        }
    else l ? (a.all = i + r(l, i)) : 429 === t && (a.all = i + 6e4);
    return a;
}
n.d(t, { FA: () => r, Jz: () => i, wq: () => o });
