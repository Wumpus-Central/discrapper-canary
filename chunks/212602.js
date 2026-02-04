n.d(t, {
    A: () => _,
}),
    n(638769);
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(401864),
    o = n(124987),
    c = n(397927),
    u = n(954571),
    d = n(440938),
    g = n(365491),
    p = n(938191),
    m = n(758836),
    f = n(652215),
    b = n(985018),
    h = n(785244);
let _ = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, g.v)(),
        s = (0, d.uM)(),
        _ = (0, p.yB)("CollectiblesSortSelect"),
        E = n(),
        v = l.useMemo(() => m.QB.filter((e) => e.sortType !== o.$.RELEVANCE || E), [E]),
        C = l.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === o.$.RECENCY
                ? {
                      label: b.intl.string(b.t["51Bhiz"]),
                      value: "recent",
                      id: "recent",
                  }
                : t === o.$.PRICE
                  ? n === i.A.ASC
                      ? {
                            label: b.intl.string(b.t.m8RVU2),
                            value: "price-asc",
                            id: "price-asc",
                        }
                      : {
                            label: b.intl.string(b.t.zBwQJO),
                            value: "price-desc",
                            id: "price-desc",
                        }
                  : t === o.$.RELEVANCE
                    ? {
                          label: b.intl.string(b.t["XoeT/z"]),
                          value: "relevance",
                          id: "relevance",
                      }
                    : {
                          label: b.intl.string(b.t.Y68e5p),
                          value: "popularity",
                          id: "popularity",
                      };
        }, []),
        A = l.useCallback(
            (e) =>
                ({
                    recent: {
                        sortType: o.$.RECENCY,
                        sortDirection: i.A.DESC,
                    },
                    "price-asc": {
                        sortType: o.$.PRICE,
                        sortDirection: i.A.ASC,
                    },
                    "price-desc": {
                        sortType: o.$.PRICE,
                        sortDirection: i.A.DESC,
                    },
                    popularity: {
                        sortType: o.$.POPULARITY,
                        sortDirection: i.A.DESC,
                    },
                    relevance: {
                        sortType: o.$.RELEVANCE,
                        sortDirection: i.A.DESC,
                    },
                })[e],
            [],
        ),
        x = l.useCallback(
            (e) => {
                let n = C(A(e));
                u.default.track(f.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == s ? void 0 : s.sessionId,
                    page_section: null == s ? void 0 : s.pageSection,
                    page_category: null == s ? void 0 : s.pageCategory,
                    page_index: null == s ? void 0 : s.pageIndex,
                    page_size: null == s ? void 0 : s.pageSize,
                    cta_name: "sort by ".concat(n.label.toLowerCase()),
                    page_type: "catalog",
                }),
                    t(A(e));
            },
            [s, C, A, t],
        ),
        S = C(e);
    return (0, r.jsx)("div", {
        className: a()(h.k, {
            [p.jP]: _,
        }),
        children: (0, r.jsx)(c.l6P, {
            label: b.intl.string(b.t.uaX705),
            hideLabel: !0,
            options: v.map(C),
            onSelectionChange: x,
            value: S.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
