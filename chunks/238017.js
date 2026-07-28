n.d(t, { A: () => y });
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
    C = n(652215),
    h = n(307731),
    E = n(375708),
    f = n(616470);
let A = { section: C.JJy.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER, openPopoutType: "gift_effect_emoji_picker" },
    S = h.EmojiIntention.GIFT;
function y(e) {
    let { setEmojiConfetti: t, emojiConfetti: n } = e,
        [r, C] = i.useState(!1),
        h = i.useRef(null),
        y = a()(f.Qq, f.Ow);
    function P(e) {
        return (0, l.jsxs)("div", {
            className: f.ZC,
            children: [
                (0, l.jsxs)("div", {
                    className: f.Ry,
                    children: [
                        (0, l.jsx)(o.E, { variant: "text-md/bold", children: E.intl.string(E.t.Hl2Ige) }),
                        (0, l.jsx)(o.E, { variant: "text-sm/normal", children: E.intl.string(E.t.stGFA3) }),
                    ],
                }),
                e,
            ],
        });
    }
    function I(e) {
        let { emoji: n } = e;
        null != t && (t(n), C(!1));
    }
    return (0, l.jsx)(u.Y, {
        targetElementRef: h,
        shouldShow: r,
        position: "bottom",
        align: "left",
        onRequestClose: () => C(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(c.l, {
                children: (0, l.jsx)(m.A, {
                    analyticsOverride: A,
                    closePopout: t,
                    onSelectEmoji: I,
                    wrapper: "div",
                    pickerIntention: S,
                    showAddEmojiButton: !1,
                    renderHeader: P,
                    headerClassName: f.a8,
                    className: f.vX,
                    listHeaderClassName: f.vX,
                    categoryListClassName: f.jv,
                    searchProps: { accessory: (0, l.jsx)(l.Fragment, {}) },
                }),
            });
        },
        children: () =>
            (0, l.jsx)(d.D, {
                className: a()(f.kL, f.Ow),
                onClick: () => C(!0),
                innerRef: h,
                children:
                    n?.name == null
                        ? (0, l.jsxs)("div", {
                              className: f.hQ,
                              children: [
                                  (0, l.jsx)(p.n, {
                                      size: "custom",
                                      color: s.A.colors.ICON_STRONG,
                                      className: f.mI,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, l.jsx)(o.E, {
                                      className: y,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: E.intl.string(E.t.Hl2Ige),
                                  }),
                              ],
                          })
                        : (0, l.jsxs)("div", {
                              className: f.hQ,
                              children: [
                                  (0, l.jsx)(o.E, {
                                      className: y,
                                      variant: "text-sm/semibold",
                                      children: null == n.guildId ? n.optionallyDiverseSequence : null,
                                  }),
                                  (0, l.jsx)(o.E, {
                                      className: y,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.name.replace(/_/g, " "),
                                  }),
                              ],
                          }),
            }),
    });
}
