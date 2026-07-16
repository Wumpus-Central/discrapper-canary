n.d(t, { A: () => C });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(661531),
    o = n(834730),
    u = n(922016),
    c = n(305866),
    d = n(939249),
    E = n(460905),
    m = n(334295),
    h = n(652215),
    S = n(307731),
    f = n(375708),
    A = n(24238);
let _ = { section: h.JJy.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER, openPopoutType: "gift_effect_emoji_picker" },
    I = S.EmojiIntention.GIFT;
function C(e) {
    let { setEmojiConfetti: t, emojiConfetti: n } = e,
        [i, h] = r.useState(!1),
        S = r.useRef(null),
        C = s()(A.Qq, A.Ow);
    function N(e) {
        return (0, l.jsxs)("div", {
            className: A.ZC,
            children: [
                (0, l.jsxs)("div", {
                    className: A.Ry,
                    children: [
                        (0, l.jsx)(o.E, { variant: "text-md/bold", children: f.intl.string(f.t.Hl2Ige) }),
                        (0, l.jsx)(o.E, { variant: "text-sm/normal", children: f.intl.string(f.t.stGFA3) }),
                    ],
                }),
                e,
            ],
        });
    }
    function g(e) {
        let { emoji: n } = e;
        null != t && (t(n), h(!1));
    }
    return (0, l.jsx)(u.Y, {
        targetElementRef: S,
        shouldShow: i,
        position: "bottom",
        align: "left",
        onRequestClose: () => h(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(c.l, {
                children: (0, l.jsx)(m.A, {
                    analyticsOverride: _,
                    closePopout: t,
                    onSelectEmoji: g,
                    wrapper: "div",
                    pickerIntention: I,
                    showAddEmojiButton: !1,
                    renderHeader: N,
                    headerClassName: A.a8,
                    className: A.vX,
                    listHeaderClassName: A.vX,
                    categoryListClassName: A.jv,
                    searchProps: { accessory: (0, l.jsx)(l.Fragment, {}) },
                }),
            });
        },
        children: () =>
            (0, l.jsx)(d.D, {
                className: s()(A.kL, A.Ow),
                onClick: () => h(!0),
                innerRef: S,
                children:
                    n?.name == null
                        ? (0, l.jsxs)("div", {
                              className: A.hQ,
                              children: [
                                  (0, l.jsx)(E.n, {
                                      size: "custom",
                                      color: a.A.colors.ICON_STRONG,
                                      className: A.mI,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, l.jsx)(o.E, {
                                      className: C,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: f.intl.string(f.t.Hl2Ige),
                                  }),
                              ],
                          })
                        : (0, l.jsxs)("div", {
                              className: A.hQ,
                              children: [
                                  (0, l.jsx)(o.E, {
                                      className: C,
                                      variant: "text-sm/semibold",
                                      children: null == n.guildId ? n.optionallyDiverseSequence : null,
                                  }),
                                  (0, l.jsx)(o.E, {
                                      className: C,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.name.replace(/_/g, " "),
                                  }),
                              ],
                          }),
            }),
    });
}
