var e = a(477900);
a(582128);
var m = a(855986),
    t = a(460905),
    d = a(834730),
    o = a(565645),
    l = a(121681),
    r = a(441664);
function n(s) {
    let { width: i, marginBottom: a } = s;
    return (0, e.jsx)("div", { className: r.E3, style: { width: i, marginBottom: a } });
}
a.d(
    i,
    {},
    {
        A: function (s) {
            let { reactionEmoji: i } = s,
                a = (0, m.bG)([l.Ay], () => (i?.emojiId != null ? l.Ay.getUsableCustomEmojiById(i.emojiId) : null));
            return (0, e.jsxs)("div", {
                className: r.kL,
                children: [
                    (0, e.jsxs)("div", {
                        className: r.rf,
                        children: [
                            (0, e.jsxs)("div", {
                                className: r.lm,
                                children: [
                                    (0, e.jsx)(n, { width: "100%", marginBottom: 8 }),
                                    (0, e.jsx)(n, { width: "80%", marginBottom: 16 }),
                                    (0, e.jsx)(n, { width: "50%", marginBottom: 8 }),
                                    (0, e.jsx)(n, { width: "60%", marginBottom: 16 }),
                                ],
                            }),
                            (0, e.jsx)("div", { className: r.oW }),
                        ],
                    }),
                    (0, e.jsxs)("div", {
                        className: r.qr,
                        children: [
                            (0, e.jsxs)("div", {
                                className: r.mJ,
                                children: [
                                    null != i
                                        ? (0, e.jsx)(o.A, {
                                              className: r.Ys,
                                              emojiId: i.emojiId,
                                              emojiName: i.emojiName,
                                              animated: !!a?.animated,
                                          })
                                        : (0, e.jsx)(t.n, { size: "sm", color: "currentColor", className: r.Ys }),
                                    (0, e.jsx)(d.E, {
                                        variant: "body-sm/semibold",
                                        color: "interactive-text-default",
                                        children: 17,
                                    }),
                                ],
                            }),
                            (0, e.jsx)(n, { width: "24px", marginBottom: 0 }),
                            (0, e.jsx)("div", { className: r.Om }),
                            (0, e.jsx)(n, { width: "24px", marginBottom: 0 }),
                        ],
                    }),
                ],
            });
        },
    },
);
