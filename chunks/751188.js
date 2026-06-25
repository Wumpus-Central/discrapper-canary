"use strict";
n.d(t, { $: () => h });
var i = n(64700),
    r = n(532794),
    s = n(561794),
    a = n(627968),
    o = n(192308),
    l = n(945810);
let u = (0, l.mj)({
        name: "2026-02-gifting-modal-redesign",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    c = (0, l.mj)({
        name: "2026-02-non-dm-gifting-modal-redesign",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function d(e) {
    let {
        giftRecipient: t,
        onClose: i,
        analyticsLocations: r,
        analyticsLocation: s,
        analyticsObject: l,
        giftMessage: u,
        giftingOrigin: c,
    } = e;
    return (0, o.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("83002"),
                n.e("34523"),
                n.e("65787"),
                n.e("87549"),
                n.e("97052"),
                n.e("72980"),
                n.e("74946"),
                n.e("57357"),
                n.e("9233"),
                n.e("69747"),
                n.e("88889"),
                n.e("49013"),
                n.e("11133"),
                n.e("24303"),
                n.e("54241"),
                n.e("46430"),
                n.e("93461"),
                n.e("90779"),
                n.e("39808"),
                n.e("87791"),
                n.e("47339"),
                n.e("78421"),
                n.e("87873"),
                n.e("98934"),
            ]).then(n.bind(n, 806677));
            return (n) =>
                (0, a.jsx)(e, {
                    ...n,
                    giftRecipient: t,
                    analyticsLocations: r,
                    analyticsLocation: s,
                    analyticsObject: l,
                    giftMessage: u,
                    giftingOrigin: c,
                });
        },
        { modalKey: null != t ? `gift-selection-modal-${t.id}` : "gift-selection-modal", onCloseCallback: i },
    );
}
var _ = n(788868);
function h(e) {
    let {
            giftRecipient: t,
            analyticsLocations: l,
            analyticsObject: h,
            wishlistAnalyticsObject: f,
            premiumAnalyticsObject: p,
            analyticsLocation: E,
            giftMessage: m,
            location: g,
        } = e,
        { enabled: A } = u.useConfig({ location: g }),
        { enabled: I } = c.useConfig({ location: g }),
        T = (0, s.tA)({ isGift: !0, giftRecipient: t }),
        S = A && null != t,
        y = I && null == t,
        C = S || y,
        N = T && null != t;
    return {
        openGiftModal: i.useCallback(() => {
            S && null != t
                ? d({
                      giftRecipient: t,
                      analyticsLocations: l,
                      analyticsLocation: E,
                      analyticsObject: f ?? h,
                      giftMessage: m,
                  })
                : y
                  ? d({
                        analyticsLocations: l,
                        analyticsLocation: E,
                        analyticsObject: f ?? h,
                        giftMessage: m,
                        giftingOrigin: _.vQ.GUILD_CHANNEL,
                    })
                  : N && null != t
                    ? (function (e) {
                          let {
                              giftRecipient: t,
                              onClose: i,
                              analyticsLocations: r,
                              analyticsLocation: s,
                              analyticsObject: l,
                              giftMessage: u,
                          } = e;
                          (0, o.openModalLazy)(
                              async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("57357"),
                                      n.e("83002"),
                                      n.e("34523"),
                                      n.e("65787"),
                                      n.e("87549"),
                                      n.e("97052"),
                                      n.e("72980"),
                                      n.e("74946"),
                                      n.e("80829"),
                                      n.e("9233"),
                                      n.e("69747"),
                                      n.e("88889"),
                                      n.e("49013"),
                                      n.e("11133"),
                                      n.e("24303"),
                                      n.e("54241"),
                                      n.e("46430"),
                                      n.e("93461"),
                                      n.e("90779"),
                                      n.e("39808"),
                                      n.e("87791"),
                                      n.e("47339"),
                                      n.e("78421"),
                                      n.e("87873"),
                                      n.e("67730"),
                                  ]).then(n.bind(n, 746793));
                                  return (n) =>
                                      (0, a.jsx)(e, {
                                          ...n,
                                          giftRecipient: t,
                                          analyticsLocations: r,
                                          analyticsLocation: s,
                                          analyticsObject: l,
                                          giftMessage: u,
                                      });
                              },
                              { modalKey: `gift-option-select-modal-${t.id}`, onCloseCallback: i },
                          );
                      })({
                          giftRecipient: t,
                          analyticsLocations: l,
                          analyticsLocation: E,
                          analyticsObject: f ?? h,
                          giftMessage: m,
                      })
                    : (0, r.A)({
                          isGift: !0,
                          giftRecipient: t ?? void 0,
                          initialPlanId: null,
                          analyticsLocations: l,
                          analyticsLocation: E,
                          analyticsObject: p ?? h,
                          giftMessage: m,
                      });
        }, [S, y, N, t, l, E, h, f, p, m]),
        shouldShowWishlistModal: N,
        shouldShowGiftSelectionModal: C,
    };
}
