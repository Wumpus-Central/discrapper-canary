n.d(t, { _: () => u });
var l = n(473749),
    r = n(442837),
    i = n(594174),
    a = n(823379),
    s = n(51144),
    o = n(388032);
function u(e) {
    let t = (0, r.Wu)([i.default], () =>
        e.recipients
            .map((e) => i.default.getUser(e))
            .filter(a.lm)
            .map((e) => s.ZP.getName(e)),
    );
    return l.useMemo(() => {
        if ("" === e.name) return null;
        if (0 === t.length) return null;
        if (1 === t.length) return o.intl.formatToPlainString(o.t["J+Wpst"], { first: t[0] });
        if (2 === t.length)
            return o.intl.formatToPlainString(o.t.gwRP0Y, {
                first: t[0],
                second: t[1],
            });
        if (3 === t.length)
            return o.intl.formatToPlainString(o.t.QDB5et, {
                first: t[0],
                second: t[1],
                third: t[2],
            });
        let n = t.length - 3;
        return o.intl.formatToPlainString(o.t.VYfueb, {
            first: t[0],
            second: t[1],
            third: t[2],
            count: n,
        });
    }, [e, t]);
}
