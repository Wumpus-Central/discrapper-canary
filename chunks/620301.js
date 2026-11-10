t.d(n, { $: () => C });
var i = t(582128),
    l = t(778705),
    a = t(634110),
    r = t(95369),
    o = t(45052),
    s = t(945810);
let u = (0, s.mj)({
        name: "2026-02-gifting-modal-redesign",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    c = (0, s.mj)({
        name: "2026-02-non-dm-gifting-modal-redesign",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var d = t(990820),
    A = t(682901);
function C(e) {
    let {
            giftRecipient: n,
            analyticsLocations: t,
            analyticsObject: s,
            wishlistAnalyticsObject: C,
            premiumAnalyticsObject: _,
            analyticsLocation: N,
            giftMessage: f,
            subscriptionTier: g,
            location: I,
        } = e,
        { enabled: T } = u.useConfig({ location: I }),
        { enabled: R } = c.useConfig({ location: I }),
        O = (0, o.F5)(I),
        m = (0, a.tA)({ isGift: !0, giftRecipient: n }),
        E = T && null != n,
        M = R && null == n,
        G = E || M,
        b = m && null != n;
    return {
        openGiftModal: i.useCallback(() => {
            null != g
                ? (0, l.A)({
                      isGift: !0,
                      giftRecipient: n ?? void 0,
                      subscriptionTier: g,
                      analyticsLocations: t,
                      analyticsLocation: N,
                      analyticsObject: _ ?? s,
                      giftMessage: f,
                  })
                : O
                  ? b
                      ? (0, r.A)({
                            giftRecipient: n,
                            analyticsLocations: t,
                            analyticsLocation: N,
                            analyticsObject: C ?? s,
                            giftMessage: f,
                        })
                      : (0, d.A)({
                            giftRecipient: n ?? void 0,
                            analyticsLocations: t,
                            analyticsLocation: N,
                            analyticsObject: C ?? s,
                            giftMessage: f,
                        })
                  : E && null != n
                    ? (0, d.A)({
                          giftRecipient: n,
                          analyticsLocations: t,
                          analyticsLocation: N,
                          analyticsObject: C ?? s,
                          giftMessage: f,
                      })
                    : M
                      ? (0, d.A)({
                            analyticsLocations: t,
                            analyticsLocation: N,
                            analyticsObject: C ?? s,
                            giftMessage: f,
                            giftingOrigin: A.vQ.GUILD_CHANNEL,
                        })
                      : b && null != n
                        ? (0, r.A)({
                              giftRecipient: n,
                              analyticsLocations: t,
                              analyticsLocation: N,
                              analyticsObject: C ?? s,
                              giftMessage: f,
                          })
                        : (0, l.A)({
                              isGift: !0,
                              giftRecipient: n ?? void 0,
                              initialPlanId: null,
                              analyticsLocations: t,
                              analyticsLocation: N,
                              analyticsObject: _ ?? s,
                              giftMessage: f,
                          });
        }, [O, E, M, b, n, t, N, s, C, _, f, g]),
        shouldShowWishlistModal: b,
        shouldShowGiftSelectionModal: G,
    };
}
