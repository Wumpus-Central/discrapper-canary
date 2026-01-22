l.d(t, { A: () => g }), l(896048);
var n = l(627968);
l(64700);
var r = l(503698),
    s = l.n(r),
    a = l(424918),
    i = l(440938),
    o = l(993408),
    c = l(196231),
    u = l(985018),
    d = l(201073);
let f = (e) => {
        let { handleTransition: t, featuredBlockRecord: l } = e;
        return (0, n.jsx)("div", {
            className: s()(d.n9, d.YB),
            children:
                null == l
                    ? void 0
                    : l.subblocks.map((e, l) =>
                          e.type === a.u.CATEGORY
                              ? (0, n.jsx)(
                                    i.R9,
                                    {
                                        newValue: {
                                            categoryPosition: 1,
                                            pageCategory: e.name,
                                            pageSection: "featured_block",
                                            tilePosition: l,
                                        },
                                        children: (0, n.jsx)(
                                            c.S,
                                            {
                                                subblock: e,
                                                badgeText: (0, o.HF)(e.unpublishedAt)
                                                    ? u.intl.string(u.t["h/uBCR"])
                                                    : void 0,
                                                handleTransition: t,
                                            },
                                            e.categoryStoreListingId,
                                        ),
                                    },
                                    e.categoryStoreListingId,
                                )
                              : null,
                      ),
        });
    },
    b = (e) => {
        let { handleTransition: t, categories: l } = e;
        if (null == l || l.length < 2) return null;
        let [r, a] = l;
        return (0, n.jsx)("div", {
            className: s()(d.n9, d.YB),
            children: (0, n.jsxs)(i.R9, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != r ? r.name : null == a ? void 0 : a.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == r),
                },
                children: [
                    null != r &&
                        (0, n.jsx)(c.S, {
                            category: r,
                            badgeText: (0, o.HF)(r.unpublishedAt) ? u.intl.string(u.t["h/uBCR"]) : void 0,
                            handleTransition: t,
                        }),
                    null != a &&
                        (0, n.jsx)(c.S, {
                            category: a,
                            badgeText: (0, o.HF)(a.unpublishedAt) ? u.intl.string(u.t["h/uBCR"]) : void 0,
                            handleTransition: t,
                        }),
                ],
            }),
        });
    },
    g = (e) => {
        let { isLoading: t, handleTransition: l, categories: r, featuredBlockRecord: a } = e;
        return t
            ? (0, n.jsxs)("div", {
                  className: s()(d.n9, d.YB),
                  children: [
                      (0, n.jsx)("div", {
                          className: s()(d.Jn, d.oT),
                          children: (0, n.jsx)("div", { className: d.uy }),
                      }),
                      (0, n.jsx)("div", {
                          className: s()(d.Jn, d.oT),
                          children: (0, n.jsx)("div", { className: d.uy }),
                      }),
                  ],
              })
            : null != a
              ? (0, n.jsx)(f, {
                    featuredBlockRecord: a,
                    handleTransition: l,
                    isLoading: !1,
                })
              : (0, n.jsx)(b, {
                    categories: r,
                    handleTransition: l,
                    isLoading: !1,
                });
    };
