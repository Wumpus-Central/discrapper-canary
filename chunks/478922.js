n.d(t, { z: () => d }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(663507),
    l = n(84735),
    u = n(562701),
    c = n(448304);
function d(e, t, n) {
    let a = (0, u.G6)(e),
        d = new Map(),
        f = new n((e) => {
            e.forEach((e) => {
                var t;
                let { target: n } = e;
                null === (t = d.get(n)) || void 0 === t || t(e);
            });
        });
    return (0, r.forwardRef)(function (n, _) {
        var p;
        let { onScroll: h, dir: m = 'ltr', sections: g, columns: E, getItemKey: v, getItemHeight: y, getSectionHeight: I, chunkSize: b, renderSection: T, renderItem: S, getSectionProps: A, itemGutter: N, removeEdgeItemGutters: C, sectionGutter: R, padding: O, paddingVertical: D, paddingHorizontal: x, fade: L = !1, className: P, style: w, maxContentWidth: M, renderAccessory: k, onItemVisibilityChange: U, ...G } = n,
            B = r.useRef(null),
            Z = r.useRef(null),
            F = r.useRef({}),
            [V, j] = r.useState(!1),
            { scrollerRef: H, scrollerState: Y, getScrollerState: W } = (0, u.T4)();
        (0, u.tT)({
            scrollerRef: H,
            className: P,
            specs: a,
            orientation: 'vertical',
            dir: m
        });
        let {
            forceUpdateOnChunkChange: K,
            coordsMap: z,
            gridData: q,
            visibleSections: Q,
            totalHeight: X,
            forceUpdate: J,
            masonryComputer: $
        } = (0, u.QB)({
            sections: g,
            columns: E,
            getItemKey: v,
            getItemHeight: y,
            getSectionHeight: I,
            chunkSize: b,
            itemGutter: N,
            removeEdgeItemGutters: C,
            sectionGutter: R,
            padding: O,
            paddingVertical: D,
            paddingHorizontal: x,
            getScrollerState: W,
            dir: m,
            maxBufferWidth: M
        });
        r.useEffect(() => {
            null != U && (0, o.ZI)(Q, F.current, U), (F.current = Q);
        }, [Q, U]);
        let ee = (0, r.useCallback)(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > Y.current.dirty && (Y.current.dirty = e), 2 === e ? J() : K(1);
                },
                [K, Y, J]
            ),
            et = (0, u.t2)(H),
            en = (0, r.useCallback)(() => $.itemGrid, [$]),
            ei = (0, r.useCallback)(() => $.coordsMap, [$]),
            er = r.useCallback(() => ee(), [ee]);
        (0, u.zn)({
            ref: H,
            key: 'container',
            onUpdate: er,
            resizeObserver: f,
            listenerMap: d
        }),
            (0, r.useImperativeHandle)(
                _,
                () => ({
                    getScrollerNode: () => H.current,
                    getItemGrid: en,
                    getCoordsMap: ei,
                    getScrollerState: W,
                    ...(0, u.Ue)(H, W, et)
                }),
                [H, W, en, et, ei]
            );
        let ea = (0, r.useCallback)(
            (e) => {
                ee(1),
                    null == B.current ? j(!0) : clearTimeout(B.current),
                    (B.current = setTimeout(() => {
                        (B.current = null), j(!1);
                    }, 200)),
                    null != h && h(e);
            },
            [h, ee]
        );
        return (
            r.useLayoutEffect(() => {
                2 !== Y.current.dirty && (Y.current.dirty = 2);
            }, [X, Y]),
            (0, i.jsxs)('div', {
                ref: H,
                onScroll: ea,
                className: s()(P, {
                    [e]: !0,
                    [t]: L,
                    [c.scrolling]: V
                }),
                style: (0, u.uT)(w),
                ...G,
                children: [
                    null !== (p = null == k ? void 0 : k(X)) && void 0 !== p ? p : null,
                    (0, r.useMemo)(
                        () =>
                            (0, i.jsx)(l.J, {
                                containerRef: Z,
                                children: (0, i.jsx)('div', {
                                    style: { height: X },
                                    className: c.content,
                                    ref: Z,
                                    children: Object.keys(Q).map((e) => {
                                        var t;
                                        let n = (0, u.t$)(e),
                                            r = z[e],
                                            a = Q[e],
                                            s = z[(0, u.DP)(n)],
                                            o = null == A ? void 0 : A(n);
                                        return null != r && null != a
                                            ? (0, i.jsxs)(
                                                  'div',
                                                  {
                                                      ...o,
                                                      style: {
                                                          ...r,
                                                          ...(null !== (t = null == o ? void 0 : o.style) && void 0 !== t ? t : {})
                                                      },
                                                      children: [
                                                          null != T && null != s && T(n, s, e),
                                                          a.map((e) => {
                                                              let [t, n, i] = e,
                                                                  r = z[t];
                                                              return null != r ? S(n, i, r, t, q) : null;
                                                          })
                                                      ]
                                                  },
                                                  e
                                              )
                                            : null;
                                    })
                                })
                            }),
                        [Q, S, T, z, X, A, q]
                    )
                ]
            })
        );
    });
}
