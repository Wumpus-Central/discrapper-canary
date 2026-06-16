e.d(i, { A: () => n });
var a = e(627968);
e(64700);
var t = e(17928),
    m = e(460905),
    d = e(834730),
    l = e(565645),
    o = e(159273),
    r = e(593381);
function n(s) {
    let { reactionEmoji: i } = s,
        e = (0, t.bG)([o.Ay], () => (i?.emojiId != null ? o.Ay.getUsableCustomEmojiById(i.emojiId) : null));
    return (0, a.jsxs)("div", {
        className: r.kL,
        children: [
            (0, a.jsxs)("div", {
                className: r.rf,
                children: [
                    (0, a.jsxs)("div", {
                        className: r.lm,
                        children: [
                            (0, a.jsx)(c, { width: "100%", marginBottom: 8 }),
                            (0, a.jsx)(c, { width: "80%", marginBottom: 16 }),
                            (0, a.jsx)(c, { width: "50%", marginBottom: 8 }),
                            (0, a.jsx)(c, { width: "60%", marginBottom: 16 }),
                        ],
                    }),
                    (0, a.jsx)("div", { className: r.oW }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: r.qr,
                children: [
                    (0, a.jsxs)("div", {
                        className: r.mJ,
                        children: [
                            null != i
                                ? (0, a.jsx)(l.A, {
                                      className: r.Ys,
                                      emojiId: i.emojiId,
                                      emojiName: i.emojiName,
                                      animated: !!e?.animated,
                                  })
                                : (0, a.jsx)(m.n, { size: "sm", color: "currentColor", className: r.Ys }),
                            (0, a.jsx)(d.E, {
                                variant: "text-sm/semibold",
                                color: "interactive-text-default",
                                children: 17,
                            }),
                        ],
                    }),
                    (0, a.jsx)(c, { width: "24px", marginBottom: 0 }),
                    (0, a.jsx)("div", { className: r.Om }),
                    (0, a.jsx)(c, { width: "24px", marginBottom: 0 }),
                ],
            }),
        ],
    });
}
function c(s) {
    let { width: i, marginBottom: e } = s;
    return (0, a.jsx)("div", { className: r.E3, style: { width: i, marginBottom: e } });
}
