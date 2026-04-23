"use strict";
n.d(t, { _: () => a });
var r = n(743154),
    i = n(835869),
    o = n(504585);
function a(e, t = (0, r.qd)("fetch")) {
    let n = 0,
        s = 0;
    return (0, o.o)(e, function (o) {
        let a = o.body.length;
        (n += a), s++;
        let l = {
            body: o.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: e.headers,
            keepalive: n <= 6e4 && s < 15,
            ...e.fetchOptions,
        };
        if (!t) return (0, r.y7)("fetch"), (0, i.xg)("No fetch implementation available");
        try {
            return t(e.url, l).then(
                (e) => (
                    (n -= a),
                    s--,
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
            return (0, r.y7)("fetch"), (n -= a), s--, (0, i.xg)(e);
        }
    });
}
