n.d(t, {
    i: () => l,
    y: () => a
});
var r = n(200651),
    i = n(481060);
let s = 'EMOJI_STUDIO_MODAL_KEY',
    l = () => {
        (0, i.ZDy)(
            async () => {
                let { EmojiStudioModal: e } = await n.e('78331').then(n.bind(n, 311770));
                return (t) =>
                    (0, r.jsx)(
                        e,
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
                        })({}, t)
                    );
            },
            { modalKey: s }
        );
    },
    a = () => {
        (0, i.Mr3)(s);
    };
