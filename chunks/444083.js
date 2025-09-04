n.d(t, { Z: () => b });
var r = n(951288),
    a = n(647438),
    s = n(481060),
    i = n(239091),
    o = n(100527),
    c = n(809741),
    l = n(473682),
    u = n(401561),
    d = n(388032),
    m = n(587983);
let p = {
    steps: {
        [l.Vb.SERVER_SETTINGS]: {
            onBack: { type: "close" },
            onNext: { type: "save" },
        },
    },
};
function b(e) {
    let { guildId: t, instance: n } = e,
        l = a.useRef(null);
    return (0, r.jsx)(s.yRy, {
        targetElementRef: l,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, r.jsx)(s.v2r, {
                navId: "portkey-popout-context-menu",
                onClose: () => {
                    (0, i.Zy)(), a();
                },
                "aria-label": d.intl.string(u.default.xCq1DA),
                onSelect: void 0,
                children: (0, r.jsxs)(s.kSQ, {
                    children: [
                        (0, r.jsx)(s.sNh, {
                            id: "get-support",
                            icon: s.kBi,
                            label: d.intl.string(u.default["TciV8/"]),
                            action: () => {},
                        }),
                        (0, r.jsx)(s.sNh, {
                            id: "settings",
                            icon: s.ewm,
                            label: d.intl.string(u.default.NUTl4u),
                            action: () => {
                                (0, c.Z)({
                                    guildId: t,
                                    stepConfig: p,
                                    initialPortkeyInstance: n,
                                    analyticsLocation: o.Z.PORTKEY_OVERVIEW,
                                });
                            },
                        }),
                    ],
                }),
            });
        },
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                s.P3F,
                ((t = (function (e) {
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
                        "aria-label": d.intl.string(d.t.UKOtz8),
                        className: m.clickable,
                    },
                    e,
                )),
                (n = n =
                    {
                        innerRef: l,
                        children: (0, r.jsx)(s.xhG, {
                            color: "currentColor",
                            size: "sm",
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            );
        },
    });
}
