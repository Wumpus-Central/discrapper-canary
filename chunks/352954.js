n.d(t, { Z: () => u }), n(411104);
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(981631),
    o = n(388032);
function c(e) {
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
}
let u = {
    openSecureFramesStreamVerification: function (e, t) {
        (0, i.ZDy)(async () => {
            let i = (await n.e('94904').then(n.bind(n, 660250))).default;
            return (n) =>
                (0, r.jsx)(
                    i,
                    c(
                        {
                            streamKey: e,
                            channelId: t
                        },
                        n
                    )
                );
        });
    },
    openSecureFramesUserVerificationModal: function (e, t, o, u) {
        o() &&
            (0, i.ZDy)(
                async () => {
                    let i = (await n.e('33397').then(n.bind(n, 963410))).default;
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            c(
                                {
                                    userId: e,
                                    channelId: t
                                },
                                n
                            )
                        );
                },
                { contextKey: u === a.IlC.POPOUT ? i.u1M : i.z1l }
            );
    },
    openSecureFramesUpdateConfirmation: function (e) {
        let { title: t, subtitle: a, confirmText: u = o.NW.string(o.t['cY+Ooa']), onConfirm: l } = e;
        (0, i.ZDy)(async () => {
            let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
            return (n) => {
                var s, E;
                return (0, r.jsx)(
                    e,
                    ((s = c(
                        {
                            header: t,
                            confirmText: u,
                            cancelText: o.NW.string(o.t['ETE/oK']),
                            onConfirm: l
                        },
                        n
                    )),
                    (E = E =
                        {
                            children: (0, r.jsx)(i.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: a
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(E))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(E)).forEach(function (e) {
                              Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(E, e));
                          }),
                    s)
                );
            };
        });
    },
    handleSecureFramesUserVerificationLink: function (e) {
        throw Error('handleSecureFramesUserVerificationLink not implemented');
    }
};
