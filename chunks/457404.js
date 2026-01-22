n.d(t, {
    e: () => u,
});
var r = n(627968),
    l = n(64700),
    i = n(990078),
    a = n(397927),
    s = n(245205),
    o = n(985018);
let c = (e) => {
        let { item: t, closePopout: n } = e;
        return (0, r.jsx)(a.W1t, {
            navId: "notification-actions",
            onClose: n,
            onSelect: n,
            "aria-label": o.intl.string(o.t.ljs3Oe),
            children: (0, r.jsx)(a.Drp, {
                id: "delete",
                label: o.intl.string(o.t.oyYWHE),
                icon: a.ucK,
                action: async () => {
                    await (0, s.VP)(t);
                },
            }),
        });
    },
    u = l.memo(function (e) {
        let { item: t } = e,
            n = l.useRef(null);
        return (0, r.jsx)(a.YNO, {
            targetElementRef: n,
            renderPopout: (e) => {
                var n, l;
                return (0, r.jsx)(
                    c,
                    ((n = (function (e) {
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
                    })({}, e)),
                    (l = l =
                        {
                            item: t,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    n),
                );
            },
            position: "bottom",
            align: "right",
            animation: a.YNO.Animation.NONE,
            children: (e) => {
                let { onClick: t } = e;
                return (0, r.jsx)(i.m, {
                    text: o.intl.string(o.t["UKOtz+"]),
                    asContainer: !0,
                    children: (0, r.jsx)(a.K0, {
                        buttonRef: n,
                        size: "sm",
                        icon: a.jNK,
                        variant: "icon-only",
                        "aria-label": o.intl.string(o.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        onClick: (e) => {
                            e.stopPropagation(), t(e);
                        },
                        role: "button",
                    }),
                });
            },
        });
    });
