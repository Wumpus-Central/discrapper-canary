(n.d(t, { Z: () => s }), n(997841));
var r = n(904245),
    i = n(667204);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            }));
    }
    return e;
}
function s(e, t, n) {
    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if ((r.Z.deleteMessage(e.id, t.id, !0), t.isCommandType())) {
        null != t.interactionData && null != o.applicationId && (0, i.d)(t, e, o);
        return;
    }
    let { content: s, tts: l, messageReference: c, flags: u, nonce: d } = t;
    r.Z.sendMessage(
        e.id,
        {
            content: s,
            tts: l,
            invalidEmojis: [],
            validNonShortcutEmojis: []
        },
        void 0,
        a(
            {
                nonce: d,
                flags: u,
                messageReference: null != c ? c : void 0
            },
            o
        )
    );
}
