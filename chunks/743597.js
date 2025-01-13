n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(192379),
    l = n(392711),
    r = n.n(l),
    a = n(772848),
    s = n(846519),
    o = n(125268),
    c = n(984063),
    u = n(813900);
let d = r().debounce(o.BR, u.Fq, { maxWait: u.Fq });
function m(e, t, n) {
    let l = i.useRef((0, a.Z)()),
        r = i.useRef(new s.Xp()),
        m = i.useCallback(
            (i) => {
                (i.lastUpdatedAt = Date.now()), (0, o.gr)(i, e, n), (0, o.BR)(t, n, i);
            },
            [t, n, e]
        ),
        f = i.useCallback(
            (i, s, d) => {
                l.current = (0, a.Z)();
                let f = {
                    ...i,
                    id: l.current,
                    x: s,
                    y: d,
                    userId: e,
                    state: c.f.START,
                    lastUpdatedAt: Date.now()
                };
                (0, o.BR)(t, n, f), (0, o.gr)(f, e, n), r.current.start(u.FO, () => m(f));
            },
            [e, t, n, m]
        ),
        p = i.useCallback(
            (i, a, s) => {
                let f = {
                    ...i,
                    id: l.current,
                    x: a,
                    y: s,
                    userId: e,
                    state: c.f.START,
                    lastUpdatedAt: Date.now()
                };
                d(t, n, f), (0, o.gr)(f, e, n), r.current.start(u.FO, () => m(f));
            },
            [e, t, n, m]
        ),
        h = i.useCallback(
            (i, a, s) => {
                d.cancel(),
                    (0, o.Df)(t, n, l.current),
                    (0, o.gr)(
                        {
                            ...i,
                            id: l.current,
                            x: a,
                            y: s,
                            userId: e,
                            state: c.f.STOP,
                            lastUpdatedAt: Date.now()
                        },
                        e,
                        n
                    ),
                    r.current.stop();
            },
            [t, n, e]
        ),
        g = i.useCallback((e, t, n) => p(e, t, n), [p]);
    return i.useMemo(
        () => ({
            handleMouseDown: f,
            handleMouseMove: p,
            handleMouseUp: h,
            handleMouseEnter: g
        }),
        [f, g, p, h]
    );
}
