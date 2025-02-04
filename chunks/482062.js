n.d(t, {
    KT: () => v,
    ZP: () => h,
    nX: () => p
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(25441),
    a = n(536895),
    s = n(260866);
let o = 'data-grid-item-id',
    c = 'data-grid-section',
    d = 'data-grid-prev-section-boundary',
    u = new Set([a.R8.UP, a.R8.DOWN, a.R8.LEFT, a.R8.RIGHT]);
function m(e) {
    let { section: t, column: n, row: i } = e,
        r = '['.concat(c, '="').concat(t, '"]'),
        l = '['.concat('aria-colindex', '="').concat(n, '"]'),
        a = '['.concat('aria-rowindex', '="').concat(i, '"]');
    return ''.concat(r).concat(l).concat(a);
}
function h(e) {
    let { id: t, isEnabled: n, setFocus: i } = e,
        c = r.useRef(null),
        h = r.useRef(!1),
        g = r.useRef(null),
        x = r.useRef(n);
    r.useLayoutEffect(() => {
        x.current = n;
    }, [n]);
    let f = r.useCallback((e) => {
            var t;
            return (null !== (t = g.current) && void 0 !== t ? t : document).querySelector(e);
        }, []),
        p = r.useCallback(
            (e, t) => {
                x.current && i(e, t);
            },
            [i]
        ),
        v = r.useCallback((e) => {
            if (x.current) {
                var t;
                null === (t = document.querySelector(e)) || void 0 === t || t.focus();
            }
        }, []),
        C = r.useCallback(
            (e) => {
                c.current = e;
                let n = (0, s.P1)(e, o),
                    i = (0, s.x3)(e);
                p(n, i), (0, l.h)(t, i, !0);
            },
            [t, p]
        ),
        [_, b] = r.useState(!1),
        j = r.useRef(_);
    r.useLayoutEffect(() => {
        j.current = _;
    }, [_]),
        r.useLayoutEffect(() => {
            let e = g.current;
            if (null != e)
                return (
                    e.addEventListener('focusin', n),
                    e.addEventListener('focusout', i),
                    e.addEventListener('focus', r),
                    e.addEventListener('scroll', l, { passive: !0 }),
                    () => {
                        e.removeEventListener('focusin', n), e.removeEventListener('focusout', i), e.removeEventListener('focus', r), e.removeEventListener('scroll', l);
                    }
                );
            function n() {
                b(!0);
            }
            function i(e) {
                !e.currentTarget.contains(e.relatedTarget) &&
                    (b(!1),
                    requestAnimationFrame(() => {
                        let e = c.current;
                        null !== e && null == f((0, s.P1)(e, o)) && v((0, s.P1)(t, 'data-grid-id'));
                    }));
            }
            function r() {
                let e = g.current;
                if (j.current || null == e) return;
            }
            function l() {
                h.current = !0;
            }
        }, [t, p, v, C, f]);
    let N = r.useCallback(
            (e) => {
                var t, n;
                if (!x.current) return;
                let i = c.current,
                    r = g.current;
                if (null == i) return;
                let l = (0, s.P1)(i, o),
                    h = null == r ? void 0 : r.querySelector(l);
                if (null == h) return;
                let p = parseInt(null !== (t = h.getAttribute('data-grid-section')) && void 0 !== t ? t : ''),
                    v = parseInt(h.getAttribute('aria-rowindex')),
                    _ = parseInt(h.getAttribute('aria-colindex'));
                switch ((u.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key)) {
                    case a.R8.RIGHT: {
                        let e = f(
                            m({
                                section: p,
                                row: v,
                                column: _ + 1
                            })
                        );
                        if (null != e) {
                            let t = e.getAttribute(o);
                            null != t && C(t);
                        }
                        return;
                    }
                    case a.R8.LEFT: {
                        let e = f(
                            m({
                                section: p,
                                row: v,
                                column: _ - 1
                            })
                        );
                        if (null != e) {
                            let t = e.getAttribute(o);
                            null != t && C(t);
                        }
                        return;
                    }
                    case a.R8.DOWN: {
                        let e = f(
                            m({
                                section: p,
                                row: v + 1,
                                column: _
                            })
                        );
                        if (
                            (null == e &&
                                (e = f(
                                    m({
                                        section: p + 1,
                                        row: 0,
                                        column: _
                                    })
                                )),
                            null != e)
                        ) {
                            let t = e.getAttribute(o);
                            null != t && C(t);
                        }
                        return;
                    }
                    case a.R8.UP: {
                        let e;
                        if (0 === v) {
                            let t = parseInt(h.getAttribute(d));
                            null ==
                                (e = f(
                                    m({
                                        section: p - 1,
                                        row: t,
                                        column: _
                                    })
                                )) &&
                                (e = f(
                                    m({
                                        section: p - 1,
                                        row: t - 1,
                                        column: _
                                    })
                                ));
                        } else
                            e = f(
                                m({
                                    section: p,
                                    row: v - 1,
                                    column: _
                                })
                            );
                        if (null != e) {
                            let t = e.getAttribute(o);
                            null != t && C(t);
                        }
                        return;
                    }
                    case a.R8.SPACE:
                    case a.R8.ENTER: {
                        if (e.repeat) return;
                        let t = c.current;
                        if (null != t) {
                            let i = f((0, s.P1)(t, o)),
                                r = null !== (n = null == i ? void 0 : i.ownerDocument) && void 0 !== n ? n : document,
                                l = i === r.activeElement;
                            null != i && l && (e.preventDefault(), e.stopPropagation(), null == i || i.click());
                        }
                    }
                }
            },
            [f, C]
        ),
        T = r.useCallback(
            (e) => {
                let n = null != e ? (0, s.jb)(t, e) : null;
                c.current = n;
            },
            [t]
        );
    return r.useMemo(
        () => ({
            id: t,
            containerProps: {
                onKeyDown: N,
                ref: g
            },
            setFocus: T
        }),
        [t, N, T]
    );
}
let g = {
        id: 'NO_LIST',
        onKeyDown() {},
        ref: r.createRef()
    },
    x = r.createContext({
        id: 'NO_LIST',
        setFocus() {}
    }),
    f = r.createContext(g);
function p(e) {
    let { id: t, section: n, row: i, column: a, boundaries: u } = e,
        [m, h] = r.useState(0 === i && 0 === a ? 0 : -1),
        { id: g, setFocus: f } = r.useContext(x),
        p = r.useCallback(() => f(t), [t, f]);
    return (
        r.useLayoutEffect(
            () =>
                (0, l.N)(g, (e) => {
                    h(e === t ? 0 : -1);
                }),
            [t, g]
        ),
        {
            [o]: (0, s.jb)(g, t),
            [c]: n,
            [d]: u[n],
            role: 'gridcell',
            'aria-rowindex': i,
            'aria-colindex': a,
            tabIndex: m,
            onFocus: p
        }
    );
}
function v(e) {
    let { children: t, navigator: n } = e,
        {
            id: l,
            setFocus: a,
            containerProps: { onKeyDown: s, ref: o }
        } = n,
        c = r.useMemo(
            () => ({
                id: l,
                setFocus: a
            }),
            [l, a]
        ),
        d = r.useMemo(
            () => ({
                onKeyDown: s,
                ref: o,
                id: l
            }),
            [s, o, l]
        );
    return (0, i.jsx)(f.Provider, {
        value: d,
        children: (0, i.jsx)(x.Provider, {
            value: c,
            children: t
        })
    });
}
