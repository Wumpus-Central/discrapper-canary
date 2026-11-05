var e = a(477900);
a(582128);
var t = a(855986),
    m = a(460905),
    d = a(834730),
    o = a(565645),
    l = a(121681),
    n = a(441664);
function r(s) {
    let { width: i, marginBottom: a } = s;
    return (0, e.jsx)("div", { className: n.E3, style: { width: i, marginBottom: a } });
}
a.d(
    i,
    {},
    {
        A: function (s) {
            let { reactionEmoji: i } = s,
                a = (0, t.bG)([l.Ay], () => (i?.emojiId != null ? l.Ay.getUsableCustomEmojiById(i.emojiId) : null));
            return (0, e.jsxs)("div", {
                className: n.kL,
                children: [
                    (0, e.jsxs)("div", {
                        className: n.rf,
                        children: [
                            (0, e.jsxs)("div", {
                                className: n.lm,
                                children: [
                                    (0, e.jsx)(r, { width: "100%", marginBottom: 8 }),
                                    (0, e.jsx)(r, { width: "80%", marginBottom: 16 }),
                                    (0, e.jsx)(r, { width: "50%", marginBottom: 8 }),
                                    (0, e.jsx)(r, { width: "60%", marginBottom: 16 }),
                                ],
                            }),
                            (0, e.jsx)("div", { className: n.oW }),
                        ],
                    }),
                    (0, e.jsxs)("div", {
                        className: n.qr,
                        children: [
                            (0, e.jsxs)("div", {
                                className: n.mJ,
                                children: [
                                    null != i
                                        ? (0, e.jsx)(o.A, {
                                              className: n.Ys,
                                              emojiId: i.emojiId,
                                              emojiName: i.emojiName,
                                              animated: !!a?.animated,
                                          })
                                        : (0, e.jsx)(m.ReactionIcon, {
                                              size: "sm",
                                              color: "currentColor",
                                              className: n.Ys,
                                          }),
                                    (0, e.jsx)(d.E, {
                                        variant: "body-sm/semibold",
                                        color: "interactive-text-default",
                                        children: 17,
                                    }),
                                ],
                            }),
                            (0, e.jsx)(r, { width: "24px", marginBottom: 0 }),
                            (0, e.jsx)("div", { className: n.Om }),
                            (0, e.jsx)(r, { width: "24px", marginBottom: 0 }),
                        ],
                    }),
                ],
            });
        },
    },
);
