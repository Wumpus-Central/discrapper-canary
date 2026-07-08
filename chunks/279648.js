a.d(s, { t: () => i });
var r = a(209688),
    c = a(171251);
async function i(t) {
    let s = await r.t.post(c.t.processWatchlist, {}, { signal: t });
    if (!s.ok) throw Error(`POST ${c.t.processWatchlist} failed: ${s.status} ${s.statusText}`);
    return s.data;
}
