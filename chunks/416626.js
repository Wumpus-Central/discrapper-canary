n.d(t, { M: () => o });
var r = n(688331),
    i = n(804524);
let o = (0, r._C)(() => ({
    name: "HttpContext",
    preprocessEvent(e) {
        if (!i.jf.navigator && !i.jf.location && !i.jf.document) return;
        let t = (e.request && e.request.url) || (i.jf.location && i.jf.location.href),
            { referrer: n } = i.jf.document || {},
            { userAgent: r } = i.jf.navigator || {},
            o = { ...(e.request && e.request.headers), ...(n && { Referer: n }), ...(r && { "User-Agent": r }) },
            a = { ...e.request, ...(t && { url: t }), headers: o };
        e.request = a;
    },
}));
