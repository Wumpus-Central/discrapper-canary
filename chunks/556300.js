var l = t(477900);
t(582128);
var a = t(192308),
    i = t(332173),
    r = t(37632),
    s = t(665303),
    o = t(734057),
    c = t(987877),
    u = t(143145);
function d(e) {
    let { node: n, output: t, state: d, options: m } = e,
        h = o.A.getChannel(n.channelId),
        p = d.noStyleAndInteraction
            ? void 0
            : (e) => {
                  (m.shouldStopPropagation && e?.stopPropagation(),
                      (0, c.o)(n.guildId, n.channelId, n.messageId, n.conversationId),
                      m.shouldCloseDefaultModals && (0, a.s7)());
              },
        x = (0, s.A)({ channelId: n.channelId, originalLink: n.originalLink, messageId: n.messageId }),
        j = !d.noStyleAndInteraction && null != n.channelId && (null != h || null != n.originalLink);
    return (0, l.jsxs)(
        i.A,
        {
            role: "link",
            onClick: p,
            onContextMenu: j ? x : void 0,
            className: "channelMention",
            children: [
                null != n.inContent ? t(n.inContent, d) : null,
                null != n.inContent ? (0, l.jsx)(r.A, {}) : null,
                (0, u.tj)(n, t, d),
            ],
        },
        d.key,
    );
}
t.d(
    n,
    {},
    {
        A: function (e) {
            return { react: (n, t, a) => (0, l.jsx)(d, { node: n, output: t, state: a, options: e }) };
        },
    },
);
