n.d(t, { Z: () => a }), n(997841);
var r = n(904245),
    i = n(667204);
function a(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if ((r.Z.deleteMessage(e.id, t.id, !0), t.isCommandType())) {
        null != t.interactionData && null != a.applicationId && (0, i.d)(t, e, a);
        return;
    }
    let { content: l, tts: o, messageReference: s, flags: c, nonce: u } = t;
    r.Z.sendMessage(
        e.id,
        {
            content: l,
            tts: o,
            invalidEmojis: [],
            validNonShortcutEmojis: []
        },
        void 0,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                nonce: u,
                flags: c,
                messageReference: null != s ? s : void 0
            },
            a
        )
    );
}
