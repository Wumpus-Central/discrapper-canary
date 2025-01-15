t.d(n, {
    Z: function () {
        return r;
    }
}),
    t(789020);
var i = t(904245),
    l = t(667204);
function r(e, n, t) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if ((i.Z.deleteMessage(e.id, n.id, !0), n.isCommandType())) {
        null != n.interactionData && null != r.applicationId && (0, l.d)(n, e, r);
        return;
    }
    let { content: a, tts: o, messageReference: s, flags: u, nonce: d } = n;
    i.Z.sendMessage(
        e.id,
        {
            content: a,
            tts: o,
            invalidEmojis: [],
            validNonShortcutEmojis: []
        },
        void 0,
        {
            nonce: d,
            flags: u,
            messageReference: null != s ? s : void 0,
            ...r
        }
    );
}
