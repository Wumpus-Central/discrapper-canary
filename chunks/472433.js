t.a(e, async function (e, r) {
    try {
        t.d(n, { o: () => u });
        var l = t(54381),
            c = t(473749),
            a = t(269755),
            i = t(488968),
            o = t(411405),
            s = e([a]);
        function u(e) {
            let { children: n, node: t } = e,
                r = c.useMemo(() => Array.from((0, a.h)([t])).some((e) => "link" === e.type), [t]),
                s = (0, i.d)();
            return (
                c.useEffect(() => {
                    var e;
                    null == s || null == (e = s.setHasSpoilerEmbeds) || e.call(s, r);
                }, [s, r]),
                (0, l.jsx)(o.ZP, {
                    type: o.ZP.Types.TEXT,
                    children: () => n,
                })
            );
        }
        (a = (s.then ? (await s)() : s)[0]), r();
    } catch (e) {
        r(e);
    }
});
