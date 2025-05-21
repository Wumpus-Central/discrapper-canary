n.d(t, {
    KT: () => b,
    ZP: () => h,
    nX: () => p
}),
    n(388685);
var r = n(255367),
    l = n(73800),
    i = n(25441),
    a = n(536895),
    s = n(260866);
let o = 'data-grid-item-id',
    c = 'data-grid-section',
    d = 'data-grid-prev-section-boundary',
    u = new Set([a.R8.UP, a.R8.DOWN, a.R8.LEFT, a.R8.RIGHT]);
function m(e) {
    let { section: t, column: n, row: r } = e,
        l = '['.concat(c, '="').concat(t, '"]'),
        i = '['.concat('aria-colindex', '="').concat(n, '"]'),
        a = '['.concat('aria-rowindex', '="').concat(r, '"]');
    return ''.concat(l).concat(i).concat(a);
}
function h(e) {
    let { id: t, isEnabled: n, setFocus: r } = e,
        c = l.useRef(null),
        h = l.useRef(!1),
        g = l.useRef(null),
        f = l.useRef(n);
    l.useLayoutEffect(() => {
        f.current = n;
    }, [n]);
    let x = l.useCallback((e) => {
            var t;
            return (null != (t = g.current) ? t : document).querySelector(e);
        }, []),
        p = l.useCallback(
            (e, t) => {
                f.current && r(e, t);
            },
            [r]
        ),
        b = l.useCallback((e) => {
            if (f.current) {
                var t;
                null == (t = document.querySelector(e)) || t.focus();
            }
        }, []),
        j = l.useCallback(
            (e) => {
                c.current = e;
                let n = (0, s.P1)(e, o),
                    r = (0, s.x3)(e);
                p(n, r), (0, i.h)(t, r, !0);
            },
            [t, p]
        ),
        [v, C] = l.useState(!1),
        _ = l.useRef(v);
    l.useLayoutEffect(() => {
        _.current = v;
    }, [v]),
        l.useLayoutEffect(() => {
            let e = g.current;
            if (null != e)
                return (
                    e.addEventListener('focusin', n),
                    e.addEventListener('focusout', r),
                    e.addEventListener('focus', l),
                    e.addEventListener('scroll', i, { passive: !0 }),
                    () => {
                        e.removeEventListener('focusin', n), e.removeEventListener('focusout', r), e.removeEventListener('focus', l), e.removeEventListener('scroll', i);
                    }
                );
            function n() {
                C(!0);
            }
            function r(e) {
                e.currentTarget.contains(e.relatedTarget) ||
                    (C(!1),
                    requestAnimationFrame(() => {
                        let e = c.current;
                        null !== e && null == x((0, s.P1)(e, o)) && b((0, s.P1)(t, 'data-grid-id'));
                    }));
            }
            function l() {
                let e = g.current;
                if (_.current || null == e) return;
            }
            function i() {
                h.current = !0;
            }
        }, [t, p, b, j, x]);
    let y = l.useCallback(
            (e) => {
                var t, n;
                if (!f.current) return;
                let r = c.current,
                    l = g.current;
                if (null == r) return;
                let i = (0, s.P1)(r, o),
                    h = null == l ? void 0 : l.querySelector(i);
                if (null == h) return;
                let p = parseInt(null != (t = h.getAttribute('data-grid-section')) ? t : ''),
                    b = parseInt(h.getAttribute('aria-rowindex')),
                    v = parseInt(h.getAttribute('aria-colindex'));
                switch ((u.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key)) {
                    case a.R8.RIGHT: {
                        let e = x(
                            m({
                                section: p,
                                row: b,
                                column: v + 1
                            })
                        );
                        if (null != e) {
                            let t = e.getAttribute(o);
                            null != t && j(t);
                        }
                        return;
                    }
                    case a.R8.LEFT: {
                        let e = x(
                            m({
                                section: p,
                                row: b,
                                column: v - 1
                            })
                        );
                        if (null != e) {
                            let t = e.getAttribute(o);
                            null != t && j(t);
                        }
                        return;
                    }
                    case a.R8.DOWN: {
                        let e = x(
                            m({
                                section: p,
                                row: b + 1,
                                column: v
                            })
                        );
                        if (
                            (null == e &&
                                (e = x(
                                    m({
                                        section: p + 1,
                                        row: 0,
                                        column: v
                                    })
                                )),
                            null != e)
                        ) {
                            let t = e.getAttribute(o);
                            null != t && j(t);
                        }
                        return;
                    }
                    case a.R8.UP: {
                        let e;
                        if (0 === b) {
                            let t = parseInt(h.getAttribute(d));
                            null ==
                                (e = x(
                                    m({
                                        section: p - 1,
                                        row: t,
                                        column: v
                                    })
                                )) &&
                                (e = x(
                                    m({
                                        section: p - 1,
                                        row: t - 1,
                                        column: v
                                    })
                                ));
                        } else
                            e = x(
                                m({
                                    section: p,
                                    row: b - 1,
                                    column: v
                                })
                            );
                        if (null != e) {
                            let t = e.getAttribute(o);
                            null != t && j(t);
                        }
                        return;
                    }
                    case a.R8.SPACE:
                    case a.R8.ENTER: {
                        if (e.repeat) return;
                        let t = c.current;
                        if (null != t) {
                            let r = x((0, s.P1)(t, o)),
                                l = null != (n = null == r ? void 0 : r.ownerDocument) ? n : document,
                                i = r === l.activeElement;
                            null != r && i && (e.preventDefault(), e.stopPropagation(), null == r || r.click());
                        }
                    }
                }
            },
            [x, j]
        ),
        O = l.useCallback(
            (e) => {
                c.current = null != e ? (0, s.jb)(t, e) : null;
            },
            [t]
        );
    return l.useMemo(
        () => ({
            id: t,
            containerProps: {
                onKeyDown: y,
                ref: g
            },
            setFocus: O
        }),
        [t, y, O]
    );
}
let g = {
        id: 'NO_LIST',
        onKeyDown() {},
        ref: l.createRef()
    },
    f = l.createContext({
        id: 'NO_LIST',
        setFocus() {}
    }),
    x = l.createContext(g);
function p(e) {
    let { id: t, section: n, row: r, column: a, boundaries: u } = e,
        [m, h] = l.useState(0 === r && 0 === a ? 0 : -1),
        { id: g, setFocus: x } = l.useContext(f),
        p = l.useCallback(() => x(t), [t, x]);
    return (
        l.useLayoutEffect(
            () =>
                (0, i.N)(g, (e) => {
                    h(e === t ? 0 : -1);
                }),
            [t, g]
        ),
        {
            [o]: (0, s.jb)(g, t),
            [c]: n,
            [d]: u[n],
            role: 'gridcell',
            'aria-rowindex': r,
            'aria-colindex': a,
            tabIndex: m,
            onFocus: p
        }
    );
}
function b(e) {
    let { children: t, navigator: n } = e,
        {
            id: i,
            setFocus: a,
            containerProps: { onKeyDown: s, ref: o }
        } = n,
        c = l.useMemo(
            () => ({
                id: i,
                setFocus: a
            }),
            [i, a]
        ),
        d = l.useMemo(
            () => ({
                onKeyDown: s,
                ref: o,
                id: i
            }),
            [s, o, i]
        );
    return (0, r.jsx)(x.Provider, {
        value: d,
        children: (0, r.jsx)(f.Provider, {
            value: c,
            children: t
        })
    });
}
