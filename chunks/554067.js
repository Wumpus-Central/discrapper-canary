n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(442837),
    a = n(481060),
    o = n(706454),
    s = n(626135),
    c = n(381585),
    u = n(501431),
    d = n(215023),
    g = n(981631),
    p = n(388032),
    f = n(535333);
function h(e) {
    let { handleTransition: t, selectedTab: n } = e,
        { searchQuery: h, onSetSearchQuery: C } = (0, u.S)(),
        [m, _] = l.useState(""),
        b = (0, c.sp)(),
        v = (0, i.e7)([o.default], () => o.default.locale);
    return (
        l.useEffect(() => {
            let e = setTimeout(() => {
                C(m);
            }, 250);
            return () => clearTimeout(e);
        }, [m, C]),
        l.useEffect(() => {
            _(h);
        }, [h]),
        (0, r.jsx)(a.P3F, {
            ignoreKeyPress: !0,
            className: f.searchBar,
            onClick: () => {
                n !== d.AW.CATALOG && t(d.AW.CATALOG),
                    s.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                    "Enter" === e.key && C(m);
                },
                query: m,
                onChange: _,
                onClear: () => {
                    _(""),
                        s.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
