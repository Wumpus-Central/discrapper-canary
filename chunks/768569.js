n.d(t, {
    p: () => d,
});
var r = n(627968);
n(64700);
var i = n(342494),
    l = n(397927),
    a = n(88001),
    s = n(49999),
    o = n(519412),
    c = n(985018),
    u = n(438705);
let d = (e) => {
    let { targetElementRef: t, dismissPopover: d, children: p } = e,
        f = (0, r.jsx)(i.AM, {
            targetElementRef: t,
            title: c.intl.format(o.default["c+NBSl"], {
                premiumGroupProductName: (0, a.DP)(),
            }),
            body: c.intl.format(o.default.MuUV5u, {
                premiumGroupProductName: (0, a.DP)(),
                totalSeats: a.aw,
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
            caretConfig: {
                align: "start",
            },
            actions: [
                {
                    text: c.intl.string(o.default["IO+nlU"]),
                    onClick: () => {
                        d(s.i.TAKE_ACTION),
                            (0, l.mMO)(async () => {
                                let { default: e } = await n.e("91976").then(n.bind(n, 526710));
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
            onRequestClose: () => d(s.i.USER_DISMISS),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                children: p,
            }),
            f,
        ],
    });
};
