t.d(n, { $: () => g });
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
    f = t(682901);
function g(e) {
    let {
            giftRecipient: n,
            analyticsLocations: t,
            analyticsObject: s,
            wishlistAnalyticsObject: g,
            premiumAnalyticsObject: C,
            analyticsLocation: m,
            giftMessage: A,
            subscriptionTier: p,
            location: b,
        } = e,
        { enabled: I } = u.useConfig({ location: b }),
        { enabled: h } = c.useConfig({ location: b }),
        T = (0, o.F5)(b),
        N = (0, a.tA)({ isGift: !0, giftRecipient: n }),
        k = I && null != n,
        _ = h && null == n,
        j = k || _,
        x = N && null != n;
    return {
        openGiftModal: i.useCallback(() => {
            null != p
                ? (0, l.A)({
                      isGift: !0,
                      giftRecipient: n ?? void 0,
                      subscriptionTier: p,
                      analyticsLocations: t,
                      analyticsLocation: m,
                      analyticsObject: C ?? s,
                      giftMessage: A,
                  })
                : T
                  ? x
                      ? (0, r.A)({
                            giftRecipient: n,
                            analyticsLocations: t,
                            analyticsLocation: m,
                            analyticsObject: g ?? s,
                            giftMessage: A,
                        })
                      : (0, d.A)({
                            giftRecipient: n ?? void 0,
                            analyticsLocations: t,
                            analyticsLocation: m,
                            analyticsObject: g ?? s,
                            giftMessage: A,
                        })
                  : k && null != n
                    ? (0, d.A)({
                          giftRecipient: n,
                          analyticsLocations: t,
                          analyticsLocation: m,
                          analyticsObject: g ?? s,
                          giftMessage: A,
                      })
                    : _
                      ? (0, d.A)({
                            analyticsLocations: t,
                            analyticsLocation: m,
                            analyticsObject: g ?? s,
                            giftMessage: A,
                            giftingOrigin: f.vQ.GUILD_CHANNEL,
                        })
                      : x && null != n
                        ? (0, r.A)({
                              giftRecipient: n,
                              analyticsLocations: t,
                              analyticsLocation: m,
                              analyticsObject: g ?? s,
                              giftMessage: A,
                          })
                        : (0, l.A)({
                              isGift: !0,
                              giftRecipient: n ?? void 0,
                              initialPlanId: null,
                              analyticsLocations: t,
                              analyticsLocation: m,
                              analyticsObject: C ?? s,
                              giftMessage: A,
                          });
        }, [T, k, _, x, n, t, m, s, g, C, A, p]),
        shouldShowWishlistModal: x,
        shouldShowGiftSelectionModal: j,
    };
}
