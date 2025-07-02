t.a(e, async function (e, r) {
    try {
        t.d(n, { o: () => u });
        var l = t(255367),
            c = t(73800),
            i = t(269755),
            o = t(95398),
            a = t(488968),
            s = e([i]);
        function u(e) {
            let { children: n, node: t } = e,
                r = c.useMemo(() => Array.from((0, i.h)([t])).some((e) => 'link' === e.type), [t]),
                s = (0, a.d)();
            return (
                c.useEffect(() => {
                    var e;
                    null == s || null == (e = s.setHasSpoilerEmbeds) || e.call(s, r);
                }, [s, r]),
                (0, l.jsx)(o.ZP, {
                    type: o.ZP.Types.TEXT,
                    children: () => n
                })
            );
        }
        ((i = (s.then ? (await s)() : s)[0]), r());
    } catch (e) {
        r(e);
    }
});
