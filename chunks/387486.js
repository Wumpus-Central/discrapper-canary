r.d(t, { f: () => o });
var n = r(650093),
    a = r(867921),
    i = r(928541);
function o(e, t = (0, n.L2)("fetch")) {
    let r = 0,
        _ = 0;
    return (0, a.q)(e, function (a) {
        let o = a.body.length;
        (r += o), _++;
        let s = {
            body: a.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: e.headers,
            keepalive: r <= 60000 && _ < 15,
            ...e.fetchOptions,
        };
        if (!t) return (0, n._6)("fetch"), (0, i.$2)("No fetch implementation available");
        try {
            return t(e.url, s).then(
                (e) => (
                    (r -= o),
                    _--,
                    {
                        statusCode: e.status,
                        headers: {
                            "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                            "retry-after": e.headers.get("Retry-After"),
                        },
                    }
                ),
            );
        } catch (e) {
            return (0, n._6)("fetch"), (r -= o), _--, (0, i.$2)(e);
        }
    });
}
