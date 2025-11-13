function r(t, e = Date.now()) {
    let a = parseInt(`${t}`, 10);
    if (!isNaN(a)) return 1000 * a;
    let _ = Date.parse(`${t}`);
    return isNaN(_) ? 60000 : _ - e;
}
function _(t, e, a = Date.now()) {
    return (t[e] || t.all || 0) > a;
}
function n(t, { statusCode: e, headers: a }, _ = Date.now()) {
    let o = { ...t },
        i = a && a["x-sentry-rate-limits"],
        E = a && a["retry-after"];
    if (i)
        for (let t of i.trim().split(",")) {
            let [e, a, , , r] = t.split(":", 5),
                n = parseInt(e, 10),
                i = (isNaN(n) ? 60 : n) * 1000;
            if (a)
                for (let t of a.split(";"))
                    "metric_bucket" === t ? (!r || r.split(";").includes("custom")) && (o[t] = _ + i) : (o[t] = _ + i);
            else o.all = _ + i;
        }
    else E ? (o.all = _ + r(E, _)) : 429 === e && (o.all = _ + 60000);
    return o;
}
a.d(e, {
    JY: () => r,
    Q: () => _,
    WG: () => n,
});
