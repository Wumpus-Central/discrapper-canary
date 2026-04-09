"use strict";
n.d(t, { Ay: () => K, PN: () => W, X: () => Y });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(997101),
    l = n(417597),
    u = n(397927),
    c = n(821891),
    d = n(102741),
    _ = n(953689),
    f = n(262427),
    p = n(10716),
    h = n(362490),
    m = n(20015),
    E = n(323082),
    g = n(918022),
    A = n(93159),
    I = n(769015),
    T = n(778307),
    S = n(218075),
    y = n(285719),
    v = n(351906),
    N = n(615405),
    C = n(79387),
    R = n(147964),
    O = n(603349),
    b = n(45938),
    D = n(580630),
    L = n(937008),
    w = n(156312),
    M = n(566980),
    x = n(379626),
    P = n(907927),
    k = n(987616),
    U = n(938136),
    G = n(319820),
    F = n(652215),
    V = n(985018),
    B = n(523376),
    H = n(763434);
function j(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)("div", {
              className: H.qY,
              children: [
                  (0, r.jsx)(I.A, { game: t }),
                  (0, r.jsx)(u.Heading, { variant: "heading-lg/bold", className: H.nI, children: n.name }),
              ],
          });
}
let Y = (e) => {
        let {
                hasLegalTermsFlash: t,
                legalTermsNodeRef: n,
                handlePaymentSourceAdd: s,
                shouldUseUnifiedCheckoutUI: d,
            } = e,
            {
                application: f,
                purchaseState: E,
                paymentSourceId: A,
                setPaymentSourceId: I,
                selectedSkuId: y,
                setHasAcceptedTerms: O,
                isEmbeddedIAP: D,
                purchaseType: x,
                purchasePreviewError: U,
                devShelfFetchState: G,
                hasPaymentSources: B,
                checkoutPaymentSources: j,
                hasCheckoutContextLoaded: Y,
            } = (0, w.P5)(),
            W = (0, k.gU)(),
            K = (0, k.RR)(),
            { isGift: $, giftRecipient: z } = (0, L.Pv)(),
            q = $ && (0, b.Ik)(z),
            { fetched: Z, hasAlreadyLinked: X } = (0, h.RD)(f);
        a()(null != y, "Expected selectedSkuId");
        let Q = W[y],
            J = Q?.eligiblePaymentGateways,
            ee = K[y],
            et = A ?? C.B,
            en = j.length > 0,
            er = null != ee ? (ee[et] ?? (en ? ee[C.B] : null)) : null,
            {
                dropdownPaymentSources: ei,
                giftCardWallet: es,
                giftCardsEnabled: ea,
                dropdownPaymentSourceId: eo,
                handleDropdownPaymentSourceChange: el,
                giftCardCheckboxProps: eu,
            } = (0, g.Y)({
                checkoutPaymentSources: j,
                setPaymentSourceId: I,
                location: "OneTimePurchaseReview",
                isReady: Y,
                itemAmount: er?.amount,
            });
        a()(null != Q, "SKU must exist and be fetched."), a()(null != f, "Application must exist.");
        let ec = (0, l.bG)([p.A, R.A], () => R.A.inTestModeForApplication(f.id) || p.A.inDevModeForApplication(f.id), [
                f.id,
            ]),
            ed = (0, l.bG)([v.A], () => v.A.enabled),
            e_ = o.M.EEA_COUNTRIES.has(N.A.ipCountryCodeWithFallback),
            ef = E === M.h.PURCHASING || E === M.h.COMPLETED,
            ep = j.find((e) => e.id === A) ?? null,
            eh = null != ep ? ep.type : null,
            em = null != J && J.length > 0 && (A === C.B || null === eh) && B ? S.fU.SELECT_PAYMENT_METHOD : void 0,
            eE = Q.productLine === F.EZt.SOCIAL_LAYER_GAME_ITEM,
            eg = q && !eE,
            eA = i.useMemo(
                () => ({
                    testModeWarning: ec ? V.intl.string(V.t.OvMyMd) : null,
                    devShelfError: (0, m.n)(f, F.gfo.EMBEDDED) && G === p.$.ERROR ? V.intl.string(V.t.tAmECt) : null,
                    socialLayerGameItemDisclaimer: eE && Z && !X && !$ ? V.intl.string(V.t["3pLGHL"]) : null,
                }),
                [ec, f, G, eE, Z, X, $],
            ),
            eI = i.useMemo(
                () => ({
                    paymentSources: ei,
                    selectedPaymentSourceId: eo,
                    onChange: el,
                    onPaymentSourceAdd: s,
                    hidePersonalInformation: ed,
                    paymentGatewayRestrictions: J,
                    defaultPaymentSourceId: ei.find((e) => e.isDefault)?.id,
                }),
                [ei, eo, el, s, ed, J],
            ),
            eT = i.useMemo(
                () =>
                    d && Q.productLine === F.EZt.COLLECTIBLES
                        ? (0, r.jsx)(P.f, { paymentSourceType: eh })
                        : (0, r.jsxs)(T.A, {
                              isActive: t,
                              ref: n,
                              children: [
                                  (0, r.jsx)(_.A, {
                                      onChange: O,
                                      forceShow: !0,
                                      showWithdrawalWaiver: e_,
                                      disabled: ef,
                                      subscriptionPlan: null,
                                      finePrintClassname: H.im,
                                      purchaseType: x,
                                      isGift: $,
                                      finePrint: (0, r.jsx)(c.A, {
                                          paymentSourceType: eh,
                                          isEmbeddedIAP: D,
                                          purchaseType: x,
                                          productLine: Q.productLine,
                                          isGift: $,
                                          applicationName: f.name,
                                          hasAlreadyLinked: !Z || X,
                                      }),
                                  }),
                                  d || null == eA.socialLayerGameItemDisclaimer
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: H.lm,
                                            children: (0, r.jsx)(u.wx6, {
                                                type: "warning",
                                                children: eA.socialLayerGameItemDisclaimer,
                                            }),
                                        }),
                              ],
                          }),
                [d, t, n, O, e_, ef, x, $, eh, D, Q.productLine, f.name, Z, X, eA.socialLayerGameItemDisclaimer],
            );
        return {
            sku: Q,
            application: f,
            giftRecipient: z,
            isGift: $,
            skuPricePreview: er,
            isEmbeddedIAP: D,
            shouldShowPurchaseReviewImage: eg,
            paymentRestrictionBannerType: em,
            hasCheckoutContextLoaded: Y,
            devShelfFetchState: G,
            isStepLoading: !Y && null == U,
            purchasePreviewError: U,
            warningAndErrorMessages: eA,
            paymentSourceDropdownProps: eI,
            purchaseTermsAndLegalContent: eT,
            giftCardWallet: es,
            giftCardsEnabled: ea,
            giftCardCheckboxProps: eu,
            disabled: ef,
        };
    },
    W = (e, t) => {
        let { isGift: n } = t;
        if (null == e) return null;
        let r = e.orbs_reward;
        if (null != r && r > 0) {
            let e = n ? V.t["ZV+aS9"] : V.t["0StwHe"];
            return { Icon: u.Cp8, text: V.intl.format(e, { orbCount: r }) };
        }
    };
function K(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: s } = e,
        {
            sku: a,
            application: o,
            giftRecipient: l,
            isGift: c,
            skuPricePreview: _,
            isEmbeddedIAP: f,
            shouldShowPurchaseReviewImage: p,
            paymentRestrictionBannerType: h,
            isStepLoading: m,
            warningAndErrorMessages: g,
            paymentSourceDropdownProps: I,
            purchaseTermsAndLegalContent: T,
            giftCardWallet: v,
            giftCardsEnabled: N,
            giftCardCheckboxProps: C,
            disabled: R,
        } = Y({ hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: s }),
        b = i.useCallback(
            (e) => {
                null != v && (0, E.YP)(v.id);
                let t = (0, D.$g)(e.amount, e.currency);
                (0, u.showToast)(
                    (0, u.createToast)(
                        V.intl.formatToPlainString(B.default["66Wi6B"], { price: t }),
                        u.ToastType.SUCCESS,
                        { position: u.ToastPosition.TOP },
                    ),
                );
            },
            [v],
        ),
        L = W(_, { isGift: c });
    return (0, r.jsxs)("div", {
        className: H.Du,
        children: [
            (0, r.jsx)(S.je, { paymentRestrictionBannerType: h }),
            null != g.testModeWarning
                ? (0, r.jsx)(
                      d.A,
                      {
                          icon: (0, u.kHD)(O.A),
                          iconSize: d.A.Sizes.SMALL,
                          color: d.A.Colors.WARNING,
                          className: H.QK,
                          children: g.testModeWarning,
                      },
                      "TEST_MODE",
                  )
                : null,
            null != g.devShelfError
                ? (0, r.jsx)(
                      d.A,
                      {
                          icon: (0, u.kHD)(O.A),
                          iconSize: d.A.Sizes.SMALL,
                          color: d.A.Colors.ERROR,
                          className: H.QK,
                          children: g.devShelfError,
                      },
                      "DEV_SHELF_ERROR",
                  )
                : null,
            (0, r.jsx)(j, { application: o, sku: a, isEmbeddedIAP: f }),
            p && (0, r.jsx)(U.A, { sku: a }),
            null != l ? (0, r.jsx)(y.Z, { giftRecipient: l }) : null,
            (0, r.jsx)(x.I, {}),
            m
                ? (0, r.jsx)(u.y$y, { type: u.y$y.Type.WANDERING_CUBES, className: H.fx })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.D0$, {
                              label: c ? V.intl.string(V.t.PEjaCx) : V.intl.string(V.t.sail9P),
                              children:
                                  null != _
                                      ? (0, r.jsx)(G.hl, { sku: a, skuPricePreview: _, application: o })
                                      : (0, r.jsx)(G.Uw, { sku: a, value: "" }),
                          }),
                          (0, r.jsx)("div", {
                              className: H.Jv,
                              children: (0, r.jsx)(A.nL, {
                                  label: V.intl.string(V.t["mmDvV+"]),
                                  giftCardsEnabled: N,
                                  giftCardCheckboxProps: C,
                                  paymentSourceDropdownProps: I,
                                  disabled: R,
                              }),
                          }),
                          N ? (0, r.jsx)(A.Z4, { onComplete: b, className: H.SO }) : null,
                          null != L && (0, r.jsx)($, { ...L }),
                      ],
                  }),
            T,
        ],
    });
}
let $ = (e) => {
    let { text: t, Icon: n } = e;
    return (0, r.jsx)(u.D0$, {
        children: (0, r.jsx)("div", { className: H.sA, children: (0, r.jsx)(f.J, { Icon: n, text: t }) }),
    });
};
