_.d(e, { s: () => n });
var a = _(151122),
    r = _(163162);
let n = (0, a._I)(() => ({
    name: "HttpContext",
    preprocessEvent(t) {
        if (!r.m9.navigator && !r.m9.location && !r.m9.document) return;
        let e = (t.request && t.request.url) || (r.m9.location && r.m9.location.href),
            { referrer: _ } = r.m9.document || {},
            { userAgent: a } = r.m9.navigator || {},
            n = {
                ...(t.request && t.request.headers),
                ...(_ && { Referer: _ }),
                ...(a && { "User-Agent": a }),
            },
            o = {
                ...t.request,
                ...(e && { url: e }),
                headers: n,
            };
        t.request = o;
    },
}));
