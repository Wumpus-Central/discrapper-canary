a.d(e, { s: () => n });
var r = a(151122),
    _ = a(163162);
let n = (0, r._I)(() => ({
    name: 'HttpContext',
    preprocessEvent(t) {
        if (!_.m9.navigator && !_.m9.location && !_.m9.document) return;
        let e = (t.request && t.request.url) || (_.m9.location && _.m9.location.href),
            { referrer: a } = _.m9.document || {},
            { userAgent: r } = _.m9.navigator || {},
            n = {
                ...(t.request && t.request.headers),
                ...(a && { Referer: a }),
                ...(r && { 'User-Agent': r })
            },
            o = {
                ...t.request,
                ...(e && { url: e }),
                headers: n
            };
        t.request = o;
    }
}));
