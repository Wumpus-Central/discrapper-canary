"use strict";
n.d(t, { Ay: () => $, PN: () => K, X: () => W });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(997101),
    l = n(417597),
    u = n(397927),
    c = n(384904),
    d = n(821891),
    _ = n(102741),
    f = n(637141),
    p = n(953689),
    h = n(262427),
    m = n(10716),
    E = n(362490),
    g = n(20015),
    A = n(459357),
    I = n(93159),
    T = n(769015),
    S = n(778307),
    y = n(218075),
    v = n(285719),
    N = n(202613),
    C = n(351906),
    R = n(615405),
    O = n(79387),
    b = n(147964),
    D = n(603349),
    L = n(45938),
    w = n(580630),
    M = n(937008),
    x = n(156312),
    P = n(566980),
    k = n(379626),
    U = n(907927),
    G = n(938136),
    F = n(319820),
    V = n(652215),
    B = n(985018),
    H = n(756366),
    j = n(157795);
function Y(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)("div", {
              className: j.qY,
              children: [
                  (0, r.jsx)(T.A, { game: t }),
                  (0, r.jsx)(u.Heading, { variant: "heading-lg/bold", className: j.nI, children: n.name }),
              ],
          });
}
let W = (e) => {
        let {
                hasLegalTermsFlash: t,
                legalTermsNodeRef: n,
                onPaymentSourceChange: s,
                handlePaymentSourceAdd: c,
                shouldUseUnifiedCheckoutUI: _,
            } = e,
            {
                application: f,
                purchaseState: h,
                paymentSourceId: I,
                setPaymentSourceId: T,
                skusById: v,
                skuPricePreviewsById: D,
                selectedSkuId: w,
                setHasAcceptedTerms: k,
                isEmbeddedIAP: G,
                purchaseType: F,
                purchasePreviewError: H,
                devShelfFetchState: Y,
                hasPaymentSources: W,
                checkoutPaymentSources: K,
                hasCheckoutContextLoaded: $,
            } = (0, x.P5)(),
            { isGift: z, giftRecipient: q } = (0, M.Pv)(),
            Z = z && (0, L.Ik)(q),
            { fetched: X, hasAlreadyLinked: Q } = (0, E.RD)(f);
        a()(null != w, "Expected selectedSkuId");
        let { enabled: J } = (0, A.c)({ location: "OneTimePurchaseReview" }),
            { regularPaymentSources: ee, tdsWalletSource: et } = i.useMemo(
                () =>
                    J
                        ? {
                              regularPaymentSources: K.filter((e) => !(e.source instanceof N.LQ)),
                              tdsWalletSource: K.find((e) => e.source instanceof N.LQ) ?? null,
                          }
                        : { regularPaymentSources: K, tdsWalletSource: null },
                [K, J],
            ),
            [en, er] = i.useState(!0),
            [ei, es] = i.useState(void 0),
            [ea, eo] = i.useState(!1);
        if ($ && ee.length > 0 && !ea) {
            let e = ee.find((e) => e.enabled) ?? null;
            es(e?.id ?? null), eo(!0);
        }
        let el = i.useRef(!1);
        i.useEffect(() => {
            if ($ && ee.length > 0 && !el.current)
                if (((el.current = !0), null != et && en)) T(et.id);
                else {
                    let e = ee.find((e) => e.enabled) ?? null;
                    T(e?.id ?? null);
                }
        }, [$, ee, T, et, en]);
        let eu = i.useCallback(
                (e) => {
                    er(e), null != et && (e ? T(et.id) : T(ei ?? null));
                },
                [et, T, ei],
            ),
            ec = i.useCallback(
                (e) => {
                    es(null != e ? e.id : null), (en && null != et) || s(e);
                },
                [s, en, et],
            ),
            ed = v[w],
            e_ = ed?.eligiblePaymentGateways,
            ef = D[w],
            ep = I ?? O.B,
            eh = K.length > 0,
            em = null != ef ? (ef[ep] ?? (eh ? ef[O.B] : null)) : null;
        a()(null != ed, "SKU must exist and be fetched."), a()(null != f, "Application must exist.");
        let eE = (0, l.bG)([m.A, b.A], () => b.A.inTestModeForApplication(f.id) || m.A.inDevModeForApplication(f.id), [
                f.id,
            ]),
            eg = (0, l.bG)([C.A], () => C.A.enabled),
            eA = o.M.EEA_COUNTRIES.has(R.A.ipCountryCodeWithFallback),
            eI = h === P.h.PURCHASING || h === P.h.COMPLETED,
            eT = K.find((e) => e.id === I) ?? null,
            eS = null != eT ? eT.type : null,
            ey = null != e_ && e_.length > 0 && (I === O.B || null === eS) && W ? y.fU.SELECT_PAYMENT_METHOD : void 0,
            ev = ed.productLine === V.EZt.SOCIAL_LAYER_GAME_ITEM,
            eN = Z && !ev,
            eC = i.useMemo(
                () => ({
                    testModeWarning: eE ? B.intl.string(B.t.OvMyMd) : null,
                    devShelfError: (0, g.n)(f, V.gfo.EMBEDDED) && Y === m.$.ERROR ? B.intl.string(B.t.tAmECt) : null,
                    socialLayerGameItemDisclaimer: ev && X && !Q && !z ? B.intl.string(B.t["3pLGHL"]) : null,
                }),
                [eE, f, Y, ev, X, Q, z],
            ),
            eR = i.useMemo(
                () => ({
                    label: B.intl.string(B.t["mmDvV+"]),
                    paymentSources: ee,
                    selectedPaymentSourceId: I,
                    onChange: s,
                    onPaymentSourceAdd: c,
                    hidePersonalInformation: eg,
                    paymentGatewayRestrictions: e_,
                    defaultPaymentSourceId: ee.find((e) => e.isDefault)?.id,
                }),
                [ee, I, s, c, eg, e_],
            ),
            eO = i.useMemo(
                () =>
                    _ && ed.productLine === V.EZt.COLLECTIBLES
                        ? (0, r.jsx)(U.f, { paymentSourceType: eS })
                        : (0, r.jsxs)(S.A, {
                              isActive: t,
                              ref: n,
                              children: [
                                  (0, r.jsx)(p.A, {
                                      onChange: k,
                                      forceShow: !0,
                                      showWithdrawalWaiver: eA,
                                      disabled: eI,
                                      subscriptionPlan: null,
                                      finePrintClassname: j.im,
                                      purchaseType: F,
                                      isGift: z,
                                      finePrint: (0, r.jsx)(d.A, {
                                          paymentSourceType: eS,
                                          isEmbeddedIAP: G,
                                          purchaseType: F,
                                          productLine: ed.productLine,
                                          isGift: z,
                                          applicationName: f.name,
                                          hasAlreadyLinked: !X || Q,
                                      }),
                                  }),
                                  _ || null == eC.socialLayerGameItemDisclaimer
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: j.lm,
                                            children: (0, r.jsx)(u.wx6, {
                                                type: "warning",
                                                children: eC.socialLayerGameItemDisclaimer,
                                            }),
                                        }),
                              ],
                          }),
                [_, t, n, k, eA, eI, F, z, eS, G, ed.productLine, f.name, X, Q, eC.socialLayerGameItemDisclaimer],
            );
        return {
            sku: ed,
            application: f,
            giftRecipient: q,
            isGift: z,
            skuPricePreview: em,
            isEmbeddedIAP: G,
            shouldShowPurchaseReviewImage: eN,
            paymentRestrictionBannerType: ey,
            hasCheckoutContextLoaded: $,
            devShelfFetchState: Y,
            isStepLoading: !$ && null == H,
            purchasePreviewError: H,
            warningAndErrorMessages: eC,
            paymentSourceDropdownProps: eR,
            purchaseTermsAndLegalContent: eO,
            tdsWalletSource: et,
            giftCardsEnabled: J,
            isGiftCardCreditsChecked: en,
            handleGiftCardCreditsToggle: eu,
            handleRegularPaymentSourceChange: ec,
            selectedRegularSourceId: ei,
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
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: s, handlePaymentSourceAdd: a } = e,
        {
            sku: o,
            application: l,
            giftRecipient: d,
            isGift: p,
            skuPricePreview: h,
            isEmbeddedIAP: m,
            shouldShowPurchaseReviewImage: E,
            paymentRestrictionBannerType: g,
            isStepLoading: A,
            warningAndErrorMessages: T,
            paymentSourceDropdownProps: S,
            purchaseTermsAndLegalContent: N,
            tdsWalletSource: C,
            giftCardsEnabled: R,
            isGiftCardCreditsChecked: O,
            handleGiftCardCreditsToggle: b,
            handleRegularPaymentSourceChange: L,
            selectedRegularSourceId: M,
        } = W({ hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: s, handlePaymentSourceAdd: a }),
        x = i.useCallback(
            (e) => {
                null != C && (0, c.YP)(C.id);
                let t = (0, w.$g)(e.amount, e.currency);
                (0, u.showToast)(
                    (0, u.createToast)(
                        B.intl.formatToPlainString(H.default["66Wi6B"], { price: t }),
                        u.ToastType.SUCCESS,
                        { position: u.ToastPosition.TOP },
                    ),
                );
            },
            [C],
        ),
        P = K(h, { isGift: p });
    return (0, r.jsxs)("div", {
        className: j.Du,
        children: [
            (0, r.jsx)(y.je, { paymentRestrictionBannerType: g }),
            null != T.testModeWarning
                ? (0, r.jsx)(
                      _.A,
                      {
                          icon: (0, u.kHD)(D.A),
                          iconSize: _.A.Sizes.SMALL,
                          color: _.A.Colors.WARNING,
                          className: j.QK,
                          children: T.testModeWarning,
                      },
                      "TEST_MODE",
                  )
                : null,
            null != T.devShelfError
                ? (0, r.jsx)(
                      _.A,
                      {
                          icon: (0, u.kHD)(D.A),
                          iconSize: _.A.Sizes.SMALL,
                          color: _.A.Colors.ERROR,
                          className: j.QK,
                          children: T.devShelfError,
                      },
                      "DEV_SHELF_ERROR",
                  )
                : null,
            (0, r.jsx)(Y, { application: l, sku: o, isEmbeddedIAP: m }),
            E && (0, r.jsx)(G.A, { sku: o }),
            null != d ? (0, r.jsx)(v.Z, { giftRecipient: d }) : null,
            (0, r.jsx)(k.I, {}),
            A
                ? (0, r.jsx)(u.y$y, { type: u.y$y.Type.WANDERING_CUBES, className: j.fx })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.D0$, {
                              label: p ? B.intl.string(B.t.PEjaCx) : B.intl.string(B.t.sail9P),
                              children:
                                  null != h
                                      ? (0, r.jsx)(F.hl, { sku: o, skuPricePreview: h, application: l })
                                      : (0, r.jsx)(F.Uw, { sku: o, value: "" }),
                          }),
                          (0, r.jsx)("div", {
                              className: j.Jv,
                              children:
                                  null != C
                                      ? (0, r.jsxs)(u.D0$, {
                                            label: B.intl.string(B.t["mmDvV+"]),
                                            children: [
                                                (0, r.jsx)(I.od, {
                                                    giftCardWallet: C,
                                                    checked: O,
                                                    onChange: b,
                                                    itemAmount: h?.amount,
                                                    className: j.kV,
                                                }),
                                                (0, r.jsx)(f.A, {
                                                    ...S,
                                                    selectedPaymentSourceId: M,
                                                    onChange: L,
                                                    disabled: O,
                                                    label: "",
                                                }),
                                            ],
                                        })
                                      : (0, r.jsx)(f.A, { ...S }),
                          }),
                          R ? (0, r.jsx)(I.Z4, { onComplete: x, className: j.SO }) : null,
                          null != P && (0, r.jsx)(z, { ...P }),
                      ],
                  }),
            N,
        ],
    });
}
let z = (e) => {
    let { text: t, Icon: n } = e;
    return (0, r.jsx)(u.D0$, {
        children: (0, r.jsx)("div", { className: j.sA, children: (0, r.jsx)(h.J, { Icon: n, text: t }) }),
    });
};
