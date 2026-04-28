n.d(t, { t: () => E });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(785007),
    o = n(289873),
    u = n(937008),
    c = n(650588),
    d = n(45938),
    p = n(242874),
    m = n(75825),
    h = n(238017),
    C = n(985018),
    A = n(92814);
let E = (e) => {
    let { isShopGift: t } = e,
        {
            giftRecipient: n,
            selectedGiftStyle: i,
            emojiConfetti: E,
            soundEffect: y,
            setEmojiConfetti: P,
            setSoundEffect: S,
        } = (0, u.Pv)(),
        [_] = a.useState(!1),
        T = a.useRef(null),
        { ref: f, ...N } = (0, s._u)({ orientation: "horizontal" }),
        x = (0, d.lo)(n, t),
        I = x === d.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        g = x !== d.tB.DEFAULT;
    return (0, l.jsxs)("div", {
        children: [
            g &&
                (0, l.jsxs)("div", {
                    className: A.Os,
                    children: [
                        null != i
                            ? (0, l.jsx)(m.A, {
                                  giftStyle: i,
                                  defaultAnimationState: p.oA.ACTION,
                                  idleAnimationState: p.oA.LOOP,
                                  shouldAnimate: !0,
                                  className: A.lY,
                              })
                            : (0, l.jsx)(o.y, { className: A.u1 }),
                        I &&
                            (0, l.jsxs)("div", {
                                className: r()(A.b7, A.Ow),
                                children: [
                                    (0, l.jsx)(c.A, {
                                        sound: y,
                                        onSelect: (e) => {
                                            null != S && S(null == e ? void 0 : e);
                                        },
                                    }),
                                    (0, l.jsx)(h.A, { setEmojiConfetti: P, emojiConfetti: null == E ? void 0 : E }),
                                ],
                            }),
                    ],
                }),
            (0, l.jsx)("div", {
                tabIndex: null != i || _ ? void 0 : 0,
                onFocus: (e) => {
                    e.target === e.currentTarget && T.current?.focus();
                },
                className: A.Qh,
                "aria-label": C.intl.string(C.t.v54NrN),
                ref: f,
                ...N,
            }),
            (0, l.jsx)("div", { className: A.__invalid_selectPlanDivider }),
        ],
    });
};
