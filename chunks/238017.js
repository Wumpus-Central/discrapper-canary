n.d(t, { A: () => S });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(661531),
    o = n(834730),
    u = n(922016),
    c = n(305866),
    d = n(939249),
    p = n(460905),
    m = n(267889),
    h = n(652215),
    C = n(307731),
    A = n(375708),
    y = n(913582);
let E = { section: h.JJy.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER, openPopoutType: "gift_effect_emoji_picker" },
    P = C.EmojiIntention.GIFT;
function S(e) {
    let { setEmojiConfetti: t, emojiConfetti: n } = e,
        [i, h] = a.useState(!1),
        C = a.useRef(null),
        S = r()(y.Qq, y.Ow),
        _ = (e) =>
            (0, l.jsxs)("div", {
                className: y.ZC,
                children: [
                    (0, l.jsxs)("div", {
                        className: y.Ry,
                        children: [
                            (0, l.jsx)(o.E, { variant: "text-md/bold", children: A.intl.string(A.t.Hl2Ige) }),
                            (0, l.jsx)(o.E, { variant: "text-sm/normal", children: A.intl.string(A.t.stGFA3) }),
                        ],
                    }),
                    e,
                ],
            }),
        f = (e) => {
            let { emoji: n } = e;
            null != t && (t(n), h(!1));
        };
    return (0, l.jsx)(u.Y, {
        targetElementRef: C,
        shouldShow: i,
        position: "bottom",
        align: "left",
        onRequestClose: () => h(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(c.l, {
                children: (0, l.jsx)(m.A, {
                    analyticsOverride: E,
                    closePopout: t,
                    onSelectEmoji: f,
                    wrapper: "div",
                    pickerIntention: P,
                    showAddEmojiButton: !1,
                    renderHeader: _,
                    headerClassName: y.a8,
                    className: y.vX,
                    listHeaderClassName: y.vX,
                    categoryListClassName: y.jv,
                    searchProps: { accessory: (0, l.jsx)(l.Fragment, {}) },
                }),
            });
        },
        children: () =>
            (0, l.jsx)(d.D, {
                className: r()(y.kL, y.Ow),
                onClick: () => h(!0),
                innerRef: C,
                children:
                    n?.name == null
                        ? (0, l.jsxs)("div", {
                              className: y.hQ,
                              children: [
                                  (0, l.jsx)(p.n, {
                                      size: "custom",
                                      color: s.A.colors.ICON_STRONG,
                                      className: y.mI,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, l.jsx)(o.E, {
                                      className: S,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: A.intl.string(A.t.Hl2Ige),
                                  }),
                              ],
                          })
                        : (0, l.jsxs)("div", {
                              className: y.hQ,
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
