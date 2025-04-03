n.d(t, {
    KT: () => b,
    ZP: () => h,
    nX: () => x
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    i = n(25441),
    l = n(536895),
    s = n(260866);
let o = 'data-grid-item-id',
    c = 'data-grid-section',
    d = 'data-grid-prev-section-boundary',
    u = new Set([l.R8.UP, l.R8.DOWN, l.R8.LEFT, l.R8.RIGHT]);
function m(e) {
    let { section: t, column: n, row: r } = e,
        a = '['.concat(c, '="').concat(t, '"]'),
        i = '['.concat('aria-colindex', '="').concat(n, '"]'),
        l = '['.concat('aria-rowindex', '="').concat(r, '"]');
    return ''.concat(a).concat(i).concat(l);
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
    let p = a.useCallback((e) => {
            var t;
            return (null != (t = g.current) ? t : document).querySelector(e);
        }, []),
        x = a.useCallback(
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
                x(n, r), (0, i.h)(t, r, !0);
            },
            [t, x]
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
                    e.addEventListener('scroll', i, { passive: !0 }),
                    () => {
                        e.removeEventListener('focusin', n), e.removeEventListener('focusout', r), e.removeEventListener('focus', a), e.removeEventListener('scroll', i);
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
                        null !== e && null == p((0, s.P1)(e, o)) && b((0, s.P1)(t, 'data-grid-id'));
                    }));
            }
            function a() {
                let e = g.current;
                if (_.current || null == e) return;
            }
            function i() {
                h.current = !0;
            }
        }, [t, x, b, j, p]);
    let y = a.useCallback(
            (e) => {
                var t, n;
                if (!f.current) return;
                let r = c.current,
                    a = g.current;
                if (null == r) return;
                let i = (0, s.P1)(r, o),
                    h = null == a ? void 0 : a.querySelector(i);
                if (null == h) return;
                let x = parseInt(null != (t = h.getAttribute('data-grid-section')) ? t : ''),
                    b = parseInt(h.getAttribute('aria-rowindex')),
                    v = parseInt(h.getAttribute('aria-colindex'));
                switch ((u.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key)) {
                    case l.R8.RIGHT: {
                        let e = p(
                            m({
                                section: x,
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
                    case l.R8.LEFT: {
                        let e = p(
                            m({
                                section: x,
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
                    case l.R8.DOWN: {
                        let e = p(
                            m({
                                section: x,
                                row: b + 1,
                                column: v
                            })
                        );
                        if (
                            (null == e &&
                                (e = p(
                                    m({
                                        section: x + 1,
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
                    case l.R8.UP: {
                        let e;
                        if (0 === b) {
                            let t = parseInt(h.getAttribute(d));
                            null ==
                                (e = p(
                                    m({
                                        section: x - 1,
                                        row: t,
                                        column: v
                                    })
                                )) &&
                                (e = p(
                                    m({
                                        section: x - 1,
                                        row: t - 1,
                                        column: v
                                    })
                                ));
                        } else
                            e = p(
                                m({
                                    section: x,
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
                    case l.R8.SPACE:
                    case l.R8.ENTER: {
                        if (e.repeat) return;
                        let t = c.current;
                        if (null != t) {
                            let r = p((0, s.P1)(t, o)),
                                a = null != (n = null == r ? void 0 : r.ownerDocument) ? n : document,
                                i = r === a.activeElement;
                            null != r && i && (e.preventDefault(), e.stopPropagation(), null == r || r.click());
                        }
                    }
                }
            },
            [p, j]
        ),
        N = a.useCallback(
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
            setFocus: N
        }),
        [t, y, N]
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
    p = a.createContext(g);
function x(e) {
    let { id: t, section: n, row: r, column: l, boundaries: u } = e,
        [m, h] = a.useState(0 === r && 0 === l ? 0 : -1),
        { id: g, setFocus: p } = a.useContext(f),
        x = a.useCallback(() => p(t), [t, p]);
    return (
        a.useLayoutEffect(
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
            'aria-colindex': l,
            tabIndex: m,
            onFocus: x
        }
    );
}
function b(e) {
    let { children: t, navigator: n } = e,
        {
            id: i,
            setFocus: l,
            containerProps: { onKeyDown: s, ref: o }
        } = n,
        c = a.useMemo(
            () => ({
                id: i,
                setFocus: l
            }),
            [i, l]
        ),
        d = a.useMemo(
            () => ({
                onKeyDown: s,
                ref: o,
                id: i
            }),
            [s, o, i]
        );
    return (0, r.jsx)(p.Provider, {
        value: d,
        children: (0, r.jsx)(f.Provider, {
            value: c,
            children: t
        })
    });
}
