n.d(t, { Z: () => C }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(442837),
    i = n(481060),
    s = n(706454),
    o = n(626135),
    c = n(381585),
    u = n(501431),
    d = n(215023),
    g = n(981631),
    p = n(388032),
    f = n(535333);
function C(e) {
    let { handleTransition: t, selectedTab: n } = e,
        { searchQuery: C, onSetSearchQuery: _ } = (0, u.S)(),
        [h, m] = l.useState(""),
        b = (0, c.sp)(),
        E = (0, a.e7)([s.default], () => s.default.locale);
    return (
        l.useEffect(() => {
            let e = setTimeout(() => {
                _(h);
            }, 250);
            return () => clearTimeout(e);
        }, [h, _]),
        l.useEffect(() => {
            m(C);
        }, [C]),
        (0, r.jsx)(i.P3F, {
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
            children: (0, r.jsx)(i.E1j, {
                size: "sm",
                onKeyDown: (e) => {
                    "Enter" === e.key && _(h);
                },
                query: h,
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
                placeholder: "en-US" === E ? p.intl.string(p.t.arz34O) : p.intl.string(p.t["hIt/Nj"]),
            }),
        })
    );
}
