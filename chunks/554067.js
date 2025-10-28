n.d(t, { Z: () => C }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(442837),
    o = n(481060),
    s = n(706454),
    a = n(626135),
    c = n(381585),
    u = n(501431),
    d = n(215023),
    g = n(981631),
    p = n(388032),
    f = n(535333);
function C(e) {
    let { handleTransition: t, selectedTab: n } = e,
        { searchQuery: C, onSetSearchQuery: h } = (0, u.S)(),
        [_, m] = l.useState(""),
        b = (0, c.sp)(),
        v = (0, i.e7)([s.default], () => s.default.locale);
    return (
        l.useEffect(() => {
            let e = setTimeout(() => {
                h(_);
            }, 250);
            return () => clearTimeout(e);
        }, [_, h]),
        l.useEffect(() => {
            m(C);
        }, [C]),
        (0, r.jsx)(o.P3F, {
            ignoreKeyPress: !0,
            className: f.searchBar,
            onClick: () => {
                n !== d.AW.CATALOG && t(d.AW.CATALOG),
                    a.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == b ? void 0 : b.sessionId,
                        page_section: null == b ? void 0 : b.pageSection,
                        page_category: null == b ? void 0 : b.pageCategory,
                        page_index: null == b ? void 0 : b.pageIndex,
                        page_size: null == b ? void 0 : b.pageSize,
                        cta_name: "search bar",
                        page_type: n,
                    });
            },
            children: (0, r.jsx)(o.E1j, {
                size: "sm",
                onKeyDown: (e) => {
                    "Enter" === e.key && h(_);
                },
                query: _,
                onChange: m,
                onClear: () => {
                    m(""),
                        a.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
