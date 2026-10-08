n.d(t, { A: () => I });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(661531),
    o = n(834730),
    u = n(922016),
    c = n(305866),
    d = n(939249),
    p = n(460905),
    m = n(879064),
    h = n(652215),
    C = n(307731),
    f = n(660183),
    S = n(290484);
let E = { section: h.JJy.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER, openPopoutType: "gift_effect_emoji_picker" },
    y = C.EmojiIntention.GIFT;
function I(e) {
    let { setEmojiConfetti: t, emojiConfetti: n } = e,
        [r, h] = i.useState(!1),
        C = i.useRef(null),
        I = a()(S.Qq, S.Ow);
    function A(e) {
        return (0, l.jsxs)("div", {
            className: S.ZC,
            children: [
                (0, l.jsxs)("div", {
                    className: S.Ry,
                    children: [
                        (0, l.jsx)(o.E, { variant: "text-md/bold", children: f.intl.string(f.t.Hl2Ige) }),
                        (0, l.jsx)(o.E, { variant: "text-sm/normal", children: f.intl.string(f.t.stGFA3) }),
                    ],
                }),
                e,
            ],
        });
    }
    function g(e) {
        let { emoji: n } = e;
        null != t && (t(n), h(!1));
    }
    return (0, l.jsx)(u.Y, {
        targetElementRef: C,
        shouldShow: r,
        position: "bottom",
        align: "left",
        onRequestClose: () => h(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(c.l, {
                children: (0, l.jsx)(m.A, {
                    analyticsOverride: E,
                    closePopout: t,
                    onSelectEmoji: g,
                    wrapper: "div",
                    pickerIntention: y,
                    showAddEmojiButton: !1,
                    renderHeader: A,
                    headerClassName: S.a8,
                    className: S.vX,
                    listHeaderClassName: S.vX,
                    categoryListClassName: S.jv,
                    searchProps: { accessory: (0, l.jsx)(l.Fragment, {}) },
                }),
            });
        },
        children: () =>
            (0, l.jsx)(d.D, {
                className: a()(S.kL, S.Ow),
                onClick: () => h(!0),
                innerRef: C,
                children:
                    n?.name == null
                        ? (0, l.jsxs)("div", {
                              className: S.hQ,
                              children: [
                                  (0, l.jsx)(p.n, {
                                      size: "custom",
                                      color: s.A.colors.ICON_STRONG,
                                      className: S.mI,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, l.jsx)(o.E, {
                                      className: I,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: f.intl.string(f.t.Hl2Ige),
                                  }),
                              ],
                          })
                        : (0, l.jsxs)("div", {
                              className: S.hQ,
                              children: [
                                  (0, l.jsx)(o.E, {
                                      className: I,
                                      variant: "text-sm/semibold",
                                      children: null == n.guildId ? n.optionallyDiverseSequence : null,
                                  }),
                                  (0, l.jsx)(o.E, {
                                      className: I,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.name.replace(/_/g, " "),
                                  }),
                              ],
                          }),
            }),
    });
}
