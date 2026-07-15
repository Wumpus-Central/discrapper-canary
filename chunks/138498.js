r.d(e, { t: () => a });
var s = r(2537);
async function a(t) {
    let e = t.query ? (0, s.t)(t.url, t.query) : t.url,
        r = await fetch(e, { method: t.method, headers: t.headers, body: t.body, signal: t.signal });
    if (!r.ok) throw Error(`${t.method} ${e} failed: ${r.status} ${r.statusText}`);
    return r;
}
