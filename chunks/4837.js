t.a(e, async function (e, r) {
    try {
        t.d(n, {
            z: () => m,
        });
        var l = t(627968);
        t(64700);
        var c = t(223535),
            a = t(311907),
            i = t(508675),
            s = t(7584),
            o = t(930101),
            u = t(78377),
            d = t(690521),
            h = e([c]);

        function m(e) {
            let { value: n, type: t } = e,
                r = (0, c.ER)(),
                a =
                    1 === r.length &&
                    "paragraph" === r[0].type &&
                    1 === r[0].value.length &&
                    "emoji" === r[0].value[0].type;
            switch (t) {
                case "unicode":
                    return (0, l.jsx)(j, {
                        value: n,
                        jumboable: a,
                    });
                case "custom":
                    return (0, l.jsx)(p, {
                        value: n,
                        jumboable: a,
                    });
            }
        }

        function j(e) {
            let { value: n, jumboable: t } = e,
                r = d.Ay.getURL(n),
                c = s.Ay.convertSurrogateToName(n),
                a = (0, u.p)();
            return (0, l.jsx)(o.H, {
                node: {
                    name: c,
                    src: r,
                    jumboable: t,
                },
                channelId: null == a ? void 0 : a.channelId,
                messageId: null == a ? void 0 : a.messageId,
            });
        }

        function p(e) {
            var n;
            let { value: t, jumboable: r } = e,
                c = (0, u.p)(),
                s = null == c ? void 0 : c.guildId,
                d = (0, a.bG)([i.Ay], () => i.Ay.getDisambiguatedEmojiContext(s).getById(t.id), [s, t.id]),
                h = null != (n = null == d ? void 0 : d.name) ? n : t.name;
            return (
                null != d && d.require_colons && (h = ":".concat(d.name, ":")),
                (0, l.jsx)(o.X, {
                    node: {
                        name: h,
                        animated: t.animated,
                        emojiId: t.id,
                        jumboable: r,
                    },
                    channelId: null == c ? void 0 : c.channelId,
                    messageId: null == c ? void 0 : c.messageId,
                })
            );
        }
        (c = (h.then ? (await h)() : h)[0]), r();
    } catch (e) {
        r(e);
    }
});
