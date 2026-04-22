i.d(e, { c: () => H });
var s = i(627968),
    n = i(64700),
    l = i(503698),
    r = i.n(l),
    o = i(936005),
    h = i(154327),
    u = i(518898),
    d = i(241387),
    a = i(662246),
    c = i(448539),
    g = i(584648),
    m = i(751591),
    p = i(965609),
    f = i(187322),
    b = i(457845);
function H(t, e, i) {
    let l = (0, o.A)(t),
        H = new Map(),
        v = new i((t) => {
            t.forEach((t) => {
                let { target: e } = t;
                H.get(e)?.(t);
            });
        });
    return (0, n.forwardRef)(function (i, o) {
        let {
                onScroll: y,
                dir: C = "ltr",
                sections: G,
                columns: w,
                getItemKey: S,
                getItemHeight: M,
                getSectionHeight: x,
                chunkSize: I,
                renderSection: R,
                renderItem: P,
                getSectionProps: _,
                itemGutter: k,
                removeEdgeItemGutters: A,
                sectionGutter: L,
                padding: W,
                paddingVertical: V,
                paddingHorizontal: z,
                fade: E = !1,
                className: D,
                style: j,
                maxContentWidth: F,
                renderAccessory: K,
                onItemVisibilityChange: O,
                ...T
            } = i,
            B = n.useRef(null),
            N = n.useRef(null),
            q = n.useRef({}),
            [$, Q] = n.useState(!1),
            { scrollerRef: U, scrollerState: Z, getScrollerState: J } = (0, h.A)();
        (0, u.A)({ scrollerRef: U, className: D, specs: l, orientation: "vertical", dir: C });
        let {
            forceUpdateOnChunkChange: X,
            coordsMap: Y,
            gridData: tt,
            visibleSections: te,
            totalHeight: ti,
            forceUpdate: ts,
            masonryComputer: tn,
        } = (0, d.A)({
            sections: G,
            columns: w,
            getItemKey: S,
            getItemHeight: M,
            getSectionHeight: x,
            chunkSize: I,
            itemGutter: k,
            removeEdgeItemGutters: A,
            sectionGutter: L,
            padding: W,
            paddingVertical: V,
            paddingHorizontal: z,
            getScrollerState: J,
            dir: C,
            maxBufferWidth: F,
        });
        n.useEffect(() => {
            null != O && (0, p.EL)(te, q.current, O), (q.current = te);
        }, [te, O]);
        let tl = (0, n.useCallback)(
                function () {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    t > Z.current.dirty && (Z.current.dirty = t), 2 === t ? ts() : X(1);
                },
                [X, Z, ts],
            ),
            tr = (0, a.A)(U),
            to = (0, n.useCallback)(() => tn.itemGrid, [tn]),
            th = (0, n.useCallback)(() => tn.coordsMap, [tn]),
            tu = n.useCallback(() => tl(), [tl]);
        (0, c.A)({ ref: U, key: "container", onUpdate: tu, resizeObserver: v, listenerMap: H }),
            (0, n.useImperativeHandle)(
                o,
                () => ({
                    getScrollerNode: () => U.current,
                    getItemGrid: to,
                    getCoordsMap: th,
                    getScrollerState: J,
                    ...(0, g.A)(U, J, tr),
                }),
                [U, J, to, tr, th],
            );
        let td = (0, n.useCallback)(
            (t) => {
                tl(1),
                    null == B.current ? Q(!0) : clearTimeout(B.current),
                    (B.current = setTimeout(() => {
                        (B.current = null), Q(!1);
                    }, 200)),
                    null != y && y(t);
            },
            [y, tl],
        );
        return (
            n.useLayoutEffect(() => {
                2 !== Z.current.dirty && (Z.current.dirty = 2);
            }, [ti, Z]),
            (0, s.jsxs)("div", {
                ref: U,
                onScroll: td,
                className: r()(D, { [t]: !0, [e]: E, [b.qw]: $ }),
                style: (0, m.Ay)(j),
                ...T,
                children: [
                    K?.(ti) ?? null,
                    (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(f.xp, {
                                containerRef: N,
                                children: (0, s.jsx)("div", {
                                    style: { height: ti },
                                    className: b.Qs,
                                    ref: N,
                                    children: Object.keys(te).map((t) => {
                                        let e = (0, p.Vd)(t),
                                            i = Y[t],
                                            n = te[t],
                                            l = Y[(0, p.tx)(e)],
                                            r = _?.(e);
                                        return null != i && null != n
                                            ? (0, s.jsxs)(
                                                  "div",
                                                  {
                                                      ...r,
                                                      style: { ...i, ...(r?.style ?? {}) },
                                                      children: [
                                                          null != R && null != l && R(e, l, t),
                                                          n.map((t) => {
                                                              let [e, i, s] = t,
                                                                  n = Y[e];
                                                              return null != n ? P(i, s, n, e, tt) : null;
                                                          }),
                                                      ],
                                                  },
                                                  t,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                        [te, P, R, Y, ti, _, tt],
                    ),
                ],
            })
        );
    });
}
