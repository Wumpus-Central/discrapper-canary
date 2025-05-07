n.d(t, { Z: () => f });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n(596687);
let c = 25,
    u = 2,
    d = 150;
function f(e) {
    let { children: t, shouldAnimate: n, className: o, pauseDuration: f = u, scrollSpeed: _ = c } = e,
        p = i.useRef(null),
        h = i.useRef(null),
        m = i.useRef(null),
        g = i.useCallback(() => {
            let e = p.current,
                t = h.current;
            if (null == e || null == t) return;
            let n = e.offsetWidth,
                r = t.scrollWidth - n;
            if (r <= 0 || _ <= 0) return;
            let i = (r / _) * 1000;
            (t.style.transition = 'transform '.concat(i, 'ms linear')),
                (t.style.transform = 'translateX(-'.concat(r, 'px)')),
                (m.current = setTimeout(
                    () => {
                        t.style.transform = 'translateX(0)';
                    },
                    i + 1000 * f
                ));
        }, [f, _]),
        E = i.useMemo(() => (0, s.debounce)(g, d), [g]),
        b = () => {
            null != h.current && ((h.current.style.transition = 'none'), (h.current.style.transform = 'translateX(0)'));
        };
    return (
        i.useEffect(
            () => (
                n ? E() : (null != m.current && (clearTimeout(m.current), (m.current = null)), b()),
                () => {
                    null != m.current && (clearTimeout(m.current), (m.current = null));
                }
            ),
            [n, E]
        ),
        (0, r.jsx)('div', {
            ref: p,
            className: a()(l.container, o),
            children: (0, r.jsx)('div', {
                ref: h,
                className: l.marquee,
                children: t
            })
        })
    );
}
