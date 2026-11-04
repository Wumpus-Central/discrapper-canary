var s = r(225220);
r.d(
    e,
    {},
    {
        t: async function (t) {
            let e = t.query ? (0, s.t)(t.url, t.query) : t.url,
                r = await fetch(e, { method: t.method, headers: t.headers, body: t.body, signal: t.signal });
            if (!r.ok) throw Error(`${t.method} ${e} failed: ${r.status} ${r.statusText}`);
            return r;
        },
    },
);
