(n.d(t, { $: () => m }), n(321073));
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(515029),
    o = n.n(l),
    d = n(559106),
    c = n(448539),
    u = n(154327),
    _ = n(715828),
    E = n(484702),
    A = n(403431);
let h = Object.freeze({ spacerTop: 0, totalHeight: 0, items: [], isSidebarVisible: !1 });
var f = n(789279),
    I = n(584648),
    p = n(751591),
    T = n(6095);
function m(e, t, n, a) {
    let l = new Map(),
        m =
            "u" < typeof document
                ? c.F
                : new a((e) => {
                      e.forEach((e) => {
                          let { target: t } = e;
                          l.get(t)?.(e);
                      });
                  });
    return function (a) {
        let g,
            S,
            {
                className: N,
                onScroll: C,
                onResize: O = null,
                onContentResize: R = null,
                sections: L,
                sectionHeight: y,
                rowHeight: D,
                footerHeight: v = 0,
                sidebarHeight: b,
                listHeaderHeight: M = 0,
                renderSection: P,
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
                innerId: z,
                innerRole: X,
                innerAriaLabel: Z,
                innerAriaMultiselectable: q,
                innerAriaOrientation: Q,
                innerClassName: J,
                innerTag: ee = "div",
                ref: et,
                ...en
            } = a,
            ei = r.useRef(null),
            er = r.useRef(null),
            [ea, es] = r.useState(!1),
            { scrollerRef: el, scrollerState: eo, getScrollerState: ed } = (0, u.A)(),
            {
                spacerTop: ec,
                totalHeight: eu,
                items: e_,
                isSidebarVisible: eE,
                listComputer: eA,
                forceUpdateOnChunkChange: eh,
                anchor: ef,
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
                    [T] = (0, r.useState)(() => new _.A()),
                    {
                        dirty: m,
                        chunkStart: g,
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
                        let e = Math.max(0, g * o);
                        return null != s && e < s;
                    }, [o, g, s]),
                    y = (0, r.useMemo)(
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
                                      getAnchorId: f,
                                  }),
                                  T.compute(Math.max(0, g * o), S * o)),
                        [m, g, S, n, i, a, l, c, d, t, T, o, f],
                    );
                return (
                    (0, r.useLayoutEffect)(() => {
                        p.current = y;
                    }),
                    { ...y, listComputer: T, forceUpdateOnChunkChange: N, anchor: O, isSidebarVisible: L }
                );
            })({
                sections: L,
                sectionHeight: y,
                rowHeight: D,
                footerHeight: v,
                sidebarHeight: b,
                listHeaderHeight: M,
                paddingTop: V,
                paddingBottom: H,
                chunkSize: K,
                getScrollerState: ed,
                getAnchorId: B,
            }),
            eI = (0, f.A)(el),
            ep = r.useRef(O),
            eT = r.useRef(R);
        r.useLayoutEffect(() => {
            ((ep.current = O), (eT.current = R));
        });
        let em = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    (e > eo.current.dirty && (eo.current.dirty = e), 2 === e && ep.current?.(), eh(e));
                },
                [eh, eo],
            ),
            eg = r.useCallback(() => em(), [em]);
        ((0, c.A)({ ref: el, onUpdate: eg, key: "container", resizeObserver: m, listenerMap: l }),
            (0, c.A)({ ref: er, onUpdate: () => eT.current?.(), key: "content", resizeObserver: m, listenerMap: l }));
        let eS =
                ((g = r.useRef(e_)),
                r.useEffect(() => {
                    g.current = e_;
                }, [e_]),
                r.useCallback(() => g.current, [])),
            eN =
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
            et,
            () => ({
                getScrollerNode: () => el.current,
                getScrollerState: ed,
                getItems: eS,
                getSectionRowFromIndex: eN,
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
                })(el, ed, eA, eI),
            }),
            [el, ed, eN, eS, eA, eI],
        );
        let eC = r.useCallback(
            (e) => {
                (em(1),
                    null == ei.current ? es(!0) : clearTimeout(ei.current),
                    (ei.current = setTimeout(() => {
                        ((ei.current = null), es(!1));
                    }, 200)),
                    null != C && C(e));
            },
            [C, em],
        );
        return (
            r.useLayoutEffect(() => {
                2 !== eo.current.dirty && (eo.current.dirty = 2);
            }, [P, U, w, F, eu, ec, eo]),
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
                scrollerRef: el,
                anchor: ef,
                getScrollerState: ed,
                listComputer: eA,
                getAnchorId: B,
                totalHeight: eu,
            }),
            (0, i.jsxs)("div", {
                ref: el,
                onScroll: eC,
                className: s()(N, !1 === j ? void 0 : "stable" === j ? T.x2 : T.GV, {
                    [e]: !0,
                    [t]: W,
                    [n]: Y,
                    [T.qw]: ea,
                }),
                style: (0, p.Ay)($),
                ...en,
                children: [
                    r.useMemo(
                        () =>
                            (0, i.jsx)(ee, {
                                id: z,
                                role: X,
                                "aria-label": Z,
                                "aria-multiselectable": q,
                                "aria-orientation": Q,
                                style: { height: eu },
                                className: s()(T.Qs, J),
                                ref: er,
                                children: (0, i.jsx)(d.xp, {
                                    containerRef: er,
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
                                        items: e_,
                                        renderListHeader: x,
                                        stickyListHeader: k,
                                        renderSection: P,
                                        renderRow: U,
                                        renderFooter: w,
                                        wrapSection: F,
                                        spacerTop: ec,
                                    }),
                                }),
                            }),
                        [ee, z, X, Z, q, Q, eu, J, e_, x, k, P, U, w, F, ec],
                    ),
                    r.useMemo(
                        () =>
                            (function (e) {
                                let { renderSidebar: t, sidebarHeight: n, isSidebarVisible: i, isListVisible: r } = e;
                                return null == n || null == t ? null : t(r, i);
                            })({
                                isSidebarVisible: eE,
                                renderSidebar: G,
                                sidebarHeight: b,
                                isListVisible: 0 !== e_.length,
                            }),
                        [eE, G, b, e_.length],
                    ),
                ],
            })
        );
    };
}
