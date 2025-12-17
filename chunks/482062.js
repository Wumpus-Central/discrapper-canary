n.d(t, {
    KT: () => p,
    ZP: () => f,
    nX: () => b,
}),
    n(388685);
var a = n(54381),
    r = n(473749),
    i = n(25441),
    l = n(536895),
    s = n(260866);
let o = "data-grid-item-id",
    c = "data-grid-section",
    d = "data-grid-prev-section-boundary",
    u = new Set([l.R8.UP, l.R8.DOWN, l.R8.LEFT, l.R8.RIGHT]);
function m(e) {
    let { section: t, column: n, row: a } = e,
        r = "[".concat(c, '="').concat(t, '"]'),
        i = "[".concat("aria-colindex", '="').concat(n, '"]'),
        l = "[".concat("aria-rowindex", '="').concat(a, '"]');
    return "".concat(r).concat(i).concat(l);
}
function f(e) {
    let { id: t, isEnabled: n, setFocus: a } = e,
        c = r.useRef(null),
        f = r.useRef(!1),
        h = r.useRef(null),
        g = r.useRef(n);
    r.useLayoutEffect(() => {
        g.current = n;
    }, [n]);
    let x = r.useCallback((e) => {
            var t;
            return (null != (t = h.current) ? t : document).querySelector(e);
        }, []),
        b = r.useCallback(
            (e, t) => {
                g.current && a(e, t);
            },
            [a],
        ),
        p = r.useCallback((e) => {
            if (g.current) {
                var t;
                null == (t = document.querySelector(e)) || t.focus();
            }
        }, []),
        j = r.useCallback(
            (e) => {
                c.current = e;
                let n = (0, s.P1)(e, o),
                    a = (0, s.x3)(e);
                b(n, a), (0, i.h)(t, a, !0);
            },
            [t, b],
        ),
        [v, C] = r.useState(!1),
        y = r.useRef(v);
    r.useLayoutEffect(() => {
        y.current = v;
    }, [v]),
        r.useLayoutEffect(() => {
            let e = h.current;
            if (null != e)
                return (
                    e.addEventListener("focusin", n),
                    e.addEventListener("focusout", a),
                    e.addEventListener("focus", r),
                    e.addEventListener("scroll", i, { passive: !0 }),
                    () => {
                        e.removeEventListener("focusin", n),
                            e.removeEventListener("focusout", a),
                            e.removeEventListener("focus", r),
                            e.removeEventListener("scroll", i);
                    }
                );
            function n() {
                C(!0);
            }
            function a(e) {
                e.currentTarget.contains(e.relatedTarget) ||
                    (C(!1),
                    requestAnimationFrame(() => {
                        let e = c.current;
                        null !== e && null == x((0, s.P1)(e, o)) && p((0, s.P1)(t, "data-grid-id"));
                    }));
            }
            function r() {
                let e = h.current;
                if (y.current || null == e) return;
            }
            function i() {
                f.current = !0;
            }
        }, [t, b, p, j, x]);
    let T = r.useCallback(
            (e) => {
                var t, n;
                if (!g.current) return;
                let a = c.current,
                    r = h.current;
                if (null == a) return;
                let i = (0, s.P1)(a, o),
                    f = null == r ? void 0 : r.querySelector(i);
                if (null == f) return;
                let b = parseInt(null != (t = f.getAttribute("data-grid-section")) ? t : ""),
                    p = parseInt(f.getAttribute("aria-rowindex")),
                    v = parseInt(f.getAttribute("aria-colindex"));
                switch ((u.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key)) {
                    case l.R8.RIGHT: {
                        let e = x(
                            m({
                                section: b,
                                row: p,
                                column: v + 1,
                            }),
                        );
                        if (null != e) {
                            let t = e.getAttribute(o);
                            null != t && j(t);
                        }
                        return;
                    }
                    case l.R8.LEFT: {
                        let e = x(
                            m({
                                section: b,
                                row: p,
                                column: v - 1,
                            }),
                        );
                        if (null != e) {
                            let t = e.getAttribute(o);
                            null != t && j(t);
                        }
                        return;
                    }
                    case l.R8.DOWN: {
                        let e = x(
                            m({
                                section: b,
                                row: p + 1,
                                column: v,
                            }),
                        );
                        if (
                            (null == e &&
                                (e = x(
                                    m({
                                        section: b + 1,
                                        row: 0,
                                        column: v,
                                    }),
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
                        if (0 === p) {
                            let t = parseInt(f.getAttribute(d));
                            null ==
                                (e = x(
                                    m({
                                        section: b - 1,
                                        row: t,
                                        column: v,
                                    }),
                                )) &&
                                (e = x(
                                    m({
                                        section: b - 1,
                                        row: t - 1,
                                        column: v,
                                    }),
                                ));
                        } else
                            e = x(
                                m({
                                    section: b,
                                    row: p - 1,
                                    column: v,
                                }),
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
                            let a = x((0, s.P1)(t, o)),
                                r = null != (n = null == a ? void 0 : a.ownerDocument) ? n : document,
                                i = a === r.activeElement;
                            null != a && i && (e.preventDefault(), e.stopPropagation(), null == a || a.click());
                        }
                    }
                }
            },
            [x, j],
        ),
        w = r.useCallback(
            (e) => {
                c.current = null != e ? (0, s.jb)(t, e) : null;
            },
            [t],
        );
    return r.useMemo(
        () => ({
            id: t,
            containerProps: {
                onKeyDown: T,
                ref: h,
            },
            setFocus: w,
        }),
        [t, T, w],
    );
}
let h = {
        id: "NO_LIST",
        onKeyDown() {},
        ref: r.createRef(),
    },
    g = r.createContext({
        id: "NO_LIST",
        setFocus() {},
    }),
    x = r.createContext(h);
function b(e) {
    let { id: t, section: n, row: a, column: l, boundaries: u } = e,
        [m, f] = r.useState(0 === a && 0 === l ? 0 : -1),
        { id: h, setFocus: x } = r.useContext(g),
        b = r.useCallback(() => x(t), [t, x]);
    return (
        r.useLayoutEffect(
            () =>
                (0, i.N)(h, (e) => {
                    f(e === t ? 0 : -1);
                }),
            [t, h],
        ),
        {
            [o]: (0, s.jb)(h, t),
            [c]: n,
            [d]: u[n],
            role: "gridcell",
            "aria-rowindex": a,
            "aria-colindex": l,
            tabIndex: m,
            onFocus: b,
        }
    );
}
function p(e) {
    let { children: t, navigator: n } = e,
        {
            id: i,
            setFocus: l,
            containerProps: { onKeyDown: s, ref: o },
        } = n,
        c = r.useMemo(
            () => ({
                id: i,
                setFocus: l,
            }),
            [i, l],
        ),
        d = r.useMemo(
            () => ({
                onKeyDown: s,
                ref: o,
                id: i,
            }),
            [s, o, i],
        );
    return (0, a.jsx)(x.Provider, {
        value: d,
        children: (0, a.jsx)(g.Provider, {
            value: c,
            children: t,
        }),
    });
}
