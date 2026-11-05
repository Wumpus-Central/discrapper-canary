t(938796);
var i = t(138399),
    l = t(545152),
    a = t(381941);
t.d(
    n,
    {},
    {
        A: function (e, n, t) {
            let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if ((i.A.deleteMessage(e.id, n.id, !0), n.isCommandType())) {
                null != n.interactionData && null != o.applicationId && (0, l.x)(n, e, o);
                return;
            }
            let { content: r, tts: s, messageReference: c, flags: d, nonce: u } = n;
            i.A.sendMessage(e.id, { content: r, tts: s, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
                nonce: u,
                flags: d,
                messageReference: c ?? void 0,
                ...o,
                location: a.Hx.RETRY,
            });
        },
    },
);
