n.d(t, { A: () => p });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    o = n.n(i),
    s = n(661531),
    a = n(834730),
    u = n(922016),
    c = n(305866),
    d = n(939249),
    E = n(460905),
    C = n(334295),
    h = n(652215),
    _ = n(307731),
    S = n(375708),
    m = n(913582);
let I = { section: h.JJy.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER, openPopoutType: "gift_effect_emoji_picker" },
    f = _.EmojiIntention.GIFT;
function p(e) {
    let { setEmojiConfetti: t, emojiConfetti: n } = e,
        [i, h] = r.useState(!1),
        _ = r.useRef(null),
        p = o()(m.Qq, m.Ow);
    function A(e) {
        return (0, l.jsxs)("div", {
            className: m.ZC,
            children: [
                (0, l.jsxs)("div", {
                    className: m.Ry,
                    children: [
                        (0, l.jsx)(a.E, { variant: "text-md/bold", children: S.intl.string(S.t.Hl2Ige) }),
                        (0, l.jsx)(a.E, { variant: "text-sm/normal", children: S.intl.string(S.t.stGFA3) }),
                    ],
                }),
                e,
            ],
        });
    }
    function N(e) {
        let { emoji: n } = e;
        null != t && (t(n), h(!1));
    }
    return (0, l.jsx)(u.Y, {
        targetElementRef: _,
        shouldShow: i,
        position: "bottom",
        align: "left",
        onRequestClose: () => h(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(c.l, {
                children: (0, l.jsx)(C.A, {
                    analyticsOverride: I,
                    closePopout: t,
                    onSelectEmoji: N,
                    wrapper: "div",
                    pickerIntention: f,
                    showAddEmojiButton: !1,
                    renderHeader: A,
                    headerClassName: m.a8,
                    className: m.vX,
                    listHeaderClassName: m.vX,
                    categoryListClassName: m.jv,
                    searchProps: { accessory: (0, l.jsx)(l.Fragment, {}) },
                }),
            });
        },
        children: () =>
            (0, l.jsx)(d.D, {
                className: o()(m.kL, m.Ow),
                onClick: () => h(!0),
                innerRef: _,
                children:
                    n?.name == null
                        ? (0, l.jsxs)("div", {
                              className: m.hQ,
                              children: [
                                  (0, l.jsx)(E.n, {
                                      size: "custom",
                                      color: s.A.colors.ICON_STRONG,
                                      className: m.mI,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, l.jsx)(a.E, {
                                      className: p,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: S.intl.string(S.t.Hl2Ige),
                                  }),
                              ],
                          })
                        : (0, l.jsxs)("div", {
                              className: m.hQ,
                              children: [
                                  (0, l.jsx)(a.E, {
                                      className: p,
                                      variant: "text-sm/semibold",
                                      children: null == n.guildId ? n.optionallyDiverseSequence : null,
                                  }),
                                  (0, l.jsx)(a.E, {
                                      className: p,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.name.replace(/_/g, " "),
                                  }),
                              ],
                          }),
            }),
    });
}
