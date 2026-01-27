n.d(t, {
    A: () => u,
}),
    n(65821);
var r = n(627968);
n(64700);
var i = n(314116),
    a = n(397927),
    o = n(652215),
    l = n(985018);

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
}
let u = {
    openSecureFramesStreamVerification: function (e, t) {
        (0, a.mMO)(async () => {
            let i = (await n.e("46115").then(n.bind(n, 773262))).default;
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
    openSecureFramesUserVerificationModal: function (e, t, i, l) {
        i() &&
            (0, a.mMO)(
                async () => {
                    let i = (await n.e("16674").then(n.bind(n, 632441))).default;
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
                {
                    contextKey: l === o.BRT.POPOUT ? a.KX8 : a.SYi,
                },
            );
    },
    openSecureFramesUpdateConfirmation: function (e) {
        let { title: t, subtitle: n, confirmText: r = l.intl.string(l.t["cY+Oob"]), onConfirm: a } = e;
        (0, i.A)({
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
