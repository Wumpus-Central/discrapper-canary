n.d(t, { A: () => f });
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
    A = n(307731),
    C = n(985018),
    _ = n(24238);
let E = { section: h.JJy.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER, openPopoutType: "gift_effect_emoji_picker" },
    y = A.EmojiIntention.GIFT;
function f(e) {
    let { setEmojiConfetti: t, emojiConfetti: n } = e,
        [i, h] = a.useState(!1),
        A = a.useRef(null),
        f = r()(_.Qq, _.Ow),
        P = (e) =>
            (0, l.jsxs)("div", {
                className: _.ZC,
                children: [
                    (0, l.jsxs)("div", {
                        className: _.Ry,
                        children: [
                            (0, l.jsx)(o.E, { variant: "text-md/bold", children: C.intl.string(C.t.Hl2Ige) }),
                            (0, l.jsx)(o.E, { variant: "text-sm/normal", children: C.intl.string(C.t.stGFA3) }),
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
                    onSelectEmoji: S,
                    wrapper: "div",
                    pickerIntention: y,
                    showAddEmojiButton: !1,
                    renderHeader: P,
                    headerClassName: _.a8,
                    className: _.vX,
                    listHeaderClassName: _.vX,
                    categoryListClassName: _.jv,
                    searchProps: { accessory: (0, l.jsx)(l.Fragment, {}) },
                }),
            });
        },
        children: () =>
            (0, l.jsx)(d.D, {
                className: r()(_.kL, _.Ow),
                onClick: () => h(!0),
                innerRef: A,
                children:
                    n?.name == null
                        ? (0, l.jsxs)("div", {
                              className: _.hQ,
                              children: [
                                  (0, l.jsx)(p.n, {
                                      size: "custom",
                                      color: s.A.colors.ICON_STRONG,
                                      className: _.mI,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, l.jsx)(o.E, {
                                      className: f,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: C.intl.string(C.t.Hl2Ige),
                                  }),
                              ],
                          })
                        : (0, l.jsxs)("div", {
                              className: _.hQ,
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
