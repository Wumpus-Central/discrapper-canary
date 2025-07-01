t.a(e, async function (e, r) {
    try {
        t.d(n, { o: () => d });
        var l = t(255367),
            i = t(73800),
            o = t(7301),
            c = t(95398),
            u = t(488968),
            a = e([o]);
        function d(e) {
            let { children: n, node: t } = e,
                r = i.useMemo(() => Array.from((0, o.h)([t])).some((e) => 'link' === e.type), [t]),
                a = (0, u.d)();
            return (
                i.useEffect(() => {
                    var e;
                    null == a || null == (e = a.setHasSpoilerEmbeds) || e.call(a, r);
                }, [a, r]),
                (0, l.jsx)(c.ZP, {
                    type: c.ZP.Types.TEXT,
                    children: () => n
                })
            );
        }
        ((o = (a.then ? (await a)() : a)[0]), r());
    } catch (e) {
        r(e);
    }
});
