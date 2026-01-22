n.d(t, {
    A: () => g,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(58149),
    c = n(954571),
    u = n(816662),
    d = n(652215),
    f = n(985018),
    p = n(930399);

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

function b(e, t) {
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
        l.useEffect(() => {
            c.default.track(
                d.HAw.CHANNEL_BANNER_VIEWED,
                b(h({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
                    banner_type: "channel_opt_in",
                }),
            );
        }, [t]),
        (0, r.jsxs)("div", {
            className: a()(p.JD, {
                [p.sc]: n,
            }),
            children: [
                (0, r.jsx)(s.Text, {
                    className: p.E5,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: f.intl.string(f.t.iOWmmB),
                }),
                (0, r.jsx)(s.Button, {
                    size: "sm",
                    variant: "primary",
                    onClick: () => {
                        c.default.track(
                            d.HAw.CHANNEL_BANNER_CTA_CLICKED,
                            b(h({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
                                banner_type: "channel_opt_in",
                                cta_type: "add channel",
                            }),
                        ),
                            (0, u.AC)(t.guild_id, t.id, !0, {
                                section: d.JJy.CHANNEL,
                            });
                    },
                    text: f.intl.string(f.t.ZtIlQo),
                    icon: s.j96,
                }),
            ],
        })
    );
}
