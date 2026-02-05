n.d(t, { b: () => E });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(397927),
    u = n(46054),
    o = n(190012),
    d = n(465364),
    c = n(665524);
function h(e) {
    let { icon: t, ...n } = e;
    switch (t) {
        case "image":
            return (0, l.jsx)(a.xfq, { ...n });
        case "video":
            return (0, l.jsx)(a.npA, { ...n });
        case "audio":
            return (0, l.jsx)(a.T7G, { ...n });
        case "attachment":
            return (0, l.jsx)(a.PtA, { ...n });
        case "link":
            return (0, l.jsx)(a.qYV, { ...n });
        case "sticker":
            return (0, l.jsx)(a.tEP, { ...n });
        case "call-active":
            return (0, l.jsx)(a._jp, { ...n });
        case "call-ended":
            return (0, l.jsx)(a.zWQ, { ...n });
    }
}
let g = i.memo(function (e) {
        let { message: t } = e;
        return (0, d.Ay)(t, { formatInline: !0, noStyleAndInteraction: !0 }).content;
    }),
    I = i.memo(function (e) {
        let { markup: t, channelId: n } = e;
        return (0, d.jp)(u.A.parseInlineReply, { content: t, channelId: n });
    });
function E(e) {
    let t,
        { channel: n, message: i } = e,
        s = (0, o.BC)(i, n);
    if (null == s) return null;
    let { authorLabel: a, color: u, trailingIcon: d } = s;
    return (
        "text" === s.type
            ? (t = s.text)
            : "markup" === s.type
              ? (t = (0, l.jsx)(I, { markup: s.markup, channelId: i.channel_id }))
              : "message" === s.type && (t = (0, l.jsx)(g, { message: s.message })),
        (0, l.jsxs)("div", {
            className: r()(c.Sl, { [c.Vz]: "text-feedback-positive" === u }),
            children: [
                (0, l.jsxs)("span", { className: c.BK, children: [null != a && `${a}: `, t] }),
                null != d && (0, l.jsx)(h, { icon: d, size: "xxs", color: "currentColor", className: c.sl }),
            ],
        })
    );
}
