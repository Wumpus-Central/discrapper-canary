(n.d(t, { A: () => s }), n(938796));
var i = n(148494),
    l = n(545152),
    a = n(381941);
function s(e, t, n) {
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if ((i.A.deleteMessage(e.id, t.id, !0), t.isCommandType())) {
        null != t.interactionData && null != s.applicationId && (0, l.x)(t, e, s);
        return;
    }
    let { content: r, tts: o, messageReference: c, flags: d, nonce: u } = t;
    i.A.sendMessage(e.id, { content: r, tts: o, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
        nonce: u,
        flags: d,
        messageReference: c ?? void 0,
        ...s,
        location: a.Hx.RETRY,
    });
}
