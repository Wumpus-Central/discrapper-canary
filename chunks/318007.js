"use strict";
n.d(t, { t: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(421380),
    l = n(397927),
    u = n(937008),
    c = n(650588),
    d = n(45938),
    _ = n(242874),
    f = n(75825),
    p = n(238017),
    h = n(985018),
    m = n(120459);
let E = (e) => {
    let { isShopGift: t } = e,
        {
            giftRecipient: n,
            selectedGiftStyle: s,
            emojiConfetti: E,
            soundEffect: g,
            setEmojiConfetti: A,
            setSoundEffect: I,
        } = (0, u.Pv)(),
        [T] = i.useState(!1),
        S = i.useRef(null),
        { ref: y, ...v } = (0, o._u)({ orientation: "horizontal" }),
        N = (0, d.lo)(n, t),
        C = N === d.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        R = N !== d.tB.DEFAULT,
        O = (e) => {
            null != I && I(null == e ? void 0 : e);
        };
    return (0, r.jsxs)("div", {
        children: [
            R &&
                (0, r.jsxs)("div", {
                    className: m.Os,
                    children: [
                        null != s
                            ? (0, r.jsx)(f.A, {
                                  giftStyle: s,
                                  defaultAnimationState: _.oA.ACTION,
                                  idleAnimationState: _.oA.LOOP,
                                  shouldAnimate: !0,
                                  className: m.lY,
                              })
                            : (0, r.jsx)(l.y$y, { className: m.u1 }),
                        C &&
                            (0, r.jsxs)("div", {
                                className: a()(m.b7, m.Ow),
                                children: [
                                    (0, r.jsx)(c.A, { sound: g, onSelect: O }),
                                    (0, r.jsx)(p.A, { setEmojiConfetti: A, emojiConfetti: null == E ? void 0 : E }),
                                ],
                            }),
                    ],
                }),
            (0, r.jsx)("div", {
                tabIndex: null != s || T ? void 0 : 0,
                onFocus: (e) => {
                    e.target === e.currentTarget && S.current?.focus();
                },
                className: m.Qh,
                "aria-label": h.intl.string(h.t.v54NrN),
                ref: y,
                ...v,
            }),
            (0, r.jsx)("div", { className: m.__invalid_selectPlanDivider }),
        ],
    });
};
