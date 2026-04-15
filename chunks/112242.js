"use strict";
n.d(t, { Ay: () => $, PN: () => K, X: () => W });
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
    T = n(977445),
    S = n(778307),
    y = n(218075),
    v = n(285719),
    N = n(351906),
    C = n(615405),
    R = n(79387),
    O = n(603349),
    b = n(45938),
    D = n(580630),
    L = n(413748),
    w = n(937008),
    M = n(156312),
    P = n(566980),
    x = n(379626),
    k = n(907927),
    U = n(987616),
    G = n(938136),
    F = n(319820),
    V = n(652215),
    B = n(985018),
    H = n(366023),
    j = n(157795);
function Y(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)("div", {
              className: j.qY,
              children: [
                  (0, r.jsx)(I.A, { game: t }),
                  (0, r.jsx)(u.Heading, { variant: "heading-lg/bold", className: j.nI, children: n.name }),
              ],
          });
}
let W = (e) => {
        let {
                hasLegalTermsFlash: t,
                legalTermsNodeRef: n,
                handlePaymentSourceAdd: s,
                shouldUseUnifiedCheckoutUI: d,
            } = e,
            f = (0, L.t4)((e) => e.selectedSkuId),
            {
                application: E,
                purchaseState: A,
                paymentSourceId: I,
                setPaymentSourceId: v,
                setHasAcceptedTerms: O,
                isEmbeddedIAP: D,
                purchaseType: x,
                purchasePreviewError: G,
                devShelfFetchState: F,
                hasPaymentSources: H,
                checkoutPaymentSources: Y,
                hasCheckoutContextLoaded: W,
            } = (0, M.P5)(),
            K = (0, U.gU)(),
            $ = (0, U.RR)(),
            { isGift: z, giftRecipient: q } = (0, w.Pv)(),
            Z = z && (0, b.Ik)(q),
            { fetched: X, hasAlreadyLinked: Q } = (0, h.RD)(E);
        a()(null != f, "Expected selectedSkuId");
        let J = K[f],
            ee = J?.eligiblePaymentGateways,
            et = $[f],
            en = I ?? R.B,
            er = Y.length > 0,
            ei = null != et ? (et[en] ?? (er ? et[R.B] : null)) : null,
            {
                dropdownPaymentSources: es,
                giftCardWallet: ea,
                giftCardsEnabled: eo,
                dropdownPaymentSourceId: el,
                handleDropdownPaymentSourceChange: eu,
                giftCardCheckboxProps: ec,
            } = (0, g.Y)({
                checkoutPaymentSources: Y,
                setPaymentSourceId: v,
                location: "OneTimePurchaseReview",
                isReady: W,
                itemAmount: ei?.amount,
            });
        a()(null != J, "SKU must exist and be fetched."), a()(null != E, "Application must exist.");
        let ed = (0, T.u)(E.id),
            e_ = (0, l.bG)([N.A], () => N.A.enabled),
            ef = o.M.EEA_COUNTRIES.has(C.A.ipCountryCodeWithFallback),
            ep = A === P.h.PURCHASING || A === P.h.COMPLETED,
            eh = Y.find((e) => e.id === I) ?? null,
            em = null != eh ? eh.type : null,
            eE = null != ee && ee.length > 0 && (I === R.B || null === em) && H ? y.fU.SELECT_PAYMENT_METHOD : void 0,
            eg = J.productLine === V.EZt.SOCIAL_LAYER_GAME_ITEM,
            eA = Z && !eg,
            eI = i.useMemo(
                () => ({
                    testModeWarning: ed ? B.intl.string(B.t.OvMyMd) : null,
                    devShelfError: (0, m.n)(E, V.gfo.EMBEDDED) && F === p.$.ERROR ? B.intl.string(B.t.tAmECt) : null,
                    socialLayerGameItemDisclaimer: eg && X && !Q && !z ? B.intl.string(B.t["3pLGHL"]) : null,
                }),
                [ed, E, F, eg, X, Q, z],
            ),
            eT = i.useMemo(
                () => ({
                    paymentSources: es,
                    selectedPaymentSourceId: el,
                    onChange: eu,
                    onPaymentSourceAdd: s,
                    hidePersonalInformation: e_,
                    paymentGatewayRestrictions: ee,
                    defaultPaymentSourceId: es.find((e) => e.isDefault)?.id,
                }),
                [es, el, eu, s, e_, ee],
            ),
            eS = i.useMemo(
                () =>
                    d && J.productLine === V.EZt.COLLECTIBLES
                        ? (0, r.jsx)(k.f, { paymentSourceType: em })
                        : (0, r.jsxs)(S.A, {
                              isActive: t,
                              ref: n,
                              children: [
                                  (0, r.jsx)(_.A, {
                                      onChange: O,
                                      forceShow: !0,
                                      showWithdrawalWaiver: ef,
                                      disabled: ep,
                                      subscriptionPlan: null,
                                      finePrintClassname: j.im,
                                      purchaseType: x,
                                      isGift: z,
                                      finePrint: (0, r.jsx)(c.A, {
                                          paymentSourceType: em,
                                          isEmbeddedIAP: D,
                                          purchaseType: x,
                                          productLine: J.productLine,
                                          isGift: z,
                                          applicationName: E.name,
                                          hasAlreadyLinked: !X || Q,
                                      }),
                                  }),
                                  d || null == eI.socialLayerGameItemDisclaimer
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: j.lm,
                                            children: (0, r.jsx)(u.wx6, {
                                                type: "warning",
                                                children: eI.socialLayerGameItemDisclaimer,
                                            }),
                                        }),
                              ],
                          }),
                [d, t, n, O, ef, ep, x, z, em, D, J.productLine, E.name, X, Q, eI.socialLayerGameItemDisclaimer],
            );
        return {
            sku: J,
            application: E,
            giftRecipient: q,
            isGift: z,
            skuPricePreview: ei,
            isEmbeddedIAP: D,
            shouldShowPurchaseReviewImage: eA,
            paymentRestrictionBannerType: eE,
            hasCheckoutContextLoaded: W,
            devShelfFetchState: F,
            isStepLoading: !W && null == G,
            purchasePreviewError: G,
            warningAndErrorMessages: eI,
            paymentSourceDropdownProps: eT,
            purchaseTermsAndLegalContent: eS,
            giftCardWallet: ea,
            giftCardsEnabled: eo,
            giftCardCheckboxProps: ec,
            disabled: ep,
        };
    },
    K = (e, t) => {
        let { isGift: n } = t;
        if (null == e) return null;
        let r = e.orbs_reward;
        if (null != r && r > 0) {
            let e = n ? B.t["ZV+aS9"] : B.t["0StwHe"];
            return { Icon: u.Cp8, text: B.intl.format(e, { orbCount: r }) };
        }
    };
function $(e) {
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
            giftCardWallet: S,
            giftCardsEnabled: N,
            giftCardCheckboxProps: C,
            disabled: R,
        } = W({ hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: s }),
        b = i.useCallback(
            (e) => {
                null != S && (0, E.YP)(S.id);
                let t = (0, D.$g)(e.amount, e.currency);
                (0, u.showToast)(
                    (0, u.createToast)(
                        B.intl.formatToPlainString(H.default["66Wi6B"], { price: t }),
                        u.ToastType.SUCCESS,
                        { position: u.ToastPosition.TOP },
                    ),
                );
            },
            [S],
        ),
        L = K(_, { isGift: c });
    return (0, r.jsxs)("div", {
        className: j.Du,
        children: [
            (0, r.jsx)(y.je, { paymentRestrictionBannerType: h }),
            null != g.testModeWarning
                ? (0, r.jsx)(
                      d.A,
                      {
                          icon: (0, u.kHD)(O.A),
                          iconSize: d.A.Sizes.SMALL,
                          color: d.A.Colors.WARNING,
                          className: j.QK,
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
                          className: j.QK,
                          children: g.devShelfError,
                      },
                      "DEV_SHELF_ERROR",
                  )
                : null,
            (0, r.jsx)(Y, { application: o, sku: a, isEmbeddedIAP: f }),
            p && (0, r.jsx)(G.A, { sku: a }),
            null != l ? (0, r.jsx)(v.Z, { giftRecipient: l }) : null,
            (0, r.jsx)(x.I, {}),
            m
                ? (0, r.jsx)(u.y$y, { type: u.y$y.Type.WANDERING_CUBES, className: j.fx })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.D0$, {
                              label: c ? B.intl.string(B.t.PEjaCx) : B.intl.string(B.t.sail9P),
                              children:
                                  null != _
                                      ? (0, r.jsx)(F.hl, { sku: a, skuPricePreview: _, application: o })
                                      : (0, r.jsx)(F.Uw, { sku: a, value: "" }),
                          }),
                          (0, r.jsx)("div", {
                              className: j.Jv,
                              children: (0, r.jsx)(A.nL, {
                                  label: B.intl.string(B.t["mmDvV+"]),
                                  giftCardsEnabled: N,
                                  giftCardCheckboxProps: C,
                                  paymentSourceDropdownProps: I,
                                  disabled: R,
                              }),
                          }),
                          N ? (0, r.jsx)(A.Z4, { onComplete: b, className: j.SO }) : null,
                          null != L && (0, r.jsx)(z, { ...L }),
                      ],
                  }),
            T,
        ],
    });
}
let z = (e) => {
    let { text: t, Icon: n } = e;
    return (0, r.jsx)(u.D0$, {
        children: (0, r.jsx)("div", { className: j.sA, children: (0, r.jsx)(f.J, { Icon: n, text: t }) }),
    });
};
