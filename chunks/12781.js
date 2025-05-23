t.a(e, async function (e, r) {
    try {
        t.d(n, { d: () => _ });
        var l = t(255367);
        t(73800);
        var i = t(318569),
            o = t(442837),
            u = t(339085),
            c = t(633302),
            a = t(590956),
            d = t(488968),
            s = t(176354),
            f = e([i]);
        function _(e) {
            let { value: n, type: t } = e,
                r = (0, i.Kq)(),
                o = 1 === r.length && 'paragraph' === r[0].type && 1 === r[0].value.length && 'emoji' === r[0].value[0].type;
            switch (t) {
                case 'unicode':
                    return (0, l.jsx)(g, {
                        value: n,
                        jumboable: o
                    });
                case 'custom':
                    return (0, l.jsx)(h, {
                        value: n,
                        jumboable: o
                    });
            }
        }
        function g(e) {
            let { value: n, jumboable: t } = e,
                r = s.ZP.getURL(n),
                i = c.ZP.convertSurrogateToName(n),
                o = (0, d.d)();
            return (0, l.jsx)(a.c, {
                node: {
                    name: i,
                    src: r,
                    jumboable: t
                },
                channelId: null == o ? void 0 : o.channelId,
                messageId: null == o ? void 0 : o.messageId
            });
        }
        function h(e) {
            var n;
            let { value: t, jumboable: r } = e,
                i = (0, d.d)(),
                c = null == i ? void 0 : i.guildId,
                s = (0, o.e7)([u.ZP], () => u.ZP.getDisambiguatedEmojiContext(c).getById(t.id), [c, t.id]),
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
        (i = (f.then ? (await f)() : f)[0]), r();
    } catch (e) {
        r(e);
    }
});
