"use strict";
n.d(t, { $: () => S }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(656470),
    l = n.n(o),
    u = n(187322),
    c = n(936005),
    d = n(154327),
    _ = n(518898),
    h = n(715828),
    f = n(484702),
    p = n(403431);
let E = Object.freeze({ spacerTop: 0, totalHeight: 0, items: [], isSidebarVisible: !1 });
var m = n(789279),
    g = n(448539),
    A = n(584648),
    I = n(751591),
    T = n(45596);
function S(e, t, n, s) {
    let o = (0, c.A)(e),
        S = new Map(),
        y = new s((e) => {
            e.forEach((e) => {
                let { target: t } = e;
                S.get(t)?.(e);
            });
        });
    return r.forwardRef(function (s, c) {
        let C,
            N,
            {
                className: v,
                onScroll: R,
                onResize: O = null,
                onContentResize: b = null,
                dir: D = "ltr",
                sections: L,
                sectionHeight: w,
                rowHeight: M,
                footerHeight: P = 0,
                sidebarHeight: x,
                listHeaderHeight: k = 0,
                renderSection: U,
                renderRow: G,
                renderFooter: F,
                renderSidebar: V,
                renderListHeader: B,
                stickyListHeader: j,
                wrapSection: H,
                getAnchorId: Y,
                paddingTop: W,
                paddingBottom: K,
                fade: $ = !1,
                customTheme: z = !1,
                chunkSize: q,
                style: Z,
                innerId: X,
                innerRole: Q,
                innerAriaLabel: J,
                innerAriaMultiselectable: ee,
                innerAriaOrientation: et,
                innerClassName: en,
                innerTag: ei = "div",
                ...er
            } = s,
            es = r.useRef(null),
            ea = r.useRef(null),
            [eo, el] = r.useState(!1),
            { scrollerRef: eu, scrollerState: ec, getScrollerState: ed } = (0, d.A)();
        (0, _.A)({ scrollerRef: eu, className: v, specs: o, orientation: "vertical", dir: D });
        let {
                spacerTop: e_,
                totalHeight: eh,
                items: ef,
                isSidebarVisible: ep,
                listComputer: eE,
                forceUpdateOnChunkChange: em,
                anchor: eg,
            } = (function (e) {
                let {
                        sections: t,
                        sectionHeight: n,
                        rowHeight: i,
                        footerHeight: s,
                        sidebarHeight: a,
                        listHeaderHeight: o,
                        chunkSize: l = 256,
                        paddingTop: u = 0,
                        paddingBottom: c = 0,
                        getScrollerState: d,
                        getAnchorId: _,
                    } = e,
                    m = (0, f.A)(),
                    g = (0, r.useRef)(E),
                    [A] = (0, r.useState)(() => new h.A()),
                    {
                        dirty: I,
                        chunkStart: T,
                        chunkEnd: S,
                        forceUpdateOnChunkChange: y,
                    } = (0, p.A)({ chunkSize: l, getScrollerState: d, forceUpdate: m }),
                    { items: C } = g.current,
                    N = null,
                    { scrollTop: v } = d();
                for (let e of C) {
                    if (0 === v) break;
                    if ("footer" === e.type || "header" === e.type || null == e.anchorId) continue;
                    let t = "row" === e.type ? e.row : void 0;
                    if (e.offsetTop >= v) {
                        N = { id: e.anchorId, section: e.section, row: t, scrollOffset: e.offsetTop - v };
                        break;
                    }
                }
                let R = (0, r.useMemo)(() => {
                        let e = Math.max(0, T * l);
                        return null != a && e < a;
                    }, [l, T, a]),
                    O = (0, r.useMemo)(
                        () =>
                            I > 0
                                ? g.current
                                : (A.mergeProps({
                                      sectionHeight: n,
                                      rowHeight: i,
                                      footerHeight: s,
                                      listHeaderHeight: o,
                                      paddingBottom: c,
                                      paddingTop: u,
                                      sections: t,
                                      getAnchorId: _,
                                  }),
                                  A.compute(Math.max(0, T * l), S * l)),
                        [I, T, S, n, i, s, o, c, u, t, A, l, _],
                    );
                return (
                    (0, r.useLayoutEffect)(() => void (g.current = O)),
                    { ...O, listComputer: A, forceUpdateOnChunkChange: y, anchor: N, isSidebarVisible: R }
                );
            })({
                sections: L,
                sectionHeight: w,
                rowHeight: M,
                footerHeight: P,
                sidebarHeight: x,
                listHeaderHeight: k,
                paddingTop: W,
                paddingBottom: K,
                chunkSize: q,
                getScrollerState: ed,
                getAnchorId: Y,
            }),
            eA = (0, m.A)(eu),
            eI = r.useRef(O),
            eT = r.useRef(b);
        r.useLayoutEffect(() => {
            (eI.current = O), (eT.current = b);
        });
        let eS = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > ec.current.dirty && (ec.current.dirty = e), 2 === e && eI.current?.(), em(e);
                },
                [em, ec],
            ),
            ey = r.useCallback(() => eS(), [eS]);
        (0, g.A)({ ref: eu, onUpdate: ey, key: "container", resizeObserver: y, listenerMap: S }),
            (0, g.A)({ ref: ea, onUpdate: () => eT.current?.(), key: "content", resizeObserver: y, listenerMap: S });
        let eC =
                ((C = r.useRef(ef)),
                r.useEffect(() => {
                    C.current = ef;
                }, [ef]),
                r.useCallback(() => C.current, [])),
            eN =
                ((N = r.useRef(L)),
                r.useEffect(() => {
                    N.current = L;
                }, [L]),
                r.useCallback((e) => {
                    let { current: t } = N,
                        n = 0;
                    for (let i = 0; i < t.length; i++) {
                        let r = t[i];
                        if (n <= e && n + r >= e) return [i, e - n];
                        n += r;
                    }
                    return [0, 0];
                }, []));
        r.useImperativeHandle(c, () => {
            let e, t;
            return {
                getScrollerNode: () => eu.current,
                getScrollerState: ed,
                getItems: eC,
                getSectionRowFromIndex: eN,
                ...((e = (0, A.A)(eu, ed, eA)),
                (t = (e, t) => eE.computeScrollPosition(e, t)),
                {
                    ...e,
                    getScrollPosition: t,
                    isItemVisible(e, n) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            [r, s] = t(e, n),
                            a = ed();
                        return i
                            ? r >= a.scrollTop && r + s <= a.scrollTop + a.offsetHeight
                            : r + s >= a.scrollTop && r <= a.scrollTop + a.offsetHeight;
                    },
                    scrollToIndex(n) {
                        let { section: i, row: r, animate: s, callback: a, padding: o = 0 } = n,
                            [l, u] = t(i, r);
                        e.scrollIntoViewRect({ start: l, end: l + u, padding: o, animate: s, callback: a });
                    },
                }),
            };
        }, [eu, ed, eN, eC, eE, eA]);
        let ev = r.useCallback(
            (e) => {
                eS(1),
                    null == es.current ? el(!0) : clearTimeout(es.current),
                    (es.current = setTimeout(() => {
                        (es.current = null), el(!1);
                    }, 200)),
                    null != R && R(e);
            },
            [R, eS],
        );
        return (
            r.useLayoutEffect(() => {
                2 !== ec.current.dirty && (ec.current.dirty = 2);
            }, [U, G, F, H, eh, e_, ec]),
            !(function (e) {
                let {
                    scrollerRef: t,
                    anchor: n,
                    getScrollerState: i,
                    listComputer: s,
                    getAnchorId: a,
                    totalHeight: o,
                } = e;
                (0, r.useLayoutEffect)(() => {
                    let { current: e } = t,
                        { scrollTop: r } = i();
                    if (null == n || null == n.row || null == e || null == a || 0 === r) return;
                    let o = (t) => {
                        if (t < 0 || t >= s.sections[n.section] || a(n.section, n.row) !== n.id) return !1;
                        let [i] = s.computeScrollPosition(n.section, t),
                            o = i - n.scrollOffset;
                        return r !== o && (e.scrollTop = o), !0;
                    };
                    o(n.row) || o(n.row - 1) || o(n.row + 1);
                }, [o]);
            })({
                scrollerRef: eu,
                anchor: eg,
                getScrollerState: ed,
                listComputer: eE,
                getAnchorId: Y,
                totalHeight: eh,
            }),
            (0, i.jsxs)("div", {
                ref: eu,
                onScroll: ev,
                className: a()(v, { [e]: !0, [t]: $, [n]: z, [T.qw]: eo }),
                style: (0, I.Ay)(Z),
                ...er,
                children: [
                    r.useMemo(
                        () =>
                            (0, i.jsx)(ei, {
                                id: X,
                                role: Q,
                                "aria-label": J,
                                "aria-multiselectable": ee,
                                "aria-orientation": et,
                                style: { height: eh },
                                className: a()(T.Qs, en),
                                ref: ea,
                                children: (0, i.jsx)(u.xp, {
                                    containerRef: ea,
                                    children: (function (e) {
                                        let {
                                                renderSection: t,
                                                renderRow: n,
                                                renderFooter: s,
                                                renderListHeader: a,
                                                stickyListHeader: o,
                                                wrapSection: u,
                                                items: c,
                                                spacerTop: d,
                                            } = e,
                                            _ = [
                                                (0, i.jsx)(
                                                    "div",
                                                    { "aria-hidden": !0, style: { height: d } },
                                                    "---list-spacer-top",
                                                ),
                                            ],
                                            h = [],
                                            f = 0;
                                        return (
                                            !0 === o &&
                                                null != a &&
                                                _.push((0, i.jsx)(r.Fragment, { children: a() }, "---sticky-header")),
                                            c.forEach((e) => {
                                                switch (
                                                    (e.section !== f &&
                                                        h.length > 0 &&
                                                        (_.push(u?.(f, h) ?? h), (h = [])),
                                                    (f = e.section ?? 0),
                                                    e.type)
                                                ) {
                                                    case "section":
                                                        null != t && h.push(t(e));
                                                        break;
                                                    case "row":
                                                        h.push(n(e));
                                                        break;
                                                    case "footer":
                                                        null != s && h.push(s(e));
                                                        break;
                                                    case "header":
                                                        null != a && !0 !== o && h.push(a());
                                                }
                                            }),
                                            h.length > 0 && _.push(u?.(f, h) ?? h),
                                            l()(_)
                                        );
                                    })({
                                        items: ef,
                                        renderListHeader: B,
                                        stickyListHeader: j,
                                        renderSection: U,
                                        renderRow: G,
                                        renderFooter: F,
                                        wrapSection: H,
                                        spacerTop: e_,
                                    }),
                                }),
                            }),
                        [ei, X, Q, J, ee, et, eh, en, ef, B, j, U, G, F, H, e_],
                    ),
                    r.useMemo(
                        () =>
                            (function (e) {
                                let { renderSidebar: t, sidebarHeight: n, isSidebarVisible: i, isListVisible: r } = e;
                                return null == n || null == t ? null : t(r, i);
                            })({
                                isSidebarVisible: ep,
                                renderSidebar: V,
                                sidebarHeight: x,
                                isListVisible: 0 !== ef.length,
                            }),
                        [ep, V, x, ef.length],
                    ),
                ],
            })
        );
    });
}
