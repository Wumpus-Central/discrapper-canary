n.d(t, { f: () => o });
var r = n(67897),
    i = n(342722),
    a = n(959036);
function o(e, t = (0, r.L2)("fetch")) {
    let n = 0,
        _ = 0;
    return (0, i.q)(e, function (i) {
        let o = i.body.length;
        (n += o), _++;
        let s = {
            body: i.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: e.headers,
            keepalive: n <= 60000 && _ < 15,
            ...e.fetchOptions,
        };
        if (!t) return (0, r._6)("fetch"), (0, a.$2)("No fetch implementation available");
        try {
            return t(e.url, s).then(
                (e) => (
                    (n -= o),
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
            return (0, r._6)("fetch"), (n -= o), _--, (0, a.$2)(e);
        }
    });
}
