t.d(n, { z: () => o });
var l = t(477900);
t(582128);
var r = t(17928),
    a = t(236285),
    i = t(7584),
    s = t(930101),
    c = t(78377),
    u = t(690521),
    d = t(596008);
function o(e) {
    let { value: n, type: t } = e,
        r = (0, d.E)(),
        a = 1 === r.length && "paragraph" === r[0].type && 1 === r[0].value.length && "emoji" === r[0].value[0].type;
    switch (t) {
        case "unicode":
            return (0, l.jsx)(h, { value: n, jumboable: a });
        case "custom":
            return (0, l.jsx)(m, { value: n, jumboable: a });
    }
}
function h(e) {
    let { value: n, jumboable: t } = e,
        r = u.Ay.getURL(n),
        a = i.Ay.convertSurrogateToName(n),
        d = (0, c.p)();
    return (0, l.jsx)(s.H, {
        node: { name: a, src: r, jumboable: t },
        channelId: d?.channelId,
        messageId: d?.messageId,
    });
}
function m(e) {
    let { value: n, jumboable: t } = e,
        i = (0, c.p)(),
        u = i?.guildId,
        d = (0, r.bG)([a.Ay], () => a.Ay.getDisambiguatedEmojiContext(u).getById(String(n.id)), [u, n.id]),
        o = d?.name ?? n.name;
    return (
        null != d && d.require_colons && (o = `:${d.name}:`),
        (0, l.jsx)(s.X, {
            node: { name: o, animated: n.animated, emojiId: String(n.id), jumboable: t },
            channelId: i?.channelId,
            messageId: i?.messageId,
        })
    );
}
