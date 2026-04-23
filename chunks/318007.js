n.d(t, { t: () => C });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(785007),
    o = n(289873),
    u = n(937008),
    c = n(650588),
    d = n(45938),
    p = n(242874),
    m = n(75825),
    h = n(238017),
    A = n(985018),
    _ = n(92814);
let C = (e) => {
    let { isShopGift: t } = e,
        {
            giftRecipient: n,
            selectedGiftStyle: a,
            emojiConfetti: C,
            soundEffect: E,
            setEmojiConfetti: y,
            setSoundEffect: f,
        } = (0, u.Pv)(),
        [P] = i.useState(!1),
        S = i.useRef(null),
        { ref: x, ...T } = (0, s._u)({ orientation: "horizontal" }),
        N = (0, d.lo)(n, t),
        g = N === d.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        I = N !== d.tB.DEFAULT;
    return (0, l.jsxs)("div", {
        children: [
            I &&
                (0, l.jsxs)("div", {
                    className: _.Os,
                    children: [
                        null != a
                            ? (0, l.jsx)(m.A, {
                                  giftStyle: a,
                                  defaultAnimationState: p.oA.ACTION,
                                  idleAnimationState: p.oA.LOOP,
                                  shouldAnimate: !0,
                                  className: _.lY,
                              })
                            : (0, l.jsx)(o.y, { className: _.u1 }),
                        g &&
                            (0, l.jsxs)("div", {
                                className: r()(_.b7, _.Ow),
                                children: [
                                    (0, l.jsx)(c.A, {
                                        sound: E,
                                        onSelect: (e) => {
                                            null != f && f(null == e ? void 0 : e);
                                        },
                                    }),
                                    (0, l.jsx)(h.A, { setEmojiConfetti: y, emojiConfetti: null == C ? void 0 : C }),
                                ],
                            }),
                    ],
                }),
            (0, l.jsx)("div", {
                tabIndex: null != a || P ? void 0 : 0,
                onFocus: (e) => {
                    e.target === e.currentTarget && S.current?.focus();
                },
                className: _.Qh,
                "aria-label": A.intl.string(A.t.v54NrN),
                ref: x,
                ...T,
            }),
            (0, l.jsx)("div", { className: _.__invalid_selectPlanDivider }),
        ],
    });
};
