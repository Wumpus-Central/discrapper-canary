"use strict";
s.d(t, { A: () => j });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(311907),
    o = s(990078),
    c = s(397927),
    d = s(975807),
    u = s(775602),
    g = s(287809),
    m = s(531685),
    _ = s(954571),
    h = s(975571),
    p = s(927578),
    f = s(440938),
    E = s(590180),
    C = s(751304),
    b = s(561769),
    A = s(484469),
    x = s(917987),
    S = s(4196),
    v = s(940622),
    L = s(938191),
    T = s(758836),
    I = s(652215),
    O = s(985018),
    y = s(201073);
let j = (e) => {
    let {
            isLoading: t,
            title: s,
            sortedSkuIds: l,
            numVisibleItems: j,
            prioritizeUserDiscounts: N,
            tab: k,
            buttonContainerClassName: R,
            orbsSupportedOnly: B,
        } = e,
        P = (0, i.bG)([g.default], () => g.default.getCurrentUser()),
        M = p.Ay.canUseCollectibles(P),
        D = (0, L.yB)("FeedBlock"),
        {
            sortType: w,
            setSortType: H,
            sortedItems: G,
            sortOptions: U,
            shuffleProducts: F,
            showRecommendationOption: V,
        } = (0, S.A)({ sortedSkuIds: l, isPremiumUser: M, prioritizeUserDiscounts: N, orbsSupportedOnly: B }),
        z = (0, v.od)(G),
        $ = (0, i.bG)([u.A], () => u.A.useReducedMotion),
        K = (0, i.bG)([m.A], () => m.A.isFocused()),
        W = !$ && K,
        { animationPhase: Y, startAnimation: q } = (0, x.s)(),
        Z = (0, f.uM)(),
        X = Z?.sessionId ?? "",
        J = r.useRef(null),
        Q = r.useCallback(
            (e) => {
                q({ isShuffling: !1, onOutroComplete: () => H(e) }),
                    _.default.track(I.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, { page_session_id: X, sort_type: e });
            },
            [q, H, X],
        );
    return null == P
        ? null
        : (0, n.jsxs)("div", {
              className: a()(y.lD, y.YB),
              children: [
                  (0, n.jsxs)("div", {
                      className: y.$6,
                      children: [
                          (0, n.jsxs)("div", {
                              className: y.LD,
                              children: [
                                  (0, n.jsx)(c.Heading, { variant: "heading-lg/semibold", children: s }),
                                  V &&
                                      (0, n.jsx)(o.m, {
                                          text: O.intl.string(O.t["3taPdj"]),
                                          position: "top",
                                          "aria-label": O.intl.string(O.t["3taPdj"]),
                                          children: (0, n.jsx)(c.DUT, {
                                              onClick: () =>
                                                  (0, d.A)(h.A.getArticleURL(I.MVz.DATA_USED_FOR_RECOMMENDED)),
                                              className: y.sT,
                                              children: (0, n.jsx)(c.mir, { size: "sm" }),
                                          }),
                                      }),
                              ],
                          }),
                          (0, n.jsxs)("div", {
                              className: a()(y.IE, { [L.jP]: D }),
                              children: [
                                  (0, n.jsx)(c.Text, {
                                      variant: "text-md/medium",
                                      children: O.intl.string(O.t.uaX705),
                                  }),
                                  (0, n.jsx)("div", {
                                      className: a()(R, y.pI),
                                      children: (0, n.jsx)(c.l6P, {
                                          label: O.intl.string(O.t.uaX705),
                                          hideLabel: !0,
                                          options: U,
                                          onSelectionChange: Q,
                                          formatOption: (e) => {
                                              let { label: t, value: s } = e;
                                              return { id: s, label: t, value: s };
                                          },
                                          value: w,
                                          selectionMode: "single",
                                          fullWidth: !0,
                                      }),
                                  }),
                                  (0, n.jsx)("div", {
                                      className: R,
                                      children: (0, n.jsx)(c.Button, {
                                          variant: "secondary",
                                          text: O.intl.string(O.t.X3tnc4),
                                          buttonRef: J,
                                          onClick: () => {
                                              q({ isShuffling: !0, onOutroComplete: F, returnRef: J }),
                                                  _.default.track(I.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                      page_session_id: X,
                                                  });
                                          },
                                          disabled: Y !== x.J.MOUNTED && Y !== x.J.FINISHED,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: y.hm,
                      children: t
                          ? (0, n.jsx)(n.Fragment, {
                                children: [...Array(12)].map((e, t) => (0, n.jsx)(A.A, {}, t + 1)),
                            })
                          : z.slice(0, j).map((e, t) => {
                                let s,
                                    r = E.A.getCategoryForProduct(e.skuId);
                                if (null == e || null == r) return null;
                                if (W)
                                    if (Y === x.J.SHUFFLE_OUT)
                                        return (0, n.jsx)(
                                            "div",
                                            { className: y.Z2, children: (0, n.jsx)(A.A, { skipPulseAnimation: !0 }) },
                                            `${e.skuId}-${t}`,
                                        );
                                    else
                                        Y === x.J.SORT_OUT
                                            ? (s = y.MW)
                                            : Y === x.J.SHUFFLE_IN
                                              ? (s = y.aS)
                                              : Y === x.J.SORT_IN && (s = y.F7);
                                return (0, n.jsx)(
                                    f.R9,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: "popular picks",
                                            categoryPosition: 2,
                                        },
                                        children: (0, n.jsx)("div", {
                                            className: s,
                                            children: (0, n.jsx)(C.A, {
                                                skuId: e.skuId,
                                                prioritizedCurrency: k === T.G2.ORBS ? b.Hi.ORBS : void 0,
                                                onClickAnalytics: (0, b.UU)(e, k, Z),
                                            }),
                                        }),
                                    },
                                    e.skuId,
                                );
                            }),
                  }),
              ],
          });
};
