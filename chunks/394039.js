var i = n(332714),
    l = n(534573),
    r = n(403362),
    a = n(998218),
    s = n(835517);
(n(652215),
    n.d(
        t,
        {},
        {
            s: function (e, t, n, o, u) {
                if (null == e) return;
                let c = a.A.toURLSafe(e),
                    d =
                        null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT
                            ? a.A.toURLSafe(window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, window.location.href)
                            : null;
                if (
                    null != c &&
                    ((null != d &&
                        (c.host === d.host ||
                            ((0, r.iT)() && (0, i.M)(c.hostname) && (0, i.M)(d.hostname) && c.port === d.port))) ||
                        (0, l.v4)(c))
                ) {
                    if (null == n || null == o || n <= 0 || o <= 0) return;
                    let e = t.width ?? 0,
                        i = t.height ?? 0,
                        l = (0, s.A)(),
                        r = e > 0 && i > 0,
                        a = r ? e : n,
                        d = r ? i : o,
                        m = Math.min(Math.min(n / a, o / d, 1) * l, 4096 / a, 4096 / d);
                    return (
                        c.searchParams.set("width", String(Math.max(1, Math.round(a * m)))),
                        c.searchParams.set("height", String(Math.max(1, Math.round(d * m)))),
                        c.searchParams.set("keep_aspect_ratio", "true"),
                        null != u && c.searchParams.set("format", u),
                        c.toString()
                    );
                }
                return e;
            },
        },
    ));
