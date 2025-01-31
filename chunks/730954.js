n.d(t, { Z: () => a }), n(789020);
var i = n(904245),
    l = n(667204);
function a(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if ((i.Z.deleteMessage(e.id, t.id, !0), t.isCommandType())) {
        null != t.interactionData && null != a.applicationId && (0, l.d)(t, e, a);
        return;
    }
    let { content: s, tts: r, messageReference: o, flags: d, nonce: c } = t;
    i.Z.sendMessage(
        e.id,
        {
            content: s,
            tts: r,
            invalidEmojis: [],
            validNonShortcutEmojis: []
        },
        void 0,
        {
            nonce: c,
            flags: d,
            messageReference: null != o ? o : void 0,
            ...a
        }
    );
}
