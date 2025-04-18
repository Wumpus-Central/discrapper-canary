n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(812652),
    s = n(388032),
    a = n(12584);
function o(e) {
    let { align: t = 'left' } = e;
    return (0, r.jsx)(i.yRy, {
        position: 'top',
        align: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(l.Z, {
                onClose: t,
                onSelect: t
            });
        },
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                i.zxk,
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
                        size: i.zxk.Sizes.ICON,
                        'aria-label': s.NW.string(s.t['+1H47u']),
                        color: i.zxk.Colors.PRIMARY,
                        className: a.streamOptionsButton
                    },
                    e
                )),
                (n = n =
                    {
                        children: (0, r.jsx)(i.ewm, {
                            className: a.settingsIcon,
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
