n.d(t, {
    M: () => s,
    s: () => o
});
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(522474),
    a = n(981631);
let o = 'command-share-modal';
function s(e) {
    let { applicationId: t, channel: s, command: c, previewMessage: u, requireLaunchChannel: d, onShareResult: p } = e,
        h = l.Z.getWindowOpen(a.KJ3.ACTIVITY_POPOUT) ? i.u1M : i.z1l;
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
                            channel: s,
                            command: c,
                            previewMessage: u,
                            onShareResult: p,
                            requireLaunchChannel: d
                        },
                        n
                    )
                );
        },
        {
            modalKey: o,
            contextKey: h,
            onCloseCallback: () => {
                p(!1);
            }
        }
    );
}
