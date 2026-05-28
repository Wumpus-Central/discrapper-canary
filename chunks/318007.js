n.d(t, { t: () => h });
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(289873),
    s = n(937008),
    o = n(650588),
    u = n(45938),
    c = n(242874),
    d = n(165191),
    p = n(238017),
    m = n(92814);
let h = (e) => {
    let { isShopGift: t } = e,
        {
            giftRecipient: n,
            selectedGiftStyle: r,
            emojiConfetti: h,
            soundEffect: C,
            setEmojiConfetti: A,
            setSoundEffect: y,
        } = (0, s.Pv)(),
        E = (0, u.lo)(n, t),
        P = E === u.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        S = E !== u.tB.DEFAULT;
    return (0, l.jsxs)("div", {
        children: [
            S &&
                (0, l.jsxs)("div", {
                    className: m.Os,
                    children: [
                        (0, l.jsx)("div", {
                            "aria-hidden": !0,
                            style: { display: "contents" },
                            children:
                                null != r
                                    ? (0, l.jsx)(d.A, {
                                          giftStyle: r,
                                          defaultAnimationState: c.oA.ACTION,
                                          idleAnimationState: c.oA.LOOP,
                                          shouldAnimate: !0,
                                          className: m.lY,
                                      })
                                    : (0, l.jsx)(a.y, { className: m.u1 }),
                        }),
                        P &&
                            (0, l.jsxs)("div", {
                                className: i()(m.b7, m.Ow),
                                children: [
                                    (0, l.jsx)(o.A, {
                                        sound: C,
                                        onSelect: (e) => {
                                            null != y && y(null == e ? void 0 : e);
                                        },
                                    }),
                                    (0, l.jsx)(p.A, { setEmojiConfetti: A, emojiConfetti: null == h ? void 0 : h }),
                                ],
                            }),
                    ],
                }),
            (0, l.jsx)("div", { className: m.__invalid_selectPlanDivider }),
        ],
    });
};
