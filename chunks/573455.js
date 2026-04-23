"use strict";
s.d(t, { A: () => p });
var n = s(627968);
s(64700);
var l = s(503698),
    r = s.n(l),
    a = s(424918),
    i = s(793574),
    o = s(688810),
    c = s(440938),
    d = s(993408),
    u = s(196231),
    g = s(985018),
    h = s(941734);
let _ = (e) => {
        let { handleTransition: t, featuredBlockRecord: s } = e;
        return (0, n.jsx)("div", {
            className: r()(h.n9, h.YB),
            children: s?.subblocks.map((e, s) =>
                e.type === a.u.CATEGORY
                    ? (0, n.jsx)(
                          c.R9,
                          {
                              newValue: {
                                  categoryPosition: 1,
                                  pageCategory: e.name,
                                  pageSection: "featured_block",
                                  tilePosition: s,
                              },
                              children: (0, n.jsx)(
                                  u.S,
                                  {
                                      subblock: e,
                                      enablePreview: 0 === s,
                                      badgeText: (0, d.HF)(e.unpublishedAt) ? g.intl.string(g.t["h/uBCR"]) : void 0,
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
    m = (e) => {
        let { handleTransition: t, categories: s } = e;
        if (null == s || s.length < 2) return null;
        let [l, a] = s;
        return (0, n.jsx)("div", {
            className: r()(h.n9, h.YB),
            children: (0, n.jsxs)(c.R9, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != l ? l.name : a?.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == l),
                },
                children: [
                    null != l &&
                        (0, n.jsx)(u.S, {
                            category: l,
                            enablePreview: !0,
                            badgeText: (0, d.HF)(l.unpublishedAt) ? g.intl.string(g.t["h/uBCR"]) : void 0,
                            handleTransition: t,
                        }),
                    null != a &&
                        (0, n.jsx)(u.S, {
                            category: a,
                            badgeText: (0, d.HF)(a.unpublishedAt) ? g.intl.string(g.t["h/uBCR"]) : void 0,
                            handleTransition: t,
                        }),
                ],
            }),
        });
    },
    p = (e) => {
        let { isLoading: t, handleTransition: s, categories: l, featuredBlockRecord: a } = e,
            { analyticsLocations: c } = (0, o.Ay)(i.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
        return t
            ? (0, n.jsxs)("div", {
                  className: r()(h.n9, h.YB),
                  children: [
                      (0, n.jsx)("div", {
                          className: r()(h.Jn, h.oT),
                          children: (0, n.jsx)("div", { className: h.uy }),
                      }),
                      (0, n.jsx)("div", {
                          className: r()(h.Jn, h.oT),
                          children: (0, n.jsx)("div", { className: h.uy }),
                      }),
                  ],
              })
            : null != a
              ? (0, n.jsx)(o.f5, {
                    value: c,
                    children: (0, n.jsx)(_, { featuredBlockRecord: a, handleTransition: s, isLoading: !1 }),
                })
              : (0, n.jsx)(o.f5, {
                    value: c,
                    children: (0, n.jsx)(m, { categories: l, handleTransition: s, isLoading: !1 }),
                });
    };
