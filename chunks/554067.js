r.d(t, { Z: () => g }), r(388685);
var n = r(255367),
    l = r(73800),
    a = r(481060),
    i = r(626135),
    o = r(381585),
    s = r(501431),
    c = r(215023),
    u = r(981631),
    d = r(388032),
    p = r(863701);
function g(e) {
    let { handleTransition: t, selectedTab: r } = e,
        { searchQuery: g, onSetSearchQuery: f } = (0, s.S)(),
        [b, h] = l.useState(""),
        m = (0, o.sp)();
    return (
        l.useEffect(() => {
            let e = setTimeout(() => {
                f(b);
            }, 250);
            return () => clearTimeout(e);
        }, [b, f]),
        l.useEffect(() => {
            h(g);
        }, [g]),
        (0, n.jsx)(a.P3F, {
            ignoreKeyPress: !0,
            onClick: () => {
                r !== c.AW.CATALOG && t(c.AW.CATALOG),
                    i.default.track(u.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == m ? void 0 : m.sessionId,
                        page_section: null == m ? void 0 : m.pageSection,
                        page_category: null == m ? void 0 : m.pageCategory,
                        page_index: null == m ? void 0 : m.pageIndex,
                        page_size: null == m ? void 0 : m.pageSize,
                        cta_name: "search bar",
                        page_type: r,
                    });
            },
            children: (0, n.jsx)(a.E1j, {
                size: "sm",
                className: p.searchBar,
                onKeyDown: (e) => {
                    "Enter" === e.key && f(b);
                },
                query: b,
                onChange: h,
                onClear: () => {
                    h(""),
                        i.default.track(u.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: null == m ? void 0 : m.sessionId,
                            page_section: null == m ? void 0 : m.pageSection,
                            page_category: null == m ? void 0 : m.pageCategory,
                            page_index: null == m ? void 0 : m.pageIndex,
                            page_size: null == m ? void 0 : m.pageSize,
                            cta_name: "search bar clear",
                            page_type: r,
                        });
                },
                placeholder: d.intl.string(d.t["hIt/Nj"]),
            }),
        })
    );
}
