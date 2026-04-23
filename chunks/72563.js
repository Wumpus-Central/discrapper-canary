n.d(t, { i: () => o });
var l = n(64700),
    i = n(17928),
    s = n(287809),
    a = n(403362),
    r = n(427262),
    u = n(985018);
function o(e) {
    let t = (0, i.yK)([s.default], () =>
        e.recipients
            .map((e) => s.default.getUser(e))
            .filter(a.Vq)
            .map((e) => r.Ay.getName(e)),
    );
    return l.useMemo(() => {
        if ("" === e.name) return null;
        if (0 === t.length) return null;
        if (1 === t.length) return u.intl.formatToPlainString(u.t["J+Wpst"], { first: t[0] });
        if (2 === t.length) return u.intl.formatToPlainString(u.t.gwRP0Y, { first: t[0], second: t[1] });
        if (3 === t.length) return u.intl.formatToPlainString(u.t.QDB5et, { first: t[0], second: t[1], third: t[2] });
        let n = t.length - 3;
        return u.intl.formatToPlainString(u.t.VYfueb, { first: t[0], second: t[1], third: t[2], count: n });
    }, [e, t]);
}
