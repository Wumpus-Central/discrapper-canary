s.d(t, { L: () => c, u: () => l });
var a = s(64700),
    u = s(155078);
function c(e) {
    let { protocol: t, hostname: s } = a.useMemo(() => ({ protocol: (0, u.J)(e), hostname: (0, u.E)(e) }), [e]),
        c = "//" === e.substr(t.length, 2) ? "//" : "",
        l = `${t}${c}${s}`;
    return { protocol: t, authorityPrefix: c, hostname: s, theRestOfTheUrl: e.replace(l, "") };
}
function l(e) {
    let { url: t, trustUrl: s, onConfirm: u, onCancel: l, onClose: n } = e,
        [r, h] = a.useState(!1),
        { protocol: o, authorityPrefix: p, hostname: i, theRestOfTheUrl: d } = c(t),
        k = a.useCallback(() => {
            r && s(t), n?.(), u();
        }, [t, r, s, u, n]);
    return {
        protocol: o,
        authorityPrefix: p,
        hostname: i,
        theRestOfTheUrl: d,
        shouldTrustUrl: r,
        setShouldTrustUrl: h,
        handleConfirm: k,
        handleCancel: a.useCallback(() => {
            n?.(), l();
        }, [l, n]),
    };
}
