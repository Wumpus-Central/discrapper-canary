n.d(t, { $: () => m }), n(321073);
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(515029),
    o = n.n(l),
    d = n(259678),
    c = n(448539),
    u = n(154327),
    _ = n(715828),
    E = n(484702),
    A = n(403431);
let h = Object.freeze({ spacerTop: 0, totalHeight: 0, items: [], isSidebarVisible: !1 });
var I = n(789279),
    f = n(584648),
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
    return r.forwardRef(function (a, g) {
        let S,
            N,
            {
                className: C,
                onScroll: O,
                onResize: R = null,
                onContentResize: L = null,
                sections: y,
                sectionHeight: D,
                rowHeight: v,
                footerHeight: b = 0,
                sidebarHeight: M,
                listHeaderHeight: P = 0,
                renderSection: U,
                renderRow: w,
                renderFooter: G,
                renderSidebar: x,
                renderListHeader: k,
                stickyListHeader: F,
                wrapSection: V,
                getAnchorId: B,
                paddingTop: H,
                paddingBottom: j,
                scrollbarGutter: W = "stable",
                fade: Y = !1,
                customTheme: K = !1,
                chunkSize: $,
                style: z,
                innerId: q,
                innerRole: Z,
                innerAriaLabel: X,
                innerAriaMultiselectable: Q,
                innerAriaOrientation: J,
                innerClassName: ee,
                innerTag: et = "div",
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
                        getAnchorId: I,
                    } = e,
                    f = (0, E.A)(),
                    p = (0, r.useRef)(h),
                    [T] = (0, r.useState)(() => new _.A()),
                    {
                        dirty: m,
                        chunkStart: g,
                        chunkEnd: S,
                        forceUpdateOnChunkChange: N,
                    } = (0, A.A)({ chunkSize: o, getScrollerState: u, forceUpdate: f }),
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
                                      getAnchorId: I,
                                  }),
                                  T.compute(Math.max(0, g * o), S * o)),
                        [m, g, S, n, i, a, l, c, d, t, T, o, I],
                    );
                return (
                    (0, r.useLayoutEffect)(() => {
                        p.current = y;
                    }),
                    { ...y, listComputer: T, forceUpdateOnChunkChange: N, anchor: O, isSidebarVisible: L }
                );
            })({
                sections: y,
                sectionHeight: D,
                rowHeight: v,
                footerHeight: b,
                sidebarHeight: M,
                listHeaderHeight: P,
                paddingTop: H,
                paddingBottom: j,
                chunkSize: $,
                getScrollerState: ed,
                getAnchorId: B,
            }),
            ef = (0, I.A)(el),
            ep = r.useRef(R),
            eT = r.useRef(L);
        r.useLayoutEffect(() => {
            (ep.current = R), (eT.current = L);
        });
        let em = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > eo.current.dirty && (eo.current.dirty = e), 2 === e && ep.current?.(), eh(e);
                },
                [eh, eo],
            ),
            eg = r.useCallback(() => em(), [em]);
        (0, c.A)({ ref: el, onUpdate: eg, key: "container", resizeObserver: m, listenerMap: l }),
            (0, c.A)({ ref: er, onUpdate: () => eT.current?.(), key: "content", resizeObserver: m, listenerMap: l });
        let eS =
                ((S = r.useRef(e_)),
                r.useEffect(() => {
                    S.current = e_;
                }, [e_]),
                r.useCallback(() => S.current, [])),
            eN =
                ((N = r.useRef(y)),
                r.useEffect(() => {
                    N.current = y;
                }, [y]),
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
        r.useImperativeHandle(
            g,
            () => ({
                getScrollerNode: () => el.current,
                getScrollerState: ed,
                getItems: eS,
                getSectionRowFromIndex: eN,
                ...(function (e, t, n, i) {
                    let r = (0, f.A)(e, t, i);
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
                })(el, ed, eA, ef),
            }),
            [el, ed, eN, eS, eA, ef],
        );
        let eC = r.useCallback(
            (e) => {
                em(1),
                    null == ei.current ? es(!0) : clearTimeout(ei.current),
                    (ei.current = setTimeout(() => {
                        (ei.current = null), es(!1);
                    }, 200)),
                    null != O && O(e);
            },
            [O, em],
        );
        return (
            r.useLayoutEffect(() => {
                2 !== eo.current.dirty && (eo.current.dirty = 2);
            }, [U, w, G, V, eu, ec, eo]),
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
                scrollerRef: el,
                anchor: eI,
                getScrollerState: ed,
                listComputer: eA,
                getAnchorId: B,
                totalHeight: eu,
            }),
            (0, i.jsxs)("div", {
                ref: el,
                onScroll: eC,
                className: s()(C, !1 === W ? void 0 : "stable" === W ? T.x2 : T.GV, {
                    [e]: !0,
                    [t]: Y,
                    [n]: K,
                    [T.qw]: ea,
                }),
                style: (0, p.Ay)(z),
                ...en,
                children: [
                    r.useMemo(
                        () =>
                            (0, i.jsx)(et, {
                                id: q,
                                role: Z,
                                "aria-label": X,
                                "aria-multiselectable": Q,
                                "aria-orientation": J,
                                style: { height: eu },
                                className: s()(T.Qs, ee),
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
                                        renderListHeader: k,
                                        stickyListHeader: F,
                                        renderSection: U,
                                        renderRow: w,
                                        renderFooter: G,
                                        wrapSection: V,
                                        spacerTop: ec,
                                    }),
                                }),
                            }),
                        [et, q, Z, X, Q, J, eu, ee, e_, k, F, U, w, G, V, ec],
                    ),
                    r.useMemo(
                        () =>
                            (function (e) {
                                let { renderSidebar: t, sidebarHeight: n, isSidebarVisible: i, isListVisible: r } = e;
                                return null == n || null == t ? null : t(r, i);
                            })({
                                isSidebarVisible: eE,
                                renderSidebar: x,
                                sidebarHeight: M,
                                isListVisible: 0 !== e_.length,
                            }),
                        [eE, x, M, e_.length],
                    ),
                ],
            })
        );
    });
}
