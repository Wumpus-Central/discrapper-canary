var i = r(47120);
var a = r(653041);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(147479),
    d = r(493773),
    f = r(528460);
let p = s.memo(
    s.forwardRef((e, n) => {
        let { onScroll: r, onResize: i, listPadding: a = [0, 0, 0, 0], renderRow: l, renderSection: p, renderSectionHeader: h, renderSectionFooter: _, renderListHeader: m, rowCount: g, rowCountBySection: E, rowHeight: v, sectionMarginBottom: y, sectionHeaderHeight: b, sectionFooterHeight: I, listHeaderHeight: T, stickyHeaders: S = !1, className: A, hideScrollbar: C = !1, fade: N = !1, initialScrollTop: R = 0, role: O = 'list' } = e,
            [D, L] = s.useState(-1),
            [x, w] = s.useState(-1),
            P = s.useRef(null),
            M = s.useRef(0),
            k = s.useRef(-1);
        (0, d.N)(() => {
            var e;
            let n = null === (e = P.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != n && (n.scrollTop = R);
        });
        let U = s.useCallback(() => {
                let e = 'function' == typeof T ? T() : T;
                return null == e ? 0 : e;
            }, [T]),
            B = s.useCallback(
                (e, n, r) =>
                    'function' == typeof v
                        ? v(r, {
                              sectionIndex: e,
                              sectionRowIndex: n
                          })
                        : v,
                [v]
            ),
            G = s.useCallback(
                (e) => {
                    let n = 'function' == typeof b ? b(e) : b;
                    return null == n ? 0 : n;
                },
                [b]
            ),
            Z = s.useCallback(
                (e) => {
                    let n = 'function' == typeof I ? I(e) : I;
                    return null == n ? 0 : n;
                },
                [I]
            ),
            F = s.useCallback(
                (e) => {
                    let n = 'function' == typeof y ? y(e) : y;
                    return null == n ? 0 : n;
                },
                [y]
            ),
            V = s.useRef([]),
            j = s.useRef([]),
            {
                totalHeight: H,
                rowDescriptors: Y,
                sectionDescriptors: W
            } = s.useMemo(() => {
                let e = 0,
                    n = null != E,
                    r = n ? E.length : 1,
                    i = a[0],
                    o = [],
                    s = [];
                i += U();
                for (let a = 0; a < r; a++) {
                    let r = n ? E[a] : g,
                        l = (null == E ? void 0 : E[a]) !== 0;
                    (s[a] = {
                        firstRowIndex: e,
                        offset: {
                            top: i,
                            bottom: -1
                        }
                    }),
                        (i += G(a));
                    for (let n = 0; n < r; n++) {
                        let r = i + (l ? B(a, n, e) : 0),
                            s = {
                                top: i,
                                bottom: r
                            };
                        (o[e] = {
                            sectionIndex: a,
                            offset: s
                        }),
                            (i = r),
                            e++;
                    }
                    (i += Z(a) + F(a)), (s[a].offset.bottom = i);
                }
                return {
                    totalHeight: (i += a[2]),
                    rowDescriptors: o,
                    sectionDescriptors: s
                };
            }, [B, Z, G, F, a, g, E, U]);
        (V.current = W), (j.current = Y);
        let K = s.useCallback(() => {
            var e;
            let n = null === (e = P.current) || void 0 === e ? void 0 : e.getScrollerNode();
            if (null == n) return;
            let { offsetWidth: r, offsetHeight: a, scrollTop: o } = n;
            w(a),
                L(o),
                null == i ||
                    i({
                        width: r,
                        height: a
                    });
        }, [i]);
        s.useLayoutEffect(() => {
            -1 === x && K();
        }, [x, K]),
            s.useEffect(() => {
                var e;
                let n = null === (e = P.current) || void 0 === e ? void 0 : e.getScrollerNode(),
                    r = null == n ? void 0 : n.ownerDocument.defaultView;
                if (null == n || null == r) return;
                let i = new r.ResizeObserver(K);
                return i.observe(n), () => i.disconnect();
            }, [K]);
        let z = s.useCallback(() => {
            var e;
            let n = null === (e = P.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != n &&
                (window.cancelAnimationFrame(k.current),
                (k.current = window.requestAnimationFrame(() => {
                    let { scrollTop: e } = n;
                    (M.current = e), null == r || r(e), L(e);
                })));
        }, [r]);
        s.useImperativeHandle(
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
                            var n, o;
                            let {
                                    sectionIndex: s,
                                    offset: { top: l, bottom: u }
                                } = a,
                                c = G(s),
                                d = l - (S ? c : 0) - i <= M.current,
                                f = u + i >= M.current + x;
                            if (d) {
                                let a = M.current + c - l,
                                    o = S ? M.current - a : l;
                                null === (n = P.current) ||
                                    void 0 === n ||
                                    n.scrollTo({
                                        to: 0 === e ? 0 : o - i,
                                        animate: r
                                    });
                            } else if (f) {
                                let e = u - (M.current + x);
                                null === (o = P.current) ||
                                    void 0 === o ||
                                    o.scrollTo({
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
        let { visibleItems: q, listOffset: Q } = s.useMemo(() => {
                if (-1 === x || -1 === D)
                    return {
                        visibleItems: null,
                        listOffset: 0
                    };
                let e = D,
                    n = D + x,
                    r = 0,
                    i = a[0],
                    o = [],
                    s = U();
                null != m && e < s ? o.push(m()) : (i += s);
                for (let a = 0; a < W.length; a++) {
                    let {
                            firstRowIndex: s,
                            offset: { top: u, bottom: c }
                        } = W[a],
                        d = c - u;
                    if (0 === d) continue;
                    let f = G(a),
                        m = Z(a),
                        g = F(a);
                    if (c <= e) i = c;
                    else if (c > e && u < n) {
                        r = s;
                        let c = [],
                            E = 0,
                            v = 0,
                            y = u,
                            b = y + f >= e && y <= n;
                        for (null != h && (S || b) && c.push(h(a)), !b && !S && (i += f); E + f + m < d - g; ) {
                            let o = B(a, v, r),
                                s = u + E + f,
                                d = s + o;
                            if (d <= e) i = d - (S ? f : 0);
                            else if (d > e && s < n)
                                c.push(
                                    l(r, {
                                        sectionIndex: a,
                                        sectionRowIndex: v
                                    })
                                );
                            else break;
                            (E += o), v++, r++;
                        }
                        let I = u + f + E,
                            T = I + m >= e && I <= n;
                        null != _ && T && c.push(_(a)), null != p ? o.push(p(a, c)) : (o = [...o, ...c]);
                    } else break;
                }
                return {
                    visibleItems: o,
                    listOffset: i
                };
            }, [B, Z, G, F, a, l, p, _, h, D, W, S, m, U, x]),
            X = s.useMemo(() => {
                var e, n, r;
                return {
                    top: Q,
                    right: null !== (e = null == a ? void 0 : a[1]) && void 0 !== e ? e : 0,
                    bottom: null !== (n = null == a ? void 0 : a[2]) && void 0 !== n ? n : 0,
                    left: null !== (r = null == a ? void 0 : a[3]) && void 0 !== r ? r : 0
                };
            }, [Q, a]),
            J = s.useMemo(() => ({ height: H }), [H]),
            $ = C ? c.xV : c.h2;
        return (0, o.jsxs)($, {
            fade: N,
            className: u()(f.scroller, A),
            ref: P,
            onScroll: z,
            children: [
                (0, o.jsx)('div', {
                    role: O,
                    className: f.listItems,
                    style: X,
                    children: q
                }),
                (0, o.jsx)('div', {
                    className: f.listHeight,
                    style: J
                })
            ]
        });
    })
);
n.Z = p;
