a.d(e, { s: () => _ });
var r = a(151122),
    n = a(163162);
let _ = (0, r._I)(() => ({
    name: 'HttpContext',
    preprocessEvent(t) {
        if (!n.m9.navigator && !n.m9.location && !n.m9.document) return;
        let e = (t.request && t.request.url) || (n.m9.location && n.m9.location.href),
            { referrer: a } = n.m9.document || {},
            { userAgent: r } = n.m9.navigator || {},
            _ = {
                ...(t.request && t.request.headers),
                ...(a && { Referer: a }),
                ...(r && { 'User-Agent': r })
            },
            o = {
                ...t.request,
                ...(e && { url: e }),
                headers: _
            };
        t.request = o;
    }
}));
