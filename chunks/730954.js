n.d(t, { Z: () => l }), n(997841);
var i = n(904245),
    r = n(667204);
function l(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if ((i.Z.deleteMessage(e.id, t.id, !0), t.isCommandType())) {
        null != t.interactionData && null != l.applicationId && (0, r.d)(t, e, l);
        return;
    }
    let { content: a, tts: o, messageReference: s, flags: c, nonce: u } = t;
    i.Z.sendMessage(
        e.id,
        {
            content: a,
            tts: o,
            invalidEmojis: [],
            validNonShortcutEmojis: []
        },
        void 0,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })(
            {
                nonce: u,
                flags: c,
                messageReference: null != s ? s : void 0
            },
            l
        )
    );
}
