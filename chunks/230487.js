n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(740492),
    a = n(626135),
    o = n(358085),
    s = n(998502),
    c = n(258220),
    u = n(981631);
let d = 'activity-hardware-acceleration-modal';
function p(e) {
    l.ZP.disableActivityHardwareAccelerationPrompt ||
        !o.isPlatformEmbedded ||
        s.ZP.getEnableHardwareAcceleration() ||
        (0, i.ZDy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 258220));
                return (n) =>
                    (0, r.jsx)(
                        t,
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
                        })({ applicationId: e }, n)
                    );
            },
            {
                modalKey: d,
                onCloseRequest: () => {
                    a.default.track(u.rMx.MODAL_DISMISSED, { type: c.r }), (0, i.Mr3)(d);
                }
            }
        );
}
