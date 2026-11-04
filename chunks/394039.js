var l = n(332714),
    i = n(534573),
    a = n(403362),
    r = n(998218),
    s = n(835517);
(n(652215),
    n.d(
        t,
        {},
        {
            s: function (e, t, n, o, u) {
                if (null == e) return;
                let d = r.A.toURLSafe(e),
                    c =
                        null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT
                            ? r.A.toURLSafe(window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, window.location.href)
                            : null;
                if (
                    null != d &&
                    ((null != c &&
                        (d.host === c.host ||
                            ((0, a.iT)() && (0, l.M)(d.hostname) && (0, l.M)(c.hostname) && d.port === c.port))) ||
                        (0, i.v4)(d))
                ) {
                    if (null == n || null == o || n <= 0 || o <= 0) return;
                    let e = t.width ?? 0,
                        l = t.height ?? 0,
                        i = (0, s.A)(),
                        a = e > 0 && l > 0,
                        r = a ? e : n,
                        c = a ? l : o,
                        m = Math.min(Math.min(n / r, o / c, 1) * i, 4096 / r, 4096 / c);
                    return (
                        d.searchParams.set("width", String(Math.max(1, Math.round(r * m)))),
                        d.searchParams.set("height", String(Math.max(1, Math.round(c * m)))),
                        d.searchParams.set("keep_aspect_ratio", "true"),
                        null != u && d.searchParams.set("format", u),
                        d.toString()
                    );
                }
                return e;
            },
        },
    ));
