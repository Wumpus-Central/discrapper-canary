var r = n(743154),
    i = n(835869),
    o = n(50144);
n.d(
    t,
    {},
    {
        _: function (e, t = (0, r.qd)("fetch")) {
            let n = 0,
                a = 0;
            return (0, o.o)(e, function (o) {
                let s = o.body.length;
                ((n += s), a++);
                let l = {
                    body: o.body,
                    method: "POST",
                    referrerPolicy: "origin",
                    headers: e.headers,
                    keepalive: n <= 6e4 && a < 15,
                    ...e.fetchOptions,
                };
                if (!t) return ((0, r.y7)("fetch"), (0, i.xg)("No fetch implementation available"));
                try {
                    return t(e.url, l).then(
                        (e) => (
                            (n -= s),
                            a--,
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
                    return ((0, r.y7)("fetch"), (n -= s), a--, (0, i.xg)(e));
                }
            });
        },
    },
);
