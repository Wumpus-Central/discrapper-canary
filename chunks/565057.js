l.d(t, {
    A: () => N,
}),
    l(896048);
var n = l(627968),
    r = l(64700),
    s = l(503698),
    a = l.n(s),
    i = l(311907),
    o = l(990078),
    c = l(397927),
    u = l(975807),
    d = l(775602),
    f = l(287809),
    b = l(531685),
    g = l(954571),
    p = l(975571),
    m = l(927578),
    h = l(440938),
    E = l(590180),
    v = l(751304),
    A = l(561769),
    x = l(484469),
    S = l(917987),
    C = l(4196),
    O = l(940622),
    _ = l(938191),
    y = l(758836),
    j = l(652215),
    L = l(985018),
    T = l(816917),
    I = l(201073);
let N = (e) => {
    var t;
    let {
            isLoading: l,
            title: s,
            sortedSkuIds: N,
            numVisibleItems: k,
            prioritizeUserDiscounts: R,
            tab: P,
            buttonContainerClassName: D,
            orbsSupportedOnly: w,
        } = e,
        B = (0, i.bG)([f.default], () => f.default.getCurrentUser()),
        M = m.Ay.canUseCollectibles(B),
        H = (0, _.y)("FeedBlock"),
        {
            sortType: G,
            setSortType: F,
            sortedItems: U,
            sortOptions: z,
            shuffleProducts: V,
            showRecommendationOption: K,
        } = (0, C.A)({
            sortedSkuIds: N,
            isPremiumUser: M,
            prioritizeUserDiscounts: R,
            orbsSupportedOnly: w,
        }),
        W = (0, O.od)(U),
        Y = (0, i.bG)([d.A], () => d.A.useReducedMotion),
        q = (0, i.bG)([b.A], () => b.A.isFocused()),
        Z = !Y && q,
        { animationPhase: X, startAnimation: J } = (0, S.s)(),
        Q = (0, h.uM)(),
        $ = null != (t = null == Q ? void 0 : Q.sessionId) ? t : "",
        ee = r.useRef(null),
        et = r.useCallback(
            (e) => {
                J({
                    isShuffling: !1,
                    onOutroComplete: () => F(e),
                }),
                    g.default.track(j.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: $,
                        sort_type: e,
                    });
            },
            [J, F, $],
        );
    return null == B
        ? null
        : (0, n.jsxs)("div", {
              className: a()(I.lD, I.YB),
              children: [
                  (0, n.jsxs)("div", {
                      className: I.$6,
                      children: [
                          (0, n.jsxs)("div", {
                              className: I.LD,
                              children: [
                                  (0, n.jsx)(c.Heading, {
                                      variant: "heading-lg/semibold",
                                      children: s,
                                  }),
                                  K &&
                                      (0, n.jsx)(o.m, {
                                          text: L.intl.string(L.t["3taPdj"]),
                                          position: "top",
                                          "aria-label": L.intl.string(L.t["3taPdj"]),
                                          children: (0, n.jsx)(c.DUT, {
                                              onClick: () =>
                                                  (0, u.A)(p.A.getArticleURL(j.MVz.DATA_USED_FOR_RECOMMENDED)),
                                              className: I.sT,
                                              children: (0, n.jsx)(c.mir, {
                                                  size: "sm",
                                              }),
                                          }),
                                      }),
                              ],
                          }),
                          (0, n.jsxs)("div", {
                              className: a()(I.IE, {
                                  [T.T3]: H,
                              }),
                              children: [
                                  (0, n.jsx)(c.Text, {
                                      variant: "text-md/medium",
                                      children: L.intl.string(L.t.uaX705),
                                  }),
                                  (0, n.jsx)("div", {
                                      className: a()(D, I.pI),
                                      children: (0, n.jsx)(c.l6P, {
                                          label: L.intl.string(L.t.uaX705),
                                          hideLabel: !0,
                                          options: z,
                                          onSelectionChange: et,
                                          formatOption: (e) => {
                                              let { label: t, value: l } = e;
                                              return {
                                                  id: l,
                                                  label: t,
                                                  value: l,
                                              };
                                          },
                                          value: G,
                                          selectionMode: "single",
                                          fullWidth: !0,
                                      }),
                                  }),
                                  (0, n.jsx)("div", {
                                      className: D,
                                      children: (0, n.jsx)(c.Button, {
                                          variant: "secondary",
                                          text: L.intl.string(L.t.X3tnc4),
                                          buttonRef: ee,
                                          onClick: () => {
                                              J({
                                                  isShuffling: !0,
                                                  onOutroComplete: V,
                                                  returnRef: ee,
                                              }),
                                                  g.default.track(j.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                      page_session_id: $,
                                                  });
                                          },
                                          disabled: X !== S.J.MOUNTED && X !== S.J.FINISHED,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: I.hm,
                      children: l
                          ? (0, n.jsx)(n.Fragment, {
                                children: [...Array(12)].map((e, t) => (0, n.jsx)(x.A, {}, t + 1)),
                            })
                          : W.slice(0, k).map((e, t) => {
                                let l,
                                    r = E.A.getCategoryForProduct(e.skuId);
                                if (null == e || null == r) return null;
                                if (Z)
                                    if (X === S.J.SHUFFLE_OUT)
                                        return (0, n.jsx)(
                                            "div",
                                            {
                                                className: I.Z2,
                                                children: (0, n.jsx)(x.A, {
                                                    skipPulseAnimation: !0,
                                                }),
                                            },
                                            "".concat(e.skuId, "-").concat(t),
                                        );
                                    else
                                        X === S.J.SORT_OUT
                                            ? (l = I.MW)
                                            : X === S.J.SHUFFLE_IN
                                              ? (l = I.aS)
                                              : X === S.J.SORT_IN && (l = I.F7);
                                return (0, n.jsx)(
                                    h.R9,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: "popular picks",
                                            categoryPosition: 2,
                                        },
                                        children: (0, n.jsx)("div", {
                                            className: l,
                                            children: (0, n.jsx)(v.A, {
                                                skuId: e.skuId,
                                                prioritizedCurrency: P === y.G2.ORBS ? A.Hi.ORBS : void 0,
                                                onClickAnalytics: (0, A.UU)(e, P, Q),
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
