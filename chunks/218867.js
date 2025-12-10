n.d(t, { Z: () => d }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(493773),
    c = n(959338);
function u(e) {
    var t, n;
    let r = null == (t = e.current) ? void 0 : t.getScrollerNode();
    return null != (n = null == r ? void 0 : r.ownerDocument.defaultView) ? n : window;
}
let d = i.memo(
    i.forwardRef((e, t) => {
        let {
                onScroll: n,
                onResize: a,
                listPadding: d = [0, 0, 0, 0],
                renderRow: f,
                renderSection: p,
                renderSectionHeader: _,
                renderSectionFooter: m,
                renderListHeader: h,
                rowCount: g,
                rowCountBySection: E,
                rowHeight: b,
                sectionMarginBottom: y,
                sectionHeaderHeight: O,
                sectionFooterHeight: v,
                listHeaderHeight: S,
                stickyHeaders: I = !1,
                className: T,
                hideScrollbar: C = !1,
                fade: A = !1,
                initialScrollTop: N = 0,
                role: P = "list",
            } = e,
            [R, D] = i.useState(-1),
            [w, x] = i.useState(-1),
            L = i.useRef(null),
            j = i.useRef(0),
            M = i.useRef(-1);
        (0, l.Ng)(() => {
            var e;
            let t = null == (e = L.current) ? void 0 : e.getScrollerNode();
            null != t && (t.scrollTop = N);
        });
        let k = i.useCallback(() => {
                let e = "function" == typeof S ? S() : S;
                return null == e ? 0 : e;
            }, [S]),
            U = i.useCallback(
                (e, t, n) =>
                    "function" == typeof b
                        ? b(n, {
                              sectionIndex: e,
                              sectionRowIndex: t,
                          })
                        : b,
                [b],
            ),
            G = i.useCallback(
                (e) => {
                    let t = "function" == typeof O ? O(e) : O;
                    return null == t ? 0 : t;
                },
                [O],
            ),
            Z = i.useCallback(
                (e) => {
                    let t = "function" == typeof v ? v(e) : v;
                    return null == t ? 0 : t;
                },
                [v],
            ),
            B = i.useCallback(
                (e) => {
                    let t = "function" == typeof y ? y(e) : y;
                    return null == t ? 0 : t;
                },
                [y],
            ),
            F = i.useRef([]),
            V = i.useRef([]),
            {
                totalHeight: H,
                rowDescriptors: Y,
                sectionDescriptors: W,
            } = i.useMemo(() => {
                let e = 0,
                    t = null != E,
                    n = t ? E.length : 1,
                    r = d[0],
                    i = [],
                    a = [];
                r += k();
                for (let o = 0; o < n; o++) {
                    let n = t ? E[o] : g,
                        s = (null == E ? void 0 : E[o]) !== 0;
                    (a[o] = {
                        firstRowIndex: e,
                        offset: {
                            top: r,
                            bottom: -1,
                        },
                    }),
                        (r += G(o));
                    for (let t = 0; t < n; t++) {
                        let n = r + (s ? U(o, t, e) : 0),
                            a = {
                                top: r,
                                bottom: n,
                            };
                        (i[e] = {
                            sectionIndex: o,
                            offset: a,
                        }),
                            (r = n),
                            e++;
                    }
                    (r += Z(o) + B(o)), (a[o].offset.bottom = r);
                }
                return {
                    totalHeight: (r += d[2]),
                    rowDescriptors: i,
                    sectionDescriptors: a,
                };
            }, [U, Z, G, B, d, g, E, k]);
        (F.current = W), (V.current = Y);
        let K = i.useCallback(() => {
            var e;
            let t = null == (e = L.current) ? void 0 : e.getScrollerNode();
            if (null == t) return;
            let { offsetWidth: n, offsetHeight: r, scrollTop: i } = t;
            x(r),
                D(i),
                null == a ||
                    a({
                        width: n,
                        height: r,
                    });
        }, [a]);
        i.useLayoutEffect(() => {
            -1 === w && K();
        }, [w, K]),
            i.useEffect(() => {
                var e;
                let t = null == (e = L.current) ? void 0 : e.getScrollerNode(),
                    n = u(L);
                if (null == t || null == n) return;
                let r = new n.ResizeObserver(K);
                return r.observe(t), () => r.disconnect();
            }, [K]);
        let z = i.useCallback(() => {
            var e;
            let t = null == (e = L.current) ? void 0 : e.getScrollerNode(),
                r = u(L);
            null != t &&
                null != r &&
                (r.cancelAnimationFrame(M.current),
                (M.current = r.requestAnimationFrame(() => {
                    let { scrollTop: e } = t;
                    (j.current = e), null == n || n(e), D(e);
                })));
        }, [n]);
        i.useImperativeHandle(
            t,
            () => ({
                scrollTo: function (e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: r = !1 } = n;
                    null == (t = L.current) ||
                        t.scrollTo({
                            to: e,
                            animate: r,
                        });
                },
                scrollRowIntoView: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: r = 0 } = t,
                        i = V.current[e],
                        a = u(L);
                    null != i &&
                        null != a &&
                        a.requestAnimationFrame(() => {
                            var t, a;
                            let {
                                    sectionIndex: o,
                                    offset: { top: s, bottom: l },
                                } = i,
                                c = G(o),
                                u = s - (I ? c : 0) - r <= j.current,
                                d = l + r >= j.current + w;
                            if (u) {
                                let i = j.current + c - s,
                                    a = I ? j.current - i : s;
                                null == (t = L.current) ||
                                    t.scrollTo({
                                        to: 0 === e ? 0 : a - r,
                                        animate: n,
                                    });
                            } else if (d) {
                                let e = l - (j.current + w);
                                null == (a = L.current) ||
                                    a.scrollTo({
                                        to: j.current + e + r,
                                        animate: n,
                                    });
                            }
                        });
                },
                scrollToSectionTop: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: r = 0 } = t,
                        i = F.current[e],
                        a = u(L);
                    null != i &&
                        null != a &&
                        a.requestAnimationFrame(() => {
                            var t;
                            null == (t = L.current) ||
                                t.scrollTo({
                                    to: (0 === e ? 0 : i.offset.top) + r,
                                    animate: n,
                                });
                        });
                },
                getListDimensions: () => ({
                    height: w,
                    totalHeight: H,
                }),
                getSectionDescriptors: () => F.current,
                getRowDescriptors: () => V.current,
                getScrollerNode: () => {
                    var e;
                    return null == (e = L.current) ? void 0 : e.getScrollerNode();
                },
                scrollIntoViewNode: (e) => {
                    var t;
                    return null == (t = L.current) ? void 0 : t.scrollIntoViewNode({ node: e });
                },
            }),
            [G, I, H, w],
        );
        let { visibleItems: q, listOffset: Q } = i.useMemo(() => {
                if (-1 === w || -1 === R)
                    return {
                        visibleItems: null,
                        listOffset: 0,
                    };
                let e = R,
                    t = R + w,
                    n = 0,
                    r = d[0],
                    i = [],
                    a = k();
                null != h && e < a ? i.push(h()) : (r += a);
                for (let a = 0; a < W.length; a++) {
                    let {
                            firstRowIndex: o,
                            offset: { top: s, bottom: l },
                        } = W[a],
                        c = l - s;
                    if (0 === c) continue;
                    let u = G(a),
                        d = Z(a),
                        h = B(a);
                    if (l <= e) r = l;
                    else if (l > e && s < t) {
                        n = o;
                        let l = [],
                            g = 0,
                            E = 0,
                            b = s,
                            y = b + u >= e && b <= t;
                        for (null != _ && (I || y) && l.push(_(a)), y || I || (r += u); g + u + d < c - h; ) {
                            let i = U(a, E, n),
                                o = s + g + u,
                                c = o + i;
                            if (c <= e) r = c - (I ? u : 0);
                            else if (c > e && o < t)
                                l.push(
                                    f(n, {
                                        sectionIndex: a,
                                        sectionRowIndex: E,
                                    }),
                                );
                            else break;
                            (g += i), E++, n++;
                        }
                        let O = s + u + g,
                            v = O + d >= e && O <= t;
                        null != m && v && l.push(m(a)), null != p ? i.push(p(a, l)) : (i = [...i, ...l]);
                    } else break;
                }
                return {
                    visibleItems: i,
                    listOffset: r,
                };
            }, [U, Z, G, B, d, f, p, m, _, R, W, I, h, k, w]),
            X = i.useMemo(() => {
                var e, t, n;
                return {
                    top: Q,
                    right: null != (e = null == d ? void 0 : d[1]) ? e : 0,
                    bottom: null != (t = null == d ? void 0 : d[2]) ? t : 0,
                    left: null != (n = null == d ? void 0 : d[3]) ? n : 0,
                };
            }, [Q, d]),
            J = i.useMemo(() => ({ height: H }), [H]),
            $ = C ? s.xVE : s.h21;
        return (0, r.jsxs)($, {
            fade: A,
            className: o()(c.scroller, T),
            ref: L,
            onScroll: z,
            children: [
                (0, r.jsx)("div", {
                    role: P,
                    className: c.listItems,
                    style: X,
                    children: q,
                }),
                (0, r.jsx)("div", {
                    className: c.listHeight,
                    style: J,
                }),
            ],
        });
    }),
);
