n.d(t, { _: () => o });
var l = n(473749),
    r = n(442837),
    s = n(594174),
    a = n(823379),
    i = n(51144),
    u = n(388032);
function o(e) {
    let t = (0, r.Wu)([s.default], () =>
        e.recipients
            .map((e) => s.default.getUser(e))
            .filter(a.lm)
            .map((e) => i.ZP.getName(e)),
    );
    return l.useMemo(() => {
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
