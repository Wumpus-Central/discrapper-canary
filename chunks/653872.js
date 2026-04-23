"use strict";
n.d(t, { c: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(936005),
    l = n(154327),
    u = n(518898),
    c = n(241387),
    d = n(662246),
    _ = n(448539),
    f = n(584648),
    p = n(751591),
    h = n(965609),
    E = n(187322),
    m = n(457845);
function g(e, t, n) {
    let s = (0, o.A)(e),
        g = new Map(),
        A = new n((e) => {
            e.forEach((e) => {
                let { target: t } = e;
                g.get(t)?.(e);
            });
        });
    return (0, i.forwardRef)(function (n, o) {
        let {
                onScroll: I,
                dir: T = "ltr",
                sections: S,
                columns: y,
                getItemKey: N,
                getItemHeight: v,
                getSectionHeight: C,
                chunkSize: O,
                renderSection: R,
                renderItem: b,
                getSectionProps: D,
                itemGutter: L,
                removeEdgeItemGutters: w,
                sectionGutter: M,
                padding: P,
                paddingVertical: x,
                paddingHorizontal: k,
                fade: U = !1,
                className: G,
                style: F,
                maxContentWidth: V,
                renderAccessory: B,
                onItemVisibilityChange: H,
                ...j
            } = n,
            Y = i.useRef(null),
            W = i.useRef(null),
            K = i.useRef({}),
            [$, z] = i.useState(!1),
            { scrollerRef: q, scrollerState: X, getScrollerState: Q } = (0, l.A)();
        (0, u.A)({ scrollerRef: q, className: G, specs: s, orientation: "vertical", dir: T });
        let {
            forceUpdateOnChunkChange: Z,
            coordsMap: J,
            gridData: ee,
            visibleSections: et,
            totalHeight: en,
            forceUpdate: er,
            masonryComputer: ei,
        } = (0, c.A)({
            sections: S,
            columns: y,
            getItemKey: N,
            getItemHeight: v,
            getSectionHeight: C,
            chunkSize: O,
            itemGutter: L,
            removeEdgeItemGutters: w,
            sectionGutter: M,
            padding: P,
            paddingVertical: x,
            paddingHorizontal: k,
            getScrollerState: Q,
            dir: T,
            maxBufferWidth: V,
        });
        i.useEffect(() => {
            null != H && (0, h.EL)(et, K.current, H), (K.current = et);
        }, [et, H]);
        let es = (0, i.useCallback)(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > X.current.dirty && (X.current.dirty = e), 2 === e ? er() : Z(1);
                },
                [Z, X, er],
            ),
            ea = (0, d.A)(q),
            eo = (0, i.useCallback)(() => ei.itemGrid, [ei]),
            el = (0, i.useCallback)(() => ei.coordsMap, [ei]),
            eu = i.useCallback(() => es(), [es]);
        (0, _.A)({ ref: q, key: "container", onUpdate: eu, resizeObserver: A, listenerMap: g }),
            (0, i.useImperativeHandle)(
                o,
                () => ({
                    getScrollerNode: () => q.current,
                    getItemGrid: eo,
                    getCoordsMap: el,
                    getScrollerState: Q,
                    ...(0, f.A)(q, Q, ea),
                }),
                [q, Q, eo, ea, el],
            );
        let ec = (0, i.useCallback)(
            (e) => {
                es(1),
                    null == Y.current ? z(!0) : clearTimeout(Y.current),
                    (Y.current = setTimeout(() => {
                        (Y.current = null), z(!1);
                    }, 200)),
                    null != I && I(e);
            },
            [I, es],
        );
        return (
            i.useLayoutEffect(() => {
                2 !== X.current.dirty && (X.current.dirty = 2);
            }, [en, X]),
            (0, r.jsxs)("div", {
                ref: q,
                onScroll: ec,
                className: a()(G, { [e]: !0, [t]: U, [m.qw]: $ }),
                style: (0, p.Ay)(F),
                ...j,
                children: [
                    B?.(en) ?? null,
                    (0, i.useMemo)(
                        () =>
                            (0, r.jsx)(E.xp, {
                                containerRef: W,
                                children: (0, r.jsx)("div", {
                                    style: { height: en },
                                    className: m.Qs,
                                    ref: W,
                                    children: Object.keys(et).map((e) => {
                                        let t = (0, h.Vd)(e),
                                            n = J[e],
                                            i = et[e],
                                            s = J[(0, h.tx)(t)],
                                            a = D?.(t);
                                        return null != n && null != i
                                            ? (0, r.jsxs)(
                                                  "div",
                                                  {
                                                      ...a,
                                                      style: { ...n, ...(a?.style ?? {}) },
                                                      children: [
                                                          null != R && null != s && R(t, s, e),
                                                          i.map((e) => {
                                                              let [t, n, r] = e,
                                                                  i = J[t];
                                                              return null != i ? b(n, r, i, t, ee) : null;
                                                          }),
                                                      ],
                                                  },
                                                  e,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                        [et, b, R, J, en, D, ee],
                    ),
                ],
            })
        );
    });
}
