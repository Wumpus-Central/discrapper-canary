n.d(t, { Z: () => g }), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(481060),
    i = n(626135),
    o = n(381585),
    s = n(501431),
    c = n(215023),
    u = n(981631),
    d = n(388032),
    p = n(234209);
function g(e) {
    let { handleTransition: t, selectedTab: n } = e,
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
        (0, r.jsx)(a.P3F, {
            ignoreKeyPress: !0,
            onClick: () => {
                n !== c.AW.CATALOG && t(c.AW.CATALOG),
                    i.default.track(u.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == m ? void 0 : m.sessionId,
                        page_section: null == m ? void 0 : m.pageSection,
                        page_category: null == m ? void 0 : m.pageCategory,
                        page_index: null == m ? void 0 : m.pageIndex,
                        page_size: null == m ? void 0 : m.pageSize,
                        cta_name: "search bar",
                        page_type: n,
                    });
            },
            children: (0, r.jsx)(a.E1j, {
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
                            page_type: n,
                        });
                },
                placeholder: d.intl.string(d.t["hIt/Nj"]),
            }),
        })
    );
}
