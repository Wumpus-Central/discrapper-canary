"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(827734),
    l = n(834730),
    u = n(265872),
    c = n(305866),
    d = n(939249),
    _ = n(460905),
    f = n(937773),
    p = n(652215),
    h = n(307731),
    E = n(985018),
    m = n(24238);
let g = { section: p.JJy.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER, openPopoutType: "gift_effect_emoji_picker" },
    A = h.EmojiIntention.GIFT;
function I(e) {
    let { setEmojiConfetti: t, emojiConfetti: n } = e,
        [s, p] = i.useState(!1),
        h = i.useRef(null),
        I = a()(m.Qq, m.Ow),
        T = (e) =>
            (0, r.jsxs)("div", {
                className: m.ZC,
                children: [
                    (0, r.jsxs)("div", {
                        className: m.Ry,
                        children: [
                            (0, r.jsx)(l.E, { variant: "text-md/bold", children: E.intl.string(E.t.Hl2Ige) }),
                            (0, r.jsx)(l.E, { variant: "text-sm/normal", children: E.intl.string(E.t.stGFA3) }),
                        ],
                    }),
                    e,
                ],
            }),
        S = (e) => {
            let { emoji: n } = e;
            null != t && (t(n), p(!1));
        };
    return (0, r.jsx)(u.Y, {
        targetElementRef: h,
        shouldShow: s,
        position: "bottom",
        align: "left",
        onRequestClose: () => p(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(c.l, {
                children: (0, r.jsx)(f.A, {
                    analyticsOverride: g,
                    closePopout: t,
                    onSelectEmoji: S,
                    wrapper: "div",
                    pickerIntention: A,
                    showAddEmojiButton: !1,
                    renderHeader: T,
                    headerClassName: m.a8,
                    className: m.vX,
                    listHeaderClassName: m.vX,
                    categoryListClassName: m.jv,
                    searchProps: { accessory: (0, r.jsx)(r.Fragment, {}) },
                }),
            });
        },
        children: () =>
            (0, r.jsx)(d.D, {
                className: a()(m.kL, m.Ow),
                onClick: () => p(!0),
                innerRef: h,
                children:
                    n?.name == null
                        ? (0, r.jsxs)("div", {
                              className: m.hQ,
                              children: [
                                  (0, r.jsx)(_.n, {
                                      size: "custom",
                                      color: o.A.colors.ICON_STRONG,
                                      className: m.mI,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, r.jsx)(l.E, {
                                      className: I,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: E.intl.string(E.t.Hl2Ige),
                                  }),
                              ],
                          })
                        : (0, r.jsxs)("div", {
                              className: m.hQ,
                              children: [
                                  (0, r.jsx)(l.E, {
                                      className: I,
                                      variant: "text-sm/semibold",
                                      children: null == n.guildId ? n.optionallyDiverseSequence : null,
                                  }),
                                  (0, r.jsx)(l.E, {
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
