n.d(t, {
    A: () => I,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(311907),
    o = n(990078),
    c = n(397927),
    u = n(975807),
    d = n(775602),
    g = n(287809),
    p = n(531685),
    m = n(954571),
    f = n(975571),
    b = n(927578),
    h = n(440938),
    _ = n(590180),
    E = n(751304),
    v = n(561769),
    C = n(484469),
    A = n(917987),
    x = n(4196),
    S = n(940622),
    O = n(938191),
    y = n(758836),
    j = n(652215),
    L = n(985018),
    T = n(201073);
let I = (e) => {
    var t;
    let {
            isLoading: n,
            title: s,
            sortedSkuIds: I,
            numVisibleItems: k,
            prioritizeUserDiscounts: N,
            tab: R,
            buttonContainerClassName: P,
            orbsSupportedOnly: B,
        } = e,
        w = (0, i.bG)([g.default], () => g.default.getCurrentUser()),
        D = b.Ay.canUseCollectibles(w),
        M = (0, O.yB)("FeedBlock"),
        {
            sortType: H,
            setSortType: G,
            sortedItems: U,
            sortOptions: F,
            shuffleProducts: V,
            showRecommendationOption: z,
        } = (0, x.A)({
            sortedSkuIds: I,
            isPremiumUser: D,
            prioritizeUserDiscounts: N,
            orbsSupportedOnly: B,
        }),
        K = (0, S.od)(U),
        W = (0, i.bG)([d.A], () => d.A.useReducedMotion),
        Y = (0, i.bG)([p.A], () => p.A.isFocused()),
        q = !W && Y,
        { animationPhase: Z, startAnimation: X } = (0, A.s)(),
        J = (0, h.uM)(),
        Q = null != (t = null == J ? void 0 : J.sessionId) ? t : "",
        $ = l.useRef(null),
        ee = l.useCallback(
            (e) => {
                X({
                    isShuffling: !1,
                    onOutroComplete: () => G(e),
                }),
                    m.default.track(j.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: Q,
                        sort_type: e,
                    });
            },
            [X, G, Q],
        );
    return null == w
        ? null
        : (0, r.jsxs)("div", {
              className: a()(T.lD, T.YB),
              children: [
                  (0, r.jsxs)("div", {
                      className: T.$6,
                      children: [
                          (0, r.jsxs)("div", {
                              className: T.LD,
                              children: [
                                  (0, r.jsx)(c.Heading, {
                                      variant: "heading-lg/semibold",
                                      children: s,
                                  }),
                                  z &&
                                      (0, r.jsx)(o.m, {
                                          text: L.intl.string(L.t["3taPdj"]),
                                          position: "top",
                                          "aria-label": L.intl.string(L.t["3taPdj"]),
                                          children: (0, r.jsx)(c.DUT, {
                                              onClick: () =>
                                                  (0, u.A)(f.A.getArticleURL(j.MVz.DATA_USED_FOR_RECOMMENDED)),
                                              className: T.sT,
                                              children: (0, r.jsx)(c.mir, {
                                                  size: "sm",
                                              }),
                                          }),
                                      }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: a()(T.IE, {
                                  [O.jP]: M,
                              }),
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-md/medium",
                                      children: L.intl.string(L.t.uaX705),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: a()(P, T.pI),
                                      children: (0, r.jsx)(c.l6P, {
                                          label: L.intl.string(L.t.uaX705),
                                          hideLabel: !0,
                                          options: F,
                                          onSelectionChange: ee,
                                          formatOption: (e) => {
                                              let { label: t, value: n } = e;
                                              return {
                                                  id: n,
                                                  label: t,
                                                  value: n,
                                              };
                                          },
                                          value: H,
                                          selectionMode: "single",
                                          fullWidth: !0,
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: P,
                                      children: (0, r.jsx)(c.Button, {
                                          variant: "secondary",
                                          text: L.intl.string(L.t.X3tnc4),
                                          buttonRef: $,
                                          onClick: () => {
                                              X({
                                                  isShuffling: !0,
                                                  onOutroComplete: V,
                                                  returnRef: $,
                                              }),
                                                  m.default.track(j.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                      page_session_id: Q,
                                                  });
                                          },
                                          disabled: Z !== A.J.MOUNTED && Z !== A.J.FINISHED,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: T.hm,
                      children: n
                          ? (0, r.jsx)(r.Fragment, {
                                children: [...Array(12)].map((e, t) => (0, r.jsx)(C.A, {}, t + 1)),
                            })
                          : K.slice(0, k).map((e, t) => {
                                let n,
                                    l = _.A.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (q)
                                    if (Z === A.J.SHUFFLE_OUT)
                                        return (0, r.jsx)(
                                            "div",
                                            {
                                                className: T.Z2,
                                                children: (0, r.jsx)(C.A, {
                                                    skipPulseAnimation: !0,
                                                }),
                                            },
                                            "".concat(e.skuId, "-").concat(t),
                                        );
                                    else
                                        Z === A.J.SORT_OUT
                                            ? (n = T.MW)
                                            : Z === A.J.SHUFFLE_IN
                                              ? (n = T.aS)
                                              : Z === A.J.SORT_IN && (n = T.F7);
                                return (0, r.jsx)(
                                    h.R9,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: "popular picks",
                                            categoryPosition: 2,
                                        },
                                        children: (0, r.jsx)("div", {
                                            className: n,
                                            children: (0, r.jsx)(E.A, {
                                                skuId: e.skuId,
                                                prioritizedCurrency: R === y.G2.ORBS ? v.Hi.ORBS : void 0,
                                                onClickAnalytics: (0, v.UU)(e, R, J),
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
