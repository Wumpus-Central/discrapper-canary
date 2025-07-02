t.a(e, async function (e, r) {
    try {
        t.d(n, { d: () => _ });
        var l = t(255367);
        t(73800);
        var i = t(926302),
            c = t(442837),
            o = t(339085),
            u = t(633302),
            a = t(590956),
            d = t(488968),
            s = t(176354),
            f = e([i]);
        function _(e) {
            let { value: n, type: t } = e,
                r = (0, i.Kq)(),
                c = 1 === r.length && 'paragraph' === r[0].type && 1 === r[0].value.length && 'emoji' === r[0].value[0].type;
            switch (t) {
                case 'unicode':
                    return (0, l.jsx)(h, {
                        value: n,
                        jumboable: c
                    });
                case 'custom':
                    return (0, l.jsx)(b, {
                        value: n,
                        jumboable: c
                    });
            }
        }
        function h(e) {
            let { value: n, jumboable: t } = e,
                r = s.ZP.getURL(n),
                i = u.ZP.convertSurrogateToName(n),
                c = (0, d.d)();
            return (0, l.jsx)(a.c, {
                node: {
                    name: i,
                    src: r,
                    jumboable: t
                },
                channelId: null == c ? void 0 : c.channelId,
                messageId: null == c ? void 0 : c.messageId
            });
        }
        function b(e) {
            var n;
            let { value: t, jumboable: r } = e,
                i = (0, d.d)(),
                u = null == i ? void 0 : i.guildId,
                s = (0, c.e7)([o.ZP], () => o.ZP.getDisambiguatedEmojiContext(u).getById(t.id), [u, t.id]),
                f = null != (n = null == s ? void 0 : s.name) ? n : t.name;
            return (
                null != s && s.require_colons && (f = ':'.concat(s.name, ':')),
                (0, l.jsx)(a.Y, {
                    node: {
                        name: f,
                        animated: t.animated,
                        emojiId: t.id,
                        jumboable: r
                    },
                    channelId: null == i ? void 0 : i.channelId,
                    messageId: null == i ? void 0 : i.messageId
                })
            );
        }
        ((i = (f.then ? (await f)() : f)[0]), r());
    } catch (e) {
        r(e);
    }
});
