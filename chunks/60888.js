n.d(t, {
    L: () => i,
    u: () => r,
}),
    n(747238),
    n(812715),
    n(896048);
var a = n(64700),
    l = n(155078);
function i(e) {
    let { protocol: t, hostname: n } = a.useMemo(
            () => ({
                protocol: (0, l.J)(e),
                hostname: (0, l.E)(e),
            }),
            [e],
        ),
        i = "//" === e.substr(t.length, 2) ? "//" : "",
        r = "".concat(t).concat(i).concat(n);
    return {
        protocol: t,
        authorityPrefix: i,
        hostname: n,
        theRestOfTheUrl: e.replace(r, ""),
    };
}
function r(e) {
    let { url: t, trustUrl: n, onConfirm: l, onCancel: r, onClose: s } = e,
        [o, c] = a.useState(!1),
        { protocol: d, authorityPrefix: u, hostname: m, theRestOfTheUrl: p } = i(t),
        h = a.useCallback(() => {
            o && n(t), null == s || s(), l();
        }, [t, o, n, l, s]);
    return {
        protocol: d,
        authorityPrefix: u,
        hostname: m,
        theRestOfTheUrl: p,
        shouldTrustUrl: o,
        setShouldTrustUrl: c,
        handleConfirm: h,
        handleCancel: a.useCallback(() => {
            null == s || s(), r();
        }, [r, s]),
    };
}
