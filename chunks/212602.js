l.d(t, {
    A: () => v,
}),
    l(638769);
var n = l(627968),
    r = l(64700),
    s = l(503698),
    a = l.n(s),
    i = l(401864),
    o = l(124987),
    c = l(397927),
    u = l(954571),
    d = l(440938),
    f = l(365491),
    b = l(938191),
    g = l(758836),
    p = l(652215),
    m = l(985018),
    h = l(785244),
    E = l(816917);
let v = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: l } = (0, f.v)(),
        s = (0, d.uM)(),
        v = (0, b.y)("CollectiblesSortSelect"),
        A = l(),
        x = r.useMemo(() => g.QB.filter((e) => e.sortType !== o.$.RELEVANCE || A), [A]),
        S = r.useCallback((e) => {
            let { sortType: t, sortDirection: l } = e;
            return t === o.$.RECENCY
                ? {
                      label: m.intl.string(m.t["51Bhiz"]),
                      value: "recent",
                      id: "recent",
                  }
                : t === o.$.PRICE
                  ? l === i.A.ASC
                      ? {
                            label: m.intl.string(m.t.m8RVU2),
                            value: "price-asc",
                            id: "price-asc",
                        }
                      : {
                            label: m.intl.string(m.t.zBwQJO),
                            value: "price-desc",
                            id: "price-desc",
                        }
                  : t === o.$.RELEVANCE
                    ? {
                          label: m.intl.string(m.t["XoeT/z"]),
                          value: "relevance",
                          id: "relevance",
                      }
                    : {
                          label: m.intl.string(m.t.Y68e5p),
                          value: "popularity",
                          id: "popularity",
                      };
        }, []),
        C = r.useCallback(
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
        O = r.useCallback(
            (e) => {
                let l = S(C(e));
                u.default.track(p.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == s ? void 0 : s.sessionId,
                    page_section: null == s ? void 0 : s.pageSection,
                    page_category: null == s ? void 0 : s.pageCategory,
                    page_index: null == s ? void 0 : s.pageIndex,
                    page_size: null == s ? void 0 : s.pageSize,
                    cta_name: "sort by ".concat(l.label.toLowerCase()),
                    page_type: "catalog",
                }),
                    t(C(e));
            },
            [s, S, C, t],
        ),
        _ = S(e);
    return (0, n.jsx)("div", {
        className: a()(h.k, {
            [E.T3]: v,
        }),
        children: (0, n.jsx)(c.l6P, {
            label: m.intl.string(m.t.uaX705),
            hideLabel: !0,
            options: x.map(S),
            onSelectionChange: O,
            value: _.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
