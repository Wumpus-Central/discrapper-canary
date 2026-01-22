n.d(t, { c: () => g }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(842867),
    l = n(965609),
    c = n(158954),
    u = n(588428);
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
function p(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = m(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function g(e, t, n) {
    let a = (0, o.dG)(e),
        d = new Map(),
        p = new n((e) => {
            e.forEach((e) => {
                var t;
                let { target: n } = e;
                null == (t = d.get(n)) || t(e);
            });
        });
    return (0, i.forwardRef)(function (n, m) {
        var g;
        let [E, ...b] = [n, m],
            {
                onScroll: y,
                dir: O = "ltr",
                sections: A,
                columns: v,
                getItemKey: S,
                getItemHeight: I,
                getSectionHeight: T,
                chunkSize: C,
                renderSection: N,
                renderItem: R,
                getSectionProps: w,
                itemGutter: P,
                removeEdgeItemGutters: D,
                sectionGutter: x,
                padding: L,
                paddingVertical: j,
                paddingHorizontal: M,
                fade: k = !1,
                className: U,
                style: G,
                maxContentWidth: V,
                renderAccessory: F,
                onItemVisibilityChange: B,
            } = E,
            H = h(E, [
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
            ]),
            [Y] = b,
            W = i.useRef(null),
            K = i.useRef(null),
            z = i.useRef({}),
            [q, X] = i.useState(!1),
            { scrollerRef: Z, scrollerState: Q, getScrollerState: $ } = (0, o.F6)();
        (0, o._I)({
            scrollerRef: Z,
            className: U,
            specs: a,
            orientation: "vertical",
            dir: O,
        });
        let {
            forceUpdateOnChunkChange: J,
            coordsMap: ee,
            gridData: et,
            visibleSections: en,
            totalHeight: er,
            forceUpdate: ei,
            masonryComputer: ea,
        } = (0, o.vL)({
            sections: A,
            columns: v,
            getItemKey: S,
            getItemHeight: I,
            getSectionHeight: T,
            chunkSize: C,
            itemGutter: P,
            removeEdgeItemGutters: D,
            sectionGutter: x,
            padding: L,
            paddingVertical: j,
            paddingHorizontal: M,
            getScrollerState: $,
            dir: O,
            maxBufferWidth: V,
        });
        i.useEffect(() => {
            null != B && (0, l.EL)(en, z.current, B), (z.current = en);
        }, [en, B]);
        let es = (0, i.useCallback)(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > Q.current.dirty && (Q.current.dirty = e), 2 === e ? ei() : J(1);
                },
                [J, Q, ei],
            ),
            eo = (0, o.kR)(Z),
            el = (0, i.useCallback)(() => ea.itemGrid, [ea]),
            ec = (0, i.useCallback)(() => ea.coordsMap, [ea]),
            eu = i.useCallback(() => es(), [es]);
        (0, o.Bb)({
            ref: Z,
            key: "container",
            onUpdate: eu,
            resizeObserver: p,
            listenerMap: d,
        }),
            (0, i.useImperativeHandle)(
                Y,
                () =>
                    f(
                        {
                            getScrollerNode: () => Z.current,
                            getItemGrid: el,
                            getCoordsMap: ec,
                            getScrollerState: $,
                        },
                        (0, o.cJ)(Z, $, eo),
                    ),
                [Z, $, el, eo, ec],
            );
        let ed = (0, i.useCallback)(
            (e) => {
                es(1),
                    null == W.current ? X(!0) : clearTimeout(W.current),
                    (W.current = setTimeout(() => {
                        (W.current = null), X(!1);
                    }, 200)),
                    null != y && y(e);
            },
            [y, es],
        );
        return (
            i.useLayoutEffect(() => {
                2 !== Q.current.dirty && (Q.current.dirty = 2);
            }, [er, Q]),
            (0, r.jsxs)(
                "div",
                _(
                    f(
                        {
                            ref: Z,
                            onScroll: ed,
                            className: s()(U, {
                                [e]: !0,
                                [t]: k,
                                [u.qw]: q,
                            }),
                            style: (0, o.Ze)(G),
                        },
                        H,
                    ),
                    {
                        children: [
                            null != (g = null == F ? void 0 : F(er)) ? g : null,
                            (0, i.useMemo)(
                                () =>
                                    (0, r.jsx)(c.xpW, {
                                        containerRef: K,
                                        children: (0, r.jsx)("div", {
                                            style: { height: er },
                                            className: u.Qs,
                                            ref: K,
                                            children: Object.keys(en).map((e) => {
                                                var t;
                                                let n = (0, o.Vd)(e),
                                                    i = ee[e],
                                                    a = en[e],
                                                    s = ee[(0, o.tx)(n)],
                                                    l = null == w ? void 0 : w(n);
                                                return null != i && null != a
                                                    ? (0, r.jsxs)(
                                                          "div",
                                                          _(f({}, l), {
                                                              style: f(
                                                                  {},
                                                                  i,
                                                                  null != (t = null == l ? void 0 : l.style) ? t : {},
                                                              ),
                                                              children: [
                                                                  null != N && null != s && N(n, s, e),
                                                                  a.map((e) => {
                                                                      let [t, n, r] = e,
                                                                          i = ee[t];
                                                                      return null != i ? R(n, r, i, t, et) : null;
                                                                  }),
                                                              ],
                                                          }),
                                                          e,
                                                      )
                                                    : null;
                                            }),
                                        }),
                                    }),
                                [en, R, N, ee, er, w, et],
                            ),
                        ],
                    },
                ),
            )
        );
    });
}
