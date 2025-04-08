n.d(t, { _: () => c });
var l = n(192379),
    r = n(442837),
    a = n(594174),
    i = n(823379),
    s = n(51144),
    o = n(388032);
function c(e) {
    let t = (0, r.Wu)([a.default], () =>
        e.recipients
            .map((e) => a.default.getUser(e))
            .filter(i.lm)
            .map((e) => s.ZP.getName(e))
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
