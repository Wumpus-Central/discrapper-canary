n.d(t, { Z: () => g });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(367907),
    c = n(626135),
    u = n(152376),
    d = n(981631),
    p = n(388032),
    f = n(245995);
function h(e) {
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
            c.default.track(
                d.rMx.CHANNEL_BANNER_VIEWED,
                m(h({}, (0, s.hH)(t.getGuildId()), (0, s.v_)(t)), { banner_type: "channel_opt_in" }),
            );
        }, [t]),
        (0, r.jsxs)("div", {
            className: a()(f.chatHeaderBar, { [f.narrow]: n }),
            children: [
                (0, r.jsx)(o.Text, {
                    className: f.chatHeaderBarText,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: p.intl.string(p.t.iOWmmB),
                }),
                (0, r.jsx)(o.Button, {
                    size: "sm",
                    variant: "primary",
                    onClick: () => {
                        c.default.track(
                            d.rMx.CHANNEL_BANNER_CTA_CLICKED,
                            m(h({}, (0, s.hH)(t.getGuildId()), (0, s.v_)(t)), {
                                banner_type: "channel_opt_in",
                                cta_type: "add channel",
                            }),
                        ),
                            (0, u.XQ)(t.guild_id, t.id, !0, { section: d.jXE.CHANNEL });
                    },
                    text: p.intl.string(p.t.ZtIlQo),
                    icon: o.qJs,
                }),
            ],
        })
    );
}
