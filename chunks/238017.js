n.d(t, { A: () => S });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(661531),
    o = n(834730),
    u = n(922016),
    c = n(305866),
    d = n(939249),
    p = n(460905),
    m = n(267889),
    h = n(652215),
    A = n(307731),
    E = n(375708),
    C = n(24238);
let y = { section: h.JJy.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER, openPopoutType: "gift_effect_emoji_picker" },
    _ = A.EmojiIntention.GIFT;
function S(e) {
    let { setEmojiConfetti: t, emojiConfetti: n } = e,
        [i, h] = r.useState(!1),
        A = r.useRef(null),
        S = a()(C.Qq, C.Ow),
        P = (e) =>
            (0, l.jsxs)("div", {
                className: C.ZC,
                children: [
                    (0, l.jsxs)("div", {
                        className: C.Ry,
                        children: [
                            (0, l.jsx)(o.E, { variant: "text-md/bold", children: E.intl.string(E.t.Hl2Ige) }),
                            (0, l.jsx)(o.E, { variant: "text-sm/normal", children: E.intl.string(E.t.stGFA3) }),
                        ],
                    }),
                    e,
                ],
            }),
        I = (e) => {
            let { emoji: n } = e;
            null != t && (t(n), h(!1));
        };
    return (0, l.jsx)(u.Y, {
        targetElementRef: A,
        shouldShow: i,
        position: "bottom",
        align: "left",
        onRequestClose: () => h(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(c.l, {
                children: (0, l.jsx)(m.A, {
                    analyticsOverride: y,
                    closePopout: t,
                    onSelectEmoji: I,
                    wrapper: "div",
                    pickerIntention: _,
                    showAddEmojiButton: !1,
                    renderHeader: P,
                    headerClassName: C.a8,
                    className: C.vX,
                    listHeaderClassName: C.vX,
                    categoryListClassName: C.jv,
                    searchProps: { accessory: (0, l.jsx)(l.Fragment, {}) },
                }),
            });
        },
        children: () =>
            (0, l.jsx)(d.D, {
                className: a()(C.kL, C.Ow),
                onClick: () => h(!0),
                innerRef: A,
                children:
                    n?.name == null
                        ? (0, l.jsxs)("div", {
                              className: C.hQ,
                              children: [
                                  (0, l.jsx)(p.n, {
                                      size: "custom",
                                      color: s.A.colors.ICON_STRONG,
                                      className: C.mI,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, l.jsx)(o.E, {
                                      className: S,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: E.intl.string(E.t.Hl2Ige),
                                  }),
                              ],
                          })
                        : (0, l.jsxs)("div", {
                              className: C.hQ,
                              children: [
                                  (0, l.jsx)(o.E, {
                                      className: S,
                                      variant: "text-sm/semibold",
                                      children: null == n.guildId ? n.optionallyDiverseSequence : null,
                                  }),
                                  (0, l.jsx)(o.E, {
                                      className: S,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.name.replace(/_/g, " "),
                                  }),
                              ],
                          }),
            }),
    });
}
