n.d(t, {
    M: function () {
        return c;
    }
}),
    n(47120),
    n(653041);
var a = n(192379),
    i = n(392711),
    r = n(990169),
    l = n(591759),
    s = n(158222),
    o = n(154135);
function c(e, t, n) {
    var c, d, u;
    let m = a.useRef(new Map()),
        [, h] = a.useState(null),
        [g, x] = a.useState(null);
    let f =
        ((c = t),
        (d = m),
        (u = x),
        a.useMemo(
            () =>
                i.debounce((e, t) => {
                    if (null == t || e || 0 === c) return;
                    let n = t.match(l.Z.URL_REGEX);
                    if (null == n || 0 === n.length) {
                        (d.current = new Map()), u(null);
                        return;
                    }
                    u(i.uniq(n).slice(0, o.Yh));
                }, 1000),
            [c, d, u]
        ));
    a.useEffect(() => {
        f(e, n);
    }, [f, n, e]),
        a.useEffect(() => {
            (async function e(e, t) {
                if (null == t) return;
                let n = e.current,
                    a = new Set(n.keys()),
                    i = t.filter((e) => !(null == a ? void 0 : a.has(e)));
                if (0 !== i.length)
                    try {
                        let t = await s.V6(i);
                        (e.current = (function (e, t, n) {
                            return (
                                null == n ||
                                    n.forEach((n) => {
                                        let a = (function (e, t) {
                                            return e.find((e) => (null == t ? void 0 : t.url) != null && e.startsWith(t.url));
                                        })(t, n);
                                        if (null == a) return;
                                        let i = e.get(a);
                                        null == i ? e.set(a, [n]) : i.push(n);
                                    }),
                                e
                            );
                        })(new Map(n), i, null == t ? void 0 : t.embeds)),
                            h({});
                    } catch (e) {}
            })(m, g);
        }, [g]);
    let p = (0, r.Z)(m),
        C = a.useMemo(() => {
            let e = [];
            return (
                null == g ||
                    g.forEach((t) => {
                        let n = p.get(t);
                        null != n && e.push(...n);
                    }),
                e.length > 0 ? e : null
            );
        }, [g, p]);
    return { embeds: e ? null : C };
}
