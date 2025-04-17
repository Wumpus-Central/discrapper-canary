n.d(t, {
    M: () => a,
    s: () => l
});
var r = n(200651);
n(192379);
var i = n(481060);
let l = 'command-share-modal';
function a(e) {
    let { applicationId: t, channel: a, command: o, previewMessage: s, requireLaunchChannel: c, contextKey: u, onShareResult: d } = e;
    (0, i.ZDy)(
        async () => {
            let { ApplicationCommandShareModal: e } = await n.e('53682').then(n.bind(n, 683958));
            return (n) =>
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
                    })(
                        {
                            applicationId: t,
                            channel: a,
                            command: o,
                            previewMessage: s,
                            onShareResult: d,
                            requireLaunchChannel: c
                        },
                        n
                    )
                );
        },
        {
            modalKey: l,
            contextKey: u,
            onCloseCallback: () => {
                d(!1);
            }
        }
    );
}
