n.d(t, {
    KT: () => v,
    ZP: () => h,
    nX: () => p
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(25441),
    a = n(536895),
    s = n(260866);
let o = 'data-grid-item-id',
    c = 'data-grid-section',
    d = 'data-grid-prev-section-boundary',
    u = new Set([a.R8.UP, a.R8.DOWN, a.R8.LEFT, a.R8.RIGHT]);
function m(e) {
    let { section: t, column: n, row: i } = e,
        l = '['.concat(c, '="').concat(t, '"]'),
        r = '['.concat('aria-colindex', '="').concat(n, '"]'),
        a = '['.concat('aria-rowindex', '="').concat(i, '"]');
    return ''.concat(l).concat(r).concat(a);
}
function h(e) {
    let { id: t, isEnabled: n, setFocus: i } = e,
        c = l.useRef(null),
        h = l.useRef(!1),
        g = l.useRef(null),
        x = l.useRef(n);
    l.useLayoutEffect(() => {
        x.current = n;
    }, [n]);
    let f = l.useCallback((e) => {
            var t;
            return (null !== (t = g.current) && void 0 !== t ? t : document).querySelector(e);
        }, []),
        p = l.useCallback(
            (e, t) => {
                x.current && i(e, t);
            },
            [i]
        ),
        v = l.useCallback((e) => {
            if (x.current) {
                var t;
                null === (t = document.querySelector(e)) || void 0 === t || t.focus();
            }
        }, []),
        C = l.useCallback(
            (e) => {
                c.current = e;
                let n = (0, s.P1)(e, o),
                    i = (0, s.x3)(e);
                p(n, i), (0, r.h)(t, i, !0);
            },
            [t, p]
        ),
        [_, b] = l.useState(!1),
        j = l.useRef(_);
    l.useLayoutEffect(() => {
        j.current = _;
    }, [_]),
        l.useLayoutEffect(() => {
            let e = g.current;
            if (null != e)
                return (
                    e.addEventListener('focusin', n),
                    e.addEventListener('focusout', i),
                    e.addEventListener('focus', l),
                    e.addEventListener('scroll', r, { passive: !0 }),
                    () => {
                        e.removeEventListener('focusin', n), e.removeEventListener('focusout', i), e.removeEventListener('focus', l), e.removeEventListener('scroll', r);
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
            function l() {
                let e = g.current;
                if (j.current || null == e) return;
            }
            function r() {
                h.current = !0;
            }
        }, [t, p, v, C, f]);
    let N = l.useCallback(
            (e) => {
                var t, n;
                if (!x.current) return;
                let i = c.current,
                    l = g.current;
                if (null == i) return;
                let r = (0, s.P1)(i, o),
                    h = null == l ? void 0 : l.querySelector(r);
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
                                l = null !== (n = null == i ? void 0 : i.ownerDocument) && void 0 !== n ? n : document,
                                r = i === l.activeElement;
                            null != i && r && (e.preventDefault(), e.stopPropagation(), null == i || i.click());
                        }
                    }
                }
            },
            [f, C]
        ),
        T = l.useCallback(
            (e) => {
                let n = null != e ? (0, s.jb)(t, e) : null;
                c.current = n;
            },
            [t]
        );
    return l.useMemo(
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
        ref: l.createRef()
    },
    x = l.createContext({
        id: 'NO_LIST',
        setFocus() {}
    }),
    f = l.createContext(g);
function p(e) {
    let { id: t, section: n, row: i, column: a, boundaries: u } = e,
        [m, h] = l.useState(0 === i && 0 === a ? 0 : -1),
        { id: g, setFocus: f } = l.useContext(x),
        p = l.useCallback(() => f(t), [t, f]);
    return (
        l.useLayoutEffect(
            () =>
                (0, r.N)(g, (e) => {
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
            id: r,
            setFocus: a,
            containerProps: { onKeyDown: s, ref: o }
        } = n,
        c = l.useMemo(
            () => ({
                id: r,
                setFocus: a
            }),
            [r, a]
        ),
        d = l.useMemo(
            () => ({
                onKeyDown: s,
                ref: o,
                id: r
            }),
            [s, o, r]
        );
    return (0, i.jsx)(f.Provider, {
        value: d,
        children: (0, i.jsx)(x.Provider, {
            value: c,
            children: t
        })
    });
}
