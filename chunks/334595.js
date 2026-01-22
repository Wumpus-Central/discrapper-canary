n.d(t, {
    A: () => p,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(964404),
    a = n(954571),
    s = n(723702),
    o = n(837921),
    c = n(845187),
    u = n(652215);
let d = "activity-hardware-acceleration-modal";

function p(e) {
    l.Ay.disableActivityHardwareAccelerationPrompt ||
        !s.isPlatformEmbedded ||
        o.Ay.getEnableHardwareAcceleration() ||
        (0, i.mMO)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 845187));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        (function (e) {
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
                                applicationId: e,
                            },
                            n,
                        ),
                    );
            },
            {
                modalKey: d,
                onCloseRequest: () => {
                    a.default.track(u.HAw.MODAL_DISMISSED, {
                        type: c.a,
                    }),
                        (0, i.OoC)(d);
                },
            },
        );
}
