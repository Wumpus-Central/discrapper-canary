_.d(e, { f: () => o });
var a = _(650093),
    r = _(867921),
    n = _(928541);
function o(t, e = (0, a.L2)("fetch")) {
    let _ = 0,
        E = 0;
    return (0, r.q)(t, function (r) {
        let o = r.body.length;
        (_ += o), E++;
        let i = {
            body: r.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: t.headers,
            keepalive: _ <= 60000 && E < 15,
            ...t.fetchOptions,
        };
        if (!e) return (0, a._6)("fetch"), (0, n.$2)("No fetch implementation available");
        try {
            return e(t.url, i).then(
                (t) => (
                    (_ -= o),
                    E--,
                    {
                        statusCode: t.status,
                        headers: {
                            "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                            "retry-after": t.headers.get("Retry-After"),
                        },
                    }
                ),
            );
        } catch (t) {
            return (0, a._6)("fetch"), (_ -= o), E--, (0, n.$2)(t);
        }
    });
}
