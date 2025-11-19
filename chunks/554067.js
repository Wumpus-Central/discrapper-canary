n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(481060),
    s = n(706454),
    o = n(626135),
    c = n(381585),
    u = n(501431),
    d = n(215023),
    f = n(981631),
    g = n(388032),
    p = n(55918);
function m(e) {
    let { handleTransition: t, selectedTab: n } = e,
        { searchQuery: m, onSetSearchQuery: h } = (0, u.S)(),
        [C, _] = l.useState(""),
        b = (0, c.sp)(),
        v = (0, i.e7)([s.default], () => s.default.locale);
    return (
        l.useEffect(() => {
            let e = setTimeout(() => {
                h(C);
            }, 250);
            return () => clearTimeout(e);
        }, [C, h]),
        l.useEffect(() => {
            _(m);
        }, [m]),
        (0, r.jsx)(a.P3F, {
            ignoreKeyPress: !0,
            className: p.searchBar,
            onClick: () => {
                n !== d.AW.CATALOG && t(d.AW.CATALOG),
                    o.default.track(f.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == b ? void 0 : b.sessionId,
                        page_section: null == b ? void 0 : b.pageSection,
                        page_category: null == b ? void 0 : b.pageCategory,
                        page_index: null == b ? void 0 : b.pageIndex,
                        page_size: null == b ? void 0 : b.pageSize,
                        cta_name: "search bar",
                        page_type: n,
                    });
            },
            children: (0, r.jsx)(a.E1j, {
                size: "sm",
                onKeyDown: (e) => {
                    "Enter" === e.key && h(C);
                },
                query: C,
                onChange: _,
                onClear: () => {
                    _(""),
                        o.default.track(f.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: null == b ? void 0 : b.sessionId,
                            page_section: null == b ? void 0 : b.pageSection,
                            page_category: null == b ? void 0 : b.pageCategory,
                            page_index: null == b ? void 0 : b.pageIndex,
                            page_size: null == b ? void 0 : b.pageSize,
                            cta_name: "search bar clear",
                            page_type: n,
                        });
                },
                placeholder: "en-US" === v ? g.intl.string(g.t.arz34K) : g.intl.string(g.t["hIt/Nm"]),
            }),
        })
    );
}
