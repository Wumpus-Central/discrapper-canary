"use strict";
s.d(t, { A: () => O });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(599319),
    o = s(573613),
    c = s(834730),
    d = s(821609),
    u = s(783977),
    g = s(564322),
    h = s(287344),
    _ = s(785330),
    m = s(954571),
    p = s(440938),
    f = s(365491),
    E = s(549367),
    x = s(976742),
    A = s(177366),
    C = s(212602),
    S = s(662166),
    b = s(919610),
    v = s(685533),
    L = s(773591),
    I = s(758836),
    j = s(652215),
    N = s(985018),
    T = s(832179);
function O(e) {
    let { tab: t, categories: s, initialCategoryId: r, showFilterInitially: a = !0, onUnmount: c } = e;
    (0, f.S)();
    let d = l.useRef(null),
        { handleScroll: u } = (0, g.X)(d, t),
        m = (0, h.f)("Shop Browse"),
        { setCategoryRef: p, handleScrollToCategory: E } = (0, A.k0)(d.current),
        [x, C] = l.useState(a),
        [b, v] = l.useState(!1);
    return (
        l.useEffect(() => {
            null != r && E(r);
        }, [r, E]),
        l.useEffect(
            () => () => {
                null != c && c();
            },
            [],
        ),
        l.useEffect(() => {
            let e = () => {
                v(window.innerWidth < 1400);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, n.jsx)("div", {
            className: T.VM,
            children: (0, n.jsxs)("main", {
                className: T.MY,
                children: [
                    (0, n.jsx)(i.Gt, {
                        className: T.OW,
                        ref: d,
                        onScroll: u,
                        children: m
                            ? (0, n.jsx)("div", {
                                  className: T.en,
                                  children: (0, n.jsx)("div", {
                                      className: T.pf,
                                      children: (0, n.jsx)(_.Z_, { tenantId: j.FYj, templateId: "back-catalog" }),
                                  }),
                              })
                            : (0, n.jsx)(y, {
                                  isSmallScreen: b,
                                  filterBarOpen: x,
                                  setFilterBarOpen: C,
                                  tab: t,
                                  scrollerRef: d,
                                  categories: s,
                                  setCategoryRef: p,
                                  initialCategoryId: r,
                              }),
                    }),
                    x && !b && (0, n.jsx)("div", { className: T.yF }),
                    x && !b && (0, n.jsx)(o.Ip, { className: T.kT, children: (0, n.jsx)(S.A, {}) }),
                ],
            }),
        })
    );
}
let y = (e) => {
    let {
            isSmallScreen: t,
            filterBarOpen: s,
            setFilterBarOpen: r,
            tab: o,
            scrollerRef: g,
            categories: h,
            setCategoryRef: _,
            initialCategoryId: A,
        } = e,
        O = l.useRef(null),
        y = (0, f.v)((e) => e.hasDefaultFilters()),
        k = (0, p.uM)(),
        { handlePageChange: R, currentPage: B } = (0, b.Z)(g),
        P = l.useCallback(
            (e) => {
                m.default.track(j.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: k?.sessionId,
                    page_section: k?.pageSection,
                    page_category: k?.pageCategory,
                    page_index: e,
                    page_size: k?.pageSize,
                    cta_name: `catalog page ${e}`,
                    page_type: "catalog",
                }),
                    R(e);
            },
            [k, R],
        ),
        M = l.useRef(null);
    return (
        l.useEffect(() => {
            if (!t || !s) return;
            let e = (e) => {
                let t = e.target;
                null === O.current ||
                    null === M.current ||
                    O.current.contains(t) ||
                    M.current.contains(t) ||
                    (m.default.track(j.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: k?.sessionId,
                        page_section: k?.pageSection,
                        page_category: k?.pageCategory,
                        page_index: k?.pageIndex,
                        page_size: k?.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    r(!1));
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
        }, [t, s, r, k]),
        (0, n.jsx)("div", {
            className: T.en,
            children: (0, n.jsxs)("div", {
                className: T.pf,
                children: [
                    (0, n.jsxs)("div", {
                        className: T.ne,
                        children: [
                            (0, n.jsx)("div", { className: T.lQ, children: (0, n.jsx)(E.A, {}) }),
                            (0, n.jsxs)("div", {
                                className: a()(T.wR, { [T.Im]: t }),
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: T.Ul,
                                        children: [
                                            (0, n.jsx)(c.E, {
                                                variant: "text-md/semibold",
                                                children: N.intl.string(N.t.uaX705),
                                            }),
                                            (0, n.jsx)(C.A, {}),
                                        ],
                                    }),
                                    (0, n.jsx)("div", {
                                        ref: M,
                                        children: (0, n.jsx)(d.$, {
                                            onClick: () => {
                                                let e = !s;
                                                m.default.track(j.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                    collectibles_shop_session_id: k?.sessionId,
                                                    page_section: k?.pageSection,
                                                    page_category: k?.pageCategory,
                                                    page_index: k?.pageIndex,
                                                    page_size: k?.pageSize,
                                                    cta_name: `filter bar ${e ? "show" : "hide"}`,
                                                    page_type: "catalog",
                                                }),
                                                    r(e);
                                            },
                                            variant: "secondary",
                                            text: N.intl.string(s ? N.t.fYtm6f : N.t["TeTYE+"]),
                                            icon: u.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            s &&
                                t &&
                                (0, n.jsx)("div", {
                                    className: T.Dh,
                                    ref: O,
                                    children: (0, n.jsx)(i.Ch, { className: T.Qo, children: (0, n.jsx)(S.A, {}) }),
                                }),
                        ],
                    }),
                    y
                        ? (0, I.dF)(o)
                            ? (0, n.jsx)(L.A, { scrollerRef: g, tab: o }, o)
                            : (0, n.jsx)(p.R9, {
                                  newValue: { pageIndex: B },
                                  children: (0, n.jsx)(x.A, {
                                      categories: h,
                                      setCategoryRef: _,
                                      currentPage: B,
                                      handlePageChange: P,
                                      initialCategoryId: A,
                                  }),
                              })
                        : (0, n.jsx)(v.A, { scrollerRef: g, tab: o }, o),
                ],
            }),
        })
    );
};
