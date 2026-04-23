"use strict";
n.d(t, { t: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(785007),
    l = n(289873),
    u = n(937008),
    c = n(650588),
    d = n(45938),
    _ = n(242874),
    f = n(75825),
    p = n(238017),
    h = n(985018),
    E = n(92814);
let m = (e) => {
    let { isShopGift: t } = e,
        {
            giftRecipient: n,
            selectedGiftStyle: s,
            emojiConfetti: m,
            soundEffect: g,
            setEmojiConfetti: A,
            setSoundEffect: I,
        } = (0, u.Pv)(),
        [T] = i.useState(!1),
        S = i.useRef(null),
        { ref: y, ...N } = (0, o._u)({ orientation: "horizontal" }),
        v = (0, d.lo)(n, t),
        C = v === d.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        O = v !== d.tB.DEFAULT;
    return (0, r.jsxs)("div", {
        children: [
            O &&
                (0, r.jsxs)("div", {
                    className: E.Os,
                    children: [
                        null != s
                            ? (0, r.jsx)(f.A, {
                                  giftStyle: s,
                                  defaultAnimationState: _.oA.ACTION,
                                  idleAnimationState: _.oA.LOOP,
                                  shouldAnimate: !0,
                                  className: E.lY,
                              })
                            : (0, r.jsx)(l.y, { className: E.u1 }),
                        C &&
                            (0, r.jsxs)("div", {
                                className: a()(E.b7, E.Ow),
                                children: [
                                    (0, r.jsx)(c.A, {
                                        sound: g,
                                        onSelect: (e) => {
                                            null != I && I(null == e ? void 0 : e);
                                        },
                                    }),
                                    (0, r.jsx)(p.A, { setEmojiConfetti: A, emojiConfetti: null == m ? void 0 : m }),
                                ],
                            }),
                    ],
                }),
            (0, r.jsx)("div", {
                tabIndex: null != s || T ? void 0 : 0,
                onFocus: (e) => {
                    e.target === e.currentTarget && S.current?.focus();
                },
                className: E.Qh,
                "aria-label": h.intl.string(h.t.v54NrN),
                ref: y,
                ...N,
            }),
            (0, r.jsx)("div", { className: E.__invalid_selectPlanDivider }),
        ],
    });
};
