n.d(t, { z: () => c });
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(833592),
    l = n(388032);
let s = (e) => {
        let { item: t, closePopout: n } = e;
        return (0, r.jsx)(o.v2r, {
            navId: 'notification-actions',
            onClose: n,
            onSelect: n,
            'aria-label': l.NW.string(l.t.ljs3OT),
            children: (0, r.jsx)(o.sNh, {
                id: 'delete',
                label: l.NW.string(l.t.oyYWHB),
                icon: o.XHJ,
                action: async () => {
                    await (0, a.g3)(t);
                }
            })
        });
    },
    c = i.memo(function (e) {
        let { item: t } = e,
            n = i.useRef(null);
        return (0, r.jsx)(o.yRy, {
            targetElementRef: n,
            renderPopout: (e) => {
                var n, i;
                return (0, r.jsx)(
                    s,
                    ((n = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
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
                    n)
                );
            },
            position: 'bottom',
            align: 'right',
            animation: o.yRy.Animation.NONE,
            children: (e) => {
                let { onClick: t } = e;
                return (0, r.jsx)(o.M0o, {
                    ref: n,
                    tooltip: l.NW.string(l.t.UKOtz8),
                    color: o.YX$.TERTIARY,
                    icon: (0, r.jsx)(o.xhG, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    onClick: (e) => {
                        e.stopPropagation(), t(e);
                    },
                    'aria-haspopup': 'menu'
                });
            }
        });
    });
