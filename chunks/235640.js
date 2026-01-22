n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    s = n(565645),
    a = n(508675),
    o = n(824510);
function c(e) {
    let { reactionEmoji: t } = e,
        n = (0, i.bG)([a.Ay], () =>
            (null == t ? void 0 : t.emojiId) != null ? a.Ay.getUsableCustomEmojiById(t.emojiId) : null,
        );
    return (0, l.jsxs)("div", {
        className: o.kL,
        children: [
            (0, l.jsxs)("div", {
                className: o.rf,
                children: [
                    (0, l.jsxs)("div", {
                        className: o.lm,
                        children: [
                            (0, l.jsx)(d, {
                                width: "100%",
                                marginBottom: 8,
                            }),
                            (0, l.jsx)(d, {
                                width: "80%",
                                marginBottom: 16,
                            }),
                            (0, l.jsx)(d, {
                                width: "50%",
                                marginBottom: 8,
                            }),
                            (0, l.jsx)(d, {
                                width: "60%",
                                marginBottom: 16,
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: o.oW }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: o.qr,
                children: [
                    (0, l.jsxs)("div", {
                        className: o.mJ,
                        children: [
                            null != t
                                ? (0, l.jsx)(s.A, {
                                      className: o.Ys,
                                      emojiId: t.emojiId,
                                      emojiName: t.emojiName,
                                      animated: !!(null == n ? void 0 : n.animated),
                                  })
                                : (0, l.jsx)(r.nm2, {
                                      size: "sm",
                                      color: "currentColor",
                                      className: o.Ys,
                                  }),
                            (0, l.jsx)(r.Text, {
                                variant: "text-sm/semibold",
                                color: "interactive-text-default",
                                children: 17,
                            }),
                        ],
                    }),
                    (0, l.jsx)(d, {
                        width: "24px",
                        marginBottom: 0,
                    }),
                    (0, l.jsx)("div", { className: o.Om }),
                    (0, l.jsx)(d, {
                        width: "24px",
                        marginBottom: 0,
                    }),
                ],
            }),
        ],
    });
}
function d(e) {
    let { width: t, marginBottom: n } = e;
    return (0, l.jsx)("div", {
        className: o.E3,
        style: {
            width: t,
            marginBottom: n,
        },
    });
}
