t.a(e, async function (e, r) {
    try {
        t.d(n, { o: () => d });
        var l = t(255367),
            i = t(73800),
            c = t(31675),
            o = t(95398),
            u = t(488968),
            a = e([c]);
        function d(e) {
            let { children: n, node: t } = e,
                r = i.useMemo(() => Array.from((0, c.h)([t])).some((e) => 'link' === e.type), [t]),
                a = (0, u.d)();
            return (
                i.useEffect(() => {
                    var e;
                    null == a || null == (e = a.setHasSpoilerEmbeds) || e.call(a, r);
                }, [a, r]),
                (0, l.jsx)(o.ZP, {
                    type: o.ZP.Types.TEXT,
                    children: () => n
                })
            );
        }
        ((c = (a.then ? (await a)() : a)[0]), r());
    } catch (e) {
        r(e);
    }
});
