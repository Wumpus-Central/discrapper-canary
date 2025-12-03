n.d(t, { Z: () => u }), n(415506);
var r = n(54381);
n(473749);
var i = n(248514),
    a = n(481060),
    o = n(981631),
    s = n(388032);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = {
    openSecureFramesStreamVerification: function (e, t) {
        (0, a.ZDy)(async () => {
            let i = (await n.e("94904").then(n.bind(n, 660250))).default;
            return (n) =>
                (0, r.jsx)(
                    i,
                    c(
                        {
                            streamKey: e,
                            channelId: t,
                        },
                        n,
                    ),
                );
        });
    },
    openSecureFramesUserVerificationModal: function (e, t, i, s) {
        i() &&
            (0, a.ZDy)(
                async () => {
                    let i = (await n.e("33397").then(n.bind(n, 963410))).default;
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            c(
                                {
                                    userId: e,
                                    channelId: t,
                                },
                                n,
                            ),
                        );
                },
                { contextKey: s === o.IlC.POPOUT ? a.u1M : a.z1l },
            );
    },
    openSecureFramesUpdateConfirmation: function (e) {
        let { title: t, subtitle: n, confirmText: r = s.intl.string(s.t["cY+Oob"]), onConfirm: a } = e;
        (0, i.Z)({
            title: t,
            subtitle: n,
            confirmText: r,
            onConfirm: a,
        });
    },
    handleSecureFramesUserVerificationLink: function (e) {
        throw Error("handleSecureFramesUserVerificationLink not implemented");
    },
};
