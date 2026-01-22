l.d(t, { A: () => O }), l(896048);
var n = l(627968),
    r = l(64700),
    s = l(503698),
    a = l.n(s),
    i = l(397927),
    o = l(564322),
    c = l(954571),
    u = l(440938),
    d = l(365491),
    f = l(549367),
    b = l(976742),
    g = l(177366),
    p = l(212602),
    m = l(662166),
    h = l(919610),
    E = l(685533),
    v = l(773591),
    A = l(758836),
    x = l(652215),
    S = l(985018),
    C = l(356365);
function O(e) {
    let { tab: t, sortedCategories: l, initialCategoryId: s, showFilterInitially: a = !0, onUnmount: c } = e;
    (0, d.S)();
    let u = r.useRef(null),
        { handleScroll: f } = (0, o.X)(u, t),
        { setCategoryRef: b, handleScrollToCategory: p } = (0, g.k0)(u.current),
        [h, E] = r.useState(a),
        [v, A] = r.useState(!1);
    return (
        r.useEffect(() => {
            null != s && p(s);
        }, [s, p]),
        r.useEffect(
            () => () => {
                null != c && c();
            },
            [],
        ),
        r.useEffect(() => {
            let e = () => {
                A(window.innerWidth < 1400);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, n.jsx)("div", {
            className: C.VM,
            children: (0, n.jsxs)("main", {
                className: C.MY,
                children: [
                    (0, n.jsx)(i.GtU, {
                        className: C.OW,
                        ref: u,
                        onScroll: f,
                        children: (0, n.jsx)(_, {
                            isSmallScreen: v,
                            filterBarOpen: h,
                            setFilterBarOpen: E,
                            tab: t,
                            scrollerRef: u,
                            sortedCategories: l,
                            setCategoryRef: b,
                            initialCategoryId: s,
                        }),
                    }),
                    h && !v && (0, n.jsx)("div", { className: C.yF }),
                    h &&
                        !v &&
                        (0, n.jsx)(i.HOs, {
                            className: C.kT,
                            children: (0, n.jsx)(m.A, {}),
                        }),
                ],
            }),
        })
    );
}
let _ = (e) => {
    let {
            isSmallScreen: t,
            filterBarOpen: l,
            setFilterBarOpen: s,
            tab: o,
            scrollerRef: g,
            sortedCategories: O,
            setCategoryRef: _,
            initialCategoryId: y,
        } = e,
        j = r.useRef(null),
        L = (0, d.v)((e) => e.hasDefaultFilters()),
        T = (0, u.uM)(),
        { handlePageChange: I, currentPage: N } = (0, h.Z)(g),
        k = r.useCallback(
            (e) => {
                c.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == T ? void 0 : T.sessionId,
                    page_section: null == T ? void 0 : T.pageSection,
                    page_category: null == T ? void 0 : T.pageCategory,
                    page_index: e,
                    page_size: null == T ? void 0 : T.pageSize,
                    cta_name: "catalog page ".concat(e),
                    page_type: "catalog",
                }),
                    I(e);
            },
            [T, I],
        ),
        R = r.useRef(null);
    return (
        r.useEffect(() => {
            if (!t || !l) return;
            let e = (e) => {
                let t = e.target;
                null === j.current ||
                    null === R.current ||
                    j.current.contains(t) ||
                    R.current.contains(t) ||
                    (c.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == T ? void 0 : T.sessionId,
                        page_section: null == T ? void 0 : T.pageSection,
                        page_category: null == T ? void 0 : T.pageCategory,
                        page_index: null == T ? void 0 : T.pageIndex,
                        page_size: null == T ? void 0 : T.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    s(!1));
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
        }, [t, l, s, T]),
        (0, n.jsx)("div", {
            className: C.en,
            children: (0, n.jsxs)("div", {
                className: C.pf,
                children: [
                    (0, n.jsxs)("div", {
                        className: C.ne,
                        children: [
                            (0, n.jsx)("div", {
                                className: C.lQ,
                                children: (0, n.jsx)(f.A, {}),
                            }),
                            (0, n.jsxs)("div", {
                                className: a()(C.wR, { [C.Im]: t }),
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: C.Ul,
                                        children: [
                                            (0, n.jsx)(i.Text, {
                                                variant: "text-md/semibold",
                                                children: S.intl.string(S.t.uaX705),
                                            }),
                                            (0, n.jsx)(p.A, {}),
                                        ],
                                    }),
                                    (0, n.jsx)("div", {
                                        ref: R,
                                        children: (0, n.jsx)(i.Button, {
                                            onClick: () => {
                                                let e = !l;
                                                c.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                    collectibles_shop_session_id: null == T ? void 0 : T.sessionId,
                                                    page_section: null == T ? void 0 : T.pageSection,
                                                    page_category: null == T ? void 0 : T.pageCategory,
                                                    page_index: null == T ? void 0 : T.pageIndex,
                                                    page_size: null == T ? void 0 : T.pageSize,
                                                    cta_name: "filter bar ".concat(e ? "show" : "hide"),
                                                    page_type: "catalog",
                                                }),
                                                    s(e);
                                            },
                                            variant: "secondary",
                                            text: S.intl.string(l ? S.t.fYtm6f : S.t["TeTYE+"]),
                                            icon: i.RgP,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            l &&
                                t &&
                                (0, n.jsx)("div", {
                                    className: C.Dh,
                                    ref: j,
                                    children: (0, n.jsx)(i.T7Y, {
                                        className: C.Qo,
                                        children: (0, n.jsx)(m.A, {}),
                                    }),
                                }),
                        ],
                    }),
                    L
                        ? (0, A.dF)(o)
                            ? (0, n.jsx)(
                                  v.A,
                                  {
                                      scrollerRef: g,
                                      tab: o,
                                  },
                                  o,
                              )
                            : (0, n.jsx)(u.R9, {
                                  newValue: { pageIndex: N },
                                  children: (0, n.jsx)(b.A, {
                                      sortedCategories: O,
                                      setCategoryRef: _,
                                      currentPage: N,
                                      handlePageChange: k,
                                      initialCategoryId: y,
                                  }),
                              })
                        : (0, n.jsx)(
                              E.A,
                              {
                                  scrollerRef: g,
                                  tab: o,
                              },
                              o,
                          ),
                ],
            }),
        })
    );
};
