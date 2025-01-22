r.d(n, {
    z: function () {
        return p;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(663507),
    c = r(84735),
    d = r(562701),
    f = r(448304);
function p(e, n, r) {
    let i = (0, d.G6)(e),
        s = new Map(),
        p = new r((e) => {
            e.forEach((e) => {
                var n;
                let { target: r } = e;
                null === (n = s.get(r)) || void 0 === n || n(e);
            });
        });
    return (0, o.forwardRef)(function (r, h) {
        var _;
        let { onScroll: m, dir: g = 'ltr', sections: E, columns: v, getItemKey: y, getItemHeight: b, getSectionHeight: I, chunkSize: T, renderSection: S, renderItem: A, getSectionProps: C, itemGutter: N, removeEdgeItemGutters: R, sectionGutter: O, padding: D, paddingVertical: L, paddingHorizontal: x, fade: w = !1, className: P, style: M, maxContentWidth: k, renderAccessory: U, onItemVisibilityChange: B, ...G } = r,
            Z = o.useRef(null),
            F = o.useRef(null),
            V = o.useRef({}),
            [j, H] = o.useState(!1),
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
            getItemKey: y,
            getItemHeight: b,
            getSectionHeight: I,
            chunkSize: T,
            itemGutter: N,
            removeEdgeItemGutters: R,
            sectionGutter: O,
            padding: D,
            paddingVertical: L,
            paddingHorizontal: x,
            getScrollerState: K,
            dir: g,
            maxBufferWidth: k
        });
        o.useEffect(() => {
            null != B && (0, u.ZI)(X, V.current, B), (V.current = X);
        }, [X, B]);
        let et = (0, o.useCallback)(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > W.current.dirty && (W.current.dirty = e), 2 === e ? $() : z(1);
                },
                [z, W, $]
            ),
            en = (0, d.t2)(Y),
            er = (0, o.useCallback)(() => ee.itemGrid, [ee]),
            ei = (0, o.useCallback)(() => ee.coordsMap, [ee]),
            ea = o.useCallback(() => et(), [et]);
        (0, d.zn)({
            ref: Y,
            key: 'container',
            onUpdate: ea,
            resizeObserver: p,
            listenerMap: s
        }),
            (0, o.useImperativeHandle)(
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
        let eo = (0, o.useCallback)(
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
            o.useLayoutEffect(() => {
                2 !== W.current.dirty && (W.current.dirty = 2);
            }, [J, W]),
            (0, a.jsxs)('div', {
                ref: Y,
                onScroll: eo,
                className: l()(P, {
                    [e]: !0,
                    [n]: w,
                    [f.scrolling]: j
                }),
                style: (0, d.uT)(M),
                ...G,
                children: [
                    null !== (_ = null == U ? void 0 : U(J)) && void 0 !== _ ? _ : null,
                    (0, o.useMemo)(
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
                                            o = X[e],
                                            s = q[(0, d.DP)(r)],
                                            l = null == C ? void 0 : C(r);
                                        return null != i && null != o
                                            ? (0, a.jsxs)(
                                                  'div',
                                                  {
                                                      ...l,
                                                      style: {
                                                          ...i,
                                                          ...(null !== (n = null == l ? void 0 : l.style) && void 0 !== n ? n : {})
                                                      },
                                                      children: [
                                                          null != S && null != s && S(r, s, e),
                                                          o.map((e) => {
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
                        [X, A, S, q, J, C, Q]
                    )
                ]
            })
        );
    });
}
