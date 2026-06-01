n.d(t, { dX: () => A, Pv: () => k, Mq: () => y });
var l = n(627968),
    r = n(64700),
    u = n(70283),
    i = n(682618),
    s = n(722847),
    a = n(242874);
let d = (0, n(945810).mj)({
    name: "2026-04-gifting-badge",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var c = n(380619),
    o = n(17928),
    f = n(192308),
    g = n(982240),
    S = n(566980),
    G = n(315693),
    E = n(287809),
    h = n(174459),
    p = n(786300),
    v = n(45938),
    R = n(652215),
    C = n(788868),
    I = n(375708);
let M = C.o2.STANDARD_BOX,
    P,
    [b, k, _] = (0, p.A)();
function A(e) {
    let {
            isGift: t = !1,
            giftRecipient: p,
            giftMessage: C,
            giftStyle: k,
            giftingOrigin: _,
            children: A,
            additionalUserIds: O,
        } = e,
        y = (0, s.t4)((e) => e.selectedSkuId),
        [N, T] = r.useState(p),
        [w, B] = r.useState(),
        [L, m] = r.useState(!1),
        D = (0, v.Ik)(N),
        U = P;
    D && (U = null != k ? k : M);
    let [j, x] = r.useState(U),
        F = (0, c.JW)(),
        X = null != F && F.length > 0,
        [Z, $] = r.useState(),
        [q, z] = r.useState(
            t && (0, v.lo)(N) === v.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == C ? I.intl.string(I.t.ZkOo1U) : C,
        ),
        [H, J] = r.useState(void 0),
        [V, W] = r.useState(void 0),
        { enabled: K } = d.useConfig({ location: "GiftContext" }),
        Q = (function () {
            let { enabled: e } = d.useConfig({ location: "useOpenGiftingBadgePostPurchaseModal" }),
                t = (0, o.bG)([g.Ay], () => g.Ay.getBadgeById(u.$.GIFTING)?.tiers),
                i = (0, s.t4)((e) => e.purchaseState),
                a = r.useRef(null);
            return (
                r.useEffect(() => {
                    e &&
                        i === S.h.PURCHASING &&
                        (a.current = g.Ay.getSingleRequirementProgress(u.$.GIFTING)?.current ?? null);
                }, [e, i]),
                r.useCallback(() => {
                    if (e && null != a.current && null != (null != t ? (0, G.aZ)(t, a.current) : null)) {
                        let e = a.current;
                        (0, f.openModalLazy)(async () => {
                            let { default: t } = await Promise.all([n.e("13396"), n.e("9964"), n.e("83703")]).then(
                                n.bind(n, 855210),
                            );
                            return (n) => (0, l.jsx)(t, { ...n, currentProgress: e });
                        });
                    }
                }, [e, t])
            );
        })();
    r.useEffect(() => {
        t && K && (0, i.o)(u.$.GIFTING);
    }, [t, K]);
    let Y = (0, v.Vt)(y, t),
        [ee, et] = r.useState(!1),
        [en, el] = r.useState(!1),
        [er, eu] = r.useState(),
        ei = r.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    el(!0),
                    (0, a.UN)(N, Y)
                        .then(() => {
                            el(!1), t?.(), et(!0);
                        })
                        .catch((e) => {
                            el(!1), eu(e), et(!0);
                        })
                );
            },
            [N, Y, el, et, eu],
        );
    return (
        r.useEffect(() => {
            if (X) {
                let e = E.default.getCurrentUser();
                h.default.track(R.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: e?.id, reward_sku_id: Z });
            }
        }, [Z, X]),
        (0, l.jsx)(b.Provider, {
            value: {
                isGift: t,
                giftCode: Y,
                giftMessage: C,
                giftRecipient: N,
                setGiftRecipient: T,
                giftRecipientError: w,
                setGiftRecipientError: B,
                validatingGiftRecipient: L,
                setValidatingGiftRecipient: m,
                soundEffect: H,
                setSoundEffect: J,
                emojiConfetti: V,
                setEmojiConfetti: W,
                customGiftMessage: q,
                setCustomGiftMessage: z,
                selectedGiftStyle: j,
                setSelectedGiftStyle: x,
                sendGiftMessage: ei,
                hasSentMessage: ee,
                isSendingMessage: en,
                giftMessageError: er,
                giftingOrigin: _,
                claimableRewards: F,
                selectedGiftingPromotionReward: Z,
                setSelectedGiftingPromotionReward: $,
                additionalUserIds: O,
                openGiftingBadgePostPurchaseModal: Q,
            },
            children: A,
        })
    );
}
let O = {
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
        setSelectedGiftingPromotionReward: R.tEg,
        openGiftingBadgePostPurchaseModal: R.tEg,
    },
    y = (e) => {
        let { children: t } = e;
        return (0, l.jsx)(b.Provider, { value: O, children: t });
    };
