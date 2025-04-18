n.d(t, { Z: () => g });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(367907),
    c = n(626135),
    u = n(152376),
    d = n(981631),
    p = n(388032),
    h = n(636184);
function f(e) {
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
}
function m(e, t) {
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
function g(e) {
    let { channel: t, narrow: n } = e;
    return (
        i.useEffect(() => {
            c.default.track(d.rMx.CHANNEL_BANNER_VIEWED, m(f({}, (0, s.hH)(t.getGuildId()), (0, s.v_)(t)), { banner_type: 'channel_opt_in' }));
        }, [t]),
        (0, r.jsxs)('div', {
            className: o()(h.chatHeaderBar, { [h.narrow]: n }),
            children: [
                (0, r.jsx)(a.Text, {
                    className: h.chatHeaderBarText,
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: p.NW.string(p.t.iOWmmJ)
                }),
                (0, r.jsxs)(a.zxk, {
                    size: a.zxk.Sizes.TINY,
                    className: h.chatHeaderBarButton,
                    innerClassName: h.chatHeaderBarButtonInner,
                    color: a.zxk.Colors.BRAND,
                    onClick: () => {
                        c.default.track(
                            d.rMx.CHANNEL_BANNER_CTA_CLICKED,
                            m(f({}, (0, s.hH)(t.getGuildId()), (0, s.v_)(t)), {
                                banner_type: 'channel_opt_in',
                                cta_type: 'add channel'
                            })
                        ),
                            (0, u.XQ)(t.guild_id, t.id, !0, { section: d.jXE.CHANNEL });
                    },
                    children: [
                        (0, r.jsx)(a.qJs, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 14,
                            height: 14
                        }),
                        p.NW.string(p.t.ZtIlQk)
                    ]
                })
            ]
        })
    );
}
