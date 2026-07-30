"use strict";
n.d(t, { $: () => S }), n(321073);
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(515029),
    o = n.n(l),
    d = n(259678),
    c = n(936005),
    u = n(448539),
    _ = n(154327),
    E = n(518898),
    A = n(715828),
    h = n(484702),
    I = n(403431);
let f = Object.freeze({ spacerTop: 0, totalHeight: 0, items: [], isSidebarVisible: !1 });
var p = n(789279),
    T = n(584648),
    m = n(751591),
    g = n(947876);
function S(e, t, n, a) {
    let l = (0, c.A)(e),
        S = new Map(),
        N =
            "u" < typeof document
                ? u.F
                : new a((e) => {
                      e.forEach((e) => {
                          let { target: t } = e;
                          S.get(t)?.(e);
                      });
                  });
    return r.forwardRef(function (a, c) {
        let C,
            O,
            {
                className: R,
                onScroll: L,
                onResize: D = null,
                onContentResize: y = null,
                dir: v = "ltr",
                sections: b,
                sectionHeight: M,
                rowHeight: P,
                footerHeight: U = 0,
                sidebarHeight: w,
                listHeaderHeight: G = 0,
                renderSection: x,
                renderRow: k,
                renderFooter: F,
                renderSidebar: V,
                renderListHeader: B,
                stickyListHeader: H,
                wrapSection: j,
                getAnchorId: W,
                paddingTop: Y,
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
            } = a,
            ea = r.useRef(null),
            es = r.useRef(null),
            [el, eo] = r.useState(!1),
            { scrollerRef: ed, scrollerState: ec, getScrollerState: eu } = (0, _.A)();
        (0, E.A)({ scrollerRef: ed, className: R, specs: l, orientation: "vertical", dir: v });
        let {
                spacerTop: e_,
                totalHeight: eE,
                items: eA,
                isSidebarVisible: eh,
                listComputer: eI,
                forceUpdateOnChunkChange: ef,
                anchor: ep,
            } = (function (e) {
                let {
                        sections: t,
                        sectionHeight: n,
                        rowHeight: i,
                        footerHeight: a,
                        sidebarHeight: s,
                        listHeaderHeight: l,
                        chunkSize: o = 256,
                        paddingTop: d = 0,
                        paddingBottom: c = 0,
                        getScrollerState: u,
                        getAnchorId: _,
                    } = e,
                    E = (0, h.A)(),
                    p = (0, r.useRef)(f),
                    [T] = (0, r.useState)(() => new A.A()),
                    {
                        dirty: m,
                        chunkStart: g,
                        chunkEnd: S,
                        forceUpdateOnChunkChange: N,
                    } = (0, I.A)({ chunkSize: o, getScrollerState: u, forceUpdate: E }),
                    { items: C } = p.current,
                    O = null,
                    { scrollTop: R } = u();
                for (let e of C) {
                    if (0 === R) break;
                    if ("footer" === e.type || "header" === e.type || null == e.anchorId) continue;
                    let t = "row" === e.type ? e.row : void 0;
                    if (e.offsetTop >= R) {
                        O = { id: e.anchorId, section: e.section, row: t, scrollOffset: e.offsetTop - R };
                        break;
                    }
                }
                let L = (0, r.useMemo)(() => {
                        let e = Math.max(0, g * o);
                        return null != s && e < s;
                    }, [o, g, s]),
                    D = (0, r.useMemo)(
                        () =>
                            m > 0
                                ? p.current
                                : (T.mergeProps({
                                      sectionHeight: n,
                                      rowHeight: i,
                                      footerHeight: a,
                                      listHeaderHeight: l,
                                      paddingBottom: c,
                                      paddingTop: d,
                                      sections: t,
                                      getAnchorId: _,
                                  }),
                                  T.compute(Math.max(0, g * o), S * o)),
                        [m, g, S, n, i, a, l, c, d, t, T, o, _],
                    );
                return (
                    (0, r.useLayoutEffect)(() => void (p.current = D)),
                    { ...D, listComputer: T, forceUpdateOnChunkChange: N, anchor: O, isSidebarVisible: L }
                );
            })({
                sections: b,
                sectionHeight: M,
                rowHeight: P,
                footerHeight: U,
                sidebarHeight: w,
                listHeaderHeight: G,
                paddingTop: Y,
                paddingBottom: K,
                chunkSize: q,
                getScrollerState: eu,
                getAnchorId: W,
            }),
            eT = (0, p.A)(ed),
            em = r.useRef(D),
            eg = r.useRef(y);
        r.useLayoutEffect(() => {
            (em.current = D), (eg.current = y);
        });
        let eS = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > ec.current.dirty && (ec.current.dirty = e), 2 === e && em.current?.(), ef(e);
                },
                [ef, ec],
            ),
            eN = r.useCallback(() => eS(), [eS]);
        (0, u.A)({ ref: ed, onUpdate: eN, key: "container", resizeObserver: N, listenerMap: S }),
            (0, u.A)({ ref: es, onUpdate: () => eg.current?.(), key: "content", resizeObserver: N, listenerMap: S });
        let eC =
                ((C = r.useRef(eA)),
                r.useEffect(() => {
                    C.current = eA;
                }, [eA]),
                r.useCallback(() => C.current, [])),
            eO =
                ((O = r.useRef(b)),
                r.useEffect(() => {
                    O.current = b;
                }, [b]),
                r.useCallback((e) => {
                    let { current: t } = O,
                        n = 0;
                    for (let i = 0; i < t.length; i++) {
                        let r = t[i];
                        if (n <= e && n + r >= e) return [i, e - n];
                        n += r;
                    }
                    return [0, 0];
                }, []));
        r.useImperativeHandle(
            c,
            () => ({
                getScrollerNode: () => ed.current,
                getScrollerState: eu,
                getItems: eC,
                getSectionRowFromIndex: eO,
                ...(function (e, t, n, i) {
                    let r = (0, T.A)(e, t, i);
                    function a(e, t) {
                        return n.computeScrollPosition(e, t);
                    }
                    return {
                        ...r,
                        getScrollPosition: a,
                        isItemVisible(e, n) {
                            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                [r, s] = a(e, n),
                                l = t();
                            return i
                                ? r >= l.scrollTop && r + s <= l.scrollTop + l.offsetHeight
                                : r + s >= l.scrollTop && r <= l.scrollTop + l.offsetHeight;
                        },
                        scrollToIndex(e) {
                            let { section: t, row: n, animate: i, callback: s, padding: l = 0 } = e,
                                [o, d] = a(t, n);
                            r.scrollIntoViewRect({ start: o, end: o + d, padding: l, animate: i, callback: s });
                        },
                    };
                })(ed, eu, eI, eT),
            }),
            [ed, eu, eO, eC, eI, eT],
        );
        let eR = r.useCallback(
            (e) => {
                eS(1),
                    null == ea.current ? eo(!0) : clearTimeout(ea.current),
                    (ea.current = setTimeout(() => {
                        (ea.current = null), eo(!1);
                    }, 200)),
                    null != L && L(e);
            },
            [L, eS],
        );
        return (
            r.useLayoutEffect(() => {
                2 !== ec.current.dirty && (ec.current.dirty = 2);
            }, [x, k, F, j, eE, e_, ec]),
            !(function (e) {
                let {
                    scrollerRef: t,
                    anchor: n,
                    getScrollerState: i,
                    listComputer: a,
                    getAnchorId: s,
                    totalHeight: l,
                } = e;
                (0, r.useLayoutEffect)(() => {
                    let { current: e } = t,
                        { scrollTop: r } = i();
                    function l(t) {
                        if (
                            null == n ||
                            null == s ||
                            null == e ||
                            t < 0 ||
                            t >= a.sections[n.section] ||
                            s(n.section, n.row) !== n.id
                        )
                            return !1;
                        let [i] = a.computeScrollPosition(n.section, t),
                            l = i - n.scrollOffset;
                        return r !== l && (e.scrollTop = l), !0;
                    }
                    null != n &&
                        null != n.row &&
                        null != e &&
                        null != s &&
                        0 !== r &&
                        (l(n.row) || l(n.row - 1) || l(n.row + 1));
                }, [l]);
            })({
                scrollerRef: ed,
                anchor: ep,
                getScrollerState: eu,
                listComputer: eI,
                getAnchorId: W,
                totalHeight: eE,
            }),
            (0, i.jsxs)("div", {
                ref: ed,
                onScroll: eR,
                className: s()(R, { [e]: !0, [t]: $, [n]: z, [g.qw]: el }),
                style: (0, m.Ay)(Z),
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
                                style: { height: eE },
                                className: s()(g.Qs, en),
                                ref: es,
                                children: (0, i.jsx)(d.xp, {
                                    containerRef: es,
                                    children: (function (e) {
                                        let {
                                                renderSection: t,
                                                renderRow: n,
                                                renderFooter: a,
                                                renderListHeader: s,
                                                stickyListHeader: l,
                                                wrapSection: d,
                                                items: c,
                                                spacerTop: u,
                                            } = e,
                                            _ = [
                                                (0, i.jsx)(
                                                    "div",
                                                    { "aria-hidden": !0, style: { height: u } },
                                                    "---list-spacer-top",
                                                ),
                                            ],
                                            E = [],
                                            A = 0;
                                        return (
                                            !0 === l &&
                                                null != s &&
                                                _.push((0, i.jsx)(r.Fragment, { children: s() }, "---sticky-header")),
                                            c.forEach((e) => {
                                                switch (
                                                    (e.section !== A &&
                                                        E.length > 0 &&
                                                        (_.push(d?.(A, E) ?? E), (E = [])),
                                                    (A = e.section ?? 0),
                                                    e.type)
                                                ) {
                                                    case "section":
                                                        null != t && E.push(t(e));
                                                        break;
                                                    case "row":
                                                        E.push(n(e));
                                                        break;
                                                    case "footer":
                                                        null != a && E.push(a(e));
                                                        break;
                                                    case "header":
                                                        null != s && !0 !== l && E.push(s());
                                                }
                                            }),
                                            E.length > 0 && _.push(d?.(A, E) ?? E),
                                            o()(_)
                                        );
                                    })({
                                        items: eA,
                                        renderListHeader: B,
                                        stickyListHeader: H,
                                        renderSection: x,
                                        renderRow: k,
                                        renderFooter: F,
                                        wrapSection: j,
                                        spacerTop: e_,
                                    }),
                                }),
                            }),
                        [ei, X, Q, J, ee, et, eE, en, eA, B, H, x, k, F, j, e_],
                    ),
                    r.useMemo(
                        () =>
                            (function (e) {
                                let { renderSidebar: t, sidebarHeight: n, isSidebarVisible: i, isListVisible: r } = e;
                                return null == n || null == t ? null : t(r, i);
                            })({
                                isSidebarVisible: eh,
                                renderSidebar: V,
                                sidebarHeight: w,
                                isListVisible: 0 !== eA.length,
                            }),
                        [eh, V, w, eA.length],
                    ),
                ],
            })
        );
    });
}
