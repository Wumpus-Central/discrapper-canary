l.d(n, { A: () => i });
var a = l(582128),
    t = l(435558),
    r = l.n(t);
function i(e) {
    let { enabled: n, isInteracting: l, items: t, preload: i } = e,
        [s, u] = a.useState(null),
        o = a.useRef(null),
        d = a.useRef(i);
    return (
        a.useEffect(() => {
            d.current = i;
        }, [i]),
        a.useEffect(() => {
            if (!n || 0 === t.length || null != o.current) return;
            let e = (function (e) {
                let { shuffle: n = r().shuffle, maxSize: l = 25 } =
                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = n(e).slice(0, l),
                    t = 0;
                return {
                    current: () => (0 === a.length ? null : a[t % a.length]),
                    advance: () => {
                        0 !== a.length && (t = (t + 1) % a.length);
                    },
                    get size() {
                        return a.length;
                    },
                };
            })(t);
            o.current = e;
            let l = e.current();
            null != l && d.current?.(l);
        }, [n, t]),
        a.useEffect(() => {
            let e = o.current;
            if (!n || !l || null == e) return void u(null);
            (u(e.current()), e.advance());
            let a = e.current();
            null != a && d.current?.(a);
        }, [l]),
        n && l ? s : null
    );
}
