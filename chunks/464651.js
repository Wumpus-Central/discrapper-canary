"use strict";
n.d(t, { Ff: () => I, JZ: () => S, Fk: () => A, FV: () => g, oV: () => m, se: () => T }), n(321073);
var i = n(64700),
    r = n(735438),
    s = n.n(r),
    a = n(741918),
    o = n(788413),
    l = n(602034);
let u = [a.D$.TAB];
function c(e, t, n) {
    return null != t && null != n ? `#${(0, l.Aq)(e, t, n)}` : `[data-ref-id=${e}]`;
}
function d(e) {
    return document.querySelector(e);
}
var _ = n(23339),
    h = n(319060),
    f = n(60587),
    p = n(652215);
let E = (0, _.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    m = (e) => {
        let {
                gridWrapperRef: t,
                containerWidth: n,
                showingEmptyState: r,
                listPaddingLeft: a = E,
                listScrollbarWidth: o = 8,
            } = e,
            [l, u] = i.useState(void 0),
            c = i.useCallback(() => {
                if (null == t.current) return null;
                u(t.current.offsetWidth - a - o);
            }, [t, a, o]);
        return (
            i.useLayoutEffect(() => {
                c();
            }, [n, c, r]),
            i.useEffect(() => {
                let e = s().debounce(c, 250);
                return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
            }, [c]),
            l
        );
    },
    g = (e) => {
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
                disableForSearch: u = !0,
            } = e,
            c = i.useRef(p.An1),
            d = i.useRef(t);
        d.current = t;
        let _ = i.useMemo(
                () =>
                    s().debounce(() => {
                        r.current = !1;
                    }, 250),
                [r],
            ),
            h = i.useMemo(
                () =>
                    s().debounce((e) => {
                        ("" !== a && u) ||
                            (window.cancelAnimationFrame(c.current),
                            (c.current = window.requestAnimationFrame(() => {
                                let t = n.current?.getSectionDescriptors();
                                if (null == t) return;
                                let i = t.findIndex((n, i) => {
                                        let r = t[i + 1],
                                            s = e + o >= n.offset.top,
                                            a = null != r && e + o < r.offset.top;
                                        return (null != r && !s && !a) || (s && a) || (s && null == r);
                                    }),
                                    r = -1 === i ? 0 : i;
                                d.current !== r && l(r);
                            })));
                    }, 0),
                [a, n, o, l, u],
            );
        return i.useCallback(
            (e) => {
                (r.current = !0), _(), h(e);
            },
            [r, _, h],
        );
    },
    I = (e) => {
        let {
                columnCounts: t,
                gridNavigatorId: n,
                itemGrid: r,
                itemList: s,
                onGridNavigatorItemSelect: _,
                onGridNavigatorPositionChange: h,
            } = e,
            f = i.useRef(!1),
            p = i.useCallback(
                (e, t) => {
                    let n = r[t];
                    if (null != n) return n[e];
                },
                [r],
            ),
            E = i.useCallback(
                (e) => {
                    let { focusedX: t, focusedY: n } = e;
                    f.current = !0;
                    let i = p(t, n);
                    if (null == i) return;
                    let { visibleRowIndex: r, columnIndex: a } = i;
                    h(a, r), null != s.current && s.current.scrollRowIntoView(n);
                },
                [p, s, h],
            ),
            {
                dispatch: m,
                getItemProps: g,
                getRowProps: A,
                getContainerProps: I,
            } = (function (e) {
                let {
                        navId: t,
                        columnCounts: n,
                        focusedX: r = 0,
                        focusedY: s = 0,
                        onSelect: _,
                        prepareFocus: h,
                        getNewFocusPosition: f,
                        maintainFocusPosition: p = !0,
                        enabled: E = !0,
                        onDispatch: m,
                        autoFocusElement: g = !0,
                        useVirtualFocus: A = !1,
                    } = e,
                    I = i.useCallback(
                        (e, t) => {
                            let n = (0, o.A)(e, t);
                            return null != m && m(e, n, t), n;
                        },
                        [m],
                    ),
                    [T, S] = i.useReducer(I, { focusedX: r, focusedY: s, columnCounts: n }),
                    { columnCounts: y, focusedX: N, focusedY: v } = T,
                    [C] = i.useState(() => (0, l.nF)(S, 16));
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
                                onSelect: _,
                                prepareFocus: h,
                                getNewFocusPosition: f,
                                dispatch: p,
                                maintainFocusPosition: E,
                                enabled: m,
                                autoFocusElement: g,
                                useVirtualFocus: A,
                            } = e,
                            I = i.useRef(m),
                            T = d(c(t, r, s)),
                            [S, y] = i.useState(!1),
                            [N, v] = i.useState(!1),
                            [C, R] = i.useState(!1),
                            [O] = i.useState(
                                () =>
                                    new l.Lp((e) => {
                                        let [t, n] = e.split(",").map(Number);
                                        return () => {
                                            y(!0), p({ type: o.n.SET_FOCUSED_POSITION, x: t, y: n });
                                        };
                                    }),
                            );
                        i.useEffect(() => () => O.clean(), [O]);
                        let b = i.useCallback(
                                (e) => {
                                    if (!I.current || !g) return !1;
                                    e.focus();
                                },
                                [g],
                            ),
                            D = i.useCallback(
                                (e, n) => {
                                    let i = c(t, e, n);
                                    (null != h ? h(e, n, i) : Promise.resolve()).then(() => {
                                        let e = d(i);
                                        null != e ? (b(e), v(!1)) : requestAnimationFrame(() => v(!0));
                                    });
                                },
                                [t, h, b],
                            ),
                            L = i.useCallback(
                                function () {
                                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                                        [n, i] = null != f ? f(r, s) : [r, s];
                                    if ((n !== r || i !== s) && (p({ type: o.n.SET_FOCUSED_POSITION, x: n, y: i }), !e))
                                        return void R(!0);
                                    let a = d(c(t, n, i));
                                    null != a && (R(!0), b(a));
                                },
                                [p, r, s, f, t, b],
                            ),
                            [w, M] = i.useState(!1);
                        i.useEffect(() => {
                            if (!w || !S) return;
                            M(!1);
                            let e = d(c(t, r, s));
                            if (null != e) return void b(e);
                            y(!1);
                            let n = d(c(t));
                            null != n && b(n);
                        }, [t, w, S, b, r, s]);
                        let P = i.useCallback((e) => {
                            I.current && null == e && M(!0);
                        }, []);
                        i.useEffect(() => {
                            S && N && null != T && (b(T), v(!1));
                        }, [N, T]),
                            i.useEffect(() => {
                                S && (C || D(r, s), R(!1));
                            }, [r, s]);
                        let x = i.useCallback(
                                (e) => {
                                    if (!I.current) return;
                                    if (
                                        !A &&
                                        u.includes(e.key) &&
                                        !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) &&
                                        e.currentTarget === e.target
                                    ) {
                                        e.preventDefault(), e.stopPropagation(), L();
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
                                                p({ type: t });
                                            return;
                                        case a.X2.SELECT_FOCUSED_ITEM:
                                            if ((g && T?.ownerDocument.activeElement !== T) || e.repeat) return;
                                            e.preventDefault(),
                                                e.stopPropagation(),
                                                p({ type: t }),
                                                null != _ ? _(r, s, e) : null != T && T.click();
                                    }
                                },
                                [L, p, g, T, _, r, s],
                            ),
                            k = i.useCallback(
                                (e) =>
                                    e.currentTarget !== e.target
                                        ? (S || (y(!0), R(!0)), !1)
                                        : S
                                          ? (L(!1), !1)
                                          : void (E && null != T ? D(r, s) : L(!0)),
                                [S, E, T, L, D, r, s],
                            ),
                            U = i.useCallback((e) => {
                                if (e.target !== e.currentTarget) {
                                    if (e.currentTarget.contains(e.relatedTarget)) return !1;
                                    y(!1);
                                }
                            }, []),
                            G = i.useMemo(() => Math.max(...n), [n]),
                            F = i.useCallback(
                                () => ({
                                    role: "grid",
                                    "aria-rowcount": n.length,
                                    "aria-colcount": G,
                                    tabIndex: S && E ? -1 : 0,
                                    "data-ref-id": t,
                                    onKeyDown: x,
                                    onFocus: k,
                                    onBlur: U,
                                }),
                                [n.length, G, S, E, t, x, k, U],
                            ),
                            V = i.useCallback(
                                (e, n) => {
                                    let i = {
                                        role: "gridcell",
                                        "aria-rowindex": n + 1,
                                        "aria-colindex": e + 1,
                                        id: (0, l.Aq)(t, e, n),
                                        tabIndex: E && e === r && n === s ? 0 : -1,
                                        onFocus: O.get(`${e},${n}`),
                                    };
                                    return e === r && n === s && (i.ref = P), i;
                                },
                                [t, E, r, s, O, P],
                            ),
                            B = i.useCallback((e) => ({ role: "row", "aria-rowindex": e + 1 }), []);
                        return i.useMemo(
                            () => ({ dispatch: p, getContainerProps: F, getItemProps: V, getRowProps: B }),
                            [p, F, V, B],
                        );
                    })({
                        navId: t,
                        columnCounts: y,
                        focusedX: N,
                        focusedY: v,
                        dispatch: C,
                        onSelect: _,
                        prepareFocus: h,
                        getNewFocusPosition: f,
                        maintainFocusPosition: p,
                        enabled: E,
                        autoFocusElement: g,
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
                                E(t);
                        }
                    },
                    [E],
                ),
                onSelect: i.useCallback(
                    (e, t, n) => {
                        let i = p(e, t);
                        null != i && _(i, n);
                    },
                    [p, _],
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
                    f.current = !1;
                };
                return window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e);
            }, []),
            {
                gridDispatch: m,
                getItemProps: g,
                getRowProps: A,
                gridContainerProps: T,
                handleGridContainerKeyDown: S,
                isUsingKeyboardNavigation: f,
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
            u = [],
            c = [],
            d = 0,
            _ = 0,
            h = 0;
        if (0 !== r) {
            let i = function (t, n) {
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = Math.ceil(t.length / e);
                u[_] = i ? 0 : r;
                for (let s = 0; s < r; s++) {
                    let r = s * e,
                        a = r + e,
                        o = t
                            .slice(r, a)
                            .map((e, t) => ({
                                item: e,
                                gridSectionIndex: _,
                                rowIndex: d,
                                columnIndex: t,
                                visibleRowIndex: h,
                                category: n,
                            }));
                    i || (h++, c.push(o), l.push(o.length)), d++;
                }
                _++;
            };
            for (let e of t) e.items.length > 0 && i(e.items, e.categoryInfo.type, n?.has(`${e.key}`) ?? !1);
        }
        return { expressionsGrid: c, rowCount: d, rowCountBySection: u, columnCounts: l, gutterWidth: i };
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
            gridDispatch: u,
            getItemProps: c,
            getRowProps: d,
            gridContainerProps: _,
            handleGridContainerKeyDown: h,
            isUsingKeyboardNavigation: p,
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
                        i !== f.t.GRID_NAVIGATOR_EVENT && u({ type: o.n.SET_FOCUSED_POSITION, x: t, y: n });
                    },
                ),
            [u, s],
        ),
        {
            getItemProps: c,
            getRowProps: d,
            gridContainerProps: _,
            handleGridContainerKeyDown: h,
            isUsingKeyboardNavigation: p,
        }
    );
}
