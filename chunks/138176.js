n.d(t, { F: () => p });
var r = n(54381);
n(473749);
var i = n(907862),
    l = n(481060),
    a = n(100527),
    s = n(626135),
    o = n(93237),
    c = n(981631),
    u = n(388032),
    d = n(295234);
let p = (e) => {
    let { targetElementRef: t } = e,
        p = (0, o.eW)(),
        f = () => {
            (0, o.ZL)();
        };
    return (0, r.jsx)(i.J2, {
        targetElementRef: t,
        title: u.intl.string(u.t.K2DyeS),
        body: u.intl.string(u.t["JICo+3"]),
        graphic: {
            type: "image",
            src: d.Z,
        },
        size: "md",
        shouldShow: p,
        align: "top",
        position: "right",
        gradientColor: "nitro-pink",
        caretConfig: { align: "start" },
        actions: [
            {
                text: u.intl.string(u.t.t2N81y),
                onClick: () => {
                    s.default.track(c.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                        location_stack: [a.Z.HOME_PAGE_PREMIUM_TAB],
                    }),
                        f(),
                        (0, l.ZDy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 656139));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
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
                                    })({}, t),
                                );
                        });
                },
            },
        ],
        onRequestClose: f,
    });
};
