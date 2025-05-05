t.d(n, { d: () => d });
var r = t(255367);
t(73800);
var l = t(442837),
    i = t(339085),
    u = t(633302),
    c = t(590956),
    o = t(488968),
    a = t(176354);
function d(e) {
    let { value: n, type: t } = e;
    switch (t) {
        case 'unicode':
            return (0, r.jsx)(s, { value: n });
        case 'custom':
            return (0, r.jsx)(f, { value: n });
    }
}
function s(e) {
    let { value: n } = e,
        t = a.ZP.getURL(n),
        l = u.ZP.convertSurrogateToName(n),
        i = (0, o.d)();
    return (0, r.jsx)(c.c, {
        node: {
            name: l,
            src: t
        },
        channelId: null == i ? void 0 : i.channelId,
        messageId: null == i ? void 0 : i.messageId
    });
}
function f(e) {
    var n;
    let { value: t } = e,
        u = (0, o.d)(),
        a = null == u ? void 0 : u.guildId,
        d = (0, l.e7)([i.ZP], () => i.ZP.getDisambiguatedEmojiContext(a).getById(t.id), [a, t.id]),
        s = null != (n = null == d ? void 0 : d.name) ? n : t.name;
    return (
        null != d && d.require_colons && (s = ':'.concat(d.name, ':')),
        (0, r.jsx)(c.Y, {
            node: {
                name: s,
                animated: t.animated,
                emojiId: t.id
            },
            channelId: null == u ? void 0 : u.channelId,
            messageId: null == u ? void 0 : u.messageId
        })
    );
}
