n.d(t, { v: () => v }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(90757),
    l = n.n(s),
    c = n(155127),
    u = n(780900),
    d = n(901259);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
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
function m(e, t) {
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
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function E(e) {
    let t = i.useRef(e);
    return (
        i.useEffect(() => {
            t.current = e;
        }, [e]),
        i.useCallback(() => t.current, [])
    );
}
function b(e) {
    let t = i.useRef(e);
    return (
        i.useEffect(() => {
            t.current = e;
        }, [e]),
        i.useCallback((e) => {
            let { current: n } = t,
                r = 0;
            for (let t = 0; t < n.length; t++) {
                let i = n[t];
                if (r <= e && r + i >= e) return [t, e - r];
                r += i;
            }
            return [0, 0];
        }, [])
    );
}
function y(e) {
    let {
            renderSection: t,
            renderRow: n,
            renderFooter: a,
            renderListHeader: o,
            stickyListHeader: s,
            wrapSection: c,
            items: u,
            spacerTop: d,
        } = e,
        f = [
            (0, r.jsx)(
                "div",
                {
                    "aria-hidden": !0,
                    style: { height: d },
                },
                "---list-spacer-top",
            ),
        ],
        p = [],
        _ = 0;
    if (
        (!0 === s && null != o && f.push((0, r.jsx)(i.Fragment, { children: o() }, "---sticky-header")),
        u.forEach((e) => {
            var r, i;
            switch (
                (e.section !== _ &&
                    p.length > 0 &&
                    (f.push(null != (r = null == c ? void 0 : c(_, p)) ? r : p), (p = [])),
                (_ = null != (i = e.section) ? i : 0),
                e.type)
            ) {
                case "section":
                    null != t && p.push(t(e));
                    break;
                case "row":
                    p.push(n(e));
                    break;
                case "footer":
                    null != a && p.push(a(e));
                    break;
                case "header":
                    null != o && !0 !== s && p.push(o());
            }
        }),
        p.length > 0)
    ) {
        var m;
        f.push(null != (m = null == c ? void 0 : c(_, p)) ? m : p);
    }
    return l()(f);
}
function O(e) {
    let { renderSidebar: t, sidebarHeight: n, isSidebarVisible: r, isListVisible: i } = e;
    return null == n || null == t ? null : t(i, r);
}
function v(e, t, n, a) {
    let s = (0, u.G6)(e),
        l = new Map(),
        f = new a((e) => {
            e.forEach((e) => {
                var t;
                let { target: n } = e;
                null == (t = l.get(n)) || t(e);
            });
        });
    return i.forwardRef(function (a, _) {
        var {
                className: g,
                onScroll: v,
                onResize: S = null,
                onContentResize: I = null,
                dir: T = "ltr",
                sections: C,
                sectionHeight: A,
                rowHeight: N,
                footerHeight: P = 0,
                sidebarHeight: R,
                listHeaderHeight: D = 0,
                renderSection: w,
                renderRow: x,
                renderFooter: L,
                renderSidebar: j,
                renderListHeader: M,
                stickyListHeader: k,
                wrapSection: U,
                getAnchorId: G,
                paddingTop: Z,
                paddingBottom: B,
                fade: F = !1,
                customTheme: V = !1,
                chunkSize: H,
                style: Y,
                innerId: W,
                innerRole: K,
                innerAriaLabel: z,
                innerAriaMultiselectable: q,
                innerAriaOrientation: Q,
                innerClassName: X,
                innerTag: J = "div",
            } = a,
            $ = h(a, [
                "className",
                "onScroll",
                "onResize",
                "onContentResize",
                "dir",
                "sections",
                "sectionHeight",
                "rowHeight",
                "footerHeight",
                "sidebarHeight",
                "listHeaderHeight",
                "renderSection",
                "renderRow",
                "renderFooter",
                "renderSidebar",
                "renderListHeader",
                "stickyListHeader",
                "wrapSection",
                "getAnchorId",
                "paddingTop",
                "paddingBottom",
                "fade",
                "customTheme",
                "chunkSize",
                "style",
                "innerId",
                "innerRole",
                "innerAriaLabel",
                "innerAriaMultiselectable",
                "innerAriaOrientation",
                "innerClassName",
                "innerTag",
            ]);
        let ee = i.useRef(null),
            et = i.useRef(null),
            [en, er] = i.useState(!1),
            { scrollerRef: ei, scrollerState: ea, getScrollerState: eo } = (0, u.T4)();
        (0, u.tT)({
            scrollerRef: ei,
            className: g,
            specs: s,
            orientation: "vertical",
            dir: T,
        });
        let {
                spacerTop: es,
                totalHeight: el,
                items: ec,
                isSidebarVisible: eu,
                listComputer: ed,
                forceUpdateOnChunkChange: ef,
                anchor: ep,
            } = (0, u.aU)({
                sections: C,
                sectionHeight: A,
                rowHeight: N,
                footerHeight: P,
                sidebarHeight: R,
                listHeaderHeight: D,
                paddingTop: Z,
                paddingBottom: B,
                chunkSize: H,
                getScrollerState: eo,
                getAnchorId: G,
            }),
            e_ = (0, u.t2)(ei),
            em = i.useRef(S),
            eh = i.useRef(I);
        i.useLayoutEffect(() => {
            (em.current = S), (eh.current = I);
        });
        let eg = i.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    if ((e > ea.current.dirty && (ea.current.dirty = e), 2 === e)) {
                        var t;
                        null == (t = em.current) || t.call(em);
                    }
                    ef(e);
                },
                [ef, ea],
            ),
            eE = i.useCallback(() => eg(), [eg]);
        (0, u.zn)({
            ref: ei,
            onUpdate: eE,
            key: "container",
            resizeObserver: f,
            listenerMap: l,
        }),
            (0, u.zn)({
                ref: et,
                onUpdate: () => {
                    var e;
                    return null == (e = eh.current) ? void 0 : e.call(eh);
                },
                key: "content",
                resizeObserver: f,
                listenerMap: l,
            });
        let eb = E(ec),
            ey = b(C);
        i.useImperativeHandle(
            _,
            () =>
                p(
                    {
                        getScrollerNode: () => ei.current,
                        getScrollerState: eo,
                        getItems: eb,
                        getSectionRowFromIndex: ey,
                    },
                    (0, u.rH)(ei, eo, ed, e_),
                ),
            [ei, eo, ey, eb, ed, e_],
        );
        let eO = i.useCallback(
            (e) => {
                eg(1),
                    null == ee.current ? er(!0) : clearTimeout(ee.current),
                    (ee.current = setTimeout(() => {
                        (ee.current = null), er(!1);
                    }, 200)),
                    null != v && v(e);
            },
            [v, eg],
        );
        return (
            i.useLayoutEffect(() => {
                2 !== ea.current.dirty && (ea.current.dirty = 2);
            }, [ec, w, x, L, U, el, es, ea]),
            (0, u.rS)({
                scrollerRef: ei,
                anchor: ep,
                getScrollerState: eo,
                listComputer: ed,
                getAnchorId: G,
                totalHeight: el,
            }),
            (0, r.jsxs)(
                "div",
                m(
                    p(
                        {
                            ref: ei,
                            onScroll: eO,
                            className: o()(g, {
                                [e]: !0,
                                [t]: F,
                                [n]: V,
                                [d.scrolling]: en,
                            }),
                            style: (0, u.uT)(Y),
                        },
                        $,
                    ),
                    {
                        children: [
                            i.useMemo(
                                () =>
                                    (0, r.jsx)(J, {
                                        id: W,
                                        role: K,
                                        "aria-label": z,
                                        "aria-multiselectable": q,
                                        "aria-orientation": Q,
                                        style: { height: el },
                                        className: o()(d.content, X),
                                        ref: et,
                                        children: (0, r.jsx)(c.Jc, {
                                            containerRef: et,
                                            children: y({
                                                items: ec,
                                                renderListHeader: M,
                                                stickyListHeader: k,
                                                renderSection: w,
                                                renderRow: x,
                                                renderFooter: L,
                                                wrapSection: U,
                                                spacerTop: es,
                                            }),
                                        }),
                                    }),
                                [J, W, K, z, q, Q, el, X, ec, M, k, w, x, L, U, es],
                            ),
                            i.useMemo(
                                () =>
                                    O({
                                        isSidebarVisible: eu,
                                        renderSidebar: j,
                                        sidebarHeight: R,
                                        isListVisible: 0 !== ec.length,
                                    }),
                                [eu, j, R, ec.length],
                            ),
                        ],
                    },
                ),
            )
        );
    });
}
