"use strict";
s.d(t, { A: () => O });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(311907),
    o = s(990078),
    c = s(397927),
    d = s(975807),
    u = s(775602),
    _ = s(287809),
    g = s(531685),
    m = s(954571),
    h = s(975571),
    p = s(927578),
    f = s(440938),
    x = s(590180),
    E = s(940980),
    b = s(751304),
    C = s(561769),
    A = s(484469),
    S = s(917987),
    v = s(781815),
    I = s(938191),
    L = s(758836),
    j = s(652215),
    k = s(985018),
    T = s(297046);
let O = (e) => {
    let {
            isLoading: t,
            title: s,
            sortedSkuIds: l,
            numVisibleItems: O,
            prioritizeUserDiscounts: N,
            tab: y,
            buttonContainerClassName: R,
            orbsSupportedOnly: B,
        } = e,
        P = (0, i.bG)([_.default], () => _.default.getCurrentUser()),
        M = p.Ay.canUseCollectibles(P),
        D = (0, E.W)("FeedBlock"),
        w = (0, I.yB)("FeedBlock"),
        {
            sortType: H,
            setSortType: F,
            sortedItems: G,
            sortOptions: U,
            shuffleProducts: V,
            showRecommendationOption: K,
        } = (0, v.A)({ sortedSkuIds: l, isPremiumUser: M, prioritizeUserDiscounts: N, orbsSupportedOnly: B }),
        W = (0, i.bG)([u.A], () => u.A.useReducedMotion),
        z = (0, i.bG)([g.A], () => g.A.isFocused()),
        Y = !W && z,
        { animationPhase: $, startAnimation: Z } = (0, S.s)(),
        q = (0, f.uM)(),
        X = q?.sessionId ?? "",
        J = r.useRef(null),
        Q = r.useCallback(
            (e) => {
                Z({ isShuffling: !1, onOutroComplete: () => F(e) }),
                    m.default.track(j.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, { page_session_id: X, sort_type: e });
            },
            [Z, F, X],
        );
    return null == P
        ? null
        : (0, n.jsxs)("div", {
              className: a()(T.lD, T.YB),
              children: [
                  (0, n.jsxs)("div", {
                      className: T.$6,
                      children: [
                          (0, n.jsxs)("div", {
                              className: T.LD,
                              children: [
                                  (0, n.jsx)(c.Heading, { variant: "heading-lg/semibold", children: s }),
                                  K &&
                                      (0, n.jsx)(o.m, {
                                          text: k.intl.string(k.t["3taPdj"]),
                                          position: "top",
                                          "aria-label": k.intl.string(k.t["3taPdj"]),
                                          children: (0, n.jsx)(c.DUT, {
                                              onClick: () =>
                                                  (0, d.A)(h.A.getArticleURL(j.MVz.DATA_USED_FOR_RECOMMENDED)),
                                              className: T.sT,
                                              children: (0, n.jsx)(c.mir, { size: "sm" }),
                                          }),
                                      }),
                              ],
                          }),
                          (0, n.jsxs)("div", {
                              className: a()(T.IE, { [I.jP]: w }),
                              children: [
                                  (0, n.jsx)(c.Text, {
                                      variant: "text-md/medium",
                                      children: k.intl.string(k.t.uaX705),
                                  }),
                                  (0, n.jsx)("div", {
                                      className: a()(R, T.pI),
                                      children: (0, n.jsx)(c.l6P, {
                                          label: k.intl.string(k.t.uaX705),
                                          hideLabel: !0,
                                          options: U,
                                          onSelectionChange: Q,
                                          formatOption: (e) => {
                                              let { label: t, value: s } = e;
                                              return { id: s, label: t, value: s };
                                          },
                                          value: H,
                                          selectionMode: "single",
                                          fullWidth: !0,
                                      }),
                                  }),
                                  (0, n.jsx)("div", {
                                      className: R,
                                      children: (0, n.jsx)(c.Button, {
                                          variant: "secondary",
                                          text: k.intl.string(k.t.X3tnc4),
                                          buttonRef: J,
                                          onClick: () => {
                                              Z({ isShuffling: !0, onOutroComplete: V, returnRef: J }),
                                                  m.default.track(j.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                      page_session_id: X,
                                                  });
                                          },
                                          disabled: $ !== S.J.MOUNTED && $ !== S.J.FINISHED,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: T.hm,
                      children: t
                          ? (0, n.jsx)(n.Fragment, {
                                children: [...Array(12)].map((e, t) => (0, n.jsx)(A.A, {}, t + 1)),
                            })
                          : G.slice(0, O).map((e, t) => {
                                let s,
                                    r = x.A.getCategoryForProduct(e.skuId);
                                if (null == e || null == r) return null;
                                if (Y)
                                    if ($ === S.J.SHUFFLE_OUT)
                                        return (0, n.jsx)(
                                            "div",
                                            { className: T.Z2, children: (0, n.jsx)(A.A, { skipPulseAnimation: !0 }) },
                                            `${e.skuId}-${t}`,
                                        );
                                    else
                                        $ === S.J.SORT_OUT
                                            ? (s = T.MW)
                                            : $ === S.J.SHUFFLE_IN
                                              ? (s = T.aS)
                                              : $ === S.J.SORT_IN && (s = T.F7);
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
                                            children: (0, n.jsx)(b.A, {
                                                skuId: e.skuId,
                                                prioritizedCurrency:
                                                    y === L.G2.ORBS ? C.Hi.ORBS : D ? C.Hi.FIAT : void 0,
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
