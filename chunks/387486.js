a.d(e, { f: () => o });
var r = a(650093),
    n = a(867921),
    _ = a(928541);
function o(t, e = (0, r.L2)('fetch')) {
    let a = 0,
        i = 0;
    return (0, n.q)(t, function (n) {
        let o = n.body.length;
        (a += o), i++;
        let c = {
            body: n.body,
            method: 'POST',
            referrerPolicy: 'origin',
            headers: t.headers,
            keepalive: a <= 60000 && i < 15,
            ...t.fetchOptions
        };
        if (!e) return (0, r._6)('fetch'), (0, _.$2)('No fetch implementation available');
        try {
            return e(t.url, c).then(
                (t) => (
                    (a -= o),
                    i--,
                    {
                        statusCode: t.status,
                        headers: {
                            'x-sentry-rate-limits': t.headers.get('X-Sentry-Rate-Limits'),
                            'retry-after': t.headers.get('Retry-After')
                        }
                    }
                )
            );
        } catch (t) {
            return (0, r._6)('fetch'), (a -= o), i--, (0, _.$2)(t);
        }
    });
}
