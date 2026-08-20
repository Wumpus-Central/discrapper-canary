t.d(n, { z: () => o });
var l = t(477900);
t(582128);
var r = t(17928),
    a = t(236285),
    s = t(7584),
    i = t(930101),
    c = t(78377),
    d = t(690521),
    u = t(596008);
function o(e) {
    let { value: n, type: t } = e,
        r = (0, u.E)(),
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
        r = d.Ay.getURL(n),
        a = s.Ay.convertSurrogateToName(n),
        u = (0, c.p)();
    return (0, l.jsx)(i.H, {
        node: { name: a, src: r, jumboable: t },
        channelId: u?.channelId,
        messageId: u?.messageId,
    });
}
function m(e) {
    let { value: n, jumboable: t } = e,
        s = (0, c.p)(),
        d = s?.guildId,
        u = (0, r.bG)([a.Ay], () => a.Ay.getDisambiguatedEmojiContext(d).getById(String(n.id)), [d, n.id]),
        o = u?.name ?? n.name;
    return (
        null != u && u.require_colons && (o = `:${u.name}:`),
        (0, l.jsx)(i.X, {
            node: { name: o, animated: n.animated, emojiId: String(n.id), jumboable: t },
            channelId: s?.channelId,
            messageId: s?.messageId,
        })
    );
}
