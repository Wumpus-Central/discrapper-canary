r.d(t, { Z: () => g }), r(388685);
var n = r(951288),
    l = r(647438),
    a = r(481060),
    i = r(626135),
    o = r(381585),
    s = r(501431),
    c = r(215023),
    u = r(981631),
    d = r(388032),
    p = r(535333);
function g(e) {
    let { handleTransition: t, selectedTab: r } = e,
        { searchQuery: g, onSetSearchQuery: f } = (0, s.S)(),
        [m, b] = l.useState(""),
        h = (0, o.sp)();
    return (
        l.useEffect(() => {
            let e = setTimeout(() => {
                f(m);
            }, 250);
            return () => clearTimeout(e);
        }, [m, f]),
        l.useEffect(() => {
            b(g);
        }, [g]),
        (0, n.jsx)(a.P3F, {
            ignoreKeyPress: !0,
            onClick: () => {
                r !== c.AW.CATALOG && t(c.AW.CATALOG),
                    i.default.track(u.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == h ? void 0 : h.sessionId,
                        page_section: null == h ? void 0 : h.pageSection,
                        page_category: null == h ? void 0 : h.pageCategory,
                        page_index: null == h ? void 0 : h.pageIndex,
                        page_size: null == h ? void 0 : h.pageSize,
                        cta_name: "search bar",
                        page_type: r,
                    });
            },
            children: (0, n.jsx)(a.E1j, {
                size: "sm",
                className: p.searchBar,
                onKeyDown: (e) => {
                    "Enter" === e.key && f(m);
                },
                query: m,
                onChange: b,
                onClear: () => {
                    b(""),
                        i.default.track(u.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: null == h ? void 0 : h.sessionId,
                            page_section: null == h ? void 0 : h.pageSection,
                            page_category: null == h ? void 0 : h.pageCategory,
                            page_index: null == h ? void 0 : h.pageIndex,
                            page_size: null == h ? void 0 : h.pageSize,
                            cta_name: "search bar clear",
                            page_type: r,
                        });
                },
                placeholder: d.intl.string(d.t["hIt/Nj"]),
            }),
        })
    );
}
