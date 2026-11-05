n.d(t, { J: () => h, A: () => p });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    r = n.n(l),
    a = n(837381),
    o = n(962125),
    c = n(151271),
    u = n(116903),
    d = n(602034),
    m = n(855986),
    f = n(775602);
function E(e) {
    let t = document.activeElement?.getAttribute(d.eM);
    return null == t ? null : e((0, d.HP)(t));
}
function I(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8,
        s = arguments.length > 4 ? arguments[4] : void 0,
        l = s ?? ++n.current;
    if (l !== n.current) return;
    let r = document.querySelector((0, d.Mz)((0, d.t$)(e, t)));
    null != r ? r.focus() : i > 0 && requestAnimationFrame(() => I(e, t, n, i - 1, l));
}
function h(e) {
    return {
        itemIdForIndex: (t) => `${e}${t}`,
        parseIndex: (t) => {
            if (null == t || !t.startsWith(e)) return null;
            let n = t.slice(e.length);
            if ("" === n) return null;
            let i = Number(n);
            return Number.isInteger(i) ? i : null;
        },
    };
}
n(652215);
var g = n(14753);
let p = function (e) {
    let {
            categoryListRef: t,
            expressionsListRef: n,
            categories: l,
            store: d,
            children: p,
            renderListHeader: A,
            listHeaderHeight: _,
            className: N,
            listPadding: C,
            rowCount: y,
            getScrollOffsetForIndex: x,
            getScrollOffsetForCategory: O,
            categoryHeight: T,
            onScroll: j,
            renderCategoryListItem: S,
            rowCountBySection: b,
            renderSection: R,
            navId: v,
            itemIdPrefix: L,
        } = e,
        P = d.useStore((e) => e.activeCategoryIndex),
        M = null != v && null != L,
        { itemIdForIndex: D, parseIndex: w } = s.useMemo(() => h(L ?? "expression-category-"), [L]),
        k = (function (e) {
            let {
                    navId: t,
                    categoryListRef: n,
                    itemIdForIndex: i,
                    parseIndex: l,
                    rowCount: r,
                    activeIndex: a,
                    getScrollOffsetForIndex: o,
                    enabled: c = !0,
                } = e,
                d = (0, m.bG)([f.Ay], () => f.Ay.keyboardModeEnabled),
                h = s.useRef(null),
                g = s.useRef(0),
                p = c && d;
            s.useEffect(
                () => () => {
                    g.current += 1;
                },
                [],
            );
            let A = s.useCallback(
                    (e, t) => {
                        let i = o?.(e, t) ?? 0;
                        n.current?.scrollRowIntoView(e, { animate: !1, offset: i });
                    },
                    [n, o],
                ),
                _ = s.useCallback(
                    (e, n) => {
                        let s = l(n);
                        if (null != s) {
                            let e = E(l) ?? h.current;
                            (A(s, null == e || s >= e), (h.current = s));
                        } else h.current = null;
                        let r = document.querySelector(e);
                        if (null != r) {
                            ((g.current += 1), r.focus());
                            return;
                        }
                        null != s && I(t, i(s), g);
                    },
                    [i, t, l, A],
                ),
                N = s.useCallback(
                    (e, n) => {
                        (A(e, n), (h.current = e), I(t, i(e), g));
                    },
                    [i, t, A],
                ),
                C = s.useCallback(
                    () =>
                        new Promise((e) => {
                            (n.current?.scrollTo(0),
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => e());
                                }));
                        }),
                    [n],
                ),
                y = s.useCallback(
                    () =>
                        new Promise((e) => {
                            let t = n.current?.getListDimensions().totalHeight ?? Number.MAX_SAFE_INTEGER;
                            (n.current?.scrollTo(t),
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => e());
                                }));
                        }),
                    [n],
                ),
                x = s.useCallback(() => {
                    let e = E(l) ?? h.current;
                    null == e || e >= r - 1 || N(e + 1, !0);
                }, [N, l, r]),
                O = s.useCallback(() => {
                    let e = E(l) ?? h.current;
                    null == e || e <= 0 || N(e - 1, !1);
                }, [N, l]),
                T = (0, u.Ay)({
                    id: t,
                    isEnabled: p,
                    setFocus: _,
                    scrollToStart: C,
                    scrollToEnd: y,
                    onNavigateNextAtEnd: x,
                    onNavigatePreviousAtStart: O,
                }),
                j = T.setFocus;
            return (
                s.useEffect(() => {
                    if (!c || a < 0 || a >= r) return;
                    let e = n.current?.getScrollerNode();
                    if (null != e && e.contains(document.activeElement)) return;
                    let t = 0,
                        s = requestAnimationFrame(() => {
                            t = requestAnimationFrame(() => {
                                ((h.current = a), j(i(a)));
                            });
                        });
                    return () => {
                        (cancelAnimationFrame(s), cancelAnimationFrame(t));
                    };
                }, [a, n, c, i, j, r]),
                T
            );
        })({
            navId: v ?? "expression-picker-categories-disabled",
            categoryListRef: t,
            itemIdForIndex: D,
            parseIndex: w,
            rowCount: y,
            activeIndex: P,
            getScrollOffsetForIndex: x,
            enabled: M,
        });
    !(function (e) {
        let { activeIndex: t, categoryListRef: n, getScrollOffsetForIndex: i } = e,
            l = s.useRef(0),
            r = s.useRef(t);
        s.useEffect(() => {
            null != t &&
                t !== r.current &&
                (0 !== l.current && window.cancelAnimationFrame(l.current),
                (l.current = window.requestAnimationFrame(() => {
                    if (null == n.current) return;
                    let e = t > (r.current ?? -1),
                        s = null != i ? i(t, e) : 0;
                    (n.current.scrollRowIntoView(t, { animate: !0, offset: s }), (l.current = 0), (r.current = t));
                })));
        }, [t, n, i]);
    })({ activeIndex: P, categoryListRef: t, getScrollOffsetForIndex: x });
    let U = s.useCallback(
            (e) => {
                let { searchQuery: t } = c.RQ.getState();
                (d.setActiveCategoryIndex(e),
                    "" !== t ? (0, c.Ri)("") : n.current?.scrollToSectionTop(e, { offset: O?.(e) }));
            },
            [n, d, O],
        ),
        G = s.useCallback((e) => S(l[e], e, () => U(e), P === e), [P, l, U, S]),
        F = s.useMemo(() => ("function" == typeof T ? (e) => T(l[e], e) : T), [l, T]),
        J = (0, i.jsx)(o.A, {
            listPadding: C,
            onScroll: j,
            ref: t,
            renderListHeader: A,
            listHeaderHeight: _,
            renderRow: G,
            rowCount: y,
            rowHeight: F,
            hideScrollbar: !0,
            rowCountBySection: b,
            renderSection: R,
            role: M ? "none presentation" : void 0,
        }),
        K = (0, i.jsxs)("div", {
            className: r()(g.i, N),
            children: [
                M
                    ? (0, i.jsx)(a.PR, {
                          children: (e) => {
                              let { ref: t, ...n } = e;
                              return (0, i.jsx)("div", { className: g.e, ...n, ref: t, children: J });
                          },
                      })
                    : J,
                p?.(U),
            ],
        });
    return M ? (0, i.jsx)(a.hD, { navigator: k, children: K }) : K;
};
