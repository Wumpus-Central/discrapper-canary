t.a(e, async function (e, l) {
    try {
        t.d(n, { z: () => m });
        var r = t(477900);
        t(582128);
        var a = t(924557),
            i = t(17928),
            s = t(159273),
            c = t(7584),
            d = t(930101),
            u = t(78377),
            o = t(690521),
            h = e([a]);
        function m(e) {
            let { value: n, type: t } = e,
                l = (0, a.ER)(),
                i =
                    1 === l.length &&
                    "paragraph" === l[0].type &&
                    1 === l[0].value.length &&
                    "emoji" === l[0].value[0].type;
            switch (t) {
                case "unicode":
                    return (0, r.jsx)(x, { value: n, jumboable: i });
                case "custom":
                    return (0, r.jsx)(j, { value: n, jumboable: i });
            }
        }
        function x(e) {
            let { value: n, jumboable: t } = e,
                l = o.Ay.getURL(n),
                a = c.Ay.convertSurrogateToName(n),
                i = (0, u.p)();
            return (0, r.jsx)(d.H, {
                node: { name: a, src: l, jumboable: t },
                channelId: i?.channelId,
                messageId: i?.messageId,
            });
        }
        function j(e) {
            let { value: n, jumboable: t } = e,
                l = (0, u.p)(),
                a = l?.guildId,
                c = (0, i.bG)([s.Ay], () => s.Ay.getDisambiguatedEmojiContext(a).getById(String(n.id)), [a, n.id]),
                o = c?.name ?? n.name;
            return (
                null != c && c.require_colons && (o = `:${c.name}:`),
                (0, r.jsx)(d.X, {
                    node: { name: o, animated: n.animated, emojiId: String(n.id), jumboable: t },
                    channelId: l?.channelId,
                    messageId: l?.messageId,
                })
            );
        }
        (a = (h.then ? (await h)() : h)[0]), l();
    } catch (e) {
        l(e);
    }
});
