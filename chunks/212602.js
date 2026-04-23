"use strict";
s.d(t, { A: () => E });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(401864),
    o = s(124987),
    c = s(691885),
    d = s(954571),
    u = s(440938),
    g = s(365491),
    h = s(938191),
    _ = s(758836),
    m = s(652215),
    p = s(985018),
    f = s(135234);
let E = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: s } = (0, g.v)(),
        r = (0, u.uM)(),
        E = (0, h.yB)("CollectiblesSortSelect"),
        x = s(),
        A = l.useMemo(() => _.QB.filter((e) => e.sortType !== o.$.RELEVANCE || x), [x]),
        C = l.useCallback((e) => {
            let { sortType: t, sortDirection: s } = e;
            return t === o.$.RECENCY
                ? { label: p.intl.string(p.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === o.$.PRICE
                  ? s === i.A.ASC
                      ? { label: p.intl.string(p.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: p.intl.string(p.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === o.$.RELEVANCE
                    ? { label: p.intl.string(p.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: p.intl.string(p.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        S = l.useCallback(
            (e) =>
                ({
                    recent: { sortType: o.$.RECENCY, sortDirection: i.A.DESC },
                    "price-asc": { sortType: o.$.PRICE, sortDirection: i.A.ASC },
                    "price-desc": { sortType: o.$.PRICE, sortDirection: i.A.DESC },
                    popularity: { sortType: o.$.POPULARITY, sortDirection: i.A.DESC },
                    relevance: { sortType: o.$.RELEVANCE, sortDirection: i.A.DESC },
                })[e],
            [],
        ),
        b = l.useCallback(
            (e) => {
                let s = C(S(e));
                d.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: r?.sessionId,
                    page_section: r?.pageSection,
                    page_category: r?.pageCategory,
                    page_index: r?.pageIndex,
                    page_size: r?.pageSize,
                    cta_name: `sort by ${s.label.toLowerCase()}`,
                    page_type: "catalog",
                }),
                    t(S(e));
            },
            [r, C, S, t],
        ),
        v = C(e);
    return (0, n.jsx)("div", {
        className: a()(f.k, { [h.jP]: E }),
        children: (0, n.jsx)(c.l, {
            label: p.intl.string(p.t.uaX705),
            hideLabel: !0,
            options: A.map(C),
            onSelectionChange: b,
            value: v.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
