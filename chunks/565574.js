n.d(t, { Z: () => d });
var r = n(255367),
    i = n(73800),
    l = n(755721),
    s = n(481060),
    o = n(812652),
    a = n(388032),
    c = n(79309);
function d(e) {
    let { align: t = 'left', useSimplifiedMenu: n = !1 } = e,
        d = i.useRef(null);
    return (0, r.jsx)(s.yRy, {
        targetElementRef: d,
        position: 'top',
        align: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return n
                ? (0, r.jsx)(o.l9, {
                      onClose: t,
                      onSelect: t
                  })
                : (0, r.jsx)(o.ZP, {
                      onClose: t,
                      onSelect: t
                  });
        },
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                l.zx,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })(
                    {
                        size: l.zx.Sizes.ICON,
                        'aria-label': a.intl.string(a.t['+1H47u']),
                        color: l.zx.Colors.PRIMARY,
                        className: c.streamOptionsButton,
                        buttonRef: d
                    },
                    e
                )),
                (n = n =
                    {
                        children: (0, r.jsx)(s.ewm, {
                            className: c.settingsIcon,
                            size: 'refresh_sm',
                            color: 'currentColor'
                        })
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
                t)
            );
        }
    });
}
