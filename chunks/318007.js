n.d(t, { t: () => h });
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    a = n(289873),
    s = n(937008),
    o = n(650588),
    u = n(45938),
    c = n(242874),
    d = n(75825),
    p = n(238017),
    m = n(92814);
function h(e) {
    let { isShopGift: t } = e,
        {
            giftRecipient: n,
            selectedGiftStyle: i,
            emojiConfetti: h,
            soundEffect: C,
            setEmojiConfetti: E,
            setSoundEffect: A,
        } = (0, s.Pv)(),
        f = (0, u.lo)(n, t),
        S = f === u.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        y = f !== u.tB.DEFAULT;
    return (0, l.jsxs)("div", {
        children: [
            y &&
                (0, l.jsxs)("div", {
                    className: m.Os,
                    children: [
                        (0, l.jsx)("div", {
                            "aria-hidden": !0,
                            style: { display: "contents" },
                            children:
                                null != i
                                    ? (0, l.jsx)(d.A, {
                                          giftStyle: i,
                                          defaultAnimationState: c.oA.ACTION,
                                          idleAnimationState: c.oA.LOOP,
                                          shouldAnimate: !0,
                                          className: m.lY,
                                      })
                                    : (0, l.jsx)(a.y, { className: m.u1 }),
                        }),
                        S &&
                            (0, l.jsxs)("div", {
                                className: r()(m.b7, m.Ow),
                                children: [
                                    (0, l.jsx)(o.A, {
                                        sound: C,
                                        onSelect: (e) => {
                                            null != A && A(null == e ? void 0 : e);
                                        },
                                    }),
                                    (0, l.jsx)(p.A, { setEmojiConfetti: E, emojiConfetti: null == h ? void 0 : h }),
                                ],
                            }),
                    ],
                }),
            (0, l.jsx)("div", { className: m.__invalid_selectPlanDivider }),
        ],
    });
}
