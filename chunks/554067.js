n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(442837),
    s = n(481060),
    a = n(706454),
    o = n(626135),
    c = n(381585),
    u = n(501431),
    d = n(215023),
    g = n(981631),
    p = n(388032),
    f = n(535333);
function h(e) {
    let { handleTransition: t, selectedTab: n } = e,
        { searchQuery: h, onSetSearchQuery: C } = (0, u.S)(),
        [_, m] = l.useState(""),
        b = (0, c.sp)(),
        v = (0, i.e7)([a.default], () => a.default.locale);
    return (
        l.useEffect(() => {
            let e = setTimeout(() => {
                C(_);
            }, 250);
            return () => clearTimeout(e);
        }, [_, C]),
        l.useEffect(() => {
            m(h);
        }, [h]),
        (0, r.jsx)(s.P3F, {
            ignoreKeyPress: !0,
            className: f.searchBar,
            onClick: () => {
                n !== d.AW.CATALOG && t(d.AW.CATALOG),
                    o.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == b ? void 0 : b.sessionId,
                        page_section: null == b ? void 0 : b.pageSection,
                        page_category: null == b ? void 0 : b.pageCategory,
                        page_index: null == b ? void 0 : b.pageIndex,
                        page_size: null == b ? void 0 : b.pageSize,
                        cta_name: "search bar",
                        page_type: n,
                    });
            },
            children: (0, r.jsx)(s.E1j, {
                size: "sm",
                onKeyDown: (e) => {
                    "Enter" === e.key && C(_);
                },
                query: _,
                onChange: m,
                onClear: () => {
                    m(""),
                        o.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: null == b ? void 0 : b.sessionId,
                            page_section: null == b ? void 0 : b.pageSection,
                            page_category: null == b ? void 0 : b.pageCategory,
                            page_index: null == b ? void 0 : b.pageIndex,
                            page_size: null == b ? void 0 : b.pageSize,
                            cta_name: "search bar clear",
                            page_type: n,
                        });
                },
                placeholder: "en-US" === v ? p.intl.string(p.t.arz34K) : p.intl.string(p.t["hIt/Nm"]),
            }),
        })
    );
}
