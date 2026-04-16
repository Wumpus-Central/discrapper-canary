"use strict";
n.d(t, { Ay: () => z, PN: () => $, X: () => K });
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
    N = n(570221),
    C = n(351906),
    R = n(615405),
    O = n(79387),
    b = n(603349),
    D = n(45938),
    L = n(580630),
    w = n(413748),
    M = n(937008),
    P = n(156312),
    x = n(566980),
    k = n(379626),
    U = n(907927),
    G = n(987616),
    F = n(938136),
    V = n(319820),
    B = n(652215),
    H = n(985018),
    j = n(366023),
    Y = n(157795);
function W(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)("div", {
              className: Y.qY,
              children: [
                  (0, r.jsx)(I.A, { game: t }),
                  (0, r.jsx)(u.Heading, { variant: "heading-lg/bold", className: Y.nI, children: n.name }),
              ],
          });
}
let K = (e) => {
        let {
                hasLegalTermsFlash: t,
                legalTermsNodeRef: n,
                handlePaymentSourceAdd: s,
                shouldUseUnifiedCheckoutUI: d,
            } = e,
            f = (0, w.t4)((e) => e.selectedSkuId),
            {
                application: E,
                purchaseState: A,
                paymentSourceId: I,
                setPaymentSourceId: v,
                setHasAcceptedTerms: b,
                isEmbeddedIAP: L,
                purchaseType: k,
                purchasePreviewError: F,
                devShelfFetchState: V,
                hasPaymentSources: j,
                checkoutPaymentSources: W,
                hasCheckoutContextLoaded: K,
            } = (0, P.P5)(),
            $ = (0, G.gU)(),
            z = (0, G.RR)(),
            { isGift: q, giftRecipient: Z } = (0, M.Pv)(),
            X = q && (0, D.Ik)(Z),
            { fetched: Q, hasAlreadyLinked: J } = (0, h.RD)(E);
        a()(null != f, "Expected selectedSkuId");
        let ee = $[f],
            et = ee?.eligiblePaymentGateways,
            en = z[f],
            er = I ?? O.B,
            ei = W.length > 0,
            es = null != en ? (en[er] ?? (ei ? en[O.B] : null)) : null,
            ea = i.useMemo(() => (null == es ? null : N.A.createFromOTPPreview(es)), [es]);
        (0, w.F0)(ea);
        let {
            dropdownPaymentSources: eo,
            giftCardWallet: el,
            giftCardsEnabled: eu,
            dropdownPaymentSourceId: ec,
            handleDropdownPaymentSourceChange: ed,
            giftCardCheckboxProps: e_,
        } = (0, g.Y)({
            checkoutPaymentSources: W,
            setPaymentSourceId: v,
            location: "OneTimePurchaseReview",
            isReady: K,
            itemAmount: es?.amount,
        });
        a()(null != ee, "SKU must exist and be fetched."), a()(null != E, "Application must exist.");
        let ef = (0, T.u)(E.id),
            ep = (0, l.bG)([C.A], () => C.A.enabled),
            eh = o.M.EEA_COUNTRIES.has(R.A.ipCountryCodeWithFallback),
            em = A === x.h.PURCHASING || A === x.h.COMPLETED,
            eE = W.find((e) => e.id === I) ?? null,
            eg = null != eE ? eE.type : null,
            eA = null != et && et.length > 0 && (I === O.B || null === eg) && j ? y.fU.SELECT_PAYMENT_METHOD : void 0,
            eI = ee.productLine === B.EZt.SOCIAL_LAYER_GAME_ITEM,
            eT = X && !eI,
            eS = i.useMemo(
                () => ({
                    testModeWarning: ef ? H.intl.string(H.t.OvMyMd) : null,
                    devShelfError: (0, m.n)(E, B.gfo.EMBEDDED) && V === p.$.ERROR ? H.intl.string(H.t.tAmECt) : null,
                    socialLayerGameItemDisclaimer: eI && Q && !J && !q ? H.intl.string(H.t["3pLGHL"]) : null,
                }),
                [ef, E, V, eI, Q, J, q],
            ),
            ey = i.useMemo(
                () => ({
                    paymentSources: eo,
                    selectedPaymentSourceId: ec,
                    onChange: ed,
                    onPaymentSourceAdd: s,
                    hidePersonalInformation: ep,
                    paymentGatewayRestrictions: et,
                    defaultPaymentSourceId: eo.find((e) => e.isDefault)?.id,
                }),
                [eo, ec, ed, s, ep, et],
            ),
            ev = i.useMemo(
                () =>
                    d && ee.productLine === B.EZt.COLLECTIBLES
                        ? (0, r.jsx)(U.f, { paymentSourceType: eg })
                        : (0, r.jsxs)(S.A, {
                              isActive: t,
                              ref: n,
                              children: [
                                  (0, r.jsx)(_.A, {
                                      onChange: b,
                                      forceShow: !0,
                                      showWithdrawalWaiver: eh,
                                      disabled: em,
                                      subscriptionPlan: null,
                                      finePrintClassname: Y.im,
                                      purchaseType: k,
                                      isGift: q,
                                      finePrint: (0, r.jsx)(c.A, {
                                          paymentSourceType: eg,
                                          isEmbeddedIAP: L,
                                          purchaseType: k,
                                          productLine: ee.productLine,
                                          isGift: q,
                                          applicationName: E.name,
                                          hasAlreadyLinked: !Q || J,
                                      }),
                                  }),
                                  d || null == eS.socialLayerGameItemDisclaimer
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: Y.lm,
                                            children: (0, r.jsx)(u.wx6, {
                                                type: "warning",
                                                children: eS.socialLayerGameItemDisclaimer,
                                            }),
                                        }),
                              ],
                          }),
                [d, t, n, b, eh, em, k, q, eg, L, ee.productLine, E.name, Q, J, eS.socialLayerGameItemDisclaimer],
            );
        return {
            sku: ee,
            application: E,
            giftRecipient: Z,
            isGift: q,
            skuPricePreview: es,
            isEmbeddedIAP: L,
            shouldShowPurchaseReviewImage: eT,
            paymentRestrictionBannerType: eA,
            hasCheckoutContextLoaded: K,
            devShelfFetchState: V,
            isStepLoading: !K && null == F,
            purchasePreviewError: F,
            warningAndErrorMessages: eS,
            paymentSourceDropdownProps: ey,
            purchaseTermsAndLegalContent: ev,
            giftCardWallet: el,
            giftCardsEnabled: eu,
            giftCardCheckboxProps: e_,
            disabled: em,
        };
    },
    $ = (e, t) => {
        let { isGift: n } = t;
        if (null == e) return null;
        let r = e.orbs_reward;
        if (null != r && r > 0) {
            let e = n ? H.t["ZV+aS9"] : H.t["0StwHe"];
            return { Icon: u.Cp8, text: H.intl.format(e, { orbCount: r }) };
        }
    };
function z(e) {
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
        } = K({ hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: s }),
        O = i.useCallback(
            (e) => {
                null != S && (0, E.YP)(S.id);
                let t = (0, L.$g)(e.amount, e.currency);
                (0, u.showToast)(
                    (0, u.createToast)(
                        H.intl.formatToPlainString(j.default["66Wi6B"], { price: t }),
                        u.ToastType.SUCCESS,
                        { position: u.ToastPosition.TOP },
                    ),
                );
            },
            [S],
        ),
        D = $(_, { isGift: c });
    return (0, r.jsxs)("div", {
        className: Y.Du,
        children: [
            (0, r.jsx)(y.je, { paymentRestrictionBannerType: h }),
            null != g.testModeWarning
                ? (0, r.jsx)(
                      d.A,
                      {
                          icon: (0, u.kHD)(b.A),
                          iconSize: d.A.Sizes.SMALL,
                          color: d.A.Colors.WARNING,
                          className: Y.QK,
                          children: g.testModeWarning,
                      },
                      "TEST_MODE",
                  )
                : null,
            null != g.devShelfError
                ? (0, r.jsx)(
                      d.A,
                      {
                          icon: (0, u.kHD)(b.A),
                          iconSize: d.A.Sizes.SMALL,
                          color: d.A.Colors.ERROR,
                          className: Y.QK,
                          children: g.devShelfError,
                      },
                      "DEV_SHELF_ERROR",
                  )
                : null,
            (0, r.jsx)(W, { application: o, sku: a, isEmbeddedIAP: f }),
            p && (0, r.jsx)(F.A, { sku: a }),
            null != l ? (0, r.jsx)(v.Z, { giftRecipient: l }) : null,
            (0, r.jsx)(k.I, {}),
            m
                ? (0, r.jsx)(u.y$y, { type: u.y$y.Type.WANDERING_CUBES, className: Y.fx })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.D0$, {
                              label: c ? H.intl.string(H.t.PEjaCx) : H.intl.string(H.t.sail9P),
                              children:
                                  null != _
                                      ? (0, r.jsx)(V.hl, { sku: a, skuPricePreview: _, application: o })
                                      : (0, r.jsx)(V.Uw, { sku: a, value: "" }),
                          }),
                          (0, r.jsx)("div", {
                              className: Y.Jv,
                              children: (0, r.jsx)(A.nL, {
                                  label: H.intl.string(H.t["mmDvV+"]),
                                  giftCardsEnabled: N,
                                  giftCardCheckboxProps: C,
                                  paymentSourceDropdownProps: I,
                                  disabled: R,
                              }),
                          }),
                          N ? (0, r.jsx)(A.Z4, { onComplete: O, className: Y.SO }) : null,
                          null != D && (0, r.jsx)(q, { ...D }),
                      ],
                  }),
            T,
        ],
    });
}
let q = (e) => {
    let { text: t, Icon: n } = e;
    return (0, r.jsx)(u.D0$, {
        children: (0, r.jsx)("div", { className: Y.sA, children: (0, r.jsx)(f.J, { Icon: n, text: t }) }),
    });
};
