"use strict";
n.d(t, { t: () => f });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(289873),
    o = n(937008),
    l = n(650588),
    u = n(45938),
    c = n(242874),
    d = n(165191),
    _ = n(238017),
    h = n(92814);
function f(e) {
    let { isShopGift: t } = e,
        {
            giftRecipient: n,
            selectedGiftStyle: r,
            emojiConfetti: f,
            soundEffect: p,
            setEmojiConfetti: E,
            setSoundEffect: m,
        } = (0, o.Pv)(),
        g = (0, u.lo)(n, t),
        A = g === u.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        I = g !== u.tB.DEFAULT;
    return (0, i.jsxs)("div", {
        children: [
            I &&
                (0, i.jsxs)("div", {
                    className: h.Os,
                    children: [
                        (0, i.jsx)("div", {
                            "aria-hidden": !0,
                            style: { display: "contents" },
                            children:
                                null != r
                                    ? (0, i.jsx)(d.A, {
                                          giftStyle: r,
                                          defaultAnimationState: c.oA.ACTION,
                                          idleAnimationState: c.oA.LOOP,
                                          shouldAnimate: !0,
                                          className: h.lY,
                                      })
                                    : (0, i.jsx)(a.y, { className: h.u1 }),
                        }),
                        A &&
                            (0, i.jsxs)("div", {
                                className: s()(h.b7, h.Ow),
                                children: [
                                    (0, i.jsx)(l.A, {
                                        sound: p,
                                        onSelect: (e) => {
                                            null != m && m(null == e ? void 0 : e);
                                        },
                                    }),
                                    (0, i.jsx)(_.A, { setEmojiConfetti: E, emojiConfetti: null == f ? void 0 : f }),
                                ],
                            }),
                    ],
                }),
            (0, i.jsx)("div", { className: h.__invalid_selectPlanDivider }),
        ],
    });
}
