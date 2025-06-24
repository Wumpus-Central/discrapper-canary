n.d(t, {
    KT: () => b,
    ZP: () => h,
    nX: () => p
}),
    n(388685);
var r = n(255367),
    a = n(73800),
    l = n(25441),
    i = n(536895),
    s = n(260866);
let o = 'data-grid-item-id',
    c = 'data-grid-section',
    d = 'data-grid-prev-section-boundary',
    u = new Set([i.R8.UP, i.R8.DOWN, i.R8.LEFT, i.R8.RIGHT]);
function m(e) {
    let { section: t, column: n, row: r } = e,
        a = '['.concat(c, '="').concat(t, '"]'),
        l = '['.concat('aria-colindex', '="').concat(n, '"]'),
        i = '['.concat('aria-rowindex', '="').concat(r, '"]');
    return ''.concat(a).concat(l).concat(i);
}
function h(e) {
    let { id: t, isEnabled: n, setFocus: r } = e,
        c = a.useRef(null),
        h = a.useRef(!1),
        g = a.useRef(null),
        f = a.useRef(n);
    a.useLayoutEffect(() => {
        f.current = n;
    }, [n]);
    let x = a.useCallback((e) => {
            var t;
            return (null != (t = g.current) ? t : document).querySelector(e);
        }, []),
        p = a.useCallback(
            (e, t) => {
                f.current && r(e, t);
            },
            [r]
        ),
        b = a.useCallback((e) => {
            if (f.current) {
                var t;
                null == (t = document.querySelector(e)) || t.focus();
            }
        }, []),
        j = a.useCallback(
            (e) => {
                c.current = e;
                let n = (0, s.P1)(e, o),
                    r = (0, s.x3)(e);
                p(n, r), (0, l.h)(t, r, !0);
            },
            [t, p]
        ),
        [v, C] = a.useState(!1),
        _ = a.useRef(v);
    a.useLayoutEffect(() => {
        _.current = v;
    }, [v]),
        a.useLayoutEffect(() => {
            let e = g.current;
            if (null != e)
                return (
                    e.addEventListener('focusin', n),
                    e.addEventListener('focusout', r),
                    e.addEventListener('focus', a),
                    e.addEventListener('scroll', l, { passive: !0 }),
                    () => {
                        e.removeEventListener('focusin', n), e.removeEventListener('focusout', r), e.removeEventListener('focus', a), e.removeEventListener('scroll', l);
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
            function a() {
                let e = g.current;
                if (_.current || null == e) return;
            }
            function l() {
                h.current = !0;
            }
        }, [t, p, b, j, x]);
    let y = a.useCallback(
            (e) => {
                var t, n;
                if (!f.current) return;
                let r = c.current,
                    a = g.current;
                if (null == r) return;
                let l = (0, s.P1)(r, o),
                    h = null == a ? void 0 : a.querySelector(l);
                if (null == h) return;
                let p = parseInt(null != (t = h.getAttribute('data-grid-section')) ? t : ''),
                    b = parseInt(h.getAttribute('aria-rowindex')),
                    v = parseInt(h.getAttribute('aria-colindex'));
                switch ((u.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key)) {
                    case i.R8.RIGHT: {
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
                    case i.R8.LEFT: {
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
                    case i.R8.DOWN: {
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
                    case i.R8.UP: {
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
                    case i.R8.SPACE:
                    case i.R8.ENTER: {
                        if (e.repeat) return;
                        let t = c.current;
                        if (null != t) {
                            let r = x((0, s.P1)(t, o)),
                                a = null != (n = null == r ? void 0 : r.ownerDocument) ? n : document,
                                l = r === a.activeElement;
                            null != r && l && (e.preventDefault(), e.stopPropagation(), null == r || r.click());
                        }
                    }
                }
            },
            [x, j]
        ),
        O = a.useCallback(
            (e) => {
                c.current = null != e ? (0, s.jb)(t, e) : null;
            },
            [t]
        );
    return a.useMemo(
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
        ref: a.createRef()
    },
    f = a.createContext({
        id: 'NO_LIST',
        setFocus() {}
    }),
    x = a.createContext(g);
function p(e) {
    let { id: t, section: n, row: r, column: i, boundaries: u } = e,
        [m, h] = a.useState(0 === r && 0 === i ? 0 : -1),
        { id: g, setFocus: x } = a.useContext(f),
        p = a.useCallback(() => x(t), [t, x]);
    return (
        a.useLayoutEffect(
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
            'aria-colindex': i,
            tabIndex: m,
            onFocus: p
        }
    );
}
function b(e) {
    let { children: t, navigator: n } = e,
        {
            id: l,
            setFocus: i,
            containerProps: { onKeyDown: s, ref: o }
        } = n,
        c = a.useMemo(
            () => ({
                id: l,
                setFocus: i
            }),
            [l, i]
        ),
        d = a.useMemo(
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
