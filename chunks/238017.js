n.d(t, { A: () => A });
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
    m = n(267889),
    h = n(652215),
    C = n(307731),
    f = n(375708),
    E = n(616470);
let S = { section: h.JJy.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER, openPopoutType: "gift_effect_emoji_picker" },
    y = C.EmojiIntention.GIFT;
function A(e) {
    let { setEmojiConfetti: t, emojiConfetti: n } = e,
        [r, h] = i.useState(!1),
        C = i.useRef(null),
        A = a()(E.Qq, E.Ow);
    function P(e) {
        return (0, l.jsxs)("div", {
            className: E.ZC,
            children: [
                (0, l.jsxs)("div", {
                    className: E.Ry,
                    children: [
                        (0, l.jsx)(o.E, { variant: "text-md/bold", children: f.intl.string(f.t.Hl2Ige) }),
                        (0, l.jsx)(o.E, { variant: "text-sm/normal", children: f.intl.string(f.t.stGFA3) }),
                    ],
                }),
                e,
            ],
        });
    }
    function I(e) {
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
                    analyticsOverride: S,
                    closePopout: t,
                    onSelectEmoji: I,
                    wrapper: "div",
                    pickerIntention: y,
                    showAddEmojiButton: !1,
                    renderHeader: P,
                    headerClassName: E.a8,
                    className: E.vX,
                    listHeaderClassName: E.vX,
                    categoryListClassName: E.jv,
                    searchProps: { accessory: (0, l.jsx)(l.Fragment, {}) },
                }),
            });
        },
        children: () =>
            (0, l.jsx)(d.D, {
                className: a()(E.kL, E.Ow),
                onClick: () => h(!0),
                innerRef: C,
                children:
                    n?.name == null
                        ? (0, l.jsxs)("div", {
                              className: E.hQ,
                              children: [
                                  (0, l.jsx)(p.n, {
                                      size: "custom",
                                      color: s.A.colors.ICON_STRONG,
                                      className: E.mI,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, l.jsx)(o.E, {
                                      className: A,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: f.intl.string(f.t.Hl2Ige),
                                  }),
                              ],
                          })
                        : (0, l.jsxs)("div", {
                              className: E.hQ,
                              children: [
                                  (0, l.jsx)(o.E, {
                                      className: A,
                                      variant: "text-sm/semibold",
                                      children: null == n.guildId ? n.optionallyDiverseSequence : null,
                                  }),
                                  (0, l.jsx)(o.E, {
                                      className: A,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.name.replace(/_/g, " "),
                                  }),
                              ],
                          }),
            }),
    });
}
