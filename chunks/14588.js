function a(t, e = Date.now()) {
    let _ = parseInt(`${t}`, 10);
    if (!isNaN(_)) return 1000 * _;
    let r = Date.parse(`${t}`);
    return isNaN(r) ? 60000 : r - e;
}
function r(t, e, _ = Date.now()) {
    return (t[e] || t.all || 0) > _;
}
function n(t, { statusCode: e, headers: _ }, r = Date.now()) {
    let o = { ...t },
        E = _ && _["x-sentry-rate-limits"],
        i = _ && _["retry-after"];
    if (E)
        for (let t of E.trim().split(",")) {
            let [e, _, , , a] = t.split(":", 5),
                n = parseInt(e, 10),
                E = (isNaN(n) ? 60 : n) * 1000;
            if (_)
                for (let t of _.split(";"))
                    "metric_bucket" === t ? (!a || a.split(";").includes("custom")) && (o[t] = r + E) : (o[t] = r + E);
            else o.all = r + E;
        }
    else i ? (o.all = r + a(i, r)) : 429 === e && (o.all = r + 60000);
    return o;
}
_.d(e, {
    JY: () => a,
    Q: () => r,
    WG: () => n,
});
