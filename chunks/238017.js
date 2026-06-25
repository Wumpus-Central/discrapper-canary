"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(661531),
    l = n(834730),
    u = n(922016),
    c = n(305866),
    d = n(939249),
    _ = n(460905),
    h = n(334295),
    f = n(652215),
    p = n(307731),
    E = n(375708),
    m = n(913582);
let g = { section: f.JJy.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER, openPopoutType: "gift_effect_emoji_picker" },
    A = p.EmojiIntention.GIFT;
function I(e) {
    let { setEmojiConfetti: t, emojiConfetti: n } = e,
        [s, f] = r.useState(!1),
        p = r.useRef(null),
        I = a()(m.Qq, m.Ow);
    function T(e) {
        return (0, i.jsxs)("div", {
            className: m.ZC,
            children: [
                (0, i.jsxs)("div", {
                    className: m.Ry,
                    children: [
                        (0, i.jsx)(l.E, { variant: "text-md/bold", children: E.intl.string(E.t.Hl2Ige) }),
                        (0, i.jsx)(l.E, { variant: "text-sm/normal", children: E.intl.string(E.t.stGFA3) }),
                    ],
                }),
                e,
            ],
        });
    }
    let S = (e) => {
        let { emoji: n } = e;
        null != t && (t(n), f(!1));
    };
    return (0, i.jsx)(u.Y, {
        targetElementRef: p,
        shouldShow: s,
        position: "bottom",
        align: "left",
        onRequestClose: () => f(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(c.l, {
                children: (0, i.jsx)(h.A, {
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
                    searchProps: { accessory: (0, i.jsx)(i.Fragment, {}) },
                }),
            });
        },
        children: () =>
            (0, i.jsx)(d.D, {
                className: a()(m.kL, m.Ow),
                onClick: () => f(!0),
                innerRef: p,
                children:
                    n?.name == null
                        ? (0, i.jsxs)("div", {
                              className: m.hQ,
                              children: [
                                  (0, i.jsx)(_.n, {
                                      size: "custom",
                                      color: o.A.colors.ICON_STRONG,
                                      className: m.mI,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, i.jsx)(l.E, {
                                      className: I,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: E.intl.string(E.t.Hl2Ige),
                                  }),
                              ],
                          })
                        : (0, i.jsxs)("div", {
                              className: m.hQ,
                              children: [
                                  (0, i.jsx)(l.E, {
                                      className: I,
                                      variant: "text-sm/semibold",
                                      children: null == n.guildId ? n.optionallyDiverseSequence : null,
                                  }),
                                  (0, i.jsx)(l.E, {
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
