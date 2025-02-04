n.d(t, { M: () => c }), n(47120), n(653041);
var i = n(192379),
    r = n(392711),
    l = n(990169),
    a = n(591759),
    s = n(158222),
    o = n(154135);
function c(e, t, n) {
    let c = i.useRef(new Map()),
        [, d] = i.useState(null),
        [u, m] = i.useState(null),
        h = i.useMemo(
            () =>
                r.debounce((e, n) => {
                    if (null == n || e || 0 === t) return;
                    let i = n.match(a.Z.URL_REGEX);
                    if (null == i || 0 === i.length) {
                        (c.current = new Map()), m(null);
                        return;
                    }
                    m(r.uniq(i).slice(0, o.Yh));
                }, 1000),
            [t, c, m]
        );
    i.useEffect(() => {
        h(e, n);
    }, [h, n, e]),
        i.useEffect(() => {
            (async function (e, t) {
                if (null == t) return;
                let n = e.current,
                    i = new Set(n.keys()),
                    r = t.filter((e) => !(null == i ? void 0 : i.has(e)));
                if (0 !== r.length)
                    try {
                        var l, a, o;
                        let t = await s.V6(r);
                        (e.current =
                            ((l = new Map(n)),
                            (a = r),
                            (o = null == t ? void 0 : t.embeds),
                            null == o ||
                                o.forEach((e) => {
                                    var t, n;
                                    let i = ((t = a), (n = e), t.find((e) => (null == n ? void 0 : n.url) != null && e.startsWith(n.url)));
                                    if (null == i) return;
                                    let r = l.get(i);
                                    null == r ? l.set(i, [e]) : r.push(e);
                                }),
                            l)),
                            d({});
                    } catch (e) {}
            })(c, u);
        }, [u]);
    let g = (0, l.Z)(c),
        x = i.useMemo(() => {
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
    return { embeds: e ? null : x };
}
