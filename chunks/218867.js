var i = r(47120);
var a = r(653041);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(147479),
    d = r(493773),
    f = r(528460);
let _ = o.memo(
    o.forwardRef((e, n) => {
        let { onScroll: r, onResize: i, listPadding: a = [0, 0, 0, 0], renderRow: l, renderSection: _, renderSectionHeader: h, renderSectionFooter: p, renderListHeader: m, rowCount: g, rowCountBySection: E, rowHeight: v, sectionMarginBottom: I, sectionHeaderHeight: T, sectionFooterHeight: b, listHeaderHeight: y, stickyHeaders: S = !1, className: A, hideScrollbar: N = !1, fade: C = !1, initialScrollTop: R = 0, role: O = 'list' } = e,
            [D, L] = o.useState(-1),
            [x, w] = o.useState(-1),
            P = o.useRef(null),
            M = o.useRef(0),
            k = o.useRef(-1);
        (0, d.N)(() => {
            var e;
            let n = null === (e = P.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != n && (n.scrollTop = R);
        });
        let U = o.useCallback(() => {
                let e = 'function' == typeof y ? y() : y;
                return null == e ? 0 : e;
            }, [y]),
            B = o.useCallback(
                (e, n, r) =>
                    'function' == typeof v
                        ? v(r, {
                              sectionIndex: e,
                              sectionRowIndex: n
                          })
                        : v,
                [v]
            ),
            G = o.useCallback(
                (e) => {
                    let n = 'function' == typeof T ? T(e) : T;
                    return null == n ? 0 : n;
                },
                [T]
            ),
            Z = o.useCallback(
                (e) => {
                    let n = 'function' == typeof b ? b(e) : b;
                    return null == n ? 0 : n;
                },
                [b]
            ),
            F = o.useCallback(
                (e) => {
                    let n = 'function' == typeof I ? I(e) : I;
                    return null == n ? 0 : n;
                },
                [I]
            ),
            V = o.useRef([]),
            j = o.useRef([]),
            {
                totalHeight: H,
                rowDescriptors: Y,
                sectionDescriptors: W
            } = o.useMemo(() => {
                let e = 0,
                    n = null != E,
                    r = n ? E.length : 1,
                    i = a[0],
                    s = [],
                    o = [];
                i += U();
                for (let a = 0; a < r; a++) {
                    let r = n ? E[a] : g,
                        l = (null == E ? void 0 : E[a]) !== 0;
                    (o[a] = {
                        firstRowIndex: e,
                        offset: {
                            top: i,
                            bottom: -1
                        }
                    }),
                        (i += G(a));
                    for (let n = 0; n < r; n++) {
                        let r = i + (l ? B(a, n, e) : 0),
                            o = {
                                top: i,
                                bottom: r
                            };
                        (s[e] = {
                            sectionIndex: a,
                            offset: o
                        }),
                            (i = r),
                            e++;
                    }
                    (i += Z(a) + F(a)), (o[a].offset.bottom = i);
                }
                return {
                    totalHeight: (i += a[2]),
                    rowDescriptors: s,
                    sectionDescriptors: o
                };
            }, [B, Z, G, F, a, g, E, U]);
        (V.current = W), (j.current = Y);
        let K = o.useCallback(() => {
            var e;
            let n = null === (e = P.current) || void 0 === e ? void 0 : e.getScrollerNode();
            if (null == n) return;
            let { offsetWidth: r, offsetHeight: a, scrollTop: s } = n;
            w(a),
                L(s),
                null == i ||
                    i({
                        width: r,
                        height: a
                    });
        }, [i]);
        o.useLayoutEffect(() => {
            -1 === x && K();
        }, [x, K]),
            o.useEffect(() => {
                var e;
                let n = null === (e = P.current) || void 0 === e ? void 0 : e.getScrollerNode(),
                    r = null == n ? void 0 : n.ownerDocument.defaultView;
                if (null == n || null == r) return;
                let i = new r.ResizeObserver(K);
                return i.observe(n), () => i.disconnect();
            }, [K]);
        let z = o.useCallback(() => {
            var e;
            let n = null === (e = P.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != n &&
                (window.cancelAnimationFrame(k.current),
                (k.current = window.requestAnimationFrame(() => {
                    let { scrollTop: e } = n;
                    (M.current = e), null == r || r(e), L(e);
                })));
        }, [r]);
        o.useImperativeHandle(
            n,
            () => ({
                scrollTo: function (e) {
                    var n;
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: i = !1 } = r;
                    null === (n = P.current) ||
                        void 0 === n ||
                        n.scrollTo({
                            to: e,
                            animate: i
                        });
                },
                scrollRowIntoView: function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: r = !1, offset: i = 0 } = n,
                        a = j.current[e];
                    null != a &&
                        window.requestAnimationFrame(() => {
                            var n, s;
                            let {
                                    sectionIndex: o,
                                    offset: { top: l, bottom: u }
                                } = a,
                                c = G(o),
                                d = l - (S ? c : 0) - i <= M.current,
                                f = u + i >= M.current + x;
                            if (d) {
                                let a = M.current + c - l,
                                    s = S ? M.current - a : l;
                                null === (n = P.current) ||
                                    void 0 === n ||
                                    n.scrollTo({
                                        to: 0 === e ? 0 : s - i,
                                        animate: r
                                    });
                            } else if (f) {
                                let e = u - (M.current + x);
                                null === (s = P.current) ||
                                    void 0 === s ||
                                    s.scrollTo({
                                        to: M.current + e + i,
                                        animate: r
                                    });
                            }
                        });
                },
                scrollToSectionTop: function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: r = !1, offset: i = 0 } = n,
                        a = V.current[e];
                    null != a &&
                        window.requestAnimationFrame(() => {
                            var n;
                            null === (n = P.current) ||
                                void 0 === n ||
                                n.scrollTo({
                                    to: (0 === e ? 0 : a.offset.top) + i,
                                    animate: r
                                });
                        });
                },
                getListDimensions: () => ({
                    height: x,
                    totalHeight: H
                }),
                getSectionDescriptors: () => V.current,
                getRowDescriptors: () => j.current,
                getScrollerNode: () => {
                    var e;
                    return null === (e = P.current) || void 0 === e ? void 0 : e.getScrollerNode();
                },
                scrollIntoViewNode: (e) => {
                    var n;
                    return null === (n = P.current) || void 0 === n ? void 0 : n.scrollIntoViewNode({ node: e });
                }
            }),
            [G, S, H, x]
        );
        let { visibleItems: q, listOffset: Q } = o.useMemo(() => {
                if (-1 === x || -1 === D)
                    return {
                        visibleItems: null,
                        listOffset: 0
                    };
                let e = D,
                    n = D + x,
                    r = 0,
                    i = a[0],
                    s = [],
                    o = U();
                null != m && e < o ? s.push(m()) : (i += o);
                for (let a = 0; a < W.length; a++) {
                    let {
                            firstRowIndex: o,
                            offset: { top: u, bottom: c }
                        } = W[a],
                        d = c - u;
                    if (0 === d) continue;
                    let f = G(a),
                        m = Z(a),
                        g = F(a);
                    if (c <= e) i = c;
                    else if (c > e && u < n) {
                        r = o;
                        let c = [],
                            E = 0,
                            v = 0,
                            I = u,
                            T = I + f >= e && I <= n;
                        for (null != h && (S || T) && c.push(h(a)), !T && !S && (i += f); E + f + m < d - g; ) {
                            let s = B(a, v, r),
                                o = u + E + f,
                                d = o + s;
                            if (d <= e) i = d - (S ? f : 0);
                            else if (d > e && o < n)
                                c.push(
                                    l(r, {
                                        sectionIndex: a,
                                        sectionRowIndex: v
                                    })
                                );
                            else break;
                            (E += s), v++, r++;
                        }
                        let b = u + f + E,
                            y = b + m >= e && b <= n;
                        null != p && y && c.push(p(a)), null != _ ? s.push(_(a, c)) : (s = [...s, ...c]);
                    } else break;
                }
                return {
                    visibleItems: s,
                    listOffset: i
                };
            }, [B, Z, G, F, a, l, _, p, h, D, W, S, m, U, x]),
            X = o.useMemo(() => {
                var e, n, r;
                return {
                    top: Q,
                    right: null !== (e = null == a ? void 0 : a[1]) && void 0 !== e ? e : 0,
                    bottom: null !== (n = null == a ? void 0 : a[2]) && void 0 !== n ? n : 0,
                    left: null !== (r = null == a ? void 0 : a[3]) && void 0 !== r ? r : 0
                };
            }, [Q, a]),
            J = o.useMemo(() => ({ height: H }), [H]),
            $ = N ? c.xV : c.h2;
        return (0, s.jsxs)($, {
            fade: C,
            className: u()(f.scroller, A),
            ref: P,
            onScroll: z,
            children: [
                (0, s.jsx)('div', {
                    role: O,
                    className: f.listItems,
                    style: X,
                    children: q
                }),
                (0, s.jsx)('div', {
                    className: f.listHeight,
                    style: J
                })
            ]
        });
    })
);
n.Z = _;
