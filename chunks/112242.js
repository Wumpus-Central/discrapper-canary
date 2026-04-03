"use strict";
n.d(t, { Ay: () => z, PN: () => $, X: () => K });
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
    G = n(987616),
    F = n(938136),
    V = n(319820),
    B = n(652215),
    H = n(985018),
    j = n(756366),
    Y = n(157795);
function W(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)("div", {
              className: Y.qY,
              children: [
                  (0, r.jsx)(T.A, { game: t }),
                  (0, r.jsx)(u.Heading, { variant: "heading-lg/bold", className: Y.nI, children: n.name }),
              ],
          });
}
let K = (e) => {
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
                selectedSkuId: v,
                setHasAcceptedTerms: D,
                isEmbeddedIAP: w,
                purchaseType: k,
                purchasePreviewError: F,
                devShelfFetchState: V,
                hasPaymentSources: j,
                checkoutPaymentSources: W,
                hasCheckoutContextLoaded: K,
            } = (0, x.P5)(),
            $ = (0, G.gU)(),
            z = (0, G.RR)(),
            { isGift: q, giftRecipient: Z } = (0, M.Pv)(),
            X = q && (0, L.Ik)(Z),
            { fetched: Q, hasAlreadyLinked: J } = (0, E.RD)(f);
        a()(null != v, "Expected selectedSkuId");
        let { enabled: ee } = (0, A.c)({ location: "OneTimePurchaseReview" }),
            { regularPaymentSources: et, tdsWalletSource: en } = i.useMemo(
                () =>
                    ee
                        ? {
                              regularPaymentSources: W.filter((e) => !(e.source instanceof N.LQ)),
                              tdsWalletSource: W.find((e) => e.source instanceof N.LQ) ?? null,
                          }
                        : { regularPaymentSources: W, tdsWalletSource: null },
                [W, ee],
            ),
            [er, ei] = i.useState(!0),
            [es, ea] = i.useState(void 0),
            [eo, el] = i.useState(!1);
        if (K && et.length > 0 && !eo) {
            let e = et.find((e) => e.enabled) ?? null;
            ea(e?.id ?? null), el(!0);
        }
        let eu = i.useRef(!1);
        i.useEffect(() => {
            if (K && et.length > 0 && !eu.current)
                if (((eu.current = !0), null != en && er)) T(en.id);
                else {
                    let e = et.find((e) => e.enabled) ?? null;
                    T(e?.id ?? null);
                }
        }, [K, et, T, en, er]);
        let ec = i.useCallback(
                (e) => {
                    ei(e), null != en && (e ? T(en.id) : T(es ?? null));
                },
                [en, T, es],
            ),
            ed = i.useCallback(
                (e) => {
                    ea(null != e ? e.id : null), (er && null != en) || s(e);
                },
                [s, er, en],
            ),
            e_ = $[v],
            ef = e_?.eligiblePaymentGateways,
            ep = z[v],
            eh = I ?? O.B,
            em = W.length > 0,
            eE = null != ep ? (ep[eh] ?? (em ? ep[O.B] : null)) : null;
        a()(null != e_, "SKU must exist and be fetched."), a()(null != f, "Application must exist.");
        let eg = (0, l.bG)([m.A, b.A], () => b.A.inTestModeForApplication(f.id) || m.A.inDevModeForApplication(f.id), [
                f.id,
            ]),
            eA = (0, l.bG)([C.A], () => C.A.enabled),
            eI = o.M.EEA_COUNTRIES.has(R.A.ipCountryCodeWithFallback),
            eT = h === P.h.PURCHASING || h === P.h.COMPLETED,
            eS = W.find((e) => e.id === I) ?? null,
            ey = null != eS ? eS.type : null,
            ev = null != ef && ef.length > 0 && (I === O.B || null === ey) && j ? y.fU.SELECT_PAYMENT_METHOD : void 0,
            eN = e_.productLine === B.EZt.SOCIAL_LAYER_GAME_ITEM,
            eC = X && !eN,
            eR = i.useMemo(
                () => ({
                    testModeWarning: eg ? H.intl.string(H.t.OvMyMd) : null,
                    devShelfError: (0, g.n)(f, B.gfo.EMBEDDED) && V === m.$.ERROR ? H.intl.string(H.t.tAmECt) : null,
                    socialLayerGameItemDisclaimer: eN && Q && !J && !q ? H.intl.string(H.t["3pLGHL"]) : null,
                }),
                [eg, f, V, eN, Q, J, q],
            ),
            eO = i.useMemo(
                () => ({
                    label: H.intl.string(H.t["mmDvV+"]),
                    paymentSources: et,
                    selectedPaymentSourceId: I,
                    onChange: s,
                    onPaymentSourceAdd: c,
                    hidePersonalInformation: eA,
                    paymentGatewayRestrictions: ef,
                    defaultPaymentSourceId: et.find((e) => e.isDefault)?.id,
                }),
                [et, I, s, c, eA, ef],
            ),
            eb = i.useMemo(
                () =>
                    _ && e_.productLine === B.EZt.COLLECTIBLES
                        ? (0, r.jsx)(U.f, { paymentSourceType: ey })
                        : (0, r.jsxs)(S.A, {
                              isActive: t,
                              ref: n,
                              children: [
                                  (0, r.jsx)(p.A, {
                                      onChange: D,
                                      forceShow: !0,
                                      showWithdrawalWaiver: eI,
                                      disabled: eT,
                                      subscriptionPlan: null,
                                      finePrintClassname: Y.im,
                                      purchaseType: k,
                                      isGift: q,
                                      finePrint: (0, r.jsx)(d.A, {
                                          paymentSourceType: ey,
                                          isEmbeddedIAP: w,
                                          purchaseType: k,
                                          productLine: e_.productLine,
                                          isGift: q,
                                          applicationName: f.name,
                                          hasAlreadyLinked: !Q || J,
                                      }),
                                  }),
                                  _ || null == eR.socialLayerGameItemDisclaimer
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: Y.lm,
                                            children: (0, r.jsx)(u.wx6, {
                                                type: "warning",
                                                children: eR.socialLayerGameItemDisclaimer,
                                            }),
                                        }),
                              ],
                          }),
                [_, t, n, D, eI, eT, k, q, ey, w, e_.productLine, f.name, Q, J, eR.socialLayerGameItemDisclaimer],
            );
        return {
            sku: e_,
            application: f,
            giftRecipient: Z,
            isGift: q,
            skuPricePreview: eE,
            isEmbeddedIAP: w,
            shouldShowPurchaseReviewImage: eC,
            paymentRestrictionBannerType: ev,
            hasCheckoutContextLoaded: K,
            devShelfFetchState: V,
            isStepLoading: !K && null == F,
            purchasePreviewError: F,
            warningAndErrorMessages: eR,
            paymentSourceDropdownProps: eO,
            purchaseTermsAndLegalContent: eb,
            tdsWalletSource: en,
            giftCardsEnabled: ee,
            isGiftCardCreditsChecked: er,
            handleGiftCardCreditsToggle: ec,
            handleRegularPaymentSourceChange: ed,
            selectedRegularSourceId: es,
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
        } = K({ hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: s, handlePaymentSourceAdd: a }),
        x = i.useCallback(
            (e) => {
                null != C && (0, c.YP)(C.id);
                let t = (0, w.$g)(e.amount, e.currency);
                (0, u.showToast)(
                    (0, u.createToast)(
                        H.intl.formatToPlainString(j.default["66Wi6B"], { price: t }),
                        u.ToastType.SUCCESS,
                        { position: u.ToastPosition.TOP },
                    ),
                );
            },
            [C],
        ),
        P = $(h, { isGift: p });
    return (0, r.jsxs)("div", {
        className: Y.Du,
        children: [
            (0, r.jsx)(y.je, { paymentRestrictionBannerType: g }),
            null != T.testModeWarning
                ? (0, r.jsx)(
                      _.A,
                      {
                          icon: (0, u.kHD)(D.A),
                          iconSize: _.A.Sizes.SMALL,
                          color: _.A.Colors.WARNING,
                          className: Y.QK,
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
                          className: Y.QK,
                          children: T.devShelfError,
                      },
                      "DEV_SHELF_ERROR",
                  )
                : null,
            (0, r.jsx)(W, { application: l, sku: o, isEmbeddedIAP: m }),
            E && (0, r.jsx)(F.A, { sku: o }),
            null != d ? (0, r.jsx)(v.Z, { giftRecipient: d }) : null,
            (0, r.jsx)(k.I, {}),
            A
                ? (0, r.jsx)(u.y$y, { type: u.y$y.Type.WANDERING_CUBES, className: Y.fx })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.D0$, {
                              label: p ? H.intl.string(H.t.PEjaCx) : H.intl.string(H.t.sail9P),
                              children:
                                  null != h
                                      ? (0, r.jsx)(V.hl, { sku: o, skuPricePreview: h, application: l })
                                      : (0, r.jsx)(V.Uw, { sku: o, value: "" }),
                          }),
                          (0, r.jsx)("div", {
                              className: Y.Jv,
                              children:
                                  null != C
                                      ? (0, r.jsxs)(u.D0$, {
                                            label: H.intl.string(H.t["mmDvV+"]),
                                            children: [
                                                (0, r.jsx)(I.od, {
                                                    giftCardWallet: C,
                                                    checked: O,
                                                    onChange: b,
                                                    itemAmount: h?.amount,
                                                    className: Y.kV,
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
                          R ? (0, r.jsx)(I.Z4, { onComplete: x, className: Y.SO }) : null,
                          null != P && (0, r.jsx)(q, { ...P }),
                      ],
                  }),
            N,
        ],
    });
}
let q = (e) => {
    let { text: t, Icon: n } = e;
    return (0, r.jsx)(u.D0$, {
        children: (0, r.jsx)("div", { className: Y.sA, children: (0, r.jsx)(h.J, { Icon: n, text: t }) }),
    });
};
