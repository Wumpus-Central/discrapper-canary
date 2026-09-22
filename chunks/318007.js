n.d(t, { t: () => C });
var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    a = n(289873),
    s = n(951305),
    o = n(650588),
    u = n(45938),
    c = n(242874),
    d = n(165191),
    m = n(238017),
    p = n(254125);
function C(e) {
    let { isShopGift: t } = e,
        {
            giftRecipient: n,
            selectedGiftStyle: i,
            emojiConfetti: C,
            soundEffect: h,
            setEmojiConfetti: f,
            setSoundEffect: E,
        } = (0, s.Pv)(),
        S = (0, u.lo)(n, t),
        y = S === u.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        I = S !== u.tB.DEFAULT;
    return (0, l.jsxs)("div", {
        children: [
            I &&
                (0, l.jsxs)("div", {
                    className: p.Os,
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
                                          className: p.lY,
                                      })
                                    : (0, l.jsx)(a.y, { className: p.u1 }),
                        }),
                        y &&
                            (0, l.jsxs)("div", {
                                className: r()(p.b7, p.Ow),
                                children: [
                                    (0, l.jsx)(o.A, {
                                        sound: h,
                                        onSelect: function (e) {
                                            null != E && E(null == e ? void 0 : e);
                                        },
                                    }),
                                    (0, l.jsx)(m.A, { setEmojiConfetti: f, emojiConfetti: null == C ? void 0 : C }),
                                ],
                            }),
                    ],
                }),
            (0, l.jsx)("div", { className: p.__invalid_selectPlanDivider }),
        ],
    });
}
