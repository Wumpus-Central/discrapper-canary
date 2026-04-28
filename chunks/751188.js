"use strict";
n.d(t, { $: () => m });
var l = n(64700),
    i = n(532794),
    s = n(594832),
    a = n(627968),
    r = n(192308),
    o = n(945810);
let c = (0, o.mj)({
        name: "2026-02-gifting-modal-redesign",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    u = (0, o.mj)({
        name: "2026-02-non-dm-gifting-modal-redesign",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function d(e) {
    let {
        giftRecipient: t,
        onClose: l,
        analyticsLocations: i,
        analyticsLocation: s,
        analyticsObject: o,
        giftMessage: c,
        giftingOrigin: u,
    } = e;
    return (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("48900"),
                n.e("20735"),
                n.e("27846"),
                n.e("8306"),
                n.e("10567"),
                n.e("12542"),
                n.e("84317"),
                n.e("93858"),
                n.e("14875"),
                n.e("98352"),
                n.e("4986"),
                n.e("29716"),
                n.e("28948"),
                n.e("13081"),
            ]).then(n.bind(n, 631808));
            return (n) =>
                (0, a.jsx)(e, {
                    ...n,
                    giftRecipient: t,
                    analyticsLocations: i,
                    analyticsLocation: s,
                    analyticsObject: o,
                    giftMessage: c,
                    giftingOrigin: u,
                });
        },
        { modalKey: null != t ? `gift-selection-modal-${t.id}` : "gift-selection-modal", onCloseCallback: l },
    );
}
var h = n(788868);
function m(e) {
    let {
            giftRecipient: t,
            analyticsLocations: o,
            analyticsObject: m,
            wishlistAnalyticsObject: p,
            premiumAnalyticsObject: f,
            analyticsLocation: g,
            giftMessage: _,
            location: x,
        } = e,
        { enabled: C } = c.useConfig({ location: x }),
        { enabled: A } = u.useConfig({ location: x }),
        E = (0, s.tA)({ isGift: !0, giftRecipient: t }),
        I = C && null != t,
        v = A && null == t,
        y = I || v,
        b = E && null != t;
    return {
        openGiftModal: l.useCallback(() => {
            I && null != t
                ? d({
                      giftRecipient: t,
                      analyticsLocations: o,
                      analyticsLocation: g,
                      analyticsObject: p ?? m,
                      giftMessage: _,
                  })
                : v
                  ? d({
                        analyticsLocations: o,
                        analyticsLocation: g,
                        analyticsObject: p ?? m,
                        giftMessage: _,
                        giftingOrigin: h.vQ.GUILD_CHANNEL,
                    })
                  : b && null != t
                    ? (function (e) {
                          let {
                              giftRecipient: t,
                              onClose: l,
                              analyticsLocations: i,
                              analyticsLocation: s,
                              analyticsObject: o,
                              giftMessage: c,
                          } = e;
                          (0, r.openModalLazy)(
                              async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("32292"),
                                      n.e("28367"),
                                      n.e("45174"),
                                      n.e("85519"),
                                      n.e("11871"),
                                      n.e("37266"),
                                      n.e("55057"),
                                      n.e("14976"),
                                      n.e("63229"),
                                      n.e("31988"),
                                      n.e("55343"),
                                      n.e("48900"),
                                      n.e("20735"),
                                      n.e("27846"),
                                      n.e("8306"),
                                      n.e("10567"),
                                      n.e("12542"),
                                      n.e("84317"),
                                      n.e("93858"),
                                      n.e("14875"),
                                      n.e("98352"),
                                      n.e("4986"),
                                      n.e("29716"),
                                      n.e("28948"),
                                      n.e("67730"),
                                  ]).then(n.bind(n, 969174));
                                  return (n) =>
                                      (0, a.jsx)(e, {
                                          ...n,
                                          giftRecipient: t,
                                          analyticsLocations: i,
                                          analyticsLocation: s,
                                          analyticsObject: o,
                                          giftMessage: c,
                                      });
                              },
                              { modalKey: `gift-option-select-modal-${t.id}`, onCloseCallback: l },
                          );
                      })({
                          giftRecipient: t,
                          analyticsLocations: o,
                          analyticsLocation: g,
                          analyticsObject: p ?? m,
                          giftMessage: _,
                      })
                    : (0, i.A)({
                          isGift: !0,
                          giftRecipient: t ?? void 0,
                          initialPlanId: null,
                          analyticsLocations: o,
                          analyticsLocation: g,
                          analyticsObject: f ?? m,
                          giftMessage: _,
                      });
        }, [I, v, b, t, o, g, m, p, f, _]),
        shouldShowWishlistModal: b,
        shouldShowGiftSelectionModal: y,
    };
}
