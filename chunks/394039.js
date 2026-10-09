n.d(t, { s: () => c });
var r = n(332714),
    l = n(534573),
    a = n(403362),
    i = n(998218),
    u = n(835517),
    s = n(652215);
function c(e, t, n, c, o) {
    if (null == e) return;
    let d = i.A.toURLSafe(e),
        m =
            null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT
                ? i.A.toURLSafe(window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, window.location.href)
                : null;
    if (
        null != d &&
        ((null != m &&
            (d.host === m.host ||
                ((0, a.iT)() && (0, r.M)(d.hostname) && (0, r.M)(m.hostname) && d.port === m.port))) ||
            (0, l.v4)(d))
    ) {
        if (null == n || null == c || n <= 0 || c <= 0) return;
        let e = t.width ?? 0,
            r = t.height ?? 0,
            l = (0, u.A)(),
            a = e > 0 && r > 0,
            i = a ? e : n,
            m = a ? r : c,
            f = Math.min(Math.min(n / i, c / m, 1) * l, s.uJv / i, s.uJv / m);
        return (
            d.searchParams.set("width", String(Math.max(1, Math.round(i * f)))),
            d.searchParams.set("height", String(Math.max(1, Math.round(m * f)))),
            d.searchParams.set("keep_aspect_ratio", "true"),
            null != o && d.searchParams.set("format", o),
            d.toString()
        );
    }
    return e;
}
