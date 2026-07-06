n.d(t, { A: () => T });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(661531),
    s = n(834730),
    u = n(922016),
    c = n(305866),
    d = n(939249),
    m = n(460905),
    E = n(334295),
    p = n(652215),
    C = n(307731),
    _ = n(375708),
    h = n(24238);
let A = { section: p.JJy.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER, openPopoutType: "gift_effect_emoji_picker" },
    N = C.EmojiIntention.GIFT;
function T(e) {
    let { setEmojiConfetti: t, emojiConfetti: n } = e,
        [i, p] = r.useState(!1),
        C = r.useRef(null),
        T = a()(h.Qq, h.Ow);
    function I(e) {
        return (0, l.jsxs)("div", {
            className: h.ZC,
            children: [
                (0, l.jsxs)("div", {
                    className: h.Ry,
                    children: [
                        (0, l.jsx)(s.E, { variant: "text-md/bold", children: _.intl.string(_.t.Hl2Ige) }),
                        (0, l.jsx)(s.E, { variant: "text-sm/normal", children: _.intl.string(_.t.stGFA3) }),
                    ],
                }),
                e,
            ],
        });
    }
    let f = (e) => {
        let { emoji: n } = e;
        null != t && (t(n), p(!1));
    };
    return (0, l.jsx)(u.Y, {
        targetElementRef: C,
        shouldShow: i,
        position: "bottom",
        align: "left",
        onRequestClose: () => p(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(c.l, {
                children: (0, l.jsx)(E.A, {
                    analyticsOverride: A,
                    closePopout: t,
                    onSelectEmoji: f,
                    wrapper: "div",
                    pickerIntention: N,
                    showAddEmojiButton: !1,
                    renderHeader: I,
                    headerClassName: h.a8,
                    className: h.vX,
                    listHeaderClassName: h.vX,
                    categoryListClassName: h.jv,
                    searchProps: { accessory: (0, l.jsx)(l.Fragment, {}) },
                }),
            });
        },
        children: () =>
            (0, l.jsx)(d.D, {
                className: a()(h.kL, h.Ow),
                onClick: () => p(!0),
                innerRef: C,
                children:
                    n?.name == null
                        ? (0, l.jsxs)("div", {
                              className: h.hQ,
                              children: [
                                  (0, l.jsx)(m.n, {
                                      size: "custom",
                                      color: o.A.colors.ICON_STRONG,
                                      className: h.mI,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, l.jsx)(s.E, {
                                      className: T,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: _.intl.string(_.t.Hl2Ige),
                                  }),
                              ],
                          })
                        : (0, l.jsxs)("div", {
                              className: h.hQ,
                              children: [
                                  (0, l.jsx)(s.E, {
                                      className: T,
                                      variant: "text-sm/semibold",
                                      children: null == n.guildId ? n.optionallyDiverseSequence : null,
                                  }),
                                  (0, l.jsx)(s.E, {
                                      className: T,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.name.replace(/_/g, " "),
                                  }),
                              ],
                          }),
            }),
    });
}
