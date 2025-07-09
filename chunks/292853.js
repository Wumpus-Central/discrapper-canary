n.d(t, { Z: () => b });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(755721),
    s = n(481060),
    c = n(367907),
    u = n(626135),
    d = n(152376),
    p = n(981631),
    h = n(388032),
    f = n(636184);
function m(e) {
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
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { channel: t, narrow: n } = e;
    return (
        i.useEffect(() => {
            u.default.track(p.rMx.CHANNEL_BANNER_VIEWED, g(m({}, (0, c.hH)(t.getGuildId()), (0, c.v_)(t)), { banner_type: 'channel_opt_in' }));
        }, [t]),
        (0, r.jsxs)('div', {
            className: a()(f.chatHeaderBar, { [f.narrow]: n }),
            children: [
                (0, r.jsx)(s.Text, {
                    className: f.chatHeaderBarText,
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: h.intl.string(h.t.iOWmmJ)
                }),
                (0, r.jsxs)(o.zx, {
                    size: o.zx.Sizes.TINY,
                    className: f.chatHeaderBarButton,
                    innerClassName: f.chatHeaderBarButtonInner,
                    color: o.zx.Colors.BRAND,
                    onClick: () => {
                        (u.default.track(
                            p.rMx.CHANNEL_BANNER_CTA_CLICKED,
                            g(m({}, (0, c.hH)(t.getGuildId()), (0, c.v_)(t)), {
                                banner_type: 'channel_opt_in',
                                cta_type: 'add channel'
                            })
                        ),
                            (0, d.XQ)(t.guild_id, t.id, !0, { section: p.jXE.CHANNEL }));
                    },
                    children: [
                        (0, r.jsx)(s.qJs, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 14,
                            height: 14
                        }),
                        h.intl.string(h.t.ZtIlQk)
                    ]
                })
            ]
        })
    );
}
