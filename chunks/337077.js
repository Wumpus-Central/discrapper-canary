n.d(t, { M: () => c }), n(35282), n(388685), n(539854);
var a = n(473749),
    r = n(392711),
    i = n(990169),
    l = n(591759),
    s = n(158222),
    o = n(154135);
function c(e, t, n) {
    let c = a.useRef(new Map()),
        [, d] = a.useState(null),
        [u, m] = a.useState(null),
        f = a.useMemo(
            () =>
                r.debounce((e, n) => {
                    if (null == n || e || 0 === t) return;
                    let a = n.match(l.Z.URL_REGEX);
                    if (null == a || 0 === a.length) {
                        (c.current = new Map()), m(null);
                        return;
                    }
                    m(r.uniq(a).slice(0, o.Yh));
                }, 1000),
            [t, c, m],
        );
    a.useEffect(() => {
        f(e, n);
    }, [f, n, e]),
        a.useEffect(() => {
            !(async function (e, t) {
                if (null == t) return;
                let n = e.current,
                    a = new Set(n.keys()),
                    r = t.filter((e) => !(null == a ? void 0 : a.has(e)));
                if (0 !== r.length)
                    try {
                        var i, l, o;
                        let t = await s.V6(r);
                        (i = new Map(n)),
                            (l = r),
                            (o = null == t ? void 0 : t.embeds),
                            null == o ||
                                o.forEach((e) => {
                                    var t, n;
                                    let a =
                                        ((t = l),
                                        (n = e),
                                        t.find((e) => (null == n ? void 0 : n.url) != null && e.startsWith(n.url)));
                                    if (null == a) return;
                                    let r = i.get(a);
                                    null == r ? i.set(a, [e]) : r.push(e);
                                }),
                            (e.current = i),
                            d({});
                    } catch (e) {}
            })(c, u);
        }, [u]);
    let h = (0, i.Z)(c),
        g = a.useMemo(() => {
            let e = [];
            return (
                null == u ||
                    u.forEach((t) => {
                        let n = h.get(t);
                        null != n && e.push(...n);
                    }),
                e.length > 0 ? e : null
            );
        }, [u, h]);
    return { embeds: e ? null : g };
}
