n.d(t, { _: () => o });
var r = n(647438),
    l = n(442837),
    a = n(594174),
    s = n(823379),
    i = n(51144),
    u = n(388032);
function o(e) {
    let t = (0, l.Wu)([a.default], () =>
        e.recipients
            .map((e) => a.default.getUser(e))
            .filter(s.lm)
            .map((e) => i.ZP.getName(e)),
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
