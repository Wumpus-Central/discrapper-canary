n.d(t, { A: () => f });
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
    C = n(652215),
    p = n(307731),
    h = n(375708),
    _ = n(24238);
let S = { section: C.JJy.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER, openPopoutType: "gift_effect_emoji_picker" },
    I = p.EmojiIntention.GIFT;
function f(e) {
    let { setEmojiConfetti: t, emojiConfetti: n } = e,
        [i, C] = r.useState(!1),
        p = r.useRef(null),
        f = a()(_.Qq, _.Ow);
    function N(e) {
        return (0, l.jsxs)("div", {
            className: _.ZC,
            children: [
                (0, l.jsxs)("div", {
                    className: _.Ry,
                    children: [
                        (0, l.jsx)(s.E, { variant: "text-md/bold", children: h.intl.string(h.t.Hl2Ige) }),
                        (0, l.jsx)(s.E, { variant: "text-sm/normal", children: h.intl.string(h.t.stGFA3) }),
                    ],
                }),
                e,
            ],
        });
    }
    let A = (e) => {
        let { emoji: n } = e;
        null != t && (t(n), C(!1));
    };
    return (0, l.jsx)(u.Y, {
        targetElementRef: p,
        shouldShow: i,
        position: "bottom",
        align: "left",
        onRequestClose: () => C(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(c.l, {
                children: (0, l.jsx)(E.A, {
                    analyticsOverride: S,
                    closePopout: t,
                    onSelectEmoji: A,
                    wrapper: "div",
                    pickerIntention: I,
                    showAddEmojiButton: !1,
                    renderHeader: N,
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
                className: a()(_.kL, _.Ow),
                onClick: () => C(!0),
                innerRef: p,
                children:
                    n?.name == null
                        ? (0, l.jsxs)("div", {
                              className: _.hQ,
                              children: [
                                  (0, l.jsx)(m.n, {
                                      size: "custom",
                                      color: o.A.colors.ICON_STRONG,
                                      className: _.mI,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, l.jsx)(s.E, {
                                      className: f,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: h.intl.string(h.t.Hl2Ige),
                                  }),
                              ],
                          })
                        : (0, l.jsxs)("div", {
                              className: _.hQ,
                              children: [
                                  (0, l.jsx)(s.E, {
                                      className: f,
                                      variant: "text-sm/semibold",
                                      children: null == n.guildId ? n.optionallyDiverseSequence : null,
                                  }),
                                  (0, l.jsx)(s.E, {
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
