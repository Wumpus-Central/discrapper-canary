l.d(n, { A: () => i });
var t = l(64700),
    a = l(735438),
    r = l.n(a);
function i(e) {
    let { enabled: n, isInteracting: l, items: a, preload: i } = e,
        [s, o] = t.useState(null),
        u = t.useRef(null),
        d = t.useRef(i);
    return (
        t.useEffect(() => {
            d.current = i;
        }, [i]),
        t.useEffect(() => {
            if (!n || 0 === a.length || null != u.current) return;
            let e = (function (e) {
                let { shuffle: n = r().shuffle, maxSize: l = 25 } =
                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = n(e).slice(0, l),
                    a = 0;
                return {
                    current: () => (0 === t.length ? null : t[a % t.length]),
                    advance: () => {
                        0 !== t.length && (a = (a + 1) % t.length);
                    },
                    get size() {
                        return t.length;
                    },
                };
            })(a);
            u.current = e;
            let l = e.current();
            null != l && d.current?.(l);
        }, [n, a]),
        t.useEffect(() => {
            let e = u.current;
            if (!n || !l || null == e) return void o(null);
            o(e.current()), e.advance();
            let t = e.current();
            null != t && d.current?.(t);
        }, [l]),
        n && l ? s : null
    );
}
