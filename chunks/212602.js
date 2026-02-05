"use strict";
s.d(t, { A: () => E });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(401864),
    o = s(124987),
    c = s(397927),
    d = s(954571),
    u = s(440938),
    g = s(365491),
    m = s(938191),
    _ = s(758836),
    h = s(652215),
    p = s(985018),
    f = s(785244);
let E = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: s } = (0, g.v)(),
        l = (0, u.uM)(),
        E = (0, m.yB)("CollectiblesSortSelect"),
        C = s(),
        b = r.useMemo(() => _.QB.filter((e) => e.sortType !== o.$.RELEVANCE || C), [C]),
        A = r.useCallback((e) => {
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
        x = r.useCallback(
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
        S = r.useCallback(
            (e) => {
                let s = A(x(e));
                d.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_section: l?.pageSection,
                    page_category: l?.pageCategory,
                    page_index: l?.pageIndex,
                    page_size: l?.pageSize,
                    cta_name: `sort by ${s.label.toLowerCase()}`,
                    page_type: "catalog",
                }),
                    t(x(e));
            },
            [l, A, x, t],
        ),
        v = A(e);
    return (0, n.jsx)("div", {
        className: a()(f.k, { [m.jP]: E }),
        children: (0, n.jsx)(c.l6P, {
            label: p.intl.string(p.t.uaX705),
            hideLabel: !0,
            options: b.map(A),
            onSelectionChange: S,
            value: v.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
