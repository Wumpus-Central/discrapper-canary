n.d(t, { Z: () => c }), n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(147479),
    l = n(493773),
    u = n(513753);
let c = r.memo(
    r.forwardRef((e, t) => {
        let { onScroll: n, onResize: a, listPadding: c = [0, 0, 0, 0], renderRow: d, renderSection: f, renderSectionHeader: _, renderSectionFooter: p, renderListHeader: h, rowCount: m, rowCountBySection: g, rowHeight: E, sectionMarginBottom: v, sectionHeaderHeight: y, sectionFooterHeight: I, listHeaderHeight: T, stickyHeaders: b = !1, className: S, hideScrollbar: A = !1, fade: N = !1, initialScrollTop: C = 0, role: R = 'list' } = e,
            [O, D] = r.useState(-1),
            [L, x] = r.useState(-1),
            w = r.useRef(null),
            P = r.useRef(0),
            M = r.useRef(-1);
        (0, l.Ng)(() => {
            var e;
            let t = null === (e = w.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != t && (t.scrollTop = C);
        });
        let k = r.useCallback(() => {
                let e = 'function' == typeof T ? T() : T;
                return null == e ? 0 : e;
            }, [T]),
            U = r.useCallback(
                (e, t, n) =>
                    'function' == typeof E
                        ? E(n, {
                              sectionIndex: e,
                              sectionRowIndex: t
                          })
                        : E,
                [E]
            ),
            G = r.useCallback(
                (e) => {
                    let t = 'function' == typeof y ? y(e) : y;
                    return null == t ? 0 : t;
                },
                [y]
            ),
            B = r.useCallback(
                (e) => {
                    let t = 'function' == typeof I ? I(e) : I;
                    return null == t ? 0 : t;
                },
                [I]
            ),
            Z = r.useCallback(
                (e) => {
                    let t = 'function' == typeof v ? v(e) : v;
                    return null == t ? 0 : t;
                },
                [v]
            ),
            F = r.useRef([]),
            V = r.useRef([]),
            {
                totalHeight: j,
                rowDescriptors: H,
                sectionDescriptors: Y
            } = r.useMemo(() => {
                let e = 0,
                    t = null != g,
                    n = t ? g.length : 1,
                    i = c[0],
                    r = [],
                    a = [];
                i += k();
                for (let s = 0; s < n; s++) {
                    let n = t ? g[s] : m,
                        o = (null == g ? void 0 : g[s]) !== 0;
                    (a[s] = {
                        firstRowIndex: e,
                        offset: {
                            top: i,
                            bottom: -1
                        }
                    }),
                        (i += G(s));
                    for (let t = 0; t < n; t++) {
                        let n = i + (o ? U(s, t, e) : 0),
                            a = {
                                top: i,
                                bottom: n
                            };
                        (r[e] = {
                            sectionIndex: s,
                            offset: a
                        }),
                            (i = n),
                            e++;
                    }
                    (i += B(s) + Z(s)), (a[s].offset.bottom = i);
                }
                return {
                    totalHeight: (i += c[2]),
                    rowDescriptors: r,
                    sectionDescriptors: a
                };
            }, [U, B, G, Z, c, m, g, k]);
        (F.current = Y), (V.current = H);
        let W = r.useCallback(() => {
            var e;
            let t = null === (e = w.current) || void 0 === e ? void 0 : e.getScrollerNode();
            if (null == t) return;
            let { offsetWidth: n, offsetHeight: i, scrollTop: r } = t;
            x(i),
                D(r),
                null == a ||
                    a({
                        width: n,
                        height: i
                    });
        }, [a]);
        r.useLayoutEffect(() => {
            -1 === L && W();
        }, [L, W]),
            r.useEffect(() => {
                var e;
                let t = null === (e = w.current) || void 0 === e ? void 0 : e.getScrollerNode(),
                    n = null == t ? void 0 : t.ownerDocument.defaultView;
                if (null == t || null == n) return;
                let i = new n.ResizeObserver(W);
                return i.observe(t), () => i.disconnect();
            }, [W]);
        let K = r.useCallback(() => {
            var e;
            let t = null === (e = w.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != t &&
                (window.cancelAnimationFrame(M.current),
                (M.current = window.requestAnimationFrame(() => {
                    let { scrollTop: e } = t;
                    (P.current = e), null == n || n(e), D(e);
                })));
        }, [n]);
        r.useImperativeHandle(
            t,
            () => ({
                scrollTo: function (e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: i = !1 } = n;
                    null === (t = w.current) ||
                        void 0 === t ||
                        t.scrollTo({
                            to: e,
                            animate: i
                        });
                },
                scrollRowIntoView: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: i = 0 } = t,
                        r = V.current[e];
                    null != r &&
                        window.requestAnimationFrame(() => {
                            var t, a;
                            let {
                                    sectionIndex: s,
                                    offset: { top: o, bottom: l }
                                } = r,
                                u = G(s),
                                c = o - (b ? u : 0) - i <= P.current,
                                d = l + i >= P.current + L;
                            if (c) {
                                let r = P.current + u - o,
                                    a = b ? P.current - r : o;
                                null === (t = w.current) ||
                                    void 0 === t ||
                                    t.scrollTo({
                                        to: 0 === e ? 0 : a - i,
                                        animate: n
                                    });
                            } else if (d) {
                                let e = l - (P.current + L);
                                null === (a = w.current) ||
                                    void 0 === a ||
                                    a.scrollTo({
                                        to: P.current + e + i,
                                        animate: n
                                    });
                            }
                        });
                },
                scrollToSectionTop: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: i = 0 } = t,
                        r = F.current[e];
                    null != r &&
                        window.requestAnimationFrame(() => {
                            var t;
                            null === (t = w.current) ||
                                void 0 === t ||
                                t.scrollTo({
                                    to: (0 === e ? 0 : r.offset.top) + i,
                                    animate: n
                                });
                        });
                },
                getListDimensions: () => ({
                    height: L,
                    totalHeight: j
                }),
                getSectionDescriptors: () => F.current,
                getRowDescriptors: () => V.current,
                getScrollerNode: () => {
                    var e;
                    return null === (e = w.current) || void 0 === e ? void 0 : e.getScrollerNode();
                },
                scrollIntoViewNode: (e) => {
                    var t;
                    return null === (t = w.current) || void 0 === t ? void 0 : t.scrollIntoViewNode({ node: e });
                }
            }),
            [G, b, j, L]
        );
        let { visibleItems: z, listOffset: q } = r.useMemo(() => {
                if (-1 === L || -1 === O)
                    return {
                        visibleItems: null,
                        listOffset: 0
                    };
                let e = O,
                    t = O + L,
                    n = 0,
                    i = c[0],
                    r = [],
                    a = k();
                null != h && e < a ? r.push(h()) : (i += a);
                for (let a = 0; a < Y.length; a++) {
                    let {
                            firstRowIndex: s,
                            offset: { top: o, bottom: l }
                        } = Y[a],
                        u = l - o;
                    if (0 === u) continue;
                    let c = G(a),
                        h = B(a),
                        m = Z(a);
                    if (l <= e) i = l;
                    else if (l > e && o < t) {
                        n = s;
                        let l = [],
                            g = 0,
                            E = 0,
                            v = o,
                            y = v + c >= e && v <= t;
                        for (null != _ && (b || y) && l.push(_(a)), y || b || (i += c); g + c + h < u - m; ) {
                            let r = U(a, E, n),
                                s = o + g + c,
                                u = s + r;
                            if (u <= e) i = u - (b ? c : 0);
                            else if (u > e && s < t)
                                l.push(
                                    d(n, {
                                        sectionIndex: a,
                                        sectionRowIndex: E
                                    })
                                );
                            else break;
                            (g += r), E++, n++;
                        }
                        let I = o + c + g,
                            T = I + h >= e && I <= t;
                        null != p && T && l.push(p(a)), null != f ? r.push(f(a, l)) : (r = [...r, ...l]);
                    } else break;
                }
                return {
                    visibleItems: r,
                    listOffset: i
                };
            }, [U, B, G, Z, c, d, f, p, _, O, Y, b, h, k, L]),
            Q = r.useMemo(() => {
                var e, t, n;
                return {
                    top: q,
                    right: null !== (e = null == c ? void 0 : c[1]) && void 0 !== e ? e : 0,
                    bottom: null !== (t = null == c ? void 0 : c[2]) && void 0 !== t ? t : 0,
                    left: null !== (n = null == c ? void 0 : c[3]) && void 0 !== n ? n : 0
                };
            }, [q, c]),
            X = r.useMemo(() => ({ height: j }), [j]),
            J = A ? o.xV : o.h2;
        return (0, i.jsxs)(J, {
            fade: N,
            className: s()(u.scroller, S),
            ref: w,
            onScroll: K,
            children: [
                (0, i.jsx)('div', {
                    role: R,
                    className: u.listItems,
                    style: Q,
                    children: z
                }),
                (0, i.jsx)('div', {
                    className: u.listHeight,
                    style: X
                })
            ]
        });
    })
);
