n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(812652),
    s = n(388032),
    o = n(79309);
function a(e) {
    let { align: t = 'left' } = e;
    return (0, r.jsx)(l.yRy, {
        position: 'top',
        align: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(i.Z, {
                onClose: t,
                onSelect: t
            });
        },
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                l.zxk,
                ((t = (function (e) {
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
                })(
                    {
                        size: l.zxk.Sizes.ICON,
                        'aria-label': s.NW.string(s.t['+1H47u']),
                        color: l.zxk.Colors.PRIMARY,
                        className: o.streamOptionsButton
                    },
                    e
                )),
                (n = n =
                    {
                        children: (0, r.jsx)(l.ewm, {
                            className: o.settingsIcon,
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
