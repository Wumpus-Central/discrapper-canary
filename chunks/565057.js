"use strict";
n.d(t, { A: () => T });
var s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(975807),
    u = n(775602),
    g = n(287809),
    _ = n(531685),
    m = n(954571),
    h = n(975571),
    p = n(927578),
    f = n(440938),
    x = n(590180),
    E = n(751304),
    C = n(561769),
    A = n(484469),
    b = n(917987),
    S = n(4196),
    v = n(938191),
    L = n(758836),
    I = n(652215),
    j = n(985018),
    k = n(419447);
let T = (e) => {
    let {
            isLoading: t,
            title: n,
            sortedSkuIds: r,
            numVisibleItems: T,
            prioritizeUserDiscounts: O,
            tab: N,
            buttonContainerClassName: y,
            orbsSupportedOnly: R,
        } = e,
        B = (0, i.bG)([g.default], () => g.default.getCurrentUser()),
        M = p.Ay.canUseCollectibles(B),
        P = (0, v.yB)("FeedBlock"),
        {
            sortType: D,
            setSortType: H,
            sortedItems: w,
            sortOptions: U,
            shuffleProducts: G,
            showRecommendationOption: F,
        } = (0, S.A)({ sortedSkuIds: r, isPremiumUser: M, prioritizeUserDiscounts: O, orbsSupportedOnly: R }),
        V = (0, i.bG)([u.A], () => u.A.useReducedMotion),
        K = (0, i.bG)([_.A], () => _.A.isFocused()),
        W = !V && K,
        { animationPhase: z, startAnimation: Y } = (0, b.s)(),
        $ = (0, f.uM)(),
        Z = $?.sessionId ?? "",
        q = l.useRef(null),
        X = l.useCallback(
            (e) => {
                Y({ isShuffling: !1, onOutroComplete: () => H(e) }),
                    m.default.track(I.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, { page_session_id: Z, sort_type: e });
            },
            [Y, H, Z],
        );
    return null == B
        ? null
        : (0, s.jsxs)("div", {
              className: a()(k.lD, k.YB),
              children: [
                  (0, s.jsxs)("div", {
                      className: k.$6,
                      children: [
                          (0, s.jsxs)("div", {
                              className: k.LD,
                              children: [
                                  (0, s.jsx)(c.Heading, { variant: "heading-lg/semibold", children: n }),
                                  F &&
                                      (0, s.jsx)(o.m, {
                                          text: j.intl.string(j.t["3taPdj"]),
                                          position: "top",
                                          "aria-label": j.intl.string(j.t["3taPdj"]),
                                          children: (0, s.jsx)(c.DUT, {
                                              onClick: () =>
                                                  (0, d.A)(h.A.getArticleURL(I.MVz.DATA_USED_FOR_RECOMMENDED)),
                                              className: k.sT,
                                              children: (0, s.jsx)(c.mir, { size: "sm" }),
                                          }),
                                      }),
                              ],
                          }),
                          (0, s.jsxs)("div", {
                              className: a()(k.IE, { [v.jP]: P }),
                              children: [
                                  (0, s.jsx)(c.Text, {
                                      variant: "text-md/medium",
                                      children: j.intl.string(j.t.uaX705),
                                  }),
                                  (0, s.jsx)("div", {
                                      className: a()(y, k.pI),
                                      children: (0, s.jsx)(c.l6P, {
                                          label: j.intl.string(j.t.uaX705),
                                          hideLabel: !0,
                                          options: U,
                                          onSelectionChange: X,
                                          formatOption: (e) => {
                                              let { label: t, value: n } = e;
                                              return { id: n, label: t, value: n };
                                          },
                                          value: D,
                                          selectionMode: "single",
                                          fullWidth: !0,
                                      }),
                                  }),
                                  (0, s.jsx)("div", {
                                      className: y,
                                      children: (0, s.jsx)(c.Button, {
                                          variant: "secondary",
                                          text: j.intl.string(j.t.X3tnc4),
                                          buttonRef: q,
                                          onClick: () => {
                                              Y({ isShuffling: !0, onOutroComplete: G, returnRef: q }),
                                                  m.default.track(I.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                      page_session_id: Z,
                                                  });
                                          },
                                          disabled: z !== b.J.MOUNTED && z !== b.J.FINISHED,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, s.jsx)("div", {
                      className: k.hm,
                      children: t
                          ? (0, s.jsx)(s.Fragment, {
                                children: [...Array(12)].map((e, t) => (0, s.jsx)(A.A, {}, t + 1)),
                            })
                          : w.slice(0, T).map((e, t) => {
                                let n,
                                    l = x.A.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (W)
                                    if (z === b.J.SHUFFLE_OUT)
                                        return (0, s.jsx)(
                                            "div",
                                            { className: k.Z2, children: (0, s.jsx)(A.A, { skipPulseAnimation: !0 }) },
                                            `${e.skuId}-${t}`,
                                        );
                                    else
                                        z === b.J.SORT_OUT
                                            ? (n = k.MW)
                                            : z === b.J.SHUFFLE_IN
                                              ? (n = k.aS)
                                              : z === b.J.SORT_IN && (n = k.F7);
                                return (0, s.jsx)(
                                    f.R9,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: "popular picks",
                                            categoryPosition: 2,
                                        },
                                        children: (0, s.jsx)("div", {
                                            className: n,
                                            children: (0, s.jsx)(E.A, {
                                                skuId: e.skuId,
                                                prioritizedCurrency: N === L.G2.ORBS ? C.Hi.ORBS : void 0,
                                                onClickAnalytics: (0, C.UU)(e, N, $),
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
