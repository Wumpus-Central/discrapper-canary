n.d(t, {
    KT: () => b,
    ZP: () => h,
    nX: () => p
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(25441),
    a = n(536895),
    s = n(260866);
let o = 'data-grid-item-id',
    c = 'data-grid-section',
    d = 'data-grid-prev-section-boundary',
    u = new Set([a.R8.UP, a.R8.DOWN, a.R8.LEFT, a.R8.RIGHT]);
function m(e) {
    let { section: t, column: n, row: r } = e,
        i = '['.concat(c, '="').concat(t, '"]'),
        l = '['.concat('aria-colindex', '="').concat(n, '"]'),
        a = '['.concat('aria-rowindex', '="').concat(r, '"]');
    return ''.concat(i).concat(l).concat(a);
}
function h(e) {
    let { id: t, isEnabled: n, setFocus: r } = e,
        c = i.useRef(null),
        h = i.useRef(!1),
        g = i.useRef(null),
        f = i.useRef(n);
    i.useLayoutEffect(() => {
        f.current = n;
    }, [n]);
    let x = i.useCallback((e) => {
            var t;
            return (null != (t = g.current) ? t : document).querySelector(e);
        }, []),
        p = i.useCallback(
            (e, t) => {
                f.current && r(e, t);
            },
            [r]
        ),
        b = i.useCallback((e) => {
            if (f.current) {
                var t;
                null == (t = document.querySelector(e)) || t.focus();
            }
        }, []),
        j = i.useCallback(
            (e) => {
                c.current = e;
                let n = (0, s.P1)(e, o),
                    r = (0, s.x3)(e);
                p(n, r), (0, l.h)(t, r, !0);
            },
            [t, p]
        ),
        [v, C] = i.useState(!1),
        _ = i.useRef(v);
    i.useLayoutEffect(() => {
        _.current = v;
    }, [v]),
        i.useLayoutEffect(() => {
            let e = g.current;
            if (null != e)
                return (
                    e.addEventListener('focusin', n),
                    e.addEventListener('focusout', r),
                    e.addEventListener('focus', i),
                    e.addEventListener('scroll', l, { passive: !0 }),
                    () => {
                        e.removeEventListener('focusin', n), e.removeEventListener('focusout', r), e.removeEventListener('focus', i), e.removeEventListener('scroll', l);
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
            function i() {
                let e = g.current;
                if (_.current || null == e) return;
            }
            function l() {
                h.current = !0;
            }
        }, [t, p, b, j, x]);
    let y = i.useCallback(
            (e) => {
                var t, n;
                if (!f.current) return;
                let r = c.current,
                    i = g.current;
                if (null == r) return;
                let l = (0, s.P1)(r, o),
                    h = null == i ? void 0 : i.querySelector(l);
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
                                i = null != (n = null == r ? void 0 : r.ownerDocument) ? n : document,
                                l = r === i.activeElement;
                            null != r && l && (e.preventDefault(), e.stopPropagation(), null == r || r.click());
                        }
                    }
                }
            },
            [x, j]
        ),
        O = i.useCallback(
            (e) => {
                c.current = null != e ? (0, s.jb)(t, e) : null;
            },
            [t]
        );
    return i.useMemo(
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
        ref: i.createRef()
    },
    f = i.createContext({
        id: 'NO_LIST',
        setFocus() {}
    }),
    x = i.createContext(g);
function p(e) {
    let { id: t, section: n, row: r, column: a, boundaries: u } = e,
        [m, h] = i.useState(0 === r && 0 === a ? 0 : -1),
        { id: g, setFocus: x } = i.useContext(f),
        p = i.useCallback(() => x(t), [t, x]);
    return (
        i.useLayoutEffect(
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
            id: l,
            setFocus: a,
            containerProps: { onKeyDown: s, ref: o }
        } = n,
        c = i.useMemo(
            () => ({
                id: l,
                setFocus: a
            }),
            [l, a]
        ),
        d = i.useMemo(
            () => ({
                onKeyDown: s,
                ref: o,
                id: l
            }),
            [s, o, l]
        );
    return (0, r.jsx)(x.Provider, {
        value: d,
        children: (0, r.jsx)(f.Provider, {
            value: c,
            children: t
        })
    });
}
