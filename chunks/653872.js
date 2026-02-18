"use strict";
n.d(t, { c: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(842867),
    l = n(965609),
    u = n(158954),
    c = n(588428);
function d(e, t, n) {
    let s = (0, o.dG)(e),
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
                columns: E,
                getItemKey: g,
                getItemHeight: A,
                getSectionHeight: I,
                chunkSize: T,
                renderSection: S,
                renderItem: y,
                getSectionProps: v,
                itemGutter: N,
                removeEdgeItemGutters: C,
                sectionGutter: b,
                padding: R,
                paddingVertical: O,
                paddingHorizontal: D,
                fade: L = !1,
                className: w,
                style: x,
                maxContentWidth: M,
                renderAccessory: P,
                onItemVisibilityChange: k,
                ...U
            } = n,
            G = i.useRef(null),
            F = i.useRef(null),
            V = i.useRef({}),
            [B, H] = i.useState(!1),
            { scrollerRef: j, scrollerState: Y, getScrollerState: W } = (0, o.F6)();
        (0, o._I)({ scrollerRef: j, className: w, specs: s, orientation: "vertical", dir: h });
        let {
            forceUpdateOnChunkChange: K,
            coordsMap: z,
            gridData: $,
            visibleSections: q,
            totalHeight: Z,
            forceUpdate: X,
            masonryComputer: Q,
        } = (0, o.vL)({
            sections: m,
            columns: E,
            getItemKey: g,
            getItemHeight: A,
            getSectionHeight: I,
            chunkSize: T,
            itemGutter: N,
            removeEdgeItemGutters: C,
            sectionGutter: b,
            padding: R,
            paddingVertical: O,
            paddingHorizontal: D,
            getScrollerState: W,
            dir: h,
            maxBufferWidth: M,
        });
        i.useEffect(() => {
            null != k && (0, l.EL)(q, V.current, k), (V.current = q);
        }, [q, k]);
        let J = (0, i.useCallback)(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > Y.current.dirty && (Y.current.dirty = e), 2 === e ? X() : K(1);
                },
                [K, Y, X],
            ),
            ee = (0, o.kR)(j),
            et = (0, i.useCallback)(() => Q.itemGrid, [Q]),
            en = (0, i.useCallback)(() => Q.coordsMap, [Q]),
            er = i.useCallback(() => J(), [J]);
        (0, o.Bb)({ ref: j, key: "container", onUpdate: er, resizeObserver: _, listenerMap: d }),
            (0, i.useImperativeHandle)(
                f,
                () => ({
                    getScrollerNode: () => j.current,
                    getItemGrid: et,
                    getCoordsMap: en,
                    getScrollerState: W,
                    ...(0, o.cJ)(j, W, ee),
                }),
                [j, W, et, ee, en],
            );
        let ei = (0, i.useCallback)(
            (e) => {
                J(1),
                    null == G.current ? H(!0) : clearTimeout(G.current),
                    (G.current = setTimeout(() => {
                        (G.current = null), H(!1);
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
                ref: j,
                onScroll: ei,
                className: a()(w, { [e]: !0, [t]: L, [c.qw]: B }),
                style: (0, o.Ze)(x),
                ...U,
                children: [
                    P?.(Z) ?? null,
                    (0, i.useMemo)(
                        () =>
                            (0, r.jsx)(u.xpW, {
                                containerRef: F,
                                children: (0, r.jsx)("div", {
                                    style: { height: Z },
                                    className: c.Qs,
                                    ref: F,
                                    children: Object.keys(q).map((e) => {
                                        let t = (0, o.Vd)(e),
                                            n = z[e],
                                            i = q[e],
                                            s = z[(0, o.tx)(t)],
                                            a = v?.(t);
                                        return null != n && null != i
                                            ? (0, r.jsxs)(
                                                  "div",
                                                  {
                                                      ...a,
                                                      style: { ...n, ...(a?.style ?? {}) },
                                                      children: [
                                                          null != S && null != s && S(t, s, e),
                                                          i.map((e) => {
                                                              let [t, n, r] = e,
                                                                  i = z[t];
                                                              return null != i ? y(n, r, i, t, $) : null;
                                                          }),
                                                      ],
                                                  },
                                                  e,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                        [q, y, S, z, Z, v, $],
                    ),
                ],
            })
        );
    });
}
