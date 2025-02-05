n.d(t, { Z: () => m });
var l = n(192379),
    i = n(392711),
    r = n.n(i),
    a = n(772848),
    s = n(846519),
    o = n(125268),
    u = n(984063),
    c = n(813900);
let d = r().debounce(o.BR, c.Fq, { maxWait: c.Fq });
function m(e, t, n) {
    let i = l.useRef((0, a.Z)()),
        r = l.useRef(new s.Xp()),
        m = l.useCallback(
            (l) => {
                (l.lastUpdatedAt = Date.now()), (0, o.gr)(l, e, n), (0, o.BR)(t, n, l);
            },
            [t, n, e]
        ),
        f = l.useCallback(
            (l, s, d) => {
                i.current = (0, a.Z)();
                let f = {
                    ...l,
                    id: i.current,
                    x: s,
                    y: d,
                    userId: e,
                    state: u.f.START,
                    lastUpdatedAt: Date.now()
                };
                (0, o.BR)(t, n, f), (0, o.gr)(f, e, n), r.current.start(c.FO, () => m(f));
            },
            [e, t, n, m]
        ),
        h = l.useCallback(
            (l, a, s) => {
                let f = {
                    ...l,
                    id: i.current,
                    x: a,
                    y: s,
                    userId: e,
                    state: u.f.START,
                    lastUpdatedAt: Date.now()
                };
                d(t, n, f), (0, o.gr)(f, e, n), r.current.start(c.FO, () => m(f));
            },
            [e, t, n, m]
        ),
        p = l.useCallback(
            (l, a, s) => {
                d.cancel(),
                    (0, o.Df)(t, n, i.current),
                    (0, o.gr)(
                        {
                            ...l,
                            id: i.current,
                            x: a,
                            y: s,
                            userId: e,
                            state: u.f.STOP,
                            lastUpdatedAt: Date.now()
                        },
                        e,
                        n
                    ),
                    r.current.stop();
            },
            [t, n, e]
        ),
        v = l.useCallback((e, t, n) => h(e, t, n), [h]);
    return l.useMemo(
        () => ({
            handleMouseDown: f,
            handleMouseMove: h,
            handleMouseUp: p,
            handleMouseEnter: v
        }),
        [f, v, h, p]
    );
}
