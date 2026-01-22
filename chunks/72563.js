n.d(t, { i: () => c });
var r = n(64700),
    l = n(311907),
    a = n(287809),
    s = n(403362),
    i = n(427262),
    u = n(985018);
function c(e) {
    let t = (0, l.yK)([a.default], () =>
        e.recipients
            .map((e) => a.default.getUser(e))
            .filter(s.Vq)
            .map((e) => i.Ay.getName(e)),
    );
    return r.useMemo(() => {
        if ("" === e.name) return null;
        if (0 === t.length) return null;
        if (1 === t.length) return u.intl.formatToPlainString(u.t["J+Wpst"], { first: t[0] });
        if (2 === t.length)
            return u.intl.formatToPlainString(u.t.gwRP0Y, {
                first: t[0],
                second: t[1],
            });
        if (3 === t.length)
            return u.intl.formatToPlainString(u.t.QDB5et, {
                first: t[0],
                second: t[1],
                third: t[2],
            });
        let n = t.length - 3;
        return u.intl.formatToPlainString(u.t.VYfueb, {
            first: t[0],
            second: t[1],
            third: t[2],
            count: n,
        });
    }, [e, t]);
}
