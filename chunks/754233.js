n.d(t, { default: () => p });
var r = n(255367);
n(73800);
var o = n(755721),
    c = n(481060),
    l = n(313201),
    s = n(430824),
    a = n(614812),
    i = n(388032),
    d = n(318350);
let p = (e) => {
    var t, n;
    let { onClose: p, guildId: u } = e,
        b = (0, l.Dt)(),
        m = i.intl.format(i.t.ZqkXsL, { helpdeskArticle: a.z }),
        f = s.Z.getGuild(u);
    return (
        null != f &&
            (m = i.intl.format(i.t.jn0Xy8, {
                guildName: f.name,
                helpdeskArticle: a.z
            })),
        (0, r.jsxs)(
            c.Y0X,
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
            })({}, e)),
            (n = n =
                {
                    'aria-labelledby': b,
                    parentComponent: 'GuildLimitedAccessInfoModal',
                    children: [
                        (0, r.jsxs)(c.xBx, {
                            separator: !1,
                            className: d.modalHeader,
                            children: [
                                (0, r.jsx)(c.X6q, {
                                    id: b,
                                    variant: 'heading-xl/extrabold',
                                    children: i.intl.string(i.t.kJwpBQ)
                                }),
                                (0, r.jsx)(c.olH, {
                                    className: d.closeButton,
                                    onClick: p
                                })
                            ]
                        }),
                        (0, r.jsx)(c.hzk, {
                            className: d.modalContent,
                            children: (0, r.jsx)(c.Text, {
                                variant: 'text-md/normal',
                                className: d.contentText,
                                children: m
                            })
                        }),
                        (0, r.jsx)(c.mzw, {
                            children: (0, r.jsx)(o.zx, {
                                className: d.button,
                                size: o.zx.Sizes.MIN,
                                onClick: p,
                                children: i.intl.string(i.t.BddRzc)
                            })
                        })
                    ]
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
        )
    );
};
