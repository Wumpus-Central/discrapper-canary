t.a(e, async function (e, r) {
    try {
        t.d(n, { d: () => j });
        var l = t(54381);
        t(473749);
        var c = t(126579),
            a = t(442837),
            i = t(339085),
            o = t(633302),
            s = t(590956),
            u = t(488968),
            d = t(176354),
            h = e([c]);
        function j(e) {
            let { value: n, type: t } = e,
                r = (0, c.Kq)(),
                a =
                    1 === r.length &&
                    "paragraph" === r[0].type &&
                    1 === r[0].value.length &&
                    "emoji" === r[0].value[0].type;
            switch (t) {
                case "unicode":
                    return (0, l.jsx)(m, {
                        value: n,
                        jumboable: a,
                    });
                case "custom":
                    return (0, l.jsx)(f, {
                        value: n,
                        jumboable: a,
                    });
            }
        }
        function m(e) {
            let { value: n, jumboable: t } = e,
                r = d.ZP.getURL(n),
                c = o.ZP.convertSurrogateToName(n),
                a = (0, u.d)();
            return (0, l.jsx)(s.c, {
                node: {
                    name: c,
                    src: r,
                    jumboable: t,
                },
                channelId: null == a ? void 0 : a.channelId,
                messageId: null == a ? void 0 : a.messageId,
            });
        }
        function f(e) {
            var n;
            let { value: t, jumboable: r } = e,
                c = (0, u.d)(),
                o = null == c ? void 0 : c.guildId,
                d = (0, a.e7)([i.ZP], () => i.ZP.getDisambiguatedEmojiContext(o).getById(t.id), [o, t.id]),
                h = null != (n = null == d ? void 0 : d.name) ? n : t.name;
            return (
                null != d && d.require_colons && (h = ":".concat(d.name, ":")),
                (0, l.jsx)(s.Y, {
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
