"use strict";
n.d(t, { t: () => I });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(421380),
    l = n(397927),
    u = n(937008),
    c = n(650588),
    d = n(45938),
    _ = n(242874),
    f = n(170887),
    p = n(367371),
    h = n(75825),
    m = n(238017),
    g = n(903618),
    E = n(985018),
    A = n(120459);
let I = (e) => {
    let { isShopGift: t, className: n, optionsContainerClassName: a } = e,
        {
            giftRecipient: I,
            selectedGiftStyle: T,
            setSelectedGiftStyle: y,
            emojiConfetti: S,
            soundEffect: v,
            setEmojiConfetti: C,
            setSoundEffect: b,
        } = (0, u.Pv)(),
        [N, R] = i.useState(!1),
        O = i.useRef(null),
        { ref: D, ...L } = (0, o._u)({ orientation: "horizontal" }),
        w = (0, d.lo)(I, t),
        x = w === d.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        P = w !== d.tB.DEFAULT,
        M = (0, p._)(),
        k = (0, f.A)({ location: "GiftAnimationOptions" }),
        U = (e) => {
            null != b && b(null == e ? void 0 : e);
        };
    return (0, r.jsxs)("div", {
        children: [
            P &&
                (0, r.jsxs)("div", {
                    className: s()(A.Os, n),
                    children: [
                        null != T
                            ? (0, r.jsx)(h.A, {
                                  giftStyle: T,
                                  defaultAnimationState: _.oA.ACTION,
                                  idleAnimationState: _.oA.LOOP,
                                  shouldAnimate: !0,
                                  className: A.lY,
                              })
                            : (0, r.jsx)(l.y$y, { className: A.u1 }),
                        x &&
                            (0, r.jsxs)("div", {
                                className: s()(A.b7, k && A.Ow),
                                children: [
                                    (0, r.jsx)(c.A, { sound: v, onSelect: U }),
                                    (0, r.jsx)(m.A, { setEmojiConfetti: C, emojiConfetti: null == S ? void 0 : S }),
                                ],
                            }),
                    ],
                }),
            (0, r.jsx)("div", {
                tabIndex: null != T || N ? void 0 : 0,
                onFocus: (e) => {
                    e.target === e.currentTarget && O.current?.focus();
                },
                className: s()(A.Qh, a),
                "aria-label": E.intl.string(E.t.v54NrN),
                ref: D,
                ...L,
                children:
                    null != M &&
                    !k &&
                    M.map((e, t) =>
                        (0, r.jsx)(
                            g.A,
                            {
                                isSelected: T === e,
                                giftStyle: e,
                                setSelectedGiftStyle: y,
                                ref: 0 === t ? O : null,
                                onFocus: () => R(!0),
                                onBlur: () => R(!1),
                            },
                            e,
                        ),
                    ),
            }),
            (0, r.jsx)("div", { className: A.__invalid_selectPlanDivider }),
        ],
    });
};
