t.d(n, { z: () => d });
var l = t(477900);
t(582128);
var r = t(17928),
    a = t(236285),
    u = t(7584),
    i = t(930101),
    s = t(78377),
    c = t(690521),
    o = t(197531);
function d(e) {
    let { value: n, type: t } = e,
        r = (0, o.DW)();
    switch (t) {
        case "unicode":
            return (0, l.jsx)(h, { value: n, jumboable: r });
        case "custom":
            return (0, l.jsx)(v, { value: n, jumboable: r });
    }
}
function h(e) {
    let { value: n, jumboable: t } = e,
        r = c.Ay.getURL(n),
        a = u.Ay.convertSurrogateToName(n),
        o = (0, s.p)();
    return (0, l.jsx)(i.H, {
        node: { name: a, src: r, jumboable: t },
        channelId: o?.channelId,
        messageId: o?.messageId,
    });
}
function v(e) {
    let { value: n, jumboable: t } = e,
        u = (0, s.p)(),
        c = u?.guildId,
        o = (0, r.bG)([a.Ay], () => a.Ay.getDisambiguatedEmojiContext(c).getById(String(n.id)), [c, n.id]),
        d = o?.name ?? n.name;
    return (
        null != o && o.require_colons && (d = `:${o.name}:`),
        (0, l.jsx)(i.X, {
            node: { name: d, animated: n.animated, emojiId: String(n.id), jumboable: t },
            channelId: u?.channelId,
            messageId: u?.messageId,
        })
    );
}
