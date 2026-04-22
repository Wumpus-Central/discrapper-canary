n.d(t, { A: () => f });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(827734),
    o = n(834730),
    u = n(265872),
    c = n(305866),
    d = n(939249),
    p = n(460905),
    m = n(937773),
    h = n(652215),
    A = n(307731),
    _ = n(985018),
    C = n(913582);
let E = { section: h.JJy.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER, openPopoutType: "gift_effect_emoji_picker" },
    y = A.EmojiIntention.GIFT;
function f(e) {
    let { setEmojiConfetti: t, emojiConfetti: n } = e,
        [a, h] = i.useState(!1),
        A = i.useRef(null),
        f = r()(C.Qq, C.Ow),
        P = (e) =>
            (0, l.jsxs)("div", {
                className: C.ZC,
                children: [
                    (0, l.jsxs)("div", {
                        className: C.Ry,
                        children: [
                            (0, l.jsx)(o.E, { variant: "text-md/bold", children: _.intl.string(_.t.Hl2Ige) }),
                            (0, l.jsx)(o.E, { variant: "text-sm/normal", children: _.intl.string(_.t.stGFA3) }),
                        ],
                    }),
                    e,
                ],
            }),
        S = (e) => {
            let { emoji: n } = e;
            null != t && (t(n), h(!1));
        };
    return (0, l.jsx)(u.Y, {
        targetElementRef: A,
        shouldShow: a,
        position: "bottom",
        align: "left",
        onRequestClose: () => h(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(c.l, {
                children: (0, l.jsx)(m.A, {
                    analyticsOverride: E,
                    closePopout: t,
                    onSelectEmoji: S,
                    wrapper: "div",
                    pickerIntention: y,
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
                className: r()(C.kL, C.Ow),
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
                                      className: f,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: _.intl.string(_.t.Hl2Ige),
                                  }),
                              ],
                          })
                        : (0, l.jsxs)("div", {
                              className: C.hQ,
                              children: [
                                  (0, l.jsx)(o.E, {
                                      className: f,
                                      variant: "text-sm/semibold",
                                      children: null == n.guildId ? n.optionallyDiverseSequence : null,
                                  }),
                                  (0, l.jsx)(o.E, {
                                      className: f,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.name.replace(/_/g, " "),
                                  }),
                              ],
                          }),
            }),
    });
}
