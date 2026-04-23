"use strict";
n.d(t, { $: () => E });
var i = n(64700),
    r = n(532794),
    s = n(594832),
    a = n(627968),
    o = n(192308),
    l = n(945810);
let d = (0, l.mj)({
        name: "2026-02-gifting-modal-redesign",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    _ = (0, l.mj)({
        name: "2026-02-non-dm-gifting-modal-redesign",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function u(e) {
    let {
        giftRecipient: t,
        onClose: i,
        analyticsLocations: r,
        analyticsLocation: s,
        analyticsObject: l,
        giftMessage: d,
        giftingOrigin: _,
    } = e;
    return (0, o.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("14875"),
                n.e("13988"),
                n.e("29716"),
                n.e("35843"),
                n.e("21622"),
                n.e("13081"),
            ]).then(n.bind(n, 631808));
            return (n) =>
                (0, a.jsx)(e, {
                    ...n,
                    giftRecipient: t,
                    analyticsLocations: r,
                    analyticsLocation: s,
                    analyticsObject: l,
                    giftMessage: d,
                    giftingOrigin: _,
                });
        },
        { modalKey: null != t ? `gift-selection-modal-${t.id}` : "gift-selection-modal", onCloseCallback: i },
    );
}
var c = n(788868);
function E(e) {
    let {
            giftRecipient: t,
            analyticsLocations: l,
            analyticsObject: E,
            wishlistAnalyticsObject: h,
            premiumAnalyticsObject: m,
            analyticsLocation: f,
            giftMessage: g,
            location: p,
        } = e,
        { enabled: A } = d.useConfig({ location: p }),
        { enabled: I } = _.useConfig({ location: p }),
        T = (0, s.tA)({ isGift: !0, giftRecipient: t }),
        S = A && null != t,
        N = I && null == t,
        C = S || N,
        R = T && null != t;
    return {
        openGiftModal: i.useCallback(() => {
            S && null != t
                ? u({
                      giftRecipient: t,
                      analyticsLocations: l,
                      analyticsLocation: f,
                      analyticsObject: h ?? E,
                      giftMessage: g,
                  })
                : N
                  ? u({
                        analyticsLocations: l,
                        analyticsLocation: f,
                        analyticsObject: h ?? E,
                        giftMessage: g,
                        giftingOrigin: c.vQ.GUILD_CHANNEL,
                    })
                  : R && null != t
                    ? (function (e) {
                          let {
                              giftRecipient: t,
                              onClose: i,
                              analyticsLocations: r,
                              analyticsLocation: s,
                              analyticsObject: l,
                              giftMessage: d,
                          } = e;
                          (0, o.openModalLazy)(
                              async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("14875"),
                                      n.e("13988"),
                                      n.e("29716"),
                                      n.e("35843"),
                                      n.e("21622"),
                                      n.e("67730"),
                                  ]).then(n.bind(n, 969174));
                                  return (n) =>
                                      (0, a.jsx)(e, {
                                          ...n,
                                          giftRecipient: t,
                                          analyticsLocations: r,
                                          analyticsLocation: s,
                                          analyticsObject: l,
                                          giftMessage: d,
                                      });
                              },
                              { modalKey: `gift-option-select-modal-${t.id}`, onCloseCallback: i },
                          );
                      })({
                          giftRecipient: t,
                          analyticsLocations: l,
                          analyticsLocation: f,
                          analyticsObject: h ?? E,
                          giftMessage: g,
                      })
                    : (0, r.A)({
                          isGift: !0,
                          giftRecipient: t ?? void 0,
                          initialPlanId: null,
                          analyticsLocations: l,
                          analyticsLocation: f,
                          analyticsObject: m ?? E,
                          giftMessage: g,
                      });
        }, [S, N, R, t, l, f, E, h, m, g]),
        shouldShowWishlistModal: R,
        shouldShowGiftSelectionModal: C,
    };
}
