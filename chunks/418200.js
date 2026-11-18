r.d(t, { dX: () => _, Mq: () => A, Pv: () => C });
var n = r(477900),
    u = r(582128),
    l = r(70283),
    i = r(682618),
    s = r(682689),
    a = r(242874),
    c = r(810498),
    d = r(855986),
    o = r(192308),
    f = r(982240),
    g = r(566980),
    S = r(315693),
    G = r(287809),
    h = r(129230),
    E = r(786300),
    P = r(45938),
    R = r(652215),
    p = r(682901),
    I = r(792996);
let M = p.o2.STANDARD_BOX,
    k,
    [w, C, v] = (0, E.A)();
function _(e) {
    let {
            isGift: t = !1,
            giftRecipient: E,
            giftMessage: p,
            giftStyle: C,
            giftingOrigin: v,
            children: _,
            additionalUserIds: m,
        } = e,
        {
            selectedSkuId: A,
            isRecurringGiftCheckout: y,
            setClaimableGiftingPromotionRewards: b,
        } = (0, s.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            isRecurringGiftCheckout: e.getIsRecurringGiftCheckout(),
            setClaimableGiftingPromotionRewards: e.setClaimableGiftingPromotionRewards,
        })),
        [B, O] = u.useState(E),
        [N, T] = u.useState(),
        [D, L] = u.useState(!1),
        U = (0, P.Ik)(B),
        q = k;
    U && (q = null != C ? C : M);
    let [F, X] = u.useState(q),
        [Z, j] = u.useState([]),
        x = (0, c.JW)(),
        $ = null != x && x.length > 0;
    u.useEffect(() => {
        null != x && b(x);
    }, [x, b]);
    let [H, J] = u.useState(
            t && (0, P.lo)(B) === P.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == p ? I.intl.string(I.t.ZkOo1U) : p,
        ),
        [V, W] = u.useState(void 0),
        [z, K] = u.useState(void 0),
        { openGiftingBadgePostPurchaseModal: Q, canShowGiftingBadgePostPurchase: Y } = (function () {
            let e = (0, d.bG)([f.Ay], () => f.Ay.getBadgeById(l.$.GIFTING)?.tiers),
                { purchaseState: t, quantity: i } = (0, s.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    quantity: e.quantity,
                })),
                a = u.useRef(null);
            return (
                u.useEffect(() => {
                    t === g.h.PURCHASING &&
                        (a.current = f.Ay.getSingleRequirementProgress(l.$.GIFTING)?.current ?? null);
                }, [t]),
                {
                    openGiftingBadgePostPurchaseModal: u.useCallback(() => {
                        if (null != a.current && null != (null != e ? (0, S.aZ)(e, a.current) : null)) {
                            let e = a.current;
                            (0, o.mM)(async () => {
                                let { default: t } = await Promise.all([
                                    r.e(417867),
                                    r.e(976389),
                                    r.e(707319),
                                    r.e(119994),
                                ]).then(r.bind(r, 649793));
                                return (r) => (0, n.jsx)(t, { ...r, currentProgress: e, quantity: i });
                            });
                        }
                    }, [e, i]),
                    canShowGiftingBadgePostPurchase: null != a.current && null != e && null != (0, S.aZ)(e, a.current),
                }
            );
        })();
    u.useEffect(() => {
        t && (0, i.o0)(l.$.GIFTING);
    }, [t]);
    let ee = (0, P.Vt)(A, t && !y),
        [et, er] = u.useState(!1),
        [en, eu] = u.useState(!1),
        [el, ei] = u.useState(),
        es = u.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    eu(!0),
                    (0, a.UN)(B, ee)
                        .then(() => {
                            (eu(!1), t?.(), er(!0));
                        })
                        .catch((e) => {
                            (eu(!1), ei(e), er(!0));
                        })
                );
            },
            [B, ee, eu, er, ei],
        ),
        ea = u.useRef(new Set());
    u.useEffect(() => {
        if (!$) return;
        let e = Z.filter((e) => !ea.current.has(e));
        if (0 === e.length) return;
        let t = G.default.getCurrentUser();
        for (let r of e)
            (h.default.track(R.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: t?.id, reward_sku_id: r }),
                ea.current.add(r));
    }, [Z, $]);
    let ec = u.useMemo(
        () => ({
            isGift: t,
            giftCode: ee,
            giftMessage: p,
            giftRecipient: B,
            setGiftRecipient: O,
            giftRecipientError: N,
            setGiftRecipientError: T,
            validatingGiftRecipient: D,
            setValidatingGiftRecipient: L,
            soundEffect: V,
            setSoundEffect: W,
            emojiConfetti: z,
            setEmojiConfetti: K,
            customGiftMessage: H,
            setCustomGiftMessage: J,
            selectedGiftStyle: F,
            setSelectedGiftStyle: X,
            sendGiftMessage: es,
            hasSentMessage: y || et,
            isSendingMessage: en,
            giftMessageError: el,
            giftingOrigin: v,
            claimableRewards: x,
            selectedGiftingPromotionRewards: Z,
            setSelectedGiftingPromotionRewards: j,
            additionalUserIds: m,
            openGiftingBadgePostPurchaseModal: Q,
            canShowGiftingBadgePostPurchase: Y,
        }),
        [t, ee, p, B, N, D, V, z, H, F, es, y, et, en, el, v, x, Z, m, Q, Y],
    );
    return (0, n.jsx)(w.Provider, { value: ec, children: _ });
}
let m = {
    isGift: !1,
    setGiftRecipient: R.tEg,
    setGiftRecipientError: R.tEg,
    setValidatingGiftRecipient: R.tEg,
    selectedGiftStyle: void 0,
    setSelectedGiftStyle: R.tEg,
    giftCode: null,
    sendGiftMessage: R.tEg,
    hasSentMessage: !1,
    isSendingMessage: !1,
    giftMessageError: void 0,
    claimableRewards: void 0,
    selectedGiftingPromotionRewards: [],
    setSelectedGiftingPromotionRewards: R.tEg,
    openGiftingBadgePostPurchaseModal: R.tEg,
    canShowGiftingBadgePostPurchase: !1,
};
function A(e) {
    let { children: t } = e;
    return (0, n.jsx)(w.Provider, { value: m, children: t });
}
