(t.d(n, { A: () => s }), t(938796));
var i = t(148494),
    l = t(545152),
    a = t(381941);
function s(e, n, t) {
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if ((i.A.deleteMessage(e.id, n.id, !0), n.isCommandType())) {
        null != n.interactionData && null != s.applicationId && (0, l.x)(n, e, s);
        return;
    }
    let { content: r, tts: o, messageReference: c, flags: d, nonce: u } = n;
    i.A.sendMessage(e.id, { content: r, tts: o, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
        nonce: u,
        flags: d,
        messageReference: c ?? void 0,
        ...s,
        location: a.Hx.RETRY,
    });
}
