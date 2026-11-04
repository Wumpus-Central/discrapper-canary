var a = s(582128),
    u = s(155078);
function c(e) {
    let { protocol: t, hostname: s } = a.useMemo(() => ({ protocol: (0, u.J)(e), hostname: (0, u.E)(e) }), [e]),
        c = "//" === e.substr(t.length, 2) ? "//" : "",
        l = `${t}${c}${s}`;
    return { protocol: t, authorityPrefix: c, hostname: s, theRestOfTheUrl: e.replace(l, "") };
}
s.d(
    t,
    {},
    {
        L: c,
        u: function (e) {
            let { url: t, trustUrl: s, onConfirm: u, onCancel: l, onClose: n } = e,
                [r, h] = a.useState(!1),
                { protocol: o, authorityPrefix: p, hostname: i, theRestOfTheUrl: d } = c(t),
                k = a.useCallback(() => {
                    (r && s(t), u(), n?.());
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
                    (l(), n?.());
                }, [l, n]),
            };
        },
    },
);
