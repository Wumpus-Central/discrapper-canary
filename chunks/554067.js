n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(706454),
    i = n(626135),
    c = n(381585),
    u = n(501431),
    d = n(215023),
    g = n(981631),
    f = n(388032),
    p = n(535333);
function h(e) {
    let { handleTransition: t, selectedTab: n } = e,
        { searchQuery: h, onSetSearchQuery: m } = (0, u.S)(),
        [_, C] = l.useState(""),
        b = (0, c.sp)(),
        E = (0, a.e7)([s.default], () => s.default.locale);
    return (
        l.useEffect(() => {
            let e = setTimeout(() => {
                m(_);
            }, 250);
            return () => clearTimeout(e);
        }, [_, m]),
        l.useEffect(() => {
            C(h);
        }, [h]),
        (0, r.jsx)(o.P3F, {
            ignoreKeyPress: !0,
            className: p.searchBar,
            onClick: () => {
                n !== d.AW.CATALOG && t(d.AW.CATALOG),
                    i.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                    "Enter" === e.key && m(_);
                },
                query: _,
                onChange: C,
                onClear: () => {
                    C(""),
                        i.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: null == b ? void 0 : b.sessionId,
                            page_section: null == b ? void 0 : b.pageSection,
                            page_category: null == b ? void 0 : b.pageCategory,
                            page_index: null == b ? void 0 : b.pageIndex,
                            page_size: null == b ? void 0 : b.pageSize,
                            cta_name: "search bar clear",
                            page_type: n,
                        });
                },
                placeholder: "en-US" === E ? f.intl.string(f.t.arz34O) : f.intl.string(f.t["hIt/Nj"]),
            }),
        })
    );
}
