n.d(t, { _: () => d });
var l = n(192379),
    i = n(442837),
    s = n(594174),
    r = n(823379),
    a = n(51144),
    o = n(388032);
function d(e) {
    let t = (0, i.Wu)([s.default], () =>
        e.recipients
            .map((e) => s.default.getUser(e))
            .filter(r.lm)
            .map((e) => a.ZP.getName(e))
    );
    return l.useMemo(() => {
        if ('' === e.name) return null;
        if (0 === t.length) return null;
        if (1 === t.length) return o.NW.formatToPlainString(o.t['J+Wpsr'], { first: t[0] });
        if (2 === t.length)
            return o.NW.formatToPlainString(o.t.gwRP0d, {
                first: t[0],
                second: t[1]
            });
        if (3 === t.length)
            return o.NW.formatToPlainString(o.t.QDB5en, {
                first: t[0],
                second: t[1],
                third: t[2]
            });
        let n = t.length - 3;
        return o.NW.formatToPlainString(o.t.VYfueX, {
            first: t[0],
            second: t[1],
            third: t[2],
            count: n
        });
    }, [e, t]);
}
