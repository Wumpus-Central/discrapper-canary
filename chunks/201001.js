"use strict";
n.d(t, { $: () => S }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(656470),
    o = n.n(l),
    d = n(187322),
    c = n(936005),
    u = n(154327),
    _ = n(518898),
    E = n(715828),
    A = n(484702),
    h = n(403431);
let I = Object.freeze({ spacerTop: 0, totalHeight: 0, items: [], isSidebarVisible: !1 });
var f = n(789279),
    p = n(448539),
    T = n(584648),
    m = n(751591),
    g = n(45596);
function S(e, t, n, a) {
    let l = (0, c.A)(e),
        S = new Map(),
        N = new a((e) => {
            e.forEach((e) => {
                let { target: t } = e;
                S.get(t)?.(e);
            });
        });
    return r.forwardRef(function (a, c) {
        let C,
            R,
            {
                className: O,
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
            { scrollerRef: ed, scrollerState: ec, getScrollerState: eu } = (0, u.A)();
        (0, _.A)({ scrollerRef: ed, className: O, specs: l, orientation: "vertical", dir: v });
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
                    f = (0, A.A)(),
                    p = (0, r.useRef)(I),
                    [T] = (0, r.useState)(() => new E.A()),
                    {
                        dirty: m,
                        chunkStart: g,
                        chunkEnd: S,
                        forceUpdateOnChunkChange: N,
                    } = (0, h.A)({ chunkSize: o, getScrollerState: u, forceUpdate: f }),
                    { items: C } = p.current,
                    R = null,
                    { scrollTop: O } = u();
                for (let e of C) {
                    if (0 === O) break;
                    if ("footer" === e.type || "header" === e.type || null == e.anchorId) continue;
                    let t = "row" === e.type ? e.row : void 0;
                    if (e.offsetTop >= O) {
                        R = { id: e.anchorId, section: e.section, row: t, scrollOffset: e.offsetTop - O };
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
                    { ...D, listComputer: T, forceUpdateOnChunkChange: N, anchor: R, isSidebarVisible: L }
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
            eT = (0, f.A)(ed),
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
        (0, p.A)({ ref: ed, onUpdate: eN, key: "container", resizeObserver: N, listenerMap: S }),
            (0, p.A)({ ref: es, onUpdate: () => eg.current?.(), key: "content", resizeObserver: N, listenerMap: S });
        let eC =
                ((C = r.useRef(eA)),
                r.useEffect(() => {
                    C.current = eA;
                }, [eA]),
                r.useCallback(() => C.current, [])),
            eR =
                ((R = r.useRef(b)),
                r.useEffect(() => {
                    R.current = b;
                }, [b]),
                r.useCallback((e) => {
                    let { current: t } = R,
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
                getScrollerNode: () => ed.current,
                getScrollerState: eu,
                getItems: eC,
                getSectionRowFromIndex: eR,
                ...((e = (0, T.A)(ed, eu, eT)),
                (t = (e, t) => eI.computeScrollPosition(e, t)),
                {
                    ...e,
                    getScrollPosition: t,
                    isItemVisible(e, n) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            [r, a] = t(e, n),
                            s = eu();
                        return i
                            ? r >= s.scrollTop && r + a <= s.scrollTop + s.offsetHeight
                            : r + a >= s.scrollTop && r <= s.scrollTop + s.offsetHeight;
                    },
                    scrollToIndex(n) {
                        let { section: i, row: r, animate: a, callback: s, padding: l = 0 } = n,
                            [o, d] = t(i, r);
                        e.scrollIntoViewRect({ start: o, end: o + d, padding: l, animate: a, callback: s });
                    },
                }),
            };
        }, [ed, eu, eR, eC, eI, eT]);
        let eO = r.useCallback(
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
                    if (null == n || null == n.row || null == e || null == s || 0 === r) return;
                    let l = (t) => {
                        if (t < 0 || t >= a.sections[n.section] || s(n.section, n.row) !== n.id) return !1;
                        let [i] = a.computeScrollPosition(n.section, t),
                            l = i - n.scrollOffset;
                        return r !== l && (e.scrollTop = l), !0;
                    };
                    l(n.row) || l(n.row - 1) || l(n.row + 1);
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
                onScroll: eO,
                className: s()(O, { [e]: !0, [t]: $, [n]: z, [g.qw]: el }),
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
