n.d(t, { z: () => c });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    o = n(833592),
    a = n(388032);
let s = (e) => {
        let { item: t, closePopout: n } = e;
        return (0, r.jsx)(l.v2r, {
            navId: "notification-actions",
            onClose: n,
            onSelect: n,
            "aria-label": a.intl.string(a.t.ljs3Oe),
            children: (0, r.jsx)(l.sNh, {
                id: "delete",
                label: a.intl.string(a.t.oyYWHE),
                icon: l.XHJ,
                action: async () => {
                    await (0, o.g3)(t);
                },
            }),
        });
    },
    c = i.memo(function (e) {
        let { item: t } = e,
            n = i.useRef(null);
        return (0, r.jsx)(l.yRy, {
            targetElementRef: n,
            renderPopout: (e) => {
                var n, i;
                return (0, r.jsx)(
                    s,
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
            animation: l.yRy.Animation.NONE,
            children: (e) => {
                let { onClick: t } = e;
                return (0, r.jsx)(l.M0o, {
                    ref: n,
                    tooltip: a.intl.string(a.t["UKOtz+"]),
                    color: l.YX$.TERTIARY,
                    icon: (0, r.jsx)(l.xhG, {
                        size: "xs",
                        color: "currentColor",
                    }),
                    onClick: (e) => {
                        e.stopPropagation(), t(e);
                    },
                    "aria-haspopup": "menu",
                });
            },
        });
    });
