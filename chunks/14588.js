function r(t, e = Date.now()) {
    let a = parseInt(`${t}`, 10);
    if (!isNaN(a)) return 1000 * a;
    let n = Date.parse(`${t}`);
    return isNaN(n) ? 60000 : n - e;
}
function n(t, e, a = Date.now()) {
    return (t[e] || t.all || 0) > a;
}
function _(t, { statusCode: e, headers: a }, n = Date.now()) {
    let o = { ...t },
        i = a && a['x-sentry-rate-limits'],
        c = a && a['retry-after'];
    if (i)
        for (let t of i.trim().split(',')) {
            let [e, a, , , r] = t.split(':', 5),
                _ = parseInt(e, 10),
                i = (isNaN(_) ? 60 : _) * 1000;
            if (a) for (let t of a.split(';')) 'metric_bucket' === t ? (!r || r.split(';').includes('custom')) && (o[t] = n + i) : (o[t] = n + i);
            else o.all = n + i;
        }
    else c ? (o.all = n + r(c, n)) : 429 === e && (o.all = n + 60000);
    return o;
}
a.d(e, {
    JY: () => r,
    Q: () => n,
    WG: () => _
});
