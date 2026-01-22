n.d(t, { A: () => g }), n(896048), n(747238), n(812715);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(827734),
    l = n(397927),
    c = n(937773),
    u = n(170887),
    d = n(652215),
    f = n(307731),
    p = n(985018),
    _ = n(752729);
let h = {
        section: d.JJy.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
        openPopoutType: "gift_effect_emoji_picker",
    },
    m = f.b_.GIFT;
function g(e) {
    let { setEmojiConfetti: t, emojiConfetti: n } = e,
        [a, d] = i.useState(!1),
        f = i.useRef(null),
        g = (0, u.A)({ location: "GiftEmoji" }),
        E = s()(_.Qq, g && _.Ow),
        b = (e) =>
            (0, r.jsxs)("div", {
                className: _.ZC,
                children: [
                    (0, r.jsxs)("div", {
                        className: _.Ry,
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: "text-md/bold",
                                children: p.intl.string(p.t.Hl2Ige),
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: p.intl.string(p.t.stGFA3),
                            }),
                        ],
                    }),
                    e,
                ],
            }),
        y = (e) => {
            let { emoji: n } = e;
            null != t && (t(n), d(!1));
        };
    return (0, r.jsx)(l.YNO, {
        targetElementRef: f,
        shouldShow: a,
        position: "bottom",
        align: "left",
        onRequestClose: () => d(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(l.lGe, {
                children: (0, r.jsx)(c.A, {
                    analyticsOverride: h,
                    closePopout: t,
                    onSelectEmoji: y,
                    wrapper: "div",
                    pickerIntention: m,
                    renderHeader: b,
                    headerClassName: _.a8,
                    className: _.vX,
                    listHeaderClassName: _.vX,
                    categoryListClassName: _.jv,
                    searchProps: { accessory: (0, r.jsx)(r.Fragment, {}) },
                }),
            });
        },
        children: () =>
            (0, r.jsx)(l.DUT, {
                className: s()(_.kL, g && _.Ow),
                onClick: () => d(!0),
                innerRef: f,
                children:
                    (null == n ? void 0 : n.name) == null
                        ? (0, r.jsxs)("div", {
                              className: _.hQ,
                              children: [
                                  (0, r.jsx)(l.nm2, {
                                      size: "custom",
                                      color: g ? o.A.colors.ICON_STRONG : o.A.colors.WHITE,
                                      className: _.mI,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      className: E,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: p.intl.string(p.t.Hl2Ige),
                                  }),
                              ],
                          })
                        : (0, r.jsxs)("div", {
                              className: _.hQ,
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
