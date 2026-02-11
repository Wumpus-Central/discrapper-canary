"use strict";
n.d(t, { t: () => T });
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
    h = n(367371),
    p = n(75825),
    g = n(238017),
    E = n(903618),
    A = n(985018),
    I = n(120459);
let T = (e) => {
    let { isShopGift: t } = e,
        {
            giftRecipient: n,
            selectedGiftStyle: a,
            setSelectedGiftStyle: T,
            emojiConfetti: y,
            soundEffect: S,
            setEmojiConfetti: v,
            setSoundEffect: C,
        } = (0, u.Pv)(),
        [b, N] = i.useState(!1),
        R = i.useRef(null),
        { ref: O, ...D } = (0, o._u)({ orientation: "horizontal" }),
        L = (0, d.lo)(n, t),
        w = L === d.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        x = L !== d.tB.DEFAULT,
        P = (0, h._)(),
        M = (0, f.A)({ location: "GiftAnimationOptions" }),
        k = (e) => {
            null != C && C(null == e ? void 0 : e);
        };
    return (0, r.jsxs)("div", {
        children: [
            x &&
                (0, r.jsxs)("div", {
                    className: I.Os,
                    children: [
                        null != a
                            ? (0, r.jsx)(p.A, {
                                  giftStyle: a,
                                  defaultAnimationState: _.oA.ACTION,
                                  idleAnimationState: _.oA.LOOP,
                                  shouldAnimate: !0,
                                  className: I.lY,
                              })
                            : (0, r.jsx)(l.y$y, { className: I.u1 }),
                        w &&
                            (0, r.jsxs)("div", {
                                className: s()(I.b7, M && I.Ow),
                                children: [
                                    (0, r.jsx)(c.A, { sound: S, onSelect: k }),
                                    (0, r.jsx)(g.A, { setEmojiConfetti: v, emojiConfetti: null == y ? void 0 : y }),
                                ],
                            }),
                    ],
                }),
            (0, r.jsx)("div", {
                tabIndex: null != a || b ? void 0 : 0,
                onFocus: (e) => {
                    e.target === e.currentTarget && R.current?.focus();
                },
                className: I.Qh,
                "aria-label": A.intl.string(A.t.v54NrN),
                ref: O,
                ...D,
                children:
                    null != P &&
                    !M &&
                    P.map((e, t) =>
                        (0, r.jsx)(
                            E.A,
                            {
                                isSelected: a === e,
                                giftStyle: e,
                                setSelectedGiftStyle: T,
                                ref: 0 === t ? R : null,
                                onFocus: () => N(!0),
                                onBlur: () => N(!1),
                            },
                            e,
                        ),
                    ),
            }),
            (0, r.jsx)("div", { className: I.__invalid_selectPlanDivider }),
        ],
    });
};
