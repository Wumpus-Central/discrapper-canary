n.d(t, { t: () => _ });
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
    A = n(985018),
    C = n(92814);
let _ = (e) => {
    let { isShopGift: t } = e,
        {
            giftRecipient: n,
            selectedGiftStyle: i,
            emojiConfetti: _,
            soundEffect: E,
            setEmojiConfetti: y,
            setSoundEffect: f,
        } = (0, u.Pv)(),
        [P] = a.useState(!1),
        S = a.useRef(null),
        { ref: T, ...x } = (0, s._u)({ orientation: "horizontal" }),
        N = (0, d.lo)(n, t),
        g = N === d.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        I = N !== d.tB.DEFAULT;
    return (0, l.jsxs)("div", {
        children: [
            I &&
                (0, l.jsxs)("div", {
                    className: C.Os,
                    children: [
                        null != i
                            ? (0, l.jsx)(m.A, {
                                  giftStyle: i,
                                  defaultAnimationState: p.oA.ACTION,
                                  idleAnimationState: p.oA.LOOP,
                                  shouldAnimate: !0,
                                  className: C.lY,
                              })
                            : (0, l.jsx)(o.y, { className: C.u1 }),
                        g &&
                            (0, l.jsxs)("div", {
                                className: r()(C.b7, C.Ow),
                                children: [
                                    (0, l.jsx)(c.A, {
                                        sound: E,
                                        onSelect: (e) => {
                                            null != f && f(null == e ? void 0 : e);
                                        },
                                    }),
                                    (0, l.jsx)(h.A, { setEmojiConfetti: y, emojiConfetti: null == _ ? void 0 : _ }),
                                ],
                            }),
                    ],
                }),
            (0, l.jsx)("div", {
                tabIndex: null != i || P ? void 0 : 0,
                onFocus: (e) => {
                    e.target === e.currentTarget && S.current?.focus();
                },
                className: C.Qh,
                "aria-label": A.intl.string(A.t.v54NrN),
                ref: T,
                ...x,
            }),
            (0, l.jsx)("div", { className: C.__invalid_selectPlanDivider }),
        ],
    });
};
