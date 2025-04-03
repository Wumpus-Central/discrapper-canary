n.d(t, { M: () => c }), n(301563), n(47120), n(653041);
var r = n(192379),
    a = n(392711),
    i = n(990169),
    l = n(591759),
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
                    let r = n.match(l.Z.URL_REGEX);
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
                        var i, l, o;
                        let t = await s.V6(a);
                        (i = new Map(n)),
                            (l = a),
                            (o = null == t ? void 0 : t.embeds),
                            null == o ||
                                o.forEach((e) => {
                                    var t, n;
                                    let r = ((t = l), (n = e), t.find((e) => (null == n ? void 0 : n.url) != null && e.startsWith(n.url)));
                                    if (null == r) return;
                                    let a = i.get(r);
                                    null == a ? i.set(r, [e]) : a.push(e);
                                }),
                            (e.current = i),
                            d({});
                    } catch (e) {}
            })(c, u);
        }, [u]);
    let g = (0, i.Z)(c),
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
