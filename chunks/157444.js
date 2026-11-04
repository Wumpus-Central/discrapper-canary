function r(e, t = Date.now()) {
    let n = parseInt(`${e}`, 10);
    if (!isNaN(n)) return 1e3 * n;
    let i = Date.parse(`${e}`);
    return isNaN(i) ? 6e4 : i - t;
}
n.d(
    t,
    {},
    {
        FA: r,
        Jz: function (e, t, n = Date.now()) {
            return (e[t] || e.all || 0) > n;
        },
        wq: function (e, { statusCode: t, headers: n }, i = Date.now()) {
            let o = { ...e },
                a = n && n["x-sentry-rate-limits"],
                s = n && n["retry-after"];
            if (a)
                for (let e of a.trim().split(",")) {
                    let [t, n, , , r] = e.split(":", 5),
                        a = parseInt(t, 10),
                        s = (isNaN(a) ? 60 : a) * 1e3;
                    if (n)
                        for (let e of n.split(";"))
                            "metric_bucket" === e
                                ? (!r || r.split(";").includes("custom")) && (o[e] = i + s)
                                : (o[e] = i + s);
                    else o.all = i + s;
                }
            else s ? (o.all = i + r(s, i)) : 429 === t && (o.all = i + 6e4);
            return o;
        },
    },
);
