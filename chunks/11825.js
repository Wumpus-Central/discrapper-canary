n.d(t, { z: () => u });
var r = n(54381),
    i = n(473749),
    l = n(28664),
    o = n(481060),
    a = n(833592),
    s = n(388032);
let c = (e) => {
        let { item: t, closePopout: n } = e;
        return (0, r.jsx)(o.v2r, {
            navId: "notification-actions",
            onClose: n,
            onSelect: n,
            "aria-label": s.intl.string(s.t.ljs3Oe),
            children: (0, r.jsx)(o.sNh, {
                id: "delete",
                label: s.intl.string(s.t.oyYWHE),
                icon: o.XHJ,
                action: async () => {
                    await (0, a.g3)(t);
                },
            }),
        });
    },
    u = i.memo(function (e) {
        let { item: t } = e,
            n = i.useRef(null);
        return (0, r.jsx)(o.yRy, {
            targetElementRef: n,
            renderPopout: (e) => {
                var n, i;
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
                    (i = i = { item: t }),
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
            position: "bottom",
            align: "right",
            animation: o.yRy.Animation.NONE,
            children: (e) => {
                let { onClick: t } = e;
                return (0, r.jsx)(l.u, {
                    text: s.intl.string(s.t["UKOtz+"]),
                    asContainer: !0,
                    children: (0, r.jsx)(o.hU, {
                        buttonRef: n,
                        size: "sm",
                        icon: o.xhG,
                        variant: "icon-only",
                        "aria-label": s.intl.string(s.t["UKOtz+"]),
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
