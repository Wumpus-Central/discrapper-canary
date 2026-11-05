(n.d(t, { $: () => g }), n(321073));
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(515029),
    o = n.n(l),
    d = n(330573),
    c = n(448539),
    u = n(154327),
    _ = n(715828),
    E = n(484702),
    A = n(403431);
let h = Object.freeze({ spacerTop: 0, totalHeight: 0, items: [], isSidebarVisible: !1 });
var f = n(354730),
    I = n(584648),
    p = n(751591),
    m = n(6095);
function g(e, t, n, a) {
    let l = new Map(),
        g =
            "u" < typeof document
                ? c.F
                : new a((e) => {
                      e.forEach((e) => {
                          let { target: t } = e;
                          l.get(t)?.(e);
                      });
                  });
    return function (a) {
        let T,
            S,
            {
                className: N,
                onScroll: C,
                onResize: O = null,
                onContentResize: R = null,
                sections: L,
                sectionHeight: y,
                rowHeight: D,
                footerHeight: b = 0,
                sidebarHeight: v,
                listHeaderHeight: P = 0,
                renderSection: M,
                renderRow: U,
                renderFooter: w,
                renderSidebar: G,
                renderListHeader: x,
                stickyListHeader: k,
                wrapSection: F,
                getAnchorId: B,
                paddingTop: V,
                paddingBottom: H,
                scrollbarGutter: j = "stable",
                fade: W = !1,
                customTheme: Y = !1,
                chunkSize: K,
                style: $,
                innerId: X,
                innerRole: z,
                innerAriaLabel: q,
                innerAriaMultiselectable: Z,
                innerAriaOrientation: Q,
                innerClassName: J,
                innerTag: ee = "div",
                disableFocusRingScope: et = !1,
                ref: en,
                ...ei
            } = a,
            er = r.useRef(null),
            ea = r.useRef(null),
            [es, el] = r.useState(!1),
            { scrollerRef: eo, scrollerState: ed, getScrollerState: ec } = (0, u.A)(),
            {
                spacerTop: eu,
                totalHeight: e_,
                items: eE,
                isSidebarVisible: eA,
                listComputer: eh,
                forceUpdateOnChunkChange: ef,
                anchor: eI,
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
                        getAnchorId: f,
                    } = e,
                    I = (0, E.A)(),
                    p = (0, r.useRef)(h),
                    [m] = (0, r.useState)(() => new _.A()),
                    {
                        dirty: g,
                        chunkStart: T,
                        chunkEnd: S,
                        forceUpdateOnChunkChange: N,
                    } = (0, A.A)({ chunkSize: o, getScrollerState: u, forceUpdate: I }),
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
                        let e = Math.max(0, T * o);
                        return null != s && e < s;
                    }, [o, T, s]),
                    y = (0, r.useMemo)(
                        () =>
                            g > 0
                                ? p.current
                                : (m.mergeProps({
                                      sectionHeight: n,
                                      rowHeight: i,
                                      footerHeight: a,
                                      listHeaderHeight: l,
                                      paddingBottom: c,
                                      paddingTop: d,
                                      sections: t,
                                      getAnchorId: f,
                                  }),
                                  m.compute(Math.max(0, T * o), S * o)),
                        [g, T, S, n, i, a, l, c, d, t, m, o, f],
                    );
                return (
                    (0, r.useLayoutEffect)(() => {
                        p.current = y;
                    }),
                    { ...y, listComputer: m, forceUpdateOnChunkChange: N, anchor: O, isSidebarVisible: L }
                );
            })({
                sections: L,
                sectionHeight: y,
                rowHeight: D,
                footerHeight: b,
                sidebarHeight: v,
                listHeaderHeight: P,
                paddingTop: V,
                paddingBottom: H,
                chunkSize: K,
                getScrollerState: ec,
                getAnchorId: B,
            }),
            ep = (0, f.A)(eo),
            em = r.useRef(O),
            eg = r.useRef(R);
        r.useLayoutEffect(() => {
            ((em.current = O), (eg.current = R));
        });
        let eT = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    (e > ed.current.dirty && (ed.current.dirty = e), 2 === e && em.current?.(), ef(e));
                },
                [ef, ed],
            ),
            eS = r.useCallback(() => eT(), [eT]);
        ((0, c.A)({ ref: eo, onUpdate: eS, key: "container", resizeObserver: g, listenerMap: l }),
            (0, c.A)({ ref: ea, onUpdate: () => eg.current?.(), key: "content", resizeObserver: g, listenerMap: l }));
        let eN =
                ((T = r.useRef(eE)),
                r.useEffect(() => {
                    T.current = eE;
                }, [eE]),
                r.useCallback(() => T.current, [])),
            eC =
                ((S = r.useRef(L)),
                r.useEffect(() => {
                    S.current = L;
                }, [L]),
                r.useCallback((e) => {
                    let { current: t } = S,
                        n = 0;
                    for (let i = 0; i < t.length; i++) {
                        let r = t[i];
                        if (n <= e && n + r >= e) return [i, e - n];
                        n += r;
                    }
                    return [0, 0];
                }, []));
        r.useImperativeHandle(
            en,
            () => ({
                getScrollerNode: () => eo.current,
                getScrollerState: ec,
                getItems: eN,
                getSectionRowFromIndex: eC,
                ...(function (e, t, n, i) {
                    let r = (0, I.A)(e, t, i);
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
                })(eo, ec, eh, ep),
            }),
            [eo, ec, eC, eN, eh, ep],
        );
        let eO = r.useCallback(
            (e) => {
                (eT(1),
                    null == er.current ? el(!0) : clearTimeout(er.current),
                    (er.current = setTimeout(() => {
                        ((er.current = null), el(!1));
                    }, 200)),
                    null != C && C(e));
            },
            [C, eT],
        );
        return (
            r.useLayoutEffect(() => {
                2 !== ed.current.dirty && (ed.current.dirty = 2);
            }, [M, U, w, F, e_, eu, ed]),
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
                        return (r !== l && (e.scrollTop = l), !0);
                    }
                    null != n &&
                        null != n.row &&
                        null != e &&
                        null != s &&
                        0 !== r &&
                        (l(n.row) || l(n.row - 1) || l(n.row + 1));
                }, [l]);
            })({
                scrollerRef: eo,
                anchor: eI,
                getScrollerState: ec,
                listComputer: eh,
                getAnchorId: B,
                totalHeight: e_,
            }),
            (0, i.jsxs)("div", {
                ref: eo,
                onScroll: eO,
                className: s()(N, !1 === j ? void 0 : "stable" === j ? m.x2 : m.GV, {
                    [e]: !0,
                    [t]: W,
                    [n]: Y,
                    [m.qw]: es,
                }),
                style: (0, p.Ay)($),
                ...ei,
                children: [
                    r.useMemo(
                        () =>
                            (0, i.jsx)(ee, {
                                id: X,
                                role: z,
                                "aria-label": q,
                                "aria-multiselectable": Z,
                                "aria-orientation": Q,
                                style: { height: e_ },
                                className: s()(m.Qs, J),
                                ref: ea,
                                children: (0, i.jsx)(d.t, {
                                    disableFocusRingScope: et,
                                    containerRef: ea,
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
                                        items: eE,
                                        renderListHeader: x,
                                        stickyListHeader: k,
                                        renderSection: M,
                                        renderRow: U,
                                        renderFooter: w,
                                        wrapSection: F,
                                        spacerTop: eu,
                                    }),
                                }),
                            }),
                        [ee, X, z, q, Z, Q, e_, J, eE, x, k, M, U, w, F, eu, et],
                    ),
                    r.useMemo(
                        () =>
                            (function (e) {
                                let { renderSidebar: t, sidebarHeight: n, isSidebarVisible: i, isListVisible: r } = e;
                                return null == n || null == t ? null : t(r, i);
                            })({
                                isSidebarVisible: eA,
                                renderSidebar: G,
                                sidebarHeight: v,
                                isListVisible: 0 !== eE.length,
                            }),
                        [eA, G, v, eE.length],
                    ),
                ],
            })
        );
    };
}
