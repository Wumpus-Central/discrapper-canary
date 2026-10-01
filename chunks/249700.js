(t.d(n, { A: () => r }), t(938796));
var i = t(148494),
    l = t(545152),
    a = t(381941);
function r(e, n, t) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if ((i.A.deleteMessage(e.id, n.id, !0), n.isCommandType())) {
        null != n.interactionData && null != r.applicationId && (0, l.x)(n, e, r);
        return;
    }
    let { content: s, tts: o, messageReference: c, flags: d, nonce: u } = n;
    i.A.sendMessage(e.id, { content: s, tts: o, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
        nonce: u,
        flags: d,
        messageReference: c ?? void 0,
        ...r,
        location: a.Hx.RETRY,
    });
}
