"use strict";
n.d(t, { c: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(842867),
    l = n(965609),
    u = n(158954),
    c = n(588428);
function d(e, t, n) {
    let a = (0, o.dG)(e),
        d = new Map(),
        _ = new n((e) => {
            e.forEach((e) => {
                let { target: t } = e;
                d.get(t)?.(e);
            });
        });
    return (0, i.forwardRef)(function (n, f) {
        let {
                onScroll: h,
                dir: p = "ltr",
                sections: g,
                columns: E,
                getItemKey: A,
                getItemHeight: I,
                getSectionHeight: T,
                chunkSize: y,
                renderSection: S,
                renderItem: v,
                getSectionProps: C,
                itemGutter: b,
                removeEdgeItemGutters: N,
                sectionGutter: R,
                padding: O,
                paddingVertical: D,
                paddingHorizontal: L,
                fade: w = !1,
                className: x,
                style: P,
                maxContentWidth: M,
                renderAccessory: k,
                onItemVisibilityChange: U,
                ...G
            } = n,
            F = i.useRef(null),
            V = i.useRef(null),
            B = i.useRef({}),
            [j, H] = i.useState(!1),
            { scrollerRef: Y, scrollerState: W, getScrollerState: K } = (0, o.F6)();
        (0, o._I)({ scrollerRef: Y, className: x, specs: a, orientation: "vertical", dir: p });
        let {
            forceUpdateOnChunkChange: $,
            coordsMap: z,
            gridData: q,
            visibleSections: X,
            totalHeight: Z,
            forceUpdate: Q,
            masonryComputer: J,
        } = (0, o.vL)({
            sections: g,
            columns: E,
            getItemKey: A,
            getItemHeight: I,
            getSectionHeight: T,
            chunkSize: y,
            itemGutter: b,
            removeEdgeItemGutters: N,
            sectionGutter: R,
            padding: O,
            paddingVertical: D,
            paddingHorizontal: L,
            getScrollerState: K,
            dir: p,
            maxBufferWidth: M,
        });
        i.useEffect(() => {
            null != U && (0, l.EL)(X, B.current, U), (B.current = X);
        }, [X, U]);
        let ee = (0, i.useCallback)(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > W.current.dirty && (W.current.dirty = e), 2 === e ? Q() : $(1);
                },
                [$, W, Q],
            ),
            et = (0, o.kR)(Y),
            en = (0, i.useCallback)(() => J.itemGrid, [J]),
            er = (0, i.useCallback)(() => J.coordsMap, [J]),
            ei = i.useCallback(() => ee(), [ee]);
        (0, o.Bb)({ ref: Y, key: "container", onUpdate: ei, resizeObserver: _, listenerMap: d }),
            (0, i.useImperativeHandle)(
                f,
                () => ({
                    getScrollerNode: () => Y.current,
                    getItemGrid: en,
                    getCoordsMap: er,
                    getScrollerState: K,
                    ...(0, o.cJ)(Y, K, et),
                }),
                [Y, K, en, et, er],
            );
        let ea = (0, i.useCallback)(
            (e) => {
                ee(1),
                    null == F.current ? H(!0) : clearTimeout(F.current),
                    (F.current = setTimeout(() => {
                        (F.current = null), H(!1);
                    }, 200)),
                    null != h && h(e);
            },
            [h, ee],
        );
        return (
            i.useLayoutEffect(() => {
                2 !== W.current.dirty && (W.current.dirty = 2);
            }, [Z, W]),
            (0, r.jsxs)("div", {
                ref: Y,
                onScroll: ea,
                className: s()(x, { [e]: !0, [t]: w, [c.qw]: j }),
                style: (0, o.Ze)(P),
                ...G,
                children: [
                    k?.(Z) ?? null,
                    (0, i.useMemo)(
                        () =>
                            (0, r.jsx)(u.xpW, {
                                containerRef: V,
                                children: (0, r.jsx)("div", {
                                    style: { height: Z },
                                    className: c.Qs,
                                    ref: V,
                                    children: Object.keys(X).map((e) => {
                                        let t = (0, o.Vd)(e),
                                            n = z[e],
                                            i = X[e],
                                            a = z[(0, o.tx)(t)],
                                            s = C?.(t);
                                        return null != n && null != i
                                            ? (0, r.jsxs)(
                                                  "div",
                                                  {
                                                      ...s,
                                                      style: { ...n, ...(s?.style ?? {}) },
                                                      children: [
                                                          null != S && null != a && S(t, a, e),
                                                          i.map((e) => {
                                                              let [t, n, r] = e,
                                                                  i = z[t];
                                                              return null != i ? v(n, r, i, t, q) : null;
                                                          }),
                                                      ],
                                                  },
                                                  e,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                        [X, v, S, z, Z, C, q],
                    ),
                ],
            })
        );
    });
}
