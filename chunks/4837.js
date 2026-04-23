t.a(e, async function (e, l) {
    try {
        t.d(n, { z: () => m });
        var r = t(627968);
        t(64700);
        var a = t(223535),
            s = t(17928),
            c = t(159273),
            i = t(7584),
            d = t(930101),
            u = t(78377),
            o = t(690521),
            h = e([a]);
        function m(e) {
            let { value: n, type: t } = e,
                l = (0, a.ER)(),
                s =
                    1 === l.length &&
                    "paragraph" === l[0].type &&
                    1 === l[0].value.length &&
                    "emoji" === l[0].value[0].type;
            switch (t) {
                case "unicode":
                    return (0, r.jsx)(x, { value: n, jumboable: s });
                case "custom":
                    return (0, r.jsx)(j, { value: n, jumboable: s });
            }
        }
        function x(e) {
            let { value: n, jumboable: t } = e,
                l = o.Ay.getURL(n),
                a = i.Ay.convertSurrogateToName(n),
                s = (0, u.p)();
            return (0, r.jsx)(d.H, {
                node: { name: a, src: l, jumboable: t },
                channelId: s?.channelId,
                messageId: s?.messageId,
            });
        }
        function j(e) {
            let { value: n, jumboable: t } = e,
                l = (0, u.p)(),
                a = l?.guildId,
                i = (0, s.bG)([c.Ay], () => c.Ay.getDisambiguatedEmojiContext(a).getById(n.id), [a, n.id]),
                o = i?.name ?? n.name;
            return (
                null != i && i.require_colons && (o = `:${i.name}:`),
                (0, r.jsx)(d.X, {
                    node: { name: o, animated: n.animated, emojiId: n.id, jumboable: t },
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
