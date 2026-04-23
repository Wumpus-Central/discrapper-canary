"use strict";
n.d(t, { Ff: () => I, JZ: () => S, Fk: () => A, FV: () => p, oV: () => g, se: () => T }), n(321073);
var i = n(64700),
    r = n(735438),
    s = n.n(r),
    a = n(741918),
    o = n(788413),
    l = n(602034);
let d = [a.D$.TAB];
function _(e, t, n) {
    return null != t && null != n ? `#${(0, l.Aq)(e, t, n)}` : `[data-ref-id=${e}]`;
}
function u(e) {
    return document.querySelector(e);
}
var c = n(23339),
    E = n(319060),
    h = n(60587),
    m = n(652215);
let f = (0, c.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    g = (e) => {
        let {
                gridWrapperRef: t,
                containerWidth: n,
                showingEmptyState: r,
                listPaddingLeft: a = f,
                listScrollbarWidth: o = 8,
            } = e,
            [l, d] = i.useState(void 0),
            _ = i.useCallback(() => {
                if (null == t.current) return null;
                d(t.current.offsetWidth - a - o);
            }, [t, a, o]);
        return (
            i.useLayoutEffect(() => {
                _();
            }, [n, _, r]),
            i.useEffect(() => {
                let e = s().debounce(_, 250);
                return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
            }, [_]),
            l
        );
    },
    p = (e) => {
        let { activeCategoryIndex: t, listRef: n, searchQuery: r } = e,
            s = i.useRef(r),
            a = i.useRef(!0);
        i.useLayoutEffect(() => {
            "" === r && "" !== s.current && n.current?.scrollToSectionTop(t), (s.current = r);
        }, [r, t, n]),
            i.useLayoutEffect(() => {
                a.current && (n.current?.scrollToSectionTop(t), (a.current = !1));
            }, [t, n]),
            i.useEffect(() => {
                s.current = r;
            }, [r]);
    },
    A = (e) => {
        let {
                activeCategoryIndex: t,
                listRef: n,
                isScrolling: r,
                searchQuery: a,
                scrollOffset: o = 0,
                onActiveCategoryIndexChange: l,
                disableForSearch: d = !0,
            } = e,
            _ = i.useRef(m.An1),
            u = i.useRef(t);
        u.current = t;
        let c = i.useMemo(
                () =>
                    s().debounce(() => {
                        r.current = !1;
                    }, 250),
                [r],
            ),
            E = i.useMemo(
                () =>
                    s().debounce((e) => {
                        ("" !== a && d) ||
                            (window.cancelAnimationFrame(_.current),
                            (_.current = window.requestAnimationFrame(() => {
                                let t = n.current?.getSectionDescriptors();
                                if (null == t) return;
                                let i = t.findIndex((n, i) => {
                                        let r = t[i + 1],
                                            s = e + o >= n.offset.top,
                                            a = null != r && e + o < r.offset.top;
                                        return (null != r && !s && !a) || (s && a) || (s && null == r);
                                    }),
                                    r = -1 === i ? 0 : i;
                                u.current !== r && l(r);
                            })));
                    }, 0),
                [a, n, o, l, d],
            );
        return i.useCallback(
            (e) => {
                (r.current = !0), c(), E(e);
            },
            [r, c, E],
        );
    },
    I = (e) => {
        let {
                columnCounts: t,
                gridNavigatorId: n,
                itemGrid: r,
                itemList: s,
                onGridNavigatorItemSelect: c,
                onGridNavigatorPositionChange: E,
            } = e,
            h = i.useRef(!1),
            m = i.useCallback(
                (e, t) => {
                    let n = r[t];
                    if (null != n) return n[e];
                },
                [r],
            ),
            f = i.useCallback(
                (e) => {
                    let { focusedX: t, focusedY: n } = e;
                    h.current = !0;
                    let i = m(t, n);
                    if (null == i) return;
                    let { visibleRowIndex: r, columnIndex: a } = i;
                    E(a, r), null != s.current && s.current.scrollRowIntoView(n);
                },
                [m, s, E],
            ),
            {
                dispatch: g,
                getItemProps: p,
                getRowProps: A,
                getContainerProps: I,
            } = (function (e) {
                let {
                        navId: t,
                        columnCounts: n,
                        focusedX: r = 0,
                        focusedY: s = 0,
                        onSelect: c,
                        prepareFocus: E,
                        getNewFocusPosition: h,
                        maintainFocusPosition: m = !0,
                        enabled: f = !0,
                        onDispatch: g,
                        autoFocusElement: p = !0,
                        useVirtualFocus: A = !1,
                    } = e,
                    I = i.useCallback(
                        (e, t) => {
                            let n = (0, o.A)(e, t);
                            return null != g && g(e, n, t), n;
                        },
                        [g],
                    ),
                    [T, S] = i.useReducer(I, { focusedX: r, focusedY: s, columnCounts: n }),
                    { columnCounts: N, focusedX: C, focusedY: R } = T,
                    [O] = i.useState(() => (0, l.nF)(S, 16));
                return (
                    i.useEffect(() => {
                        S({ type: o.n.UPDATE_COLUMN_COUNTS, columnCounts: n });
                    }, [n]),
                    (function (e) {
                        let {
                                navId: t,
                                columnCounts: n,
                                focusedX: r,
                                focusedY: s,
                                onSelect: c,
                                prepareFocus: E,
                                getNewFocusPosition: h,
                                dispatch: m,
                                maintainFocusPosition: f,
                                enabled: g,
                                autoFocusElement: p,
                                useVirtualFocus: A,
                            } = e,
                            I = i.useRef(g),
                            T = u(_(t, r, s)),
                            [S, N] = i.useState(!1),
                            [C, R] = i.useState(!1),
                            [O, y] = i.useState(!1),
                            [v] = i.useState(
                                () =>
                                    new l.Lp((e) => {
                                        let [t, n] = e.split(",").map(Number);
                                        return () => {
                                            N(!0), m({ type: o.n.SET_FOCUSED_POSITION, x: t, y: n });
                                        };
                                    }),
                            );
                        i.useEffect(() => () => v.clean(), [v]);
                        let D = i.useCallback(
                                (e) => {
                                    if (!I.current || !p) return !1;
                                    e.focus();
                                },
                                [p],
                            ),
                            L = i.useCallback(
                                (e, n) => {
                                    let i = _(t, e, n);
                                    (null != E ? E(e, n, i) : Promise.resolve()).then(() => {
                                        let e = u(i);
                                        null != e ? (D(e), R(!1)) : requestAnimationFrame(() => R(!0));
                                    });
                                },
                                [t, E, D],
                            ),
                            b = i.useCallback(
                                function () {
                                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                                        [n, i] = null != h ? h(r, s) : [r, s];
                                    if ((n !== r || i !== s) && (m({ type: o.n.SET_FOCUSED_POSITION, x: n, y: i }), !e))
                                        return void y(!0);
                                    let a = u(_(t, n, i));
                                    null != a && (y(!0), D(a));
                                },
                                [m, r, s, h, t, D],
                            ),
                            [w, P] = i.useState(!1);
                        i.useEffect(() => {
                            if (!w || !S) return;
                            P(!1);
                            let e = u(_(t, r, s));
                            if (null != e) return void D(e);
                            N(!1);
                            let n = u(_(t));
                            null != n && D(n);
                        }, [t, w, S, D, r, s]);
                        let k = i.useCallback((e) => {
                            I.current && null == e && P(!0);
                        }, []);
                        i.useEffect(() => {
                            S && C && null != T && (D(T), R(!1));
                        }, [C, T]),
                            i.useEffect(() => {
                                S && (O || L(r, s), y(!1));
                            }, [r, s]);
                        let M = i.useCallback(
                                (e) => {
                                    if (!I.current) return;
                                    if (
                                        !A &&
                                        d.includes(e.key) &&
                                        !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) &&
                                        e.currentTarget === e.target
                                    ) {
                                        e.preventDefault(), e.stopPropagation(), b();
                                        return;
                                    }
                                    let t = (function (e) {
                                        switch (e.key) {
                                            case a.D$.ENTER:
                                                return a.X2.SELECT_FOCUSED_ITEM;
                                            case a.D$.UP:
                                                return a.X2.NAVIGATE_UP;
                                            case a.D$.DOWN:
                                                return a.X2.NAVIGATE_DOWN;
                                            case a.D$.RIGHT:
                                                return a.X2.NAVIGATE_RIGHT;
                                            case a.D$.LEFT:
                                                return a.X2.NAVIGATE_LEFT;
                                            case a.D$.HOME:
                                                if (e.ctrlKey) return a.X2.NAVIGATE_START;
                                                return a.X2.NAVIGATE_INLINE_START;
                                            case a.D$.END:
                                                if (e.ctrlKey) return a.X2.NAVIGATE_END;
                                                return a.X2.NAVIGATE_INLINE_END;
                                        }
                                    })(e);
                                    switch (t) {
                                        case a.X2.NAVIGATE_UP:
                                        case a.X2.NAVIGATE_DOWN:
                                        case a.X2.NAVIGATE_RIGHT:
                                        case a.X2.NAVIGATE_LEFT:
                                        case a.X2.NAVIGATE_INLINE_START:
                                        case a.X2.NAVIGATE_INLINE_END:
                                        case a.X2.NAVIGATE_START:
                                        case a.X2.NAVIGATE_END:
                                            0 !== n.length &&
                                                (0 !== r || 0 !== s || t !== a.X2.NAVIGATE_LEFT) &&
                                                (e.preventDefault(), e.stopPropagation()),
                                                m({ type: t });
                                            return;
                                        case a.X2.SELECT_FOCUSED_ITEM:
                                            if ((p && T?.ownerDocument.activeElement !== T) || e.repeat) return;
                                            e.preventDefault(),
                                                e.stopPropagation(),
                                                m({ type: t }),
                                                null != c ? c(r, s, e) : null != T && T.click();
                                    }
                                },
                                [b, m, p, T, c, r, s],
                            ),
                            U = i.useCallback(
                                (e) =>
                                    e.currentTarget !== e.target
                                        ? (S || (N(!0), y(!0)), !1)
                                        : S
                                          ? (b(!1), !1)
                                          : void (f && null != T ? L(r, s) : b(!0)),
                                [S, f, T, b, L, r, s],
                            ),
                            x = i.useCallback((e) => {
                                if (e.target !== e.currentTarget) {
                                    if (e.currentTarget.contains(e.relatedTarget)) return !1;
                                    N(!1);
                                }
                            }, []),
                            G = i.useMemo(() => Math.max(...n), [n]),
                            V = i.useCallback(
                                () => ({
                                    role: "grid",
                                    "aria-rowcount": n.length,
                                    "aria-colcount": G,
                                    tabIndex: S && f ? -1 : 0,
                                    "data-ref-id": t,
                                    onKeyDown: M,
                                    onFocus: U,
                                    onBlur: x,
                                }),
                                [n.length, G, S, f, t, M, U, x],
                            ),
                            F = i.useCallback(
                                (e, n) => {
                                    let i = {
                                        role: "gridcell",
                                        "aria-rowindex": n + 1,
                                        "aria-colindex": e + 1,
                                        id: (0, l.Aq)(t, e, n),
                                        tabIndex: f && e === r && n === s ? 0 : -1,
                                        onFocus: v.get(`${e},${n}`),
                                    };
                                    return e === r && n === s && (i.ref = k), i;
                                },
                                [t, f, r, s, v, k],
                            ),
                            B = i.useCallback((e) => ({ role: "row", "aria-rowindex": e + 1 }), []);
                        return i.useMemo(
                            () => ({ dispatch: m, getContainerProps: V, getItemProps: F, getRowProps: B }),
                            [m, V, F, B],
                        );
                    })({
                        navId: t,
                        columnCounts: N,
                        focusedX: C,
                        focusedY: R,
                        dispatch: O,
                        onSelect: c,
                        prepareFocus: E,
                        getNewFocusPosition: h,
                        maintainFocusPosition: m,
                        enabled: f,
                        autoFocusElement: p,
                        useVirtualFocus: A,
                    })
                );
            })({
                navId: n,
                columnCounts: t,
                onDispatch: i.useCallback(
                    (e, t, n) => {
                        switch (n.type) {
                            case a.X2.NAVIGATE_UP:
                            case a.X2.NAVIGATE_DOWN:
                            case a.X2.NAVIGATE_RIGHT:
                            case a.X2.NAVIGATE_LEFT:
                            case a.X2.NAVIGATE_INLINE_START:
                            case a.X2.NAVIGATE_INLINE_END:
                            case a.X2.NAVIGATE_START:
                            case a.X2.NAVIGATE_END:
                            case a.X2.NAVIGATE_CROSSLINE_START:
                            case a.X2.NAVIGATE_CROSSLINE_END:
                                f(t);
                        }
                    },
                    [f],
                ),
                onSelect: i.useCallback(
                    (e, t, n) => {
                        let i = m(e, t);
                        null != i && c(i, n);
                    },
                    [m, c],
                ),
                autoFocusElement: !1,
                useVirtualFocus: !0,
            }),
            { gridContainerProps: T, handleGridContainerKeyDown: S } = i.useMemo(() => {
                let e = I();
                return { gridContainerProps: e, handleGridContainerKeyDown: e.onKeyDown };
            }, [I]);
        return (
            i.useEffect(() => {
                let e = () => {
                    h.current = !1;
                };
                return window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e);
            }, []),
            {
                gridDispatch: g,
                getItemProps: p,
                getRowProps: A,
                gridContainerProps: T,
                handleGridContainerKeyDown: S,
                isUsingKeyboardNavigation: h,
            }
        );
    };
function T(e) {
    let {
        categories: t,
        collapsedCategories: n,
        gridWidth: r = 0,
        listPaddingRight: s = 0,
        itemNodeWidth: a,
        itemNodeMargin: o = 0,
    } = e;
    return i.useMemo(() => {
        let e = Math.max(1, Math.floor((r - s + o) / (a + o))),
            i = Math.floor(Math.max(o, (r - s - a * e) / (e - 1))),
            l = [],
            d = [],
            _ = [],
            u = 0,
            c = 0,
            E = 0;
        if (0 !== r) {
            let i = function (t, n) {
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = Math.ceil(t.length / e);
                d[c] = i ? 0 : r;
                for (let s = 0; s < r; s++) {
                    let r = s * e,
                        a = r + e,
                        o = t
                            .slice(r, a)
                            .map((e, t) => ({
                                item: e,
                                gridSectionIndex: c,
                                rowIndex: u,
                                columnIndex: t,
                                visibleRowIndex: E,
                                category: n,
                            }));
                    i || (E++, _.push(o), l.push(o.length)), u++;
                }
                c++;
            };
            for (let e of t) e.items.length > 0 && i(e.items, e.categoryInfo.type, n?.has(`${e.key}`) ?? !1);
        }
        return { expressionsGrid: _, rowCount: u, rowCountBySection: d, columnCounts: l, gutterWidth: i };
    }, [t, n, r, o, a, s]);
}
function S(e) {
    let {
            columnCounts: t,
            expressionsGrid: n,
            expressionsListRef: r,
            store: s,
            gridNavigatorId: a,
            onSelectItem: l,
        } = e,
        {
            gridDispatch: d,
            getItemProps: _,
            getRowProps: u,
            gridContainerProps: c,
            handleGridContainerKeyDown: E,
            isUsingKeyboardNavigation: m,
        } = I({
            columnCounts: t,
            gridNavigatorId: a,
            itemGrid: n,
            itemList: r,
            onGridNavigatorItemSelect: l,
            onGridNavigatorPositionChange: s.setInspectedExpressionPosition,
        });
    return (
        i.useEffect(
            () =>
                s.subscribe(
                    (e) => e.inspectedExpressionPosition,
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: t, rowIndex: n, source: i } = e;
                        i !== h.t.GRID_NAVIGATOR_EVENT && d({ type: o.n.SET_FOCUSED_POSITION, x: t, y: n });
                    },
                ),
            [d, s],
        ),
        {
            getItemProps: _,
            getRowProps: u,
            gridContainerProps: c,
            handleGridContainerKeyDown: E,
            isUsingKeyboardNavigation: m,
        }
    );
}
