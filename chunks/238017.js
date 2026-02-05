"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(827734),
    l = n(397927),
    u = n(937773),
    c = n(170887),
    d = n(652215),
    _ = n(307731),
    f = n(985018),
    p = n(752729);
let h = { section: d.JJy.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER, openPopoutType: "gift_effect_emoji_picker" },
    m = _.b_.GIFT;
function g(e) {
    let { setEmojiConfetti: t, emojiConfetti: n } = e,
        [a, d] = i.useState(!1),
        _ = i.useRef(null),
        g = (0, c.A)({ location: "GiftEmoji" }),
        E = s()(p.Qq, g && p.Ow),
        A = (e) =>
            (0, r.jsxs)("div", {
                className: p.ZC,
                children: [
                    (0, r.jsxs)("div", {
                        className: p.Ry,
                        children: [
                            (0, r.jsx)(l.Text, { variant: "text-md/bold", children: f.intl.string(f.t.Hl2Ige) }),
                            (0, r.jsx)(l.Text, { variant: "text-sm/normal", children: f.intl.string(f.t.stGFA3) }),
                        ],
                    }),
                    e,
                ],
            }),
        I = (e) => {
            let { emoji: n } = e;
            null != t && (t(n), d(!1));
        };
    return (0, r.jsx)(l.YNO, {
        targetElementRef: _,
        shouldShow: a,
        position: "bottom",
        align: "left",
        onRequestClose: () => d(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(l.lGe, {
                children: (0, r.jsx)(u.A, {
                    analyticsOverride: h,
                    closePopout: t,
                    onSelectEmoji: I,
                    wrapper: "div",
                    pickerIntention: m,
                    renderHeader: A,
                    headerClassName: p.a8,
                    className: p.vX,
                    listHeaderClassName: p.vX,
                    categoryListClassName: p.jv,
                    searchProps: { accessory: (0, r.jsx)(r.Fragment, {}) },
                }),
            });
        },
        children: () =>
            (0, r.jsx)(l.DUT, {
                className: s()(p.kL, g && p.Ow),
                onClick: () => d(!0),
                innerRef: _,
                children:
                    n?.name == null
                        ? (0, r.jsxs)("div", {
                              className: p.hQ,
                              children: [
                                  (0, r.jsx)(l.nm2, {
                                      size: "custom",
                                      color: g ? o.A.colors.ICON_STRONG : o.A.colors.WHITE,
                                      className: p.mI,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      className: E,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: f.intl.string(f.t.Hl2Ige),
                                  }),
                              ],
                          })
                        : (0, r.jsxs)("div", {
                              className: p.hQ,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      className: E,
                                      variant: "text-sm/semibold",
                                      children: null == n.guildId ? n.optionallyDiverseSequence : null,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      className: E,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.name.replace(/_/g, " "),
                                  }),
                              ],
                          }),
            }),
    });
}
