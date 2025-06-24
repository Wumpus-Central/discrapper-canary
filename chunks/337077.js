n.d(t, { M: () => c }), n(35282), n(388685), n(539854);
var r = n(73800),
    a = n(392711),
    l = n(990169),
    i = n(591759),
    s = n(158222),
    o = n(154135);
function c(e, t, n) {
    let c = r.useRef(new Map()),
        [, d] = r.useState(null),
        [u, m] = r.useState(null),
        h = r.useMemo(
            () =>
                a.debounce((e, n) => {
                    if (null == n || e || 0 === t) return;
                    let r = n.match(i.Z.URL_REGEX);
                    if (null == r || 0 === r.length) {
                        (c.current = new Map()), m(null);
                        return;
                    }
                    m(a.uniq(r).slice(0, o.Yh));
                }, 1000),
            [t, c, m]
        );
    r.useEffect(() => {
        h(e, n);
    }, [h, n, e]),
        r.useEffect(() => {
            !(async function (e, t) {
                if (null == t) return;
                let n = e.current,
                    r = new Set(n.keys()),
                    a = t.filter((e) => !(null == r ? void 0 : r.has(e)));
                if (0 !== a.length)
                    try {
                        var l, i, o;
                        let t = await s.V6(a);
                        (l = new Map(n)),
                            (i = a),
                            (o = null == t ? void 0 : t.embeds),
                            null == o ||
                                o.forEach((e) => {
                                    var t, n;
                                    let r = ((t = i), (n = e), t.find((e) => (null == n ? void 0 : n.url) != null && e.startsWith(n.url)));
                                    if (null == r) return;
                                    let a = l.get(r);
                                    null == a ? l.set(r, [e]) : a.push(e);
                                }),
                            (e.current = l),
                            d({});
                    } catch (e) {}
            })(c, u);
        }, [u]);
    let g = (0, l.Z)(c),
        f = r.useMemo(() => {
            let e = [];
            return (
                null == u ||
                    u.forEach((t) => {
                        let n = g.get(t);
                        null != n && e.push(...n);
                    }),
                e.length > 0 ? e : null
            );
        }, [u, g]);
    return { embeds: e ? null : f };
}
