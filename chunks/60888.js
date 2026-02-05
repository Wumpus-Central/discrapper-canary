n.d(t, { L: () => i, u: () => l });
var a = n(64700),
    s = n(155078);
function i(e) {
    let { protocol: t, hostname: n } = a.useMemo(() => ({ protocol: (0, s.J)(e), hostname: (0, s.E)(e) }), [e]),
        i = "//" === e.substr(t.length, 2) ? "//" : "",
        l = `${t}${i}${n}`;
    return { protocol: t, authorityPrefix: i, hostname: n, theRestOfTheUrl: e.replace(l, "") };
}
function l(e) {
    let { url: t, trustUrl: n, onConfirm: s, onCancel: l, onClose: r } = e,
        [o, d] = a.useState(!1),
        { protocol: c, authorityPrefix: u, hostname: m, theRestOfTheUrl: h } = i(t),
        x = a.useCallback(() => {
            o && n(t), r?.(), s();
        }, [t, o, n, s, r]);
    return {
        protocol: c,
        authorityPrefix: u,
        hostname: m,
        theRestOfTheUrl: h,
        shouldTrustUrl: o,
        setShouldTrustUrl: d,
        handleConfirm: x,
        handleCancel: a.useCallback(() => {
            r?.(), l();
        }, [l, r]),
    };
}
