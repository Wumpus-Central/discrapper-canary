n.d(t, { Z: () => A }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    i = n(442837),
    o = n(28664),
    c = n(481060),
    u = n(782568),
    d = n(607070),
    f = n(594174),
    g = n(451478),
    b = n(626135),
    p = n(63063),
    h = n(74538),
    m = n(381585),
    C = n(597688),
    E = n(653126),
    v = n(786040),
    x = n(401975),
    S = n(328626),
    O = n(849275),
    _ = n(619899),
    y = n(811847),
    j = n(215023),
    k = n(981631),
    T = n(388032),
    I = n(868090),
    L = n(222194);
let A = (e) => {
    var t;
    let {
            isLoading: n,
            title: a,
            sortedSkuIds: A,
            numVisibleItems: B,
            prioritizeUserDiscounts: N,
            tab: R,
            buttonContainerClassName: P,
            orbsSupportedOnly: w,
        } = e,
        Z = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
        D = h.ZP.canUseCollectibles(Z),
        M = (0, y.B)("FeedBlock"),
        {
            sortType: H,
            setSortType: F,
            sortedItems: W,
            sortOptions: U,
            shuffleProducts: z,
            showRecommendationOption: V,
        } = (0, O.Z)({
            sortedSkuIds: A,
            isPremiumUser: D,
            prioritizeUserDiscounts: N,
            orbsSupportedOnly: w,
        }),
        G = (0, _.St)(W),
        K = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
        Y = (0, i.e7)([g.Z], () => g.Z.isFocused()),
        q = !K && Y,
        { animationPhase: Q, startAnimation: X } = (0, S.y)(),
        J = (0, m.sp)(),
        $ = null != (t = null == J ? void 0 : J.sessionId) ? t : "",
        ee = l.useRef(null),
        et = l.useCallback(
            (e) => {
                X({
                    isShuffling: !1,
                    onOutroComplete: () => F(e),
                }),
                    b.default.track(k.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: $,
                        sort_type: e,
                    });
            },
            [X, F, $],
        );
    return null == Z
        ? null
        : (0, r.jsxs)("div", {
              className: s()(L.popularPicksSection, L.centeredSection),
              children: [
                  (0, r.jsxs)("div", {
                      className: L.blockHeader,
                      children: [
                          (0, r.jsxs)("div", {
                              className: L.headerLeft,
                              children: [
                                  (0, r.jsx)(c.Heading, {
                                      variant: "heading-lg/semibold",
                                      children: a,
                                  }),
                                  V &&
                                      (0, r.jsx)(o.u, {
                                          text: T.intl.string(T.t["3taPdj"]),
                                          position: "top",
                                          "aria-label": T.intl.string(T.t["3taPdj"]),
                                          children: (0, r.jsx)(c.P3F, {
                                              onClick: () =>
                                                  (0, u.Z)(p.Z.getArticleURL(k.BhN.DATA_USED_FOR_RECOMMENDED)),
                                              className: L.informationIcon,
                                              children: (0, r.jsx)(c.d3s, { size: "sm" }),
                                          }),
                                      }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: s()(L.headerRight, { [I.customCursors]: M }),
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-md/medium",
                                      children: T.intl.string(T.t.uaX705),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: s()(P, L.sortSelect),
                                      children: (0, r.jsx)(c.PhF, {
                                          label: T.intl.string(T.t.uaX705),
                                          hideLabel: !0,
                                          options: U,
                                          onSelectionChange: et,
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
                                          text: T.intl.string(T.t.X3tnc4),
                                          buttonRef: ee,
                                          onClick: () => {
                                              X({
                                                  isShuffling: !0,
                                                  onOutroComplete: z,
                                                  returnRef: ee,
                                              }),
                                                  b.default.track(k.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                      page_session_id: $,
                                                  });
                                          },
                                          disabled: Q !== S.g.MOUNTED && Q !== S.g.FINISHED,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: L.feed,
                      children: n
                          ? (0, r.jsx)(r.Fragment, {
                                children: [...Array(12)].map((e, t) => (0, r.jsx)(x.Z, {}, t + 1)),
                            })
                          : G.slice(0, B).map((e, t) => {
                                let n,
                                    l = C.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (q)
                                    if (Q === S.g.SHUFFLE_OUT)
                                        return (0, r.jsx)(
                                            "div",
                                            {
                                                className: L.shuffleOutro,
                                                children: (0, r.jsx)(x.Z, { skipPulseAnimation: !0 }),
                                            },
                                            "".concat(e.skuId, "-").concat(t),
                                        );
                                    else
                                        Q === S.g.SORT_OUT
                                            ? (n = L.sortChangedOutro)
                                            : Q === S.g.SHUFFLE_IN
                                              ? (n = L.shuffleIntro)
                                              : Q === S.g.SORT_IN && (n = L.sortChangedIntro);
                                return (0, r.jsx)(
                                    m.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: "popular picks",
                                            categoryPosition: 2,
                                        },
                                        children: (0, r.jsx)("div", {
                                            className: n,
                                            children: (0, r.jsx)(E.Z, {
                                                skuId: e.skuId,
                                                prioritizedCurrency: R === j.AW.ORBS ? v.tA.ORBS : void 0,
                                                onClickAnalytics: (0, v.wO)(e, R, J),
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
