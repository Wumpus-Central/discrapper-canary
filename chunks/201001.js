"use strict";
n.d(t, { $: () => S }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(656470),
    l = n.n(o),
    d = n(187322),
    _ = n(936005),
    u = n(154327),
    c = n(518898),
    E = n(715828),
    h = n(484702),
    m = n(403431);
let f = Object.freeze({ spacerTop: 0, totalHeight: 0, items: [], isSidebarVisible: !1 });
var g = n(789279),
    p = n(448539),
    A = n(584648),
    I = n(751591),
    T = n(45596);
function S(e, t, n, s) {
    let o = (0, _.A)(e),
        S = new Map(),
        N = new s((e) => {
            e.forEach((e) => {
                let { target: t } = e;
                S.get(t)?.(e);
            });
        });
    return r.forwardRef(function (s, _) {
        let C,
            R,
            {
                className: O,
                onScroll: y,
                onResize: v = null,
                onContentResize: D = null,
                dir: L = "ltr",
                sections: b,
                sectionHeight: w,
                rowHeight: P,
                footerHeight: k = 0,
                sidebarHeight: M,
                listHeaderHeight: U = 0,
                renderSection: x,
                renderRow: G,
                renderFooter: V,
                renderSidebar: F,
                renderListHeader: B,
                stickyListHeader: H,
                wrapSection: j,
                getAnchorId: W,
                paddingTop: Y,
                paddingBottom: K,
                fade: z = !1,
                customTheme: $ = !1,
                chunkSize: q,
                style: X,
                innerId: Z,
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
            { scrollerRef: ed, scrollerState: e_, getScrollerState: eu } = (0, u.A)();
        (0, c.A)({ scrollerRef: ed, className: O, specs: o, orientation: "vertical", dir: L });
        let {
                spacerTop: ec,
                totalHeight: eE,
                items: eh,
                isSidebarVisible: em,
                listComputer: ef,
                forceUpdateOnChunkChange: eg,
                anchor: ep,
            } = (function (e) {
                let {
                        sections: t,
                        sectionHeight: n,
                        rowHeight: i,
                        footerHeight: s,
                        sidebarHeight: a,
                        listHeaderHeight: o,
                        chunkSize: l = 256,
                        paddingTop: d = 0,
                        paddingBottom: _ = 0,
                        getScrollerState: u,
                        getAnchorId: c,
                    } = e,
                    g = (0, h.A)(),
                    p = (0, r.useRef)(f),
                    [A] = (0, r.useState)(() => new E.A()),
                    {
                        dirty: I,
                        chunkStart: T,
                        chunkEnd: S,
                        forceUpdateOnChunkChange: N,
                    } = (0, m.A)({ chunkSize: l, getScrollerState: u, forceUpdate: g }),
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
                let y = (0, r.useMemo)(() => {
                        let e = Math.max(0, T * l);
                        return null != a && e < a;
                    }, [l, T, a]),
                    v = (0, r.useMemo)(
                        () =>
                            I > 0
                                ? p.current
                                : (A.mergeProps({
                                      sectionHeight: n,
                                      rowHeight: i,
                                      footerHeight: s,
                                      listHeaderHeight: o,
                                      paddingBottom: _,
                                      paddingTop: d,
                                      sections: t,
                                      getAnchorId: c,
                                  }),
                                  A.compute(Math.max(0, T * l), S * l)),
                        [I, T, S, n, i, s, o, _, d, t, A, l, c],
                    );
                return (
                    (0, r.useLayoutEffect)(() => void (p.current = v)),
                    { ...v, listComputer: A, forceUpdateOnChunkChange: N, anchor: R, isSidebarVisible: y }
                );
            })({
                sections: b,
                sectionHeight: w,
                rowHeight: P,
                footerHeight: k,
                sidebarHeight: M,
                listHeaderHeight: U,
                paddingTop: Y,
                paddingBottom: K,
                chunkSize: q,
                getScrollerState: eu,
                getAnchorId: W,
            }),
            eA = (0, g.A)(ed),
            eI = r.useRef(v),
            eT = r.useRef(D);
        r.useLayoutEffect(() => {
            (eI.current = v), (eT.current = D);
        });
        let eS = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > e_.current.dirty && (e_.current.dirty = e), 2 === e && eI.current?.(), eg(e);
                },
                [eg, e_],
            ),
            eN = r.useCallback(() => eS(), [eS]);
        (0, p.A)({ ref: ed, onUpdate: eN, key: "container", resizeObserver: N, listenerMap: S }),
            (0, p.A)({ ref: ea, onUpdate: () => eT.current?.(), key: "content", resizeObserver: N, listenerMap: S });
        let eC =
                ((C = r.useRef(eh)),
                r.useEffect(() => {
                    C.current = eh;
                }, [eh]),
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
        r.useImperativeHandle(_, () => {
            let e, t;
            return {
                getScrollerNode: () => ed.current,
                getScrollerState: eu,
                getItems: eC,
                getSectionRowFromIndex: eR,
                ...((e = (0, A.A)(ed, eu, eA)),
                (t = (e, t) => ef.computeScrollPosition(e, t)),
                {
                    ...e,
                    getScrollPosition: t,
                    isItemVisible(e, n) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            [r, s] = t(e, n),
                            a = eu();
                        return i
                            ? r >= a.scrollTop && r + s <= a.scrollTop + a.offsetHeight
                            : r + s >= a.scrollTop && r <= a.scrollTop + a.offsetHeight;
                    },
                    scrollToIndex(n) {
                        let { section: i, row: r, animate: s, callback: a, padding: o = 0 } = n,
                            [l, d] = t(i, r);
                        e.scrollIntoViewRect({ start: l, end: l + d, padding: o, animate: s, callback: a });
                    },
                }),
            };
        }, [ed, eu, eR, eC, ef, eA]);
        let eO = r.useCallback(
            (e) => {
                eS(1),
                    null == es.current ? el(!0) : clearTimeout(es.current),
                    (es.current = setTimeout(() => {
                        (es.current = null), el(!1);
                    }, 200)),
                    null != y && y(e);
            },
            [y, eS],
        );
        return (
            r.useLayoutEffect(() => {
                2 !== e_.current.dirty && (e_.current.dirty = 2);
            }, [x, G, V, j, eE, ec, e_]),
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
                scrollerRef: ed,
                anchor: ep,
                getScrollerState: eu,
                listComputer: ef,
                getAnchorId: W,
                totalHeight: eE,
            }),
            (0, i.jsxs)("div", {
                ref: ed,
                onScroll: eO,
                className: a()(O, { [e]: !0, [t]: z, [n]: $, [T.qw]: eo }),
                style: (0, I.Ay)(X),
                ...er,
                children: [
                    r.useMemo(
                        () =>
                            (0, i.jsx)(ei, {
                                id: Z,
                                role: Q,
                                "aria-label": J,
                                "aria-multiselectable": ee,
                                "aria-orientation": et,
                                style: { height: eE },
                                className: a()(T.Qs, en),
                                ref: ea,
                                children: (0, i.jsx)(d.xp, {
                                    containerRef: ea,
                                    children: (function (e) {
                                        let {
                                                renderSection: t,
                                                renderRow: n,
                                                renderFooter: s,
                                                renderListHeader: a,
                                                stickyListHeader: o,
                                                wrapSection: d,
                                                items: _,
                                                spacerTop: u,
                                            } = e,
                                            c = [
                                                (0, i.jsx)(
                                                    "div",
                                                    { "aria-hidden": !0, style: { height: u } },
                                                    "---list-spacer-top",
                                                ),
                                            ],
                                            E = [],
                                            h = 0;
                                        return (
                                            !0 === o &&
                                                null != a &&
                                                c.push((0, i.jsx)(r.Fragment, { children: a() }, "---sticky-header")),
                                            _.forEach((e) => {
                                                switch (
                                                    (e.section !== h &&
                                                        E.length > 0 &&
                                                        (c.push(d?.(h, E) ?? E), (E = [])),
                                                    (h = e.section ?? 0),
                                                    e.type)
                                                ) {
                                                    case "section":
                                                        null != t && E.push(t(e));
                                                        break;
                                                    case "row":
                                                        E.push(n(e));
                                                        break;
                                                    case "footer":
                                                        null != s && E.push(s(e));
                                                        break;
                                                    case "header":
                                                        null != a && !0 !== o && E.push(a());
                                                }
                                            }),
                                            E.length > 0 && c.push(d?.(h, E) ?? E),
                                            l()(c)
                                        );
                                    })({
                                        items: eh,
                                        renderListHeader: B,
                                        stickyListHeader: H,
                                        renderSection: x,
                                        renderRow: G,
                                        renderFooter: V,
                                        wrapSection: j,
                                        spacerTop: ec,
                                    }),
                                }),
                            }),
                        [ei, Z, Q, J, ee, et, eE, en, eh, B, H, x, G, V, j, ec],
                    ),
                    r.useMemo(
                        () =>
                            (function (e) {
                                let { renderSidebar: t, sidebarHeight: n, isSidebarVisible: i, isListVisible: r } = e;
                                return null == n || null == t ? null : t(r, i);
                            })({
                                isSidebarVisible: em,
                                renderSidebar: F,
                                sidebarHeight: M,
                                isListVisible: 0 !== eh.length,
                            }),
                        [em, F, M, eh.length],
                    ),
                ],
            })
        );
    });
}
