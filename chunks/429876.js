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
    _ = s(976742),
    m = s(177366),
    h = s(212602),
    p = s(662166),
    f = s(919610),
    x = s(685533),
    E = s(773591),
    C = s(758836),
    A = s(652215),
    b = s(985018),
    S = s(356365);
function v(e) {
    let { tab: t, categories: s, initialCategoryId: l, showFilterInitially: a = !0, onUnmount: c } = e;
    (0, u.S)();
    let d = r.useRef(null),
        { handleScroll: g } = (0, o.X)(d, t),
        { setCategoryRef: _, handleScrollToCategory: h } = (0, m.k0)(d.current),
        [f, x] = r.useState(a),
        [E, C] = r.useState(!1);
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
                C(window.innerWidth < 1400);
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
                            isSmallScreen: E,
                            filterBarOpen: f,
                            setFilterBarOpen: x,
                            tab: t,
                            scrollerRef: d,
                            categories: s,
                            setCategoryRef: _,
                            initialCategoryId: l,
                        }),
                    }),
                    f && !E && (0, n.jsx)("div", { className: S.yF }),
                    f && !E && (0, n.jsx)(i.HOs, { className: S.kT, children: (0, n.jsx)(p.A, {}) }),
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
            scrollerRef: m,
            categories: v,
            setCategoryRef: L,
            initialCategoryId: I,
        } = e,
        j = r.useRef(null),
        k = (0, u.v)((e) => e.hasDefaultFilters()),
        O = (0, d.uM)(),
        { handlePageChange: T, currentPage: N } = (0, f.Z)(m),
        y = r.useCallback(
            (e) => {
                c.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: O?.sessionId,
                    page_section: O?.pageSection,
                    page_category: O?.pageCategory,
                    page_index: e,
                    page_size: O?.pageSize,
                    cta_name: `catalog page ${e}`,
                    page_type: "catalog",
                }),
                    T(e);
            },
            [O, T],
        ),
        R = r.useRef(null);
    return (
        r.useEffect(() => {
            if (!t || !s) return;
            let e = (e) => {
                let t = e.target;
                null === j.current ||
                    null === R.current ||
                    j.current.contains(t) ||
                    R.current.contains(t) ||
                    (c.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: O?.sessionId,
                        page_section: O?.pageSection,
                        page_category: O?.pageCategory,
                        page_index: O?.pageIndex,
                        page_size: O?.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    l(!1));
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
        }, [t, s, l, O]),
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
                                                children: b.intl.string(b.t.uaX705),
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
                                                    collectibles_shop_session_id: O?.sessionId,
                                                    page_section: O?.pageSection,
                                                    page_category: O?.pageCategory,
                                                    page_index: O?.pageIndex,
                                                    page_size: O?.pageSize,
                                                    cta_name: `filter bar ${e ? "show" : "hide"}`,
                                                    page_type: "catalog",
                                                }),
                                                    l(e);
                                            },
                                            variant: "secondary",
                                            text: b.intl.string(s ? b.t.fYtm6f : b.t["TeTYE+"]),
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
                                    ref: j,
                                    children: (0, n.jsx)(i.T7Y, { className: S.Qo, children: (0, n.jsx)(p.A, {}) }),
                                }),
                        ],
                    }),
                    k
                        ? (0, C.dF)(o)
                            ? (0, n.jsx)(E.A, { scrollerRef: m, tab: o }, o)
                            : (0, n.jsx)(d.R9, {
                                  newValue: { pageIndex: N },
                                  children: (0, n.jsx)(_.A, {
                                      categories: v,
                                      setCategoryRef: L,
                                      currentPage: N,
                                      handlePageChange: y,
                                      initialCategoryId: I,
                                  }),
                              })
                        : (0, n.jsx)(x.A, { scrollerRef: m, tab: o }, o),
                ],
            }),
        })
    );
};
