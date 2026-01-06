n.d(t, { x: () => d });
var r = n(54381);
n(473749);
var i = n(907862),
    l = n(481060),
    a = n(282793),
    o = n(921944),
    s = n(353149),
    c = n(388032),
    u = n(731490);
let d = (e) => {
    let { targetElementRef: t, dismissPopover: d, children: p } = e,
        f = (0, r.jsx)(i.J2, {
            targetElementRef: t,
            title: c.intl.format(s.default["c+NBSl"], { premiumGroupProductName: (0, a.sO)() }),
            body: c.intl.format(s.default.MuUV5u, {
                premiumGroupProductName: (0, a.sO)(),
                totalSeats: a.v$,
            }),
            graphic: {
                type: "image",
                src: u,
            },
            badge: {
                type: "beta",
                variant: "expressive",
            },
            size: "md",
            align: "top",
            position: "right",
            caretConfig: { align: "start" },
            actions: [
                {
                    text: c.intl.string(s.default["IO+nlU"]),
                    onClick: () => {
                        d(o.L.TAKE_ACTION),
                            (0, l.ZDy)(async () => {
                                let { default: e } = await n.e("57308").then(n.bind(n, 837244));
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
            onRequestClose: () => d(o.L.USER_DISMISS),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", { children: p }), f],
    });
};
