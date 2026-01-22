n.d(t, { V: () => p });
var r = n(627968);
n(64700);
var i = n(342494),
    l = n(397927),
    a = n(793574),
    s = n(954571),
    o = n(727949),
    c = n(652215),
    u = n(985018),
    d = n(954457);
let p = (e) => {
    let { targetElementRef: t } = e,
        p = (0, o.Tp)(),
        f = () => {
            (0, o.ne)();
        };
    return (0, r.jsx)(i.AM, {
        targetElementRef: t,
        title: u.intl.string(u.t.K2DyeS),
        body: u.intl.string(u.t["JICo+3"]),
        graphic: {
            type: "image",
            src: d.A,
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
                    s.default.track(c.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                        location_stack: [a.A.HOME_PAGE_PREMIUM_TAB],
                    }),
                        f(),
                        (0, l.mMO)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 303682));
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
