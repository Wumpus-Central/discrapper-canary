n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(481060),
    s = n(626135),
    i = n(381585),
    o = n(501431),
    c = n(215023),
    u = n(981631),
    d = n(388032),
    g = n(55918);
function p(e) {
    let { handleTransition: t, selectedTab: n } = e,
        { searchQuery: p, onSetSearchQuery: f } = (0, o.S)(),
        [m, _] = l.useState(""),
        h = (0, i.sp)();
    return (
        l.useEffect(() => {
            let e = setTimeout(() => {
                f(m);
            }, 250);
            return () => clearTimeout(e);
        }, [m, f]),
        l.useEffect(() => {
            _(p);
        }, [p]),
        (0, r.jsx)(a.P3F, {
            ignoreKeyPress: !0,
            onClick: () => {
                n !== c.AW.CATALOG && t(c.AW.CATALOG),
                    s.default.track(u.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == h ? void 0 : h.sessionId,
                        page_section: null == h ? void 0 : h.pageSection,
                        page_category: null == h ? void 0 : h.pageCategory,
                        page_index: null == h ? void 0 : h.pageIndex,
                        page_size: null == h ? void 0 : h.pageSize,
                        cta_name: "search bar",
                        page_type: n,
                    });
            },
            children: (0, r.jsx)(a.E1j, {
                size: "sm",
                className: g.searchBar,
                onKeyDown: (e) => {
                    "Enter" === e.key && f(m);
                },
                query: m,
                onChange: _,
                onClear: () => {
                    _(""),
                        s.default.track(u.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: null == h ? void 0 : h.sessionId,
                            page_section: null == h ? void 0 : h.pageSection,
                            page_category: null == h ? void 0 : h.pageCategory,
                            page_index: null == h ? void 0 : h.pageIndex,
                            page_size: null == h ? void 0 : h.pageSize,
                            cta_name: "search bar clear",
                            page_type: n,
                        });
                },
                placeholder: d.intl.string(d.t["hIt/Nj"]),
            }),
        })
    );
}
