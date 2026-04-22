"use strict";
s.d(t, { A: () => D });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(311907),
    o = s(990078),
    c = s(534514),
    d = s(939249),
    u = s(885574),
    g = s(834730),
    h = s(691885),
    _ = s(821609),
    m = s(975807),
    p = s(775602),
    f = s(793574),
    E = s(688810),
    x = s(287809),
    A = s(531685),
    C = s(954571),
    S = s(975571),
    b = s(927578),
    v = s(440938),
    L = s(590180),
    I = s(940980),
    j = s(751304),
    N = s(561769),
    T = s(484469),
    O = s(917987),
    y = s(4196),
    k = s(938191),
    R = s(758836),
    B = s(652215),
    P = s(985018),
    M = s(941734);
let D = (e) => {
    let {
            isLoading: t,
            title: s,
            sortedSkuIds: r,
            numVisibleItems: D,
            prioritizeUserDiscounts: w,
            tab: H,
            buttonContainerClassName: G,
            orbsSupportedOnly: F,
        } = e,
        U = (0, i.bG)([x.default], () => x.default.getCurrentUser()),
        K = b.Ay.canUseCollectibles(U),
        V = (0, I.W)("FeedBlock"),
        W = (0, k.yB)("FeedBlock"),
        {
            sortType: z,
            setSortType: $,
            sortedItems: Y,
            sortOptions: Z,
            shuffleProducts: J,
            showRecommendationOption: X,
        } = (0, y.A)({ sortedSkuIds: r, isPremiumUser: K, prioritizeUserDiscounts: w, orbsSupportedOnly: F }),
        q = (0, i.bG)([p.A], () => p.A.useReducedMotion),
        Q = (0, i.bG)([A.A], () => A.A.isFocused()),
        ee = !q && Q,
        { animationPhase: et, startAnimation: es } = (0, O.s)(),
        en = (0, v.uM)(),
        el = en?.sessionId ?? "",
        { analyticsLocations: er } = (0, E.Ay)(f.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
        ea = l.useRef(null),
        ei = l.useCallback(
            (e) => {
                es({ isShuffling: !1, onOutroComplete: () => $(e) }),
                    C.default.track(B.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, { page_session_id: el, sort_type: e });
            },
            [es, $, el],
        );
    return null == U
        ? null
        : (0, n.jsx)(E.f5, {
              value: er,
              children: (0, n.jsxs)("div", {
                  className: a()(M.lD, M.YB),
                  children: [
                      (0, n.jsxs)("div", {
                          className: M.$6,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: M.LD,
                                  children: [
                                      (0, n.jsx)(c.D, { variant: "heading-lg/semibold", children: s }),
                                      X &&
                                          (0, n.jsx)(o.m, {
                                              text: P.intl.string(P.t["3taPdj"]),
                                              position: "top",
                                              "aria-label": P.intl.string(P.t["3taPdj"]),
                                              children: (0, n.jsx)(d.D, {
                                                  onClick: () =>
                                                      (0, m.A)(S.A.getArticleURL(B.MVz.DATA_USED_FOR_RECOMMENDED)),
                                                  className: M.sT,
                                                  children: (0, n.jsx)(u.m, { size: "sm" }),
                                              }),
                                          }),
                                  ],
                              }),
                              (0, n.jsxs)("div", {
                                  className: a()(M.IE, { [k.jP]: W }),
                                  children: [
                                      (0, n.jsx)(g.E, {
                                          variant: "text-md/medium",
                                          children: P.intl.string(P.t.uaX705),
                                      }),
                                      (0, n.jsx)("div", {
                                          className: a()(G, M.pI),
                                          children: (0, n.jsx)(h.l, {
                                              label: P.intl.string(P.t.uaX705),
                                              hideLabel: !0,
                                              options: Z,
                                              onSelectionChange: ei,
                                              formatOption: (e) => {
                                                  let { label: t, value: s } = e;
                                                  return { id: s, label: t, value: s };
                                              },
                                              value: z,
                                              selectionMode: "single",
                                              fullWidth: !0,
                                          }),
                                      }),
                                      (0, n.jsx)("div", {
                                          className: G,
                                          children: (0, n.jsx)(_.$, {
                                              variant: "secondary",
                                              text: P.intl.string(P.t.X3tnc4),
                                              buttonRef: ea,
                                              onClick: () => {
                                                  es({ isShuffling: !0, onOutroComplete: J, returnRef: ea }),
                                                      C.default.track(B.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                          page_session_id: el,
                                                      });
                                              },
                                              disabled: et !== O.J.MOUNTED && et !== O.J.FINISHED,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, n.jsx)("div", {
                          className: M.hm,
                          children: t
                              ? (0, n.jsx)(n.Fragment, {
                                    children: [...Array(12)].map((e, t) => (0, n.jsx)(T.A, {}, t + 1)),
                                })
                              : Y.slice(0, D).map((e, t) => {
                                    let s,
                                        l = L.A.getCategoryForProduct(e.skuId);
                                    if (null == e || null == l) return null;
                                    if (ee)
                                        if (et === O.J.SHUFFLE_OUT)
                                            return (0, n.jsx)(
                                                "div",
                                                {
                                                    className: M.Z2,
                                                    children: (0, n.jsx)(T.A, { skipPulseAnimation: !0 }),
                                                },
                                                `${e.skuId}-${t}`,
                                            );
                                        else
                                            et === O.J.SORT_OUT
                                                ? (s = M.MW)
                                                : et === O.J.SHUFFLE_IN
                                                  ? (s = M.aS)
                                                  : et === O.J.SORT_IN && (s = M.F7);
                                    return (0, n.jsx)(
                                        v.R9,
                                        {
                                            newValue: {
                                                tilePosition: t,
                                                pageSection: "popular picks",
                                                categoryPosition: 2,
                                            },
                                            children: (0, n.jsx)("div", {
                                                className: s,
                                                children: (0, n.jsx)(j.A, {
                                                    skuId: e.skuId,
                                                    hideStaticBundleBackgroundAsset: !0,
                                                    prioritizedCurrency:
                                                        H === R.G2.ORBS ? N.Hi.ORBS : V ? N.Hi.FIAT : void 0,
                                                }),
                                            }),
                                        },
                                        e.skuId,
                                    );
                                }),
                      }),
                  ],
              }),
          });
};
