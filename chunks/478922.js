n.d(t, { z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(780900),
    l = n(663507),
    c = n(793030),
    u = n(121958);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e, t, n) {
    let a = (0, s.G6)(e),
        d = new Map(),
        _ = new n((e) => {
            e.forEach((e) => {
                var t;
                let { target: n } = e;
                null == (t = d.get(n)) || t(e);
            });
        });
    return (0, i.forwardRef)(function (n, m) {
        var g,
            {
                onScroll: E,
                dir: b = "ltr",
                sections: y,
                columns: O,
                getItemKey: v,
                getItemHeight: I,
                getSectionHeight: T,
                chunkSize: S,
                renderSection: A,
                renderItem: C,
                getSectionProps: N,
                itemGutter: R,
                removeEdgeItemGutters: P,
                sectionGutter: w,
                padding: D,
                paddingVertical: x,
                paddingHorizontal: L,
                fade: M = !1,
                className: j,
                style: k,
                maxContentWidth: U,
                renderAccessory: G,
                onItemVisibilityChange: B,
            } = n,
            Z = h(n, [
                "onScroll",
                "dir",
                "sections",
                "columns",
                "getItemKey",
                "getItemHeight",
                "getSectionHeight",
                "chunkSize",
                "renderSection",
                "renderItem",
                "getSectionProps",
                "itemGutter",
                "removeEdgeItemGutters",
                "sectionGutter",
                "padding",
                "paddingVertical",
                "paddingHorizontal",
                "fade",
                "className",
                "style",
                "maxContentWidth",
                "renderAccessory",
                "onItemVisibilityChange",
            ]);
        let F = i.useRef(null),
            V = i.useRef(null),
            H = i.useRef({}),
            [Y, W] = i.useState(!1),
            { scrollerRef: K, scrollerState: z, getScrollerState: q } = (0, s.T4)();
        (0, s.tT)({
            scrollerRef: K,
            className: j,
            specs: a,
            orientation: "vertical",
            dir: b,
        });
        let {
            forceUpdateOnChunkChange: X,
            coordsMap: Q,
            gridData: J,
            visibleSections: $,
            totalHeight: ee,
            forceUpdate: et,
            masonryComputer: en,
        } = (0, s.QB)({
            sections: y,
            columns: O,
            getItemKey: v,
            getItemHeight: I,
            getSectionHeight: T,
            chunkSize: S,
            itemGutter: R,
            removeEdgeItemGutters: P,
            sectionGutter: w,
            padding: D,
            paddingVertical: x,
            paddingHorizontal: L,
            getScrollerState: q,
            dir: b,
            maxBufferWidth: U,
        });
        i.useEffect(() => {
            null != B && (0, l.ZI)($, H.current, B), (H.current = $);
        }, [$, B]);
        let er = (0, i.useCallback)(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > z.current.dirty && (z.current.dirty = e), 2 === e ? et() : X(1);
                },
                [X, z, et],
            ),
            ei = (0, s.t2)(K),
            ea = (0, i.useCallback)(() => en.itemGrid, [en]),
            eo = (0, i.useCallback)(() => en.coordsMap, [en]),
            es = i.useCallback(() => er(), [er]);
        (0, s.zn)({
            ref: K,
            key: "container",
            onUpdate: es,
            resizeObserver: _,
            listenerMap: d,
        }),
            (0, i.useImperativeHandle)(
                m,
                () =>
                    f(
                        {
                            getScrollerNode: () => K.current,
                            getItemGrid: ea,
                            getCoordsMap: eo,
                            getScrollerState: q,
                        },
                        (0, s.Ue)(K, q, ei),
                    ),
                [K, q, ea, ei, eo],
            );
        let el = (0, i.useCallback)(
            (e) => {
                er(1),
                    null == F.current ? W(!0) : clearTimeout(F.current),
                    (F.current = setTimeout(() => {
                        (F.current = null), W(!1);
                    }, 200)),
                    null != E && E(e);
            },
            [E, er],
        );
        return (
            i.useLayoutEffect(() => {
                2 !== z.current.dirty && (z.current.dirty = 2);
            }, [ee, z]),
            (0, r.jsxs)(
                "div",
                p(
                    f(
                        {
                            ref: K,
                            onScroll: el,
                            className: o()(j, {
                                [e]: !0,
                                [t]: M,
                                [u.scrolling]: Y,
                            }),
                            style: (0, s.uT)(k),
                        },
                        Z,
                    ),
                    {
                        children: [
                            null != (g = null == G ? void 0 : G(ee)) ? g : null,
                            (0, i.useMemo)(
                                () =>
                                    (0, r.jsx)(c.JcV, {
                                        containerRef: V,
                                        children: (0, r.jsx)("div", {
                                            style: { height: ee },
                                            className: u.content,
                                            ref: V,
                                            children: Object.keys($).map((e) => {
                                                var t;
                                                let n = (0, s.t$)(e),
                                                    i = Q[e],
                                                    a = $[e],
                                                    o = Q[(0, s.DP)(n)],
                                                    l = null == N ? void 0 : N(n);
                                                return null != i && null != a
                                                    ? (0, r.jsxs)(
                                                          "div",
                                                          p(f({}, l), {
                                                              style: f(
                                                                  {},
                                                                  i,
                                                                  null != (t = null == l ? void 0 : l.style) ? t : {},
                                                              ),
                                                              children: [
                                                                  null != A && null != o && A(n, o, e),
                                                                  a.map((e) => {
                                                                      let [t, n, r] = e,
                                                                          i = Q[t];
                                                                      return null != i ? C(n, r, i, t, J) : null;
                                                                  }),
                                                              ],
                                                          }),
                                                          e,
                                                      )
                                                    : null;
                                            }),
                                        }),
                                    }),
                                [$, C, A, Q, ee, N, J],
                            ),
                        ],
                    },
                ),
            )
        );
    });
}
