"use strict";
n.d(t, { $: () => d });
var r = n(64700),
    i = n(532794),
    s = n(594832),
    a = n(404036),
    o = n(882873),
    l = n(831075),
    u = n(990820),
    c = n(788868);
function d(e) {
    let {
            giftRecipient: t,
            analyticsLocations: n,
            analyticsObject: d,
            wishlistAnalyticsObject: _,
            premiumAnalyticsObject: f,
            analyticsLocation: p,
            giftMessage: h,
            location: E,
        } = e,
        { enabled: m } = o.u.useConfig({ location: E }),
        { enabled: g } = l.g.useConfig({ location: E }),
        A = (0, s.tA)({ isGift: !0, giftRecipient: t }),
        I = m && null != t,
        T = g && null == t,
        S = I || T,
        y = A && null != t;
    return {
        openGiftModal: r.useCallback(() => {
            I && null != t
                ? (0, u.A)({
                      giftRecipient: t,
                      analyticsLocations: n,
                      analyticsLocation: p,
                      analyticsObject: _ ?? d,
                      giftMessage: h,
                  })
                : T
                  ? (0, u.A)({
                        analyticsLocations: n,
                        analyticsLocation: p,
                        analyticsObject: _ ?? d,
                        giftMessage: h,
                        giftingOrigin: c.vQ.GUILD_CHANNEL,
                    })
                  : y && null != t
                    ? (0, a.A)({
                          giftRecipient: t,
                          analyticsLocations: n,
                          analyticsLocation: p,
                          analyticsObject: _ ?? d,
                          giftMessage: h,
                      })
                    : (0, i.A)({
                          isGift: !0,
                          giftRecipient: t ?? void 0,
                          initialPlanId: null,
                          analyticsLocations: n,
                          analyticsLocation: p,
                          analyticsObject: f ?? d,
                          giftMessage: h,
                      });
        }, [I, T, y, t, n, p, d, _, f, h]),
        shouldShowWishlistModal: y,
        shouldShowGiftSelectionModal: S,
    };
}
