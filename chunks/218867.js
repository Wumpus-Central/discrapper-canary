n.d(t, { Z: () => u }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(147479),
    l = n(493773),
    c = n(709626);
let u = i.memo(
    i.forwardRef((e, t) => {
        let { onScroll: n, onResize: o, listPadding: u = [0, 0, 0, 0], renderRow: d, renderSection: f, renderSectionHeader: p, renderSectionFooter: _, renderListHeader: h, rowCount: m, rowCountBySection: g, rowHeight: E, sectionMarginBottom: v, sectionHeaderHeight: b, sectionFooterHeight: y, listHeaderHeight: O, stickyHeaders: S = !1, className: I, hideScrollbar: T = !1, fade: N = !1, initialScrollTop: A = 0, role: C = 'list' } = e,
            [R, P] = i.useState(-1),
            [w, D] = i.useState(-1),
            x = i.useRef(null),
            L = i.useRef(0),
            M = i.useRef(-1);
        (0, l.Ng)(() => {
            var e;
            let t = null === (e = x.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != t && (t.scrollTop = A);
        });
        let k = i.useCallback(() => {
                let e = 'function' == typeof O ? O() : O;
                return null == e ? 0 : e;
            }, [O]),
            j = i.useCallback(
                (e, t, n) =>
                    'function' == typeof E
                        ? E(n, {
                              sectionIndex: e,
                              sectionRowIndex: t
                          })
                        : E,
                [E]
            ),
            U = i.useCallback(
                (e) => {
                    let t = 'function' == typeof b ? b(e) : b;
                    return null == t ? 0 : t;
                },
                [b]
            ),
            G = i.useCallback(
                (e) => {
                    let t = 'function' == typeof y ? y(e) : y;
                    return null == t ? 0 : t;
                },
                [y]
            ),
            B = i.useCallback(
                (e) => {
                    let t = 'function' == typeof v ? v(e) : v;
                    return null == t ? 0 : t;
                },
                [v]
            ),
            Z = i.useRef([]),
            F = i.useRef([]),
            {
                totalHeight: V,
                rowDescriptors: H,
                sectionDescriptors: W
            } = i.useMemo(() => {
                let e = 0,
                    t = null != g,
                    n = t ? g.length : 1,
                    r = u[0],
                    i = [],
                    o = [];
                r += k();
                for (let a = 0; a < n; a++) {
                    let n = t ? g[a] : m,
                        s = (null == g ? void 0 : g[a]) !== 0;
                    (o[a] = {
                        firstRowIndex: e,
                        offset: {
                            top: r,
                            bottom: -1
                        }
                    }),
                        (r += U(a));
                    for (let t = 0; t < n; t++) {
                        let n = r + (s ? j(a, t, e) : 0),
                            o = {
                                top: r,
                                bottom: n
                            };
                        (i[e] = {
                            sectionIndex: a,
                            offset: o
                        }),
                            (r = n),
                            e++;
                    }
                    (r += G(a) + B(a)), (o[a].offset.bottom = r);
                }
                return {
                    totalHeight: (r += u[2]),
                    rowDescriptors: i,
                    sectionDescriptors: o
                };
            }, [j, G, U, B, u, m, g, k]);
        (Z.current = W), (F.current = H);
        let Y = i.useCallback(() => {
            var e;
            let t = null === (e = x.current) || void 0 === e ? void 0 : e.getScrollerNode();
            if (null == t) return;
            let { offsetWidth: n, offsetHeight: r, scrollTop: i } = t;
            D(r),
                P(i),
                null == o ||
                    o({
                        width: n,
                        height: r
                    });
        }, [o]);
        i.useLayoutEffect(() => {
            -1 === w && Y();
        }, [w, Y]),
            i.useEffect(() => {
                var e;
                let t = null === (e = x.current) || void 0 === e ? void 0 : e.getScrollerNode(),
                    n = null == t ? void 0 : t.ownerDocument.defaultView;
                if (null == t || null == n) return;
                let r = new n.ResizeObserver(Y);
                return r.observe(t), () => r.disconnect();
            }, [Y]);
        let K = i.useCallback(() => {
            var e;
            let t = null === (e = x.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != t &&
                (window.cancelAnimationFrame(M.current),
                (M.current = window.requestAnimationFrame(() => {
                    let { scrollTop: e } = t;
                    (L.current = e), null == n || n(e), P(e);
                })));
        }, [n]);
        i.useImperativeHandle(
            t,
            () => ({
                scrollTo: function (e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: r = !1 } = n;
                    null === (t = x.current) ||
                        void 0 === t ||
                        t.scrollTo({
                            to: e,
                            animate: r
                        });
                },
                scrollRowIntoView: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: r = 0 } = t,
                        i = F.current[e];
                    null != i &&
                        window.requestAnimationFrame(() => {
                            var t, o;
                            let {
                                    sectionIndex: a,
                                    offset: { top: s, bottom: l }
                                } = i,
                                c = U(a),
                                u = s - (S ? c : 0) - r <= L.current,
                                d = l + r >= L.current + w;
                            if (u) {
                                let i = L.current + c - s,
                                    o = S ? L.current - i : s;
                                null === (t = x.current) ||
                                    void 0 === t ||
                                    t.scrollTo({
                                        to: 0 === e ? 0 : o - r,
                                        animate: n
                                    });
                            } else if (d) {
                                let e = l - (L.current + w);
                                null === (o = x.current) ||
                                    void 0 === o ||
                                    o.scrollTo({
                                        to: L.current + e + r,
                                        animate: n
                                    });
                            }
                        });
                },
                scrollToSectionTop: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: r = 0 } = t,
                        i = Z.current[e];
                    null != i &&
                        window.requestAnimationFrame(() => {
                            var t;
                            null === (t = x.current) ||
                                void 0 === t ||
                                t.scrollTo({
                                    to: (0 === e ? 0 : i.offset.top) + r,
                                    animate: n
                                });
                        });
                },
                getListDimensions: () => ({
                    height: w,
                    totalHeight: V
                }),
                getSectionDescriptors: () => Z.current,
                getRowDescriptors: () => F.current,
                getScrollerNode: () => {
                    var e;
                    return null === (e = x.current) || void 0 === e ? void 0 : e.getScrollerNode();
                },
                scrollIntoViewNode: (e) => {
                    var t;
                    return null === (t = x.current) || void 0 === t ? void 0 : t.scrollIntoViewNode({ node: e });
                }
            }),
            [U, S, V, w]
        );
        let { visibleItems: z, listOffset: q } = i.useMemo(() => {
                if (-1 === w || -1 === R)
                    return {
                        visibleItems: null,
                        listOffset: 0
                    };
                let e = R,
                    t = R + w,
                    n = 0,
                    r = u[0],
                    i = [],
                    o = k();
                null != h && e < o ? i.push(h()) : (r += o);
                for (let o = 0; o < W.length; o++) {
                    let {
                            firstRowIndex: a,
                            offset: { top: s, bottom: l }
                        } = W[o],
                        c = l - s;
                    if (0 === c) continue;
                    let u = U(o),
                        h = G(o),
                        m = B(o);
                    if (l <= e) r = l;
                    else if (l > e && s < t) {
                        n = a;
                        let l = [],
                            g = 0,
                            E = 0,
                            v = s,
                            b = v + u >= e && v <= t;
                        for (null != p && (S || b) && l.push(p(o)), b || S || (r += u); g + u + h < c - m; ) {
                            let i = j(o, E, n),
                                a = s + g + u,
                                c = a + i;
                            if (c <= e) r = c - (S ? u : 0);
                            else if (c > e && a < t)
                                l.push(
                                    d(n, {
                                        sectionIndex: o,
                                        sectionRowIndex: E
                                    })
                                );
                            else break;
                            (g += i), E++, n++;
                        }
                        let y = s + u + g,
                            O = y + h >= e && y <= t;
                        null != _ && O && l.push(_(o)), null != f ? i.push(f(o, l)) : (i = [...i, ...l]);
                    } else break;
                }
                return {
                    visibleItems: i,
                    listOffset: r
                };
            }, [j, G, U, B, u, d, f, _, p, R, W, S, h, k, w]),
            Q = i.useMemo(() => {
                var e, t, n;
                return {
                    top: q,
                    right: null !== (e = null == u ? void 0 : u[1]) && void 0 !== e ? e : 0,
                    bottom: null !== (t = null == u ? void 0 : u[2]) && void 0 !== t ? t : 0,
                    left: null !== (n = null == u ? void 0 : u[3]) && void 0 !== n ? n : 0
                };
            }, [q, u]),
            X = i.useMemo(() => ({ height: V }), [V]),
            J = T ? s.xV : s.h2;
        return (0, r.jsxs)(J, {
            fade: N,
            className: a()(c.scroller, I),
            ref: x,
            onScroll: K,
            children: [
                (0, r.jsx)('div', {
                    role: C,
                    className: c.listItems,
                    style: Q,
                    children: z
                }),
                (0, r.jsx)('div', {
                    className: c.listHeight,
                    style: X
                })
            ]
        });
    })
);
