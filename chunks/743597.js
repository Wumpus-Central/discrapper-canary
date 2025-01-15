n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(192379),
    l = n(392711),
    a = n.n(l),
    r = n(772848),
    s = n(846519),
    o = n(125268),
    c = n(984063),
    u = n(813900);
let d = a().debounce(o.BR, u.Fq, { maxWait: u.Fq });
function m(e, t, n) {
    let l = i.useRef((0, r.Z)()),
        a = i.useRef(new s.Xp()),
        m = i.useCallback(
            (i) => {
                (i.lastUpdatedAt = Date.now()), (0, o.gr)(i, e, n), (0, o.BR)(t, n, i);
            },
            [t, n, e]
        ),
        f = i.useCallback(
            (i, s, d) => {
                l.current = (0, r.Z)();
                let f = {
                    ...i,
                    id: l.current,
                    x: s,
                    y: d,
                    userId: e,
                    state: c.f.START,
                    lastUpdatedAt: Date.now()
                };
                (0, o.BR)(t, n, f), (0, o.gr)(f, e, n), a.current.start(u.FO, () => m(f));
            },
            [e, t, n, m]
        ),
        p = i.useCallback(
            (i, r, s) => {
                let f = {
                    ...i,
                    id: l.current,
                    x: r,
                    y: s,
                    userId: e,
                    state: c.f.START,
                    lastUpdatedAt: Date.now()
                };
                d(t, n, f), (0, o.gr)(f, e, n), a.current.start(u.FO, () => m(f));
            },
            [e, t, n, m]
        ),
        h = i.useCallback(
            (i, r, s) => {
                d.cancel(),
                    (0, o.Df)(t, n, l.current),
                    (0, o.gr)(
                        {
                            ...i,
                            id: l.current,
                            x: r,
                            y: s,
                            userId: e,
                            state: c.f.STOP,
                            lastUpdatedAt: Date.now()
                        },
                        e,
                        n
                    ),
                    a.current.stop();
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
