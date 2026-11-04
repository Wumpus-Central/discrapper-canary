n.d(t, { dX: () => A, Mq: () => B, Pv: () => _ });
var r = n(477900),
    u = n(582128),
    l = n(70283),
    i = n(682618),
    s = n(516106),
    a = n(242874),
    c = n(998370),
    d = n(810498),
    o = n(855986),
    f = n(192308),
    g = n(982240),
    S = n(566980),
    G = n(315693),
    h = n(287809),
    P = n(129230),
    E = n(786300),
    R = n(45938),
    p = n(652215),
    M = n(682901),
    I = n(792996);
let C = M.o2.STANDARD_BOX,
    k,
    [v, _, w] = (0, E.A)();
function A(e) {
    let {
            isGift: t = !1,
            giftRecipient: E,
            giftMessage: M,
            giftStyle: _,
            giftingOrigin: w,
            children: A,
            additionalUserIds: y,
        } = e,
        B = (0, s.t4)((e) => e.selectedSkuId),
        O = (0, s.t4)((e) => e.getIsRecurringGiftCheckout()),
        [b, N] = u.useState(E),
        [T, m] = u.useState(),
        [D, L] = u.useState(!1),
        U = (0, R.Ik)(b),
        q = k;
    U && (q = null != _ ? _ : C);
    let [x, F] = u.useState(q),
        [J, X] = u.useState([]),
        Z = (0, d.JW)(),
        j = null != Z && Z.length > 0,
        [$, H] = u.useState(
            t && (0, R.lo)(b) === R.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == M ? I.intl.string(I.t.ZkOo1U) : M,
        ),
        [V, W] = u.useState(void 0),
        [z, K] = u.useState(void 0),
        { enabled: Q } = c.J.useConfig({ location: "GiftContext" }),
        { openGiftingBadgePostPurchaseModal: Y, canShowGiftingBadgePostPurchase: ee } = (function () {
            let { enabled: e } = c.J.useConfig({ location: "useOpenGiftingBadgePostPurchaseModal" }),
                t = (0, o.bG)([g.Ay], () => g.Ay.getBadgeById(l.$.GIFTING)?.tiers),
                { purchaseState: i, quantity: a } = (0, s.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    quantity: e.quantity,
                })),
                d = u.useRef(null);
            return (
                u.useEffect(() => {
                    e &&
                        i === S.h.PURCHASING &&
                        (d.current = g.Ay.getSingleRequirementProgress(l.$.GIFTING)?.current ?? null);
                }, [e, i]),
                {
                    openGiftingBadgePostPurchaseModal: u.useCallback(() => {
                        if (e && null != d.current && null != (null != t ? (0, G.aZ)(t, d.current) : null)) {
                            let e = d.current;
                            (0, f.mM)(async () => {
                                let { default: t } = await Promise.all([
                                    n.e(417867),
                                    n.e(976389),
                                    n.e(707319),
                                    n.e(119994),
                                ]).then(n.bind(n, 649793));
                                return (n) => (0, r.jsx)(t, { ...n, currentProgress: e, quantity: a });
                            });
                        }
                    }, [e, t, a]),
                    canShowGiftingBadgePostPurchase:
                        e && null != d.current && null != t && null != (0, G.aZ)(t, d.current),
                }
            );
        })();
    u.useEffect(() => {
        t && Q && (0, i.o0)(l.$.GIFTING);
    }, [t, Q]);
    let et = (0, R.Vt)(B, t && !O),
        [en, er] = u.useState(!1),
        [eu, el] = u.useState(!1),
        [ei, es] = u.useState(),
        ea = u.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    el(!0),
                    (0, a.UN)(b, et)
                        .then(() => {
                            (el(!1), t?.(), er(!0));
                        })
                        .catch((e) => {
                            (el(!1), es(e), er(!0));
                        })
                );
            },
            [b, et, el, er, es],
        ),
        ec = u.useRef(new Set());
    u.useEffect(() => {
        if (!j) return;
        let e = J.filter((e) => !ec.current.has(e));
        if (0 === e.length) return;
        let t = h.default.getCurrentUser();
        for (let n of e)
            (P.default.track(p.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: t?.id, reward_sku_id: n }),
                ec.current.add(n));
    }, [J, j]);
    let ed = u.useMemo(
        () => ({
            isGift: t,
            giftCode: et,
            giftMessage: M,
            giftRecipient: b,
            setGiftRecipient: N,
            giftRecipientError: T,
            setGiftRecipientError: m,
            validatingGiftRecipient: D,
            setValidatingGiftRecipient: L,
            soundEffect: V,
            setSoundEffect: W,
            emojiConfetti: z,
            setEmojiConfetti: K,
            customGiftMessage: $,
            setCustomGiftMessage: H,
            selectedGiftStyle: x,
            setSelectedGiftStyle: F,
            sendGiftMessage: ea,
            hasSentMessage: O || en,
            isSendingMessage: eu,
            giftMessageError: ei,
            giftingOrigin: w,
            claimableRewards: Z,
            selectedGiftingPromotionRewards: J,
            setSelectedGiftingPromotionRewards: X,
            additionalUserIds: y,
            openGiftingBadgePostPurchaseModal: Y,
            canShowGiftingBadgePostPurchase: ee,
        }),
        [t, et, M, b, T, D, V, z, $, x, ea, O, en, eu, ei, w, Z, J, y, Y, ee],
    );
    return (0, r.jsx)(v.Provider, { value: ed, children: A });
}
let y = {
    isGift: !1,
    setGiftRecipient: p.tEg,
    setGiftRecipientError: p.tEg,
    setValidatingGiftRecipient: p.tEg,
    selectedGiftStyle: void 0,
    setSelectedGiftStyle: p.tEg,
    giftCode: null,
    sendGiftMessage: p.tEg,
    hasSentMessage: !1,
    isSendingMessage: !1,
    giftMessageError: void 0,
    claimableRewards: void 0,
    selectedGiftingPromotionRewards: [],
    setSelectedGiftingPromotionRewards: p.tEg,
    openGiftingBadgePostPurchaseModal: p.tEg,
    canShowGiftingBadgePostPurchase: !1,
};
function B(e) {
    let { children: t } = e;
    return (0, r.jsx)(v.Provider, { value: y, children: t });
}
