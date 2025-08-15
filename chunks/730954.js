n.d(t, { Z: () => a }), n(997841);
var r = n(904245),
    i = n(667204),
    l = n(959517);
function a(e, t, n) {
    var a, o;
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if ((r.Z.deleteMessage(e.id, t.id, !0), t.isCommandType())) {
        null != t.interactionData && null != s.applicationId && (0, i.d)(t, e, s);
        return;
    }
    let { content: c, tts: u, messageReference: d, flags: f, nonce: g } = t;
    r.Z.sendMessage(
        e.id,
        {
            content: c,
            tts: u,
            invalidEmojis: [],
            validNonShortcutEmojis: [],
        },
        void 0,
        ((a = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                nonce: g,
                flags: f,
                messageReference: null != d ? d : void 0,
            },
            s,
        )),
        (o = o = { location: l.dy.RETRY }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(o)).forEach(function (e) {
                  Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
              }),
        a),
    );
}
