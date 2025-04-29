n.d(t, { _: () => u });
var l = n(73800),
    i = n(442837),
    r = n(594174),
    s = n(823379),
    a = n(51144),
    o = n(388032);
function u(e) {
    let t = (0, i.Wu)([r.default], () =>
        e.recipients
            .map((e) => r.default.getUser(e))
            .filter(s.lm)
            .map((e) => a.ZP.getName(e))
    );
    return l.useMemo(() => {
        if ('' === e.name) return null;
        if (0 === t.length) return null;
        if (1 === t.length) return o.intl.formatToPlainString(o.t['J+Wpsr'], { first: t[0] });
        if (2 === t.length)
            return o.intl.formatToPlainString(o.t.gwRP0d, {
                first: t[0],
                second: t[1]
            });
        if (3 === t.length)
            return o.intl.formatToPlainString(o.t.QDB5en, {
                first: t[0],
                second: t[1],
                third: t[2]
            });
        let n = t.length - 3;
        return o.intl.formatToPlainString(o.t.VYfueX, {
            first: t[0],
            second: t[1],
            third: t[2],
            count: n
        });
    }, [e, t]);
}
