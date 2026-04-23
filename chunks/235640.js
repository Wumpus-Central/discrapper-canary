"use strict";
n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var i = n(311907),
    s = n(460905),
    a = n(834730),
    r = n(565645),
    o = n(508675),
    d = n(593381);
function c(e) {
    let { reactionEmoji: t } = e,
        n = (0, i.bG)([o.Ay], () => (t?.emojiId != null ? o.Ay.getUsableCustomEmojiById(t.emojiId) : null));
    return (0, l.jsxs)("div", {
        className: d.kL,
        children: [
            (0, l.jsxs)("div", {
                className: d.rf,
                children: [
                    (0, l.jsxs)("div", {
                        className: d.lm,
                        children: [
                            (0, l.jsx)(u, { width: "100%", marginBottom: 8 }),
                            (0, l.jsx)(u, { width: "80%", marginBottom: 16 }),
                            (0, l.jsx)(u, { width: "50%", marginBottom: 8 }),
                            (0, l.jsx)(u, { width: "60%", marginBottom: 16 }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: d.oW }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: d.qr,
                children: [
                    (0, l.jsxs)("div", {
                        className: d.mJ,
                        children: [
                            null != t
                                ? (0, l.jsx)(r.A, {
                                      className: d.Ys,
                                      emojiId: t.emojiId,
                                      emojiName: t.emojiName,
                                      animated: !!n?.animated,
                                  })
                                : (0, l.jsx)(s.n, { size: "sm", color: "currentColor", className: d.Ys }),
                            (0, l.jsx)(a.E, {
                                variant: "text-sm/semibold",
                                color: "interactive-text-default",
                                children: 17,
                            }),
                        ],
                    }),
                    (0, l.jsx)(u, { width: "24px", marginBottom: 0 }),
                    (0, l.jsx)("div", { className: d.Om }),
                    (0, l.jsx)(u, { width: "24px", marginBottom: 0 }),
                ],
            }),
        ],
    });
}
function u(e) {
    let { width: t, marginBottom: n } = e;
    return (0, l.jsx)("div", { className: d.E3, style: { width: t, marginBottom: n } });
}
