var l = t(477900);
t(582128);
var a = t(192308),
    i = t(332173),
    r = t(37632),
    s = t(665303),
    o = t(897898),
    c = t(734057),
    u = t(987877),
    d = t(143145);
function m(e) {
    let { node: n, output: t, state: m, options: h } = e,
        p = c.A.getChannel(n.channelId),
        x = m.noStyleAndInteraction
            ? void 0
            : (e) => {
                  (h.shouldStopPropagation && e?.stopPropagation(),
                      (0, u.o)(n.guildId, n.channelId, n.messageId, n.conversationId),
                      h.shouldCloseDefaultModals && (0, a.s7)());
              },
        g = (0, s.A)({ channelId: n.channelId, originalLink: n.originalLink, messageId: n.messageId }),
        j = !m.noStyleAndInteraction && null != n.channelId && (null != p || null != n.originalLink),
        f = j && null != p && null == n.messageId;
    return (0, l.jsxs)(
        i.A,
        {
            role: "link",
            onClick: x,
            onContextMenu: j ? g : void 0,
            onMouseDown: f ? o.q : void 0,
            onAuxClick: f ? (e) => (0, o.A)(e, p) : void 0,
            className: "channelMention",
            children: [
                null != n.inContent ? t(n.inContent, m) : null,
                null != n.inContent ? (0, l.jsx)(r.A, {}) : null,
                (0, d.tj)(n, t, m),
            ],
        },
        m.key,
    );
}
t.d(
    n,
    {},
    {
        A: function (e) {
            return { react: (n, t, a) => (0, l.jsx)(m, { node: n, output: t, state: a, options: e }) };
        },
    },
);
