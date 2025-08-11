n.d(t, { Z: () => u }), n(997841);
var r = n(904245),
    i = n(667204),
    o = n(959517);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if ((r.Z.deleteMessage(e.id, t.id, !0), t.isCommandType())) {
        null != t.interactionData && null != a.applicationId && (0, i.d)(t, e, a);
        return;
    }
    let { content: l, tts: u, messageReference: d, flags: f, nonce: _ } = t;
    r.Z.sendMessage(
        e.id,
        {
            content: l,
            tts: u,
            invalidEmojis: [],
            validNonShortcutEmojis: [],
        },
        void 0,
        c(
            s(
                {
                    nonce: _,
                    flags: f,
                    messageReference: null != d ? d : void 0,
                },
                a,
            ),
            { location: o.dy.RETRY },
        ),
    );
}
