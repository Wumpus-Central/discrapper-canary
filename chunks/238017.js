"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(827734),
    l = n(397927),
    u = n(937773),
    c = n(652215),
    d = n(307731),
    _ = n(985018),
    f = n(24238);
let p = { section: c.JJy.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER, openPopoutType: "gift_effect_emoji_picker" },
    h = d.EmojiIntention.GIFT;
function m(e) {
    let { setEmojiConfetti: t, emojiConfetti: n } = e,
        [s, c] = i.useState(!1),
        d = i.useRef(null),
        m = a()(f.Qq, f.Ow),
        E = (e) =>
            (0, r.jsxs)("div", {
                className: f.ZC,
                children: [
                    (0, r.jsxs)("div", {
                        className: f.Ry,
                        children: [
                            (0, r.jsx)(l.Text, { variant: "text-md/bold", children: _.intl.string(_.t.Hl2Ige) }),
                            (0, r.jsx)(l.Text, { variant: "text-sm/normal", children: _.intl.string(_.t.stGFA3) }),
                        ],
                    }),
                    e,
                ],
            }),
        g = (e) => {
            let { emoji: n } = e;
            null != t && (t(n), c(!1));
        };
    return (0, r.jsx)(l.YNO, {
        targetElementRef: d,
        shouldShow: s,
        position: "bottom",
        align: "left",
        onRequestClose: () => c(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(l.lGe, {
                children: (0, r.jsx)(u.A, {
                    analyticsOverride: p,
                    closePopout: t,
                    onSelectEmoji: g,
                    wrapper: "div",
                    pickerIntention: h,
                    showAddEmojiButton: !1,
                    renderHeader: E,
                    headerClassName: f.a8,
                    className: f.vX,
                    listHeaderClassName: f.vX,
                    categoryListClassName: f.jv,
                    searchProps: { accessory: (0, r.jsx)(r.Fragment, {}) },
                }),
            });
        },
        children: () =>
            (0, r.jsx)(l.DUT, {
                className: a()(f.kL, f.Ow),
                onClick: () => c(!0),
                innerRef: d,
                children:
                    n?.name == null
                        ? (0, r.jsxs)("div", {
                              className: f.hQ,
                              children: [
                                  (0, r.jsx)(l.nm2, {
                                      size: "custom",
                                      color: o.A.colors.ICON_STRONG,
                                      className: f.mI,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      className: m,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: _.intl.string(_.t.Hl2Ige),
                                  }),
                              ],
                          })
                        : (0, r.jsxs)("div", {
                              className: f.hQ,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      className: m,
                                      variant: "text-sm/semibold",
                                      children: null == n.guildId ? n.optionallyDiverseSequence : null,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      className: m,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.name.replace(/_/g, " "),
                                  }),
                              ],
                          }),
            }),
    });
}
