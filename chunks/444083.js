t.d(n, { Z: () => f });
var a = t(951288),
    r = t(647438),
    i = t(481060),
    s = t(239091),
    o = t(100527),
    l = t(639777),
    c = t(809741),
    d = t(473682),
    u = t(440589),
    b = t(388032),
    m = t(412247);
let g = {
    steps: {
        [d.Vb.SERVER_SETTINGS]: {
            onBack: { type: "close" },
            onNext: { type: "save" },
        },
    },
};
function f(e) {
    let { guildId: n, instance: t } = e,
        d = r.useRef(null),
        f = (0, l.Z)(n);
    return (0, a.jsx)(i.yRy, {
        targetElementRef: d,
        align: "top",
        position: "right",
        animationPosition: "bottom",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(i.v2r, {
                navId: "portkey-popout-context-menu",
                onClose: () => {
                    (0, s.Zy)(), r();
                },
                "aria-label": b.intl.string(u.default.xCq1DA),
                onSelect: void 0,
                children: (0, a.jsxs)(i.kSQ, {
                    children: [
                        (0, a.jsx)(i.sNh, {
                            id: "get-support",
                            icon: i.kBi,
                            label: b.intl.string(u.default["TciV8/"]),
                            action: () => {},
                        }),
                        f &&
                            (0, a.jsx)(i.sNh, {
                                id: "settings",
                                icon: i.ewm,
                                label: b.intl.string(u.default.NUTl4u),
                                action: () => {
                                    (0, c.Z)({
                                        guildId: n,
                                        stepConfig: g,
                                        initialPortkeyInstance: t,
                                        analyticsLocation: o.Z.PORTKEY_OVERVIEW,
                                    });
                                },
                            }),
                    ],
                }),
            });
        },
        children: (e) => {
            var n, t;
            return (0, a.jsx)(
                i.P3F,
                ((n = (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            a = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                }),
                            )),
                            a.forEach(function (n) {
                                var a;
                                (a = t[n]),
                                    n in e
                                        ? Object.defineProperty(e, n, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[n] = a);
                            });
                    }
                    return e;
                })(
                    {
                        "aria-label": b.intl.string(b.t.UKOtz8),
                        className: m.clickable,
                    },
                    e,
                )),
                (t = t =
                    {
                        innerRef: d,
                        children: (0, a.jsx)(i.xhG, {
                            color: "currentColor",
                            size: "sm",
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                    : (function (e, n) {
                          var t = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              t.push.apply(t, a);
                          }
                          return t;
                      })(Object(t)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                      }),
                n),
            );
        },
    });
}
