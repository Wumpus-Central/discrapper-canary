function r(t, e = Date.now()) {
    let a = parseInt(`${t}`, 10);
    if (!isNaN(a)) return 1000 * a;
    let n = Date.parse(`${t}`);
    return isNaN(n) ? 60000 : n - e;
}
function n(t, e, a = Date.now()) {
    return (t[e] || t.all || 0) > a;
}
function o(t, { statusCode: e, headers: a }, n = Date.now()) {
    let _ = { ...t },
        i = a && a['x-sentry-rate-limits'],
        c = a && a['retry-after'];
    if (i)
        for (let t of i.trim().split(',')) {
            let [e, a, , , r] = t.split(':', 5),
                o = parseInt(e, 10),
                i = (isNaN(o) ? 60 : o) * 1000;
            if (a) for (let t of a.split(';')) 'metric_bucket' === t ? (!r || r.split(';').includes('custom')) && (_[t] = n + i) : (_[t] = n + i);
            else _.all = n + i;
        }
    else c ? (_.all = n + r(c, n)) : 429 === e && (_.all = n + 60000);
    return _;
}
a.d(e, {
    JY: () => r,
    Q: () => n,
    WG: () => o
});
