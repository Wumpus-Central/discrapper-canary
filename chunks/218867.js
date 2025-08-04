(n.d(t, { Z: () => d }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(147479),
    l = n(493773),
    c = n(676546);
function u(e) {
    var t, n;
    let r = null == (t = e.current) ? void 0 : t.getScrollerNode();
    return null != (n = null == r ? void 0 : r.ownerDocument.defaultView) ? n : window;
}
let d = i.memo(
    i.forwardRef((e, t) => {
        let { onScroll: n, onResize: a, listPadding: d = [0, 0, 0, 0], renderRow: f, renderSection: _, renderSectionHeader: p, renderSectionFooter: h, renderListHeader: m, rowCount: g, rowCountBySection: E, rowHeight: b, sectionMarginBottom: y, sectionHeaderHeight: O, sectionFooterHeight: v, listHeaderHeight: I, stickyHeaders: T = !1, className: S, hideScrollbar: A = !1, fade: N = !1, initialScrollTop: C = 0, role: R = 'list' } = e,
            [P, w] = i.useState(-1),
            [D, L] = i.useState(-1),
            x = i.useRef(null),
            k = i.useRef(0),
            M = i.useRef(-1);
        (0, l.Ng)(() => {
            var e;
            let t = null == (e = x.current) ? void 0 : e.getScrollerNode();
            null != t && (t.scrollTop = C);
        });
        let j = i.useCallback(() => {
                let e = 'function' == typeof I ? I() : I;
                return null == e ? 0 : e;
            }, [I]),
            U = i.useCallback(
                (e, t, n) =>
                    'function' == typeof b
                        ? b(n, {
                              sectionIndex: e,
                              sectionRowIndex: t
                          })
                        : b,
                [b]
            ),
            G = i.useCallback(
                (e) => {
                    let t = 'function' == typeof O ? O(e) : O;
                    return null == t ? 0 : t;
                },
                [O]
            ),
            B = i.useCallback(
                (e) => {
                    let t = 'function' == typeof v ? v(e) : v;
                    return null == t ? 0 : t;
                },
                [v]
            ),
            V = i.useCallback(
                (e) => {
                    let t = 'function' == typeof y ? y(e) : y;
                    return null == t ? 0 : t;
                },
                [y]
            ),
            F = i.useRef([]),
            Z = i.useRef([]),
            {
                totalHeight: H,
                rowDescriptors: Y,
                sectionDescriptors: W
            } = i.useMemo(() => {
                let e = 0,
                    t = null != E,
                    n = t ? E.length : 1,
                    r = d[0],
                    i = [],
                    a = [];
                r += j();
                for (let o = 0; o < n; o++) {
                    let n = t ? E[o] : g,
                        s = (null == E ? void 0 : E[o]) !== 0;
                    ((a[o] = {
                        firstRowIndex: e,
                        offset: {
                            top: r,
                            bottom: -1
                        }
                    }),
                        (r += G(o)));
                    for (let t = 0; t < n; t++) {
                        let n = r + (s ? U(o, t, e) : 0),
                            a = {
                                top: r,
                                bottom: n
                            };
                        ((i[e] = {
                            sectionIndex: o,
                            offset: a
                        }),
                            (r = n),
                            e++);
                    }
                    ((r += B(o) + V(o)), (a[o].offset.bottom = r));
                }
                return {
                    totalHeight: (r += d[2]),
                    rowDescriptors: i,
                    sectionDescriptors: a
                };
            }, [U, B, G, V, d, g, E, j]);
        ((F.current = W), (Z.current = Y));
        let K = i.useCallback(() => {
            var e;
            let t = null == (e = x.current) ? void 0 : e.getScrollerNode();
            if (null == t) return;
            let { offsetWidth: n, offsetHeight: r, scrollTop: i } = t;
            (L(r),
                w(i),
                null == a ||
                    a({
                        width: n,
                        height: r
                    }));
        }, [a]);
        (i.useLayoutEffect(() => {
            -1 === D && K();
        }, [D, K]),
            i.useEffect(() => {
                var e;
                let t = null == (e = x.current) ? void 0 : e.getScrollerNode(),
                    n = u(x);
                if (null == t || null == n) return;
                let r = new n.ResizeObserver(K);
                return (r.observe(t), () => r.disconnect());
            }, [K]));
        let z = i.useCallback(() => {
            var e;
            let t = null == (e = x.current) ? void 0 : e.getScrollerNode(),
                r = u(x);
            null != t &&
                null != r &&
                (r.cancelAnimationFrame(M.current),
                (M.current = r.requestAnimationFrame(() => {
                    let { scrollTop: e } = t;
                    ((k.current = e), null == n || n(e), w(e));
                })));
        }, [n]);
        i.useImperativeHandle(
            t,
            () => ({
                scrollTo: function (e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: r = !1 } = n;
                    null == (t = x.current) ||
                        t.scrollTo({
                            to: e,
                            animate: r
                        });
                },
                scrollRowIntoView: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: r = 0 } = t,
                        i = Z.current[e],
                        a = u(x);
                    null != i &&
                        null != a &&
                        a.requestAnimationFrame(() => {
                            var t, a;
                            let {
                                    sectionIndex: o,
                                    offset: { top: s, bottom: l }
                                } = i,
                                c = G(o),
                                u = s - (T ? c : 0) - r <= k.current,
                                d = l + r >= k.current + D;
                            if (u) {
                                let i = k.current + c - s,
                                    a = T ? k.current - i : s;
                                null == (t = x.current) ||
                                    t.scrollTo({
                                        to: 0 === e ? 0 : a - r,
                                        animate: n
                                    });
                            } else if (d) {
                                let e = l - (k.current + D);
                                null == (a = x.current) ||
                                    a.scrollTo({
                                        to: k.current + e + r,
                                        animate: n
                                    });
                            }
                        });
                },
                scrollToSectionTop: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: r = 0 } = t,
                        i = F.current[e],
                        a = u(x);
                    null != i &&
                        null != a &&
                        a.requestAnimationFrame(() => {
                            var t;
                            null == (t = x.current) ||
                                t.scrollTo({
                                    to: (0 === e ? 0 : i.offset.top) + r,
                                    animate: n
                                });
                        });
                },
                getListDimensions: () => ({
                    height: D,
                    totalHeight: H
                }),
                getSectionDescriptors: () => F.current,
                getRowDescriptors: () => Z.current,
                getScrollerNode: () => {
                    var e;
                    return null == (e = x.current) ? void 0 : e.getScrollerNode();
                },
                scrollIntoViewNode: (e) => {
                    var t;
                    return null == (t = x.current) ? void 0 : t.scrollIntoViewNode({ node: e });
                }
            }),
            [G, T, H, D]
        );
        let { visibleItems: q, listOffset: X } = i.useMemo(() => {
                if (-1 === D || -1 === P)
                    return {
                        visibleItems: null,
                        listOffset: 0
                    };
                let e = P,
                    t = P + D,
                    n = 0,
                    r = d[0],
                    i = [],
                    a = j();
                null != m && e < a ? i.push(m()) : (r += a);
                for (let a = 0; a < W.length; a++) {
                    let {
                            firstRowIndex: o,
                            offset: { top: s, bottom: l }
                        } = W[a],
                        c = l - s;
                    if (0 === c) continue;
                    let u = G(a),
                        d = B(a),
                        m = V(a);
                    if (l <= e) r = l;
                    else if (l > e && s < t) {
                        n = o;
                        let l = [],
                            g = 0,
                            E = 0,
                            b = s,
                            y = b + u >= e && b <= t;
                        for (null != p && (T || y) && l.push(p(a)), y || T || (r += u); g + u + d < c - m; ) {
                            let i = U(a, E, n),
                                o = s + g + u,
                                c = o + i;
                            if (c <= e) r = c - (T ? u : 0);
                            else if (c > e && o < t)
                                l.push(
                                    f(n, {
                                        sectionIndex: a,
                                        sectionRowIndex: E
                                    })
                                );
                            else break;
                            ((g += i), E++, n++);
                        }
                        let O = s + u + g,
                            v = O + d >= e && O <= t;
                        (null != h && v && l.push(h(a)), null != _ ? i.push(_(a, l)) : (i = [...i, ...l]));
                    } else break;
                }
                return {
                    visibleItems: i,
                    listOffset: r
                };
            }, [U, B, G, V, d, f, _, h, p, P, W, T, m, j, D]),
            Q = i.useMemo(() => {
                var e, t, n;
                return {
                    top: X,
                    right: null != (e = null == d ? void 0 : d[1]) ? e : 0,
                    bottom: null != (t = null == d ? void 0 : d[2]) ? t : 0,
                    left: null != (n = null == d ? void 0 : d[3]) ? n : 0
                };
            }, [X, d]),
            J = i.useMemo(() => ({ height: H }), [H]),
            $ = A ? s.xV : s.h2;
        return (0, r.jsxs)($, {
            fade: N,
            className: o()(c.scroller, S),
            ref: x,
            onScroll: z,
            children: [
                (0, r.jsx)('div', {
                    role: R,
                    className: c.listItems,
                    style: Q,
                    children: q
                }),
                (0, r.jsx)('div', {
                    className: c.listHeight,
                    style: J
                })
            ]
        });
    })
);
