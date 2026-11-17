r.d(t, { dX: () => A, Mq: () => C, Pv: () => _ });
var n = r(477900),
    u = r(582128),
    l = r(70283),
    s = r(682618),
    i = r(316363),
    a = r(242874),
    c = r(810498),
    d = r(855986),
    o = r(192308),
    f = r(982240),
    g = r(566980),
    S = r(315693),
    h = r(287809),
    G = r(129230),
    E = r(786300),
    P = r(45938),
    R = r(652215),
    p = r(682901),
    M = r(792996);
let I = p.o2.STANDARD_BOX,
    k,
    [v, _, w] = (0, E.A)();
function A(e) {
    let {
            isGift: t = !1,
            giftRecipient: E,
            giftMessage: p,
            giftStyle: _,
            giftingOrigin: w,
            children: A,
            additionalUserIds: y,
        } = e,
        C = (0, i.t4)((e) => e.selectedSkuId),
        B = (0, i.t4)((e) => e.getIsRecurringGiftCheckout()),
        [O, N] = u.useState(E),
        [T, b] = u.useState(),
        [m, D] = u.useState(!1),
        L = (0, P.Ik)(O),
        U = k;
    L && (U = null != _ ? _ : I);
    let [q, F] = u.useState(U),
        [X, Z] = u.useState([]),
        j = (0, c.JW)(),
        x = null != j && j.length > 0,
        [$, H] = u.useState(
            t && (0, P.lo)(O) === P.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == p ? M.intl.string(M.t.ZkOo1U) : p,
        ),
        [J, V] = u.useState(void 0),
        [W, z] = u.useState(void 0),
        { openGiftingBadgePostPurchaseModal: K, canShowGiftingBadgePostPurchase: Q } = (function () {
            let e = (0, d.bG)([f.Ay], () => f.Ay.getBadgeById(l.$.GIFTING)?.tiers),
                { purchaseState: t, quantity: s } = (0, i.t4)((e) => ({
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
                                return (r) => (0, n.jsx)(t, { ...r, currentProgress: e, quantity: s });
                            });
                        }
                    }, [e, s]),
                    canShowGiftingBadgePostPurchase: null != a.current && null != e && null != (0, S.aZ)(e, a.current),
                }
            );
        })();
    u.useEffect(() => {
        t && (0, s.o0)(l.$.GIFTING);
    }, [t]);
    let Y = (0, P.Vt)(C, t && !B),
        [ee, et] = u.useState(!1),
        [er, en] = u.useState(!1),
        [eu, el] = u.useState(),
        es = u.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    en(!0),
                    (0, a.UN)(O, Y)
                        .then(() => {
                            (en(!1), t?.(), et(!0));
                        })
                        .catch((e) => {
                            (en(!1), el(e), et(!0));
                        })
                );
            },
            [O, Y, en, et, el],
        ),
        ei = u.useRef(new Set());
    u.useEffect(() => {
        if (!x) return;
        let e = X.filter((e) => !ei.current.has(e));
        if (0 === e.length) return;
        let t = h.default.getCurrentUser();
        for (let r of e)
            (G.default.track(R.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: t?.id, reward_sku_id: r }),
                ei.current.add(r));
    }, [X, x]);
    let ea = u.useMemo(
        () => ({
            isGift: t,
            giftCode: Y,
            giftMessage: p,
            giftRecipient: O,
            setGiftRecipient: N,
            giftRecipientError: T,
            setGiftRecipientError: b,
            validatingGiftRecipient: m,
            setValidatingGiftRecipient: D,
            soundEffect: J,
            setSoundEffect: V,
            emojiConfetti: W,
            setEmojiConfetti: z,
            customGiftMessage: $,
            setCustomGiftMessage: H,
            selectedGiftStyle: q,
            setSelectedGiftStyle: F,
            sendGiftMessage: es,
            hasSentMessage: B || ee,
            isSendingMessage: er,
            giftMessageError: eu,
            giftingOrigin: w,
            claimableRewards: j,
            selectedGiftingPromotionRewards: X,
            setSelectedGiftingPromotionRewards: Z,
            additionalUserIds: y,
            openGiftingBadgePostPurchaseModal: K,
            canShowGiftingBadgePostPurchase: Q,
        }),
        [t, Y, p, O, T, m, J, W, $, q, es, B, ee, er, eu, w, j, X, y, K, Q],
    );
    return (0, n.jsx)(v.Provider, { value: ea, children: A });
}
let y = {
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
function C(e) {
    let { children: t } = e;
    return (0, n.jsx)(v.Provider, { value: y, children: t });
}
