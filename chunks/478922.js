r.d(n, {
    z: function () {
        return _;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(663507),
    c = r(84735),
    d = r(562701),
    f = r(448304);
function _(e, n, r) {
    let i = (0, d.G6)(e),
        o = new Map(),
        _ = new r((e) => {
            e.forEach((e) => {
                var n;
                let { target: r } = e;
                null === (n = o.get(r)) || void 0 === n || n(e);
            });
        });
    return (0, s.forwardRef)(function (r, h) {
        var p;
        let { onScroll: m, dir: g = 'ltr', sections: E, columns: v, getItemKey: I, getItemHeight: T, getSectionHeight: b, chunkSize: y, renderSection: S, renderItem: A, getSectionProps: N, itemGutter: C, removeEdgeItemGutters: R, sectionGutter: O, padding: D, paddingVertical: L, paddingHorizontal: x, fade: w = !1, className: P, style: M, maxContentWidth: k, renderAccessory: U, onItemVisibilityChange: B, ...G } = r,
            Z = s.useRef(null),
            F = s.useRef(null),
            V = s.useRef({}),
            [j, H] = s.useState(!1),
            { scrollerRef: Y, scrollerState: W, getScrollerState: K } = (0, d.T4)();
        (0, d.tT)({
            scrollerRef: Y,
            className: P,
            specs: i,
            orientation: 'vertical',
            dir: g
        });
        let {
            forceUpdateOnChunkChange: z,
            coordsMap: q,
            gridData: Q,
            visibleSections: X,
            totalHeight: J,
            forceUpdate: $,
            masonryComputer: ee
        } = (0, d.QB)({
            sections: E,
            columns: v,
            getItemKey: I,
            getItemHeight: T,
            getSectionHeight: b,
            chunkSize: y,
            itemGutter: C,
            removeEdgeItemGutters: R,
            sectionGutter: O,
            padding: D,
            paddingVertical: L,
            paddingHorizontal: x,
            getScrollerState: K,
            dir: g,
            maxBufferWidth: k
        });
        s.useEffect(() => {
            null != B && (0, u.ZI)(X, V.current, B), (V.current = X);
        }, [X, B]);
        let et = (0, s.useCallback)(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > W.current.dirty && (W.current.dirty = e), 2 === e ? $() : z(1);
                },
                [z, W, $]
            ),
            en = (0, d.t2)(Y),
            er = (0, s.useCallback)(() => ee.itemGrid, [ee]),
            ei = (0, s.useCallback)(() => ee.coordsMap, [ee]),
            ea = s.useCallback(() => et(), [et]);
        (0, d.zn)({
            ref: Y,
            key: 'container',
            onUpdate: ea,
            resizeObserver: _,
            listenerMap: o
        }),
            (0, s.useImperativeHandle)(
                h,
                () => ({
                    getScrollerNode: () => Y.current,
                    getItemGrid: er,
                    getCoordsMap: ei,
                    getScrollerState: K,
                    ...(0, d.Ue)(Y, K, en)
                }),
                [Y, K, er, en, ei]
            );
        let es = (0, s.useCallback)(
            (e) => {
                et(1),
                    null == Z.current ? H(!0) : clearTimeout(Z.current),
                    (Z.current = setTimeout(() => {
                        (Z.current = null), H(!1);
                    }, 200)),
                    null != m && m(e);
            },
            [m, et]
        );
        return (
            s.useLayoutEffect(() => {
                2 !== W.current.dirty && (W.current.dirty = 2);
            }, [J, W]),
            (0, a.jsxs)('div', {
                ref: Y,
                onScroll: es,
                className: l()(P, {
                    [e]: !0,
                    [n]: w,
                    [f.scrolling]: j
                }),
                style: (0, d.uT)(M),
                ...G,
                children: [
                    null !== (p = null == U ? void 0 : U(J)) && void 0 !== p ? p : null,
                    (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(c.J, {
                                containerRef: F,
                                children: (0, a.jsx)('div', {
                                    style: { height: J },
                                    className: f.content,
                                    ref: F,
                                    children: Object.keys(X).map((e) => {
                                        var n;
                                        let r = (0, d.t$)(e),
                                            i = q[e],
                                            s = X[e],
                                            o = q[(0, d.DP)(r)],
                                            l = null == N ? void 0 : N(r);
                                        return null != i && null != s
                                            ? (0, a.jsxs)(
                                                  'div',
                                                  {
                                                      ...l,
                                                      style: {
                                                          ...i,
                                                          ...(null !== (n = null == l ? void 0 : l.style) && void 0 !== n ? n : {})
                                                      },
                                                      children: [
                                                          null != S && null != o && S(r, o, e),
                                                          s.map((e) => {
                                                              let [n, r, i] = e,
                                                                  a = q[n];
                                                              return null != a ? A(r, i, a, n, Q) : null;
                                                          })
                                                      ]
                                                  },
                                                  e
                                              )
                                            : null;
                                    })
                                })
                            }),
                        [X, A, S, q, J, N, Q]
                    )
                ]
            })
        );
    });
}
