l.d(t, { i: () => c });
var n = l(64700),
    s = l(17928),
    r = l(287809),
    a = l(403362),
    i = l(427262),
    u = l(985018);
function c(e) {
    let t = (0, s.yK)([r.default], () =>
        e.recipients
            .map((e) => r.default.getUser(e))
            .filter(a.Vq)
            .map((e) => i.Ay.getName(e)),
    );
    return n.useMemo(() => {
        if ("" === e.name) return null;
        if (0 === t.length) return null;
        if (1 === t.length) return u.intl.formatToPlainString(u.t["J+Wpst"], { first: t[0] });
        if (2 === t.length) return u.intl.formatToPlainString(u.t.gwRP0Y, { first: t[0], second: t[1] });
        if (3 === t.length) return u.intl.formatToPlainString(u.t.QDB5et, { first: t[0], second: t[1], third: t[2] });
        let l = t.length - 3;
        return u.intl.formatToPlainString(u.t.VYfueb, { first: t[0], second: t[1], third: t[2], count: l });
    }, [e, t]);
}
