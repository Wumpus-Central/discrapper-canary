n.d(t, { A: () => r }), n(938796);
var i = n(720149),
    l = n(545152),
    a = n(381941);
function r(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if ((i.A.deleteMessage(e.id, t.id, !0), t.isCommandType())) {
        null != t.interactionData && null != r.applicationId && (0, l.x)(t, e, r);
        return;
    }
    let { content: s, tts: o, messageReference: c, flags: d, nonce: u } = t;
    i.A.sendMessage(e.id, { content: s, tts: o, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
        nonce: u,
        flags: d,
        messageReference: c ?? void 0,
        ...r,
        location: a.Hx.RETRY,
    });
}
