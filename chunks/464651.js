"use strict";
n.d(t, { Ff: () => A, JZ: () => I, Fk: () => C, FV: () => x, oV: () => _, se: () => E }), n(321073);
var l = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(741918),
    r = n(788413),
    o = n(602034);
let c = [a.D$.TAB];
function u(e, t, n) {
    return null != t && null != n ? `#${(0, o.Aq)(e, t, n)}` : `[data-ref-id=${e}]`;
}
function d(e) {
    return document.querySelector(e);
}
var h = n(23339),
    m = n(319060),
    p = n(60587),
    f = n(652215);
let g = (0, h.xI)(m.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    _ = (e) => {
        let {
                gridWrapperRef: t,
                containerWidth: n,
                showingEmptyState: i,
                listPaddingLeft: a = g,
                listScrollbarWidth: r = 8,
            } = e,
            [o, c] = l.useState(void 0),
            u = l.useCallback(() => {
                if (null == t.current) return null;
                c(t.current.offsetWidth - a - r);
            }, [t, a, r]);
        return (
            l.useLayoutEffect(() => {
                u();
            }, [n, u, i]),
            l.useEffect(() => {
                let e = s().debounce(u, 250);
                return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
            }, [u]),
            o
        );
    },
    x = (e) => {
        let { activeCategoryIndex: t, listRef: n, searchQuery: i } = e,
            s = l.useRef(i),
            a = l.useRef(!0);
        l.useLayoutEffect(() => {
            "" === i && "" !== s.current && n.current?.scrollToSectionTop(t), (s.current = i);
        }, [i, t, n]),
            l.useLayoutEffect(() => {
                a.current && (n.current?.scrollToSectionTop(t), (a.current = !1));
            }, [t, n]),
            l.useEffect(() => {
                s.current = i;
            }, [i]);
    },
    C = (e) => {
        let {
                activeCategoryIndex: t,
                listRef: n,
                isScrolling: i,
                searchQuery: a,
                scrollOffset: r = 0,
                onActiveCategoryIndexChange: o,
                disableForSearch: c = !0,
            } = e,
            u = l.useRef(f.An1),
            d = l.useRef(t);
        d.current = t;
        let h = l.useMemo(
                () =>
                    s().debounce(() => {
                        i.current = !1;
                    }, 250),
                [i],
            ),
            m = l.useMemo(
                () =>
                    s().debounce((e) => {
                        ("" !== a && c) ||
                            (window.cancelAnimationFrame(u.current),
                            (u.current = window.requestAnimationFrame(() => {
                                let t = n.current?.getSectionDescriptors();
                                if (null == t) return;
                                let l = t.findIndex((n, l) => {
                                        let i = t[l + 1],
                                            s = e + r >= n.offset.top,
                                            a = null != i && e + r < i.offset.top;
                                        return (null != i && !s && !a) || (s && a) || (s && null == i);
                                    }),
                                    i = -1 === l ? 0 : l;
                                d.current !== i && o(i);
                            })));
                    }, 0),
                [a, n, r, o, c],
            );
        return l.useCallback(
            (e) => {
                (i.current = !0), h(), m(e);
            },
            [i, h, m],
        );
    },
    A = (e) => {
        let {
                columnCounts: t,
                gridNavigatorId: n,
                itemGrid: i,
                itemList: s,
                onGridNavigatorItemSelect: h,
                onGridNavigatorPositionChange: m,
            } = e,
            p = l.useRef(!1),
            f = l.useCallback(
                (e, t) => {
                    let n = i[t];
                    if (null != n) return n[e];
                },
                [i],
            ),
            g = l.useCallback(
                (e) => {
                    let { focusedX: t, focusedY: n } = e;
                    p.current = !0;
                    let l = f(t, n);
                    if (null == l) return;
                    let { visibleRowIndex: i, columnIndex: a } = l;
                    m(a, i), null != s.current && s.current.scrollRowIntoView(n);
                },
                [f, s, m],
            ),
            {
                dispatch: _,
                getItemProps: x,
                getRowProps: C,
                getContainerProps: A,
            } = (function (e) {
                let {
                        navId: t,
                        columnCounts: n,
                        focusedX: i = 0,
                        focusedY: s = 0,
                        onSelect: h,
                        prepareFocus: m,
                        getNewFocusPosition: p,
                        maintainFocusPosition: f = !0,
                        enabled: g = !0,
                        onDispatch: _,
                        autoFocusElement: x = !0,
                        useVirtualFocus: C = !1,
                    } = e,
                    A = l.useCallback(
                        (e, t) => {
                            let n = (0, r.A)(e, t);
                            return null != _ && _(e, n, t), n;
                        },
                        [_],
                    ),
                    [E, I] = l.useReducer(A, { focusedX: i, focusedY: s, columnCounts: n }),
                    { columnCounts: v, focusedX: y, focusedY: b } = E,
                    [S] = l.useState(() => (0, o.nF)(I, 16));
                return (
                    l.useEffect(() => {
                        I({ type: r.n.UPDATE_COLUMN_COUNTS, columnCounts: n });
                    }, [n]),
                    (function (e) {
                        let {
                                navId: t,
                                columnCounts: n,
                                focusedX: i,
                                focusedY: s,
                                onSelect: h,
                                prepareFocus: m,
                                getNewFocusPosition: p,
                                dispatch: f,
                                maintainFocusPosition: g,
                                enabled: _,
                                autoFocusElement: x,
                                useVirtualFocus: C,
                            } = e,
                            A = l.useRef(_),
                            E = d(u(t, i, s)),
                            [I, v] = l.useState(!1),
                            [y, b] = l.useState(!1),
                            [S, N] = l.useState(!1),
                            [j] = l.useState(
                                () =>
                                    new o.Lp((e) => {
                                        let [t, n] = e.split(",").map(Number);
                                        return () => {
                                            v(!0), f({ type: r.n.SET_FOCUSED_POSITION, x: t, y: n });
                                        };
                                    }),
                            );
                        l.useEffect(() => () => j.clean(), [j]);
                        let T = l.useCallback(
                                (e) => {
                                    if (!A.current || !x) return !1;
                                    e.focus();
                                },
                                [x],
                            ),
                            w = l.useCallback(
                                (e, n) => {
                                    let l = u(t, e, n);
                                    (null != m ? m(e, n, l) : Promise.resolve()).then(() => {
                                        let e = d(l);
                                        null != e ? (T(e), b(!1)) : requestAnimationFrame(() => b(!0));
                                    });
                                },
                                [t, m, T],
                            ),
                            R = l.useCallback(
                                function () {
                                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                                        [n, l] = null != p ? p(i, s) : [i, s];
                                    if ((n !== i || l !== s) && (f({ type: r.n.SET_FOCUSED_POSITION, x: n, y: l }), !e))
                                        return void N(!0);
                                    let a = d(u(t, n, l));
                                    null != a && (N(!0), T(a));
                                },
                                [f, i, s, p, t, T],
                            ),
                            [L, k] = l.useState(!1);
                        l.useEffect(() => {
                            if (!L || !I) return;
                            k(!1);
                            let e = d(u(t, i, s));
                            if (null != e) return void T(e);
                            v(!1);
                            let n = d(u(t));
                            null != n && T(n);
                        }, [t, L, I, T, i, s]);
                        let O = l.useCallback((e) => {
                            A.current && null == e && k(!0);
                        }, []);
                        l.useEffect(() => {
                            I && y && null != E && (T(E), b(!1));
                        }, [y, E]),
                            l.useEffect(() => {
                                I && (S || w(i, s), N(!1));
                            }, [i, s]);
                        let M = l.useCallback(
                                (e) => {
                                    if (!A.current) return;
                                    if (
                                        !C &&
                                        c.includes(e.key) &&
                                        !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) &&
                                        e.currentTarget === e.target
                                    ) {
                                        e.preventDefault(), e.stopPropagation(), R();
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
                                                (0 !== i || 0 !== s || t !== a.X2.NAVIGATE_LEFT) &&
                                                (e.preventDefault(), e.stopPropagation()),
                                                f({ type: t });
                                            return;
                                        case a.X2.SELECT_FOCUSED_ITEM:
                                            if ((x && E?.ownerDocument.activeElement !== E) || e.repeat) return;
                                            e.preventDefault(),
                                                e.stopPropagation(),
                                                f({ type: t }),
                                                null != h ? h(i, s, e) : null != E && E.click();
                                    }
                                },
                                [R, f, x, E, h, i, s],
                            ),
                            P = l.useCallback(
                                (e) =>
                                    e.currentTarget !== e.target
                                        ? (I || (v(!0), N(!0)), !1)
                                        : I
                                          ? (R(!1), !1)
                                          : void (g && null != E ? w(i, s) : R(!0)),
                                [I, g, E, R, w, i, s],
                            ),
                            D = l.useCallback((e) => {
                                if (e.target !== e.currentTarget) {
                                    if (e.currentTarget.contains(e.relatedTarget)) return !1;
                                    v(!1);
                                }
                            }, []),
                            U = l.useMemo(() => Math.max(...n), [n]),
                            V = l.useCallback(
                                () => ({
                                    role: "grid",
                                    "aria-rowcount": n.length,
                                    "aria-colcount": U,
                                    tabIndex: I && g ? -1 : 0,
                                    "data-ref-id": t,
                                    onKeyDown: M,
                                    onFocus: P,
                                    onBlur: D,
                                }),
                                [n.length, U, I, g, t, M, P, D],
                            ),
                            G = l.useCallback(
                                (e, n) => {
                                    let l = {
                                        role: "gridcell",
                                        "aria-rowindex": n + 1,
                                        "aria-colindex": e + 1,
                                        id: (0, o.Aq)(t, e, n),
                                        tabIndex: g && e === i && n === s ? 0 : -1,
                                        onFocus: j.get(`${e},${n}`),
                                    };
                                    return e === i && n === s && (l.ref = O), l;
                                },
                                [t, g, i, s, j, O],
                            ),
                            F = l.useCallback((e) => ({ role: "row", "aria-rowindex": e + 1 }), []);
                        return l.useMemo(
                            () => ({ dispatch: f, getContainerProps: V, getItemProps: G, getRowProps: F }),
                            [f, V, G, F],
                        );
                    })({
                        navId: t,
                        columnCounts: v,
                        focusedX: y,
                        focusedY: b,
                        dispatch: S,
                        onSelect: h,
                        prepareFocus: m,
                        getNewFocusPosition: p,
                        maintainFocusPosition: f,
                        enabled: g,
                        autoFocusElement: x,
                        useVirtualFocus: C,
                    })
                );
            })({
                navId: n,
                columnCounts: t,
                onDispatch: l.useCallback(
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
                                g(t);
                        }
                    },
                    [g],
                ),
                onSelect: l.useCallback(
                    (e, t, n) => {
                        let l = f(e, t);
                        null != l && h(l, n);
                    },
                    [f, h],
                ),
                autoFocusElement: !1,
                useVirtualFocus: !0,
            }),
            { gridContainerProps: E, handleGridContainerKeyDown: I } = l.useMemo(() => {
                let e = A();
                return { gridContainerProps: e, handleGridContainerKeyDown: e.onKeyDown };
            }, [A]);
        return (
            l.useEffect(() => {
                let e = () => {
                    p.current = !1;
                };
                return window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e);
            }, []),
            {
                gridDispatch: _,
                getItemProps: x,
                getRowProps: C,
                gridContainerProps: E,
                handleGridContainerKeyDown: I,
                isUsingKeyboardNavigation: p,
            }
        );
    };
function E(e) {
    let {
        categories: t,
        collapsedCategories: n,
        gridWidth: i = 0,
        listPaddingRight: s = 0,
        itemNodeWidth: a,
        itemNodeMargin: r = 0,
    } = e;
    return l.useMemo(() => {
        let e = Math.max(1, Math.floor((i - s + r) / (a + r))),
            l = Math.floor(Math.max(r, (i - s - a * e) / (e - 1))),
            o = [],
            c = [],
            u = [],
            d = 0,
            h = 0,
            m = 0;
        if (0 !== i) {
            let l = function (t, n) {
                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = Math.ceil(t.length / e);
                c[h] = l ? 0 : i;
                for (let s = 0; s < i; s++) {
                    let i = s * e,
                        a = i + e,
                        r = t
                            .slice(i, a)
                            .map((e, t) => ({
                                item: e,
                                gridSectionIndex: h,
                                rowIndex: d,
                                columnIndex: t,
                                visibleRowIndex: m,
                                category: n,
                            }));
                    l || (m++, u.push(r), o.push(r.length)), d++;
                }
                h++;
            };
            for (let e of t) e.items.length > 0 && l(e.items, e.categoryInfo.type, n?.has(`${e.key}`) ?? !1);
        }
        return { expressionsGrid: u, rowCount: d, rowCountBySection: c, columnCounts: o, gutterWidth: l };
    }, [t, n, i, r, a, s]);
}
function I(e) {
    let {
            columnCounts: t,
            expressionsGrid: n,
            expressionsListRef: i,
            store: s,
            gridNavigatorId: a,
            onSelectItem: o,
        } = e,
        {
            gridDispatch: c,
            getItemProps: u,
            getRowProps: d,
            gridContainerProps: h,
            handleGridContainerKeyDown: m,
            isUsingKeyboardNavigation: f,
        } = A({
            columnCounts: t,
            gridNavigatorId: a,
            itemGrid: n,
            itemList: i,
            onGridNavigatorItemSelect: o,
            onGridNavigatorPositionChange: s.setInspectedExpressionPosition,
        });
    return (
        l.useEffect(
            () =>
                s.subscribe(
                    (e) => e.inspectedExpressionPosition,
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: t, rowIndex: n, source: l } = e;
                        l !== p.t.GRID_NAVIGATOR_EVENT && c({ type: r.n.SET_FOCUSED_POSITION, x: t, y: n });
                    },
                ),
            [c, s],
        ),
        {
            getItemProps: u,
            getRowProps: d,
            gridContainerProps: h,
            handleGridContainerKeyDown: m,
            isUsingKeyboardNavigation: f,
        }
    );
}
