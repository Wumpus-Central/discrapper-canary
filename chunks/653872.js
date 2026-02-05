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
                onScroll: p,
                dir: h = "ltr",
                sections: m,
                columns: g,
                getItemKey: E,
                getItemHeight: A,
                getSectionHeight: I,
                chunkSize: T,
                renderSection: y,
                renderItem: S,
                getSectionProps: v,
                itemGutter: C,
                removeEdgeItemGutters: b,
                sectionGutter: N,
                padding: R,
                paddingVertical: O,
                paddingHorizontal: D,
                fade: L = !1,
                className: w,
                style: x,
                maxContentWidth: P,
                renderAccessory: M,
                onItemVisibilityChange: k,
                ...U
            } = n,
            G = i.useRef(null),
            V = i.useRef(null),
            F = i.useRef({}),
            [B, j] = i.useState(!1),
            { scrollerRef: H, scrollerState: Y, getScrollerState: W } = (0, o.F6)();
        (0, o._I)({ scrollerRef: H, className: w, specs: a, orientation: "vertical", dir: h });
        let {
            forceUpdateOnChunkChange: K,
            coordsMap: z,
            gridData: $,
            visibleSections: q,
            totalHeight: Z,
            forceUpdate: Q,
            masonryComputer: X,
        } = (0, o.vL)({
            sections: m,
            columns: g,
            getItemKey: E,
            getItemHeight: A,
            getSectionHeight: I,
            chunkSize: T,
            itemGutter: C,
            removeEdgeItemGutters: b,
            sectionGutter: N,
            padding: R,
            paddingVertical: O,
            paddingHorizontal: D,
            getScrollerState: W,
            dir: h,
            maxBufferWidth: P,
        });
        i.useEffect(() => {
            null != k && (0, l.EL)(q, F.current, k), (F.current = q);
        }, [q, k]);
        let J = (0, i.useCallback)(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > Y.current.dirty && (Y.current.dirty = e), 2 === e ? Q() : K(1);
                },
                [K, Y, Q],
            ),
            ee = (0, o.kR)(H),
            et = (0, i.useCallback)(() => X.itemGrid, [X]),
            en = (0, i.useCallback)(() => X.coordsMap, [X]),
            er = i.useCallback(() => J(), [J]);
        (0, o.Bb)({ ref: H, key: "container", onUpdate: er, resizeObserver: _, listenerMap: d }),
            (0, i.useImperativeHandle)(
                f,
                () => ({
                    getScrollerNode: () => H.current,
                    getItemGrid: et,
                    getCoordsMap: en,
                    getScrollerState: W,
                    ...(0, o.cJ)(H, W, ee),
                }),
                [H, W, et, ee, en],
            );
        let ei = (0, i.useCallback)(
            (e) => {
                J(1),
                    null == G.current ? j(!0) : clearTimeout(G.current),
                    (G.current = setTimeout(() => {
                        (G.current = null), j(!1);
                    }, 200)),
                    null != p && p(e);
            },
            [p, J],
        );
        return (
            i.useLayoutEffect(() => {
                2 !== Y.current.dirty && (Y.current.dirty = 2);
            }, [Z, Y]),
            (0, r.jsxs)("div", {
                ref: H,
                onScroll: ei,
                className: s()(w, { [e]: !0, [t]: L, [c.qw]: B }),
                style: (0, o.Ze)(x),
                ...U,
                children: [
                    M?.(Z) ?? null,
                    (0, i.useMemo)(
                        () =>
                            (0, r.jsx)(u.xpW, {
                                containerRef: V,
                                children: (0, r.jsx)("div", {
                                    style: { height: Z },
                                    className: c.Qs,
                                    ref: V,
                                    children: Object.keys(q).map((e) => {
                                        let t = (0, o.Vd)(e),
                                            n = z[e],
                                            i = q[e],
                                            a = z[(0, o.tx)(t)],
                                            s = v?.(t);
                                        return null != n && null != i
                                            ? (0, r.jsxs)(
                                                  "div",
                                                  {
                                                      ...s,
                                                      style: { ...n, ...(s?.style ?? {}) },
                                                      children: [
                                                          null != y && null != a && y(t, a, e),
                                                          i.map((e) => {
                                                              let [t, n, r] = e,
                                                                  i = z[t];
                                                              return null != i ? S(n, r, i, t, $) : null;
                                                          }),
                                                      ],
                                                  },
                                                  e,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                        [q, S, y, z, Z, v, $],
                    ),
                ],
            })
        );
    });
}
