"use strict";
s.d(t, { A: () => v });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(397927),
    o = s(564322),
    c = s(954571),
    d = s(440938),
    u = s(365491),
    g = s(549367),
    m = s(976742),
    _ = s(177366),
    h = s(212602),
    p = s(662166),
    f = s(919610),
    E = s(685533),
    C = s(773591),
    b = s(758836),
    A = s(652215),
    x = s(985018),
    S = s(356365);
function v(e) {
    let { tab: t, sortedCategories: s, initialCategoryId: l, showFilterInitially: a = !0, onUnmount: c } = e;
    (0, u.S)();
    let d = r.useRef(null),
        { handleScroll: g } = (0, o.X)(d, t),
        { setCategoryRef: m, handleScrollToCategory: h } = (0, _.k0)(d.current),
        [f, E] = r.useState(a),
        [C, b] = r.useState(!1);
    return (
        r.useEffect(() => {
            null != l && h(l);
        }, [l, h]),
        r.useEffect(
            () => () => {
                null != c && c();
            },
            [],
        ),
        r.useEffect(() => {
            let e = () => {
                b(window.innerWidth < 1400);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, n.jsx)("div", {
            className: S.VM,
            children: (0, n.jsxs)("main", {
                className: S.MY,
                children: [
                    (0, n.jsx)(i.GtU, {
                        className: S.OW,
                        ref: d,
                        onScroll: g,
                        children: (0, n.jsx)(L, {
                            isSmallScreen: C,
                            filterBarOpen: f,
                            setFilterBarOpen: E,
                            tab: t,
                            scrollerRef: d,
                            sortedCategories: s,
                            setCategoryRef: m,
                            initialCategoryId: l,
                        }),
                    }),
                    f && !C && (0, n.jsx)("div", { className: S.yF }),
                    f && !C && (0, n.jsx)(i.HOs, { className: S.kT, children: (0, n.jsx)(p.A, {}) }),
                ],
            }),
        })
    );
}
let L = (e) => {
    let {
            isSmallScreen: t,
            filterBarOpen: s,
            setFilterBarOpen: l,
            tab: o,
            scrollerRef: _,
            sortedCategories: v,
            setCategoryRef: L,
            initialCategoryId: T,
        } = e,
        I = r.useRef(null),
        O = (0, u.v)((e) => e.hasDefaultFilters()),
        y = (0, d.uM)(),
        { handlePageChange: j, currentPage: N } = (0, f.Z)(_),
        k = r.useCallback(
            (e) => {
                c.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: y?.sessionId,
                    page_section: y?.pageSection,
                    page_category: y?.pageCategory,
                    page_index: e,
                    page_size: y?.pageSize,
                    cta_name: `catalog page ${e}`,
                    page_type: "catalog",
                }),
                    j(e);
            },
            [y, j],
        ),
        R = r.useRef(null);
    return (
        r.useEffect(() => {
            if (!t || !s) return;
            let e = (e) => {
                let t = e.target;
                null === I.current ||
                    null === R.current ||
                    I.current.contains(t) ||
                    R.current.contains(t) ||
                    (c.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: y?.sessionId,
                        page_section: y?.pageSection,
                        page_category: y?.pageCategory,
                        page_index: y?.pageIndex,
                        page_size: y?.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    l(!1));
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
        }, [t, s, l, y]),
        (0, n.jsx)("div", {
            className: S.en,
            children: (0, n.jsxs)("div", {
                className: S.pf,
                children: [
                    (0, n.jsxs)("div", {
                        className: S.ne,
                        children: [
                            (0, n.jsx)("div", { className: S.lQ, children: (0, n.jsx)(g.A, {}) }),
                            (0, n.jsxs)("div", {
                                className: a()(S.wR, { [S.Im]: t }),
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: S.Ul,
                                        children: [
                                            (0, n.jsx)(i.Text, {
                                                variant: "text-md/semibold",
                                                children: x.intl.string(x.t.uaX705),
                                            }),
                                            (0, n.jsx)(h.A, {}),
                                        ],
                                    }),
                                    (0, n.jsx)("div", {
                                        ref: R,
                                        children: (0, n.jsx)(i.Button, {
                                            onClick: () => {
                                                let e = !s;
                                                c.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                    collectibles_shop_session_id: y?.sessionId,
                                                    page_section: y?.pageSection,
                                                    page_category: y?.pageCategory,
                                                    page_index: y?.pageIndex,
                                                    page_size: y?.pageSize,
                                                    cta_name: `filter bar ${e ? "show" : "hide"}`,
                                                    page_type: "catalog",
                                                }),
                                                    l(e);
                                            },
                                            variant: "secondary",
                                            text: x.intl.string(s ? x.t.fYtm6f : x.t["TeTYE+"]),
                                            icon: i.RgP,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            s &&
                                t &&
                                (0, n.jsx)("div", {
                                    className: S.Dh,
                                    ref: I,
                                    children: (0, n.jsx)(i.T7Y, { className: S.Qo, children: (0, n.jsx)(p.A, {}) }),
                                }),
                        ],
                    }),
                    O
                        ? (0, b.dF)(o)
                            ? (0, n.jsx)(C.A, { scrollerRef: _, tab: o }, o)
                            : (0, n.jsx)(d.R9, {
                                  newValue: { pageIndex: N },
                                  children: (0, n.jsx)(m.A, {
                                      sortedCategories: v,
                                      setCategoryRef: L,
                                      currentPage: N,
                                      handlePageChange: k,
                                      initialCategoryId: T,
                                  }),
                              })
                        : (0, n.jsx)(E.A, { scrollerRef: _, tab: o }, o),
                ],
            }),
        })
    );
};
