n.d(t, {
    F: () => E,
    X: () => y,
});
var r = n(255367);
n(73800);
var i = n(920155),
    l = n(744399),
    a = n(454028),
    o = n(966902),
    s = n(237872),
    c = n(562618),
    u = n(481060),
    d = n(100527),
    p = n(626135),
    f = n(93237),
    h = n(981631),
    g = n(388032),
    m = n(20456),
    b = n(712793),
    _ = n(295234);
function O(e) {
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
let E = (e) => {
        let { targetElementRef: t } = e,
            m = (0, f.eW)(),
            b = () => {
                (0, f.ZL)();
            };
        return (0, r.jsxs)(i.m, {
            targetElementRef: t,
            shouldShow: m,
            align: "top",
            position: "right",
            gradientColor: "nitro-pink",
            children: [
                (0, r.jsx)(s.u, {
                    onClick: b,
                    colorMix: !0,
                }),
                (0, r.jsx)(a.V, {
                    asset: (0, r.jsx)("img", {
                        src: _.Z,
                        alt: "",
                    }),
                    size: "md",
                }),
                (0, r.jsx)(c.Y, {
                    title: g.intl.string(g.t.K2DyeX),
                    body: g.intl.string(g.t["JICo+/"]),
                }),
                (0, r.jsx)(l.k, {
                    actions: [
                        {
                            text: g.intl.string(g.t.t2N819),
                            onClick: () => {
                                p.default.track(h.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                    location_stack: [d.Z.HOME_PAGE_PREMIUM_TAB],
                                }),
                                    b(),
                                    (0, u.ZDy)(async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("83667"),
                                            n.e("84533"),
                                            n.e("27311"),
                                        ]).then(n.bind(n, 656139));
                                        return (t) => (0, r.jsx)(e, O({}, t));
                                    });
                            },
                        },
                    ],
                }),
                (0, r.jsx)(o.$, {
                    caretConfig: {
                        position: "left",
                        align: "start",
                    },
                }),
            ],
        });
    },
    y = (e) => {
        let { children: t } = e,
            n = (0, r.jsxs)("div", {
                className: m.flatContainer,
                children: [
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)("img", {
                            src: b.Z,
                            alt: "",
                            className: m.flatImage,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: m.flatContent,
                        children: [
                            (0, r.jsx)(u.X6q, {
                                variant: "heading-md/semibold",
                                children: g.intl.string(g.t.K2DyeX),
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                color: "text-secondary",
                                children: g.intl.string(g.t["JICo+/"]),
                            }),
                        ],
                    }),
                ],
            });
        return (0, r.jsx)(u.ua7, {
            tooltipClassName: m.flatContainerTooltip,
            tooltipContentClassName: m.flatContainerTooltipContent,
            text: n,
            position: "right",
            "aria-label": g.intl.string(g.t.t2N819),
            allowOverflow: !0,
            children: (e) => {
                var n, i;
                return (0, r.jsx)(
                    "div",
                    ((n = O({}, e)),
                    (i = i = { children: t }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    n),
                );
            },
        });
    };
