n.d(t, { default: () => d });
var r = n(255367);
n(73800);
var o = n(481060),
    c = n(313201),
    l = n(430824),
    s = n(614812),
    a = n(388032),
    i = n(318350);
let d = (e) => {
    var t, n;
    let { onClose: d, guildId: p } = e,
        u = (0, c.Dt)(),
        b = a.intl.format(a.t.ZqkXsL, { helpdeskArticle: s.z }),
        m = l.Z.getGuild(p);
    return (
        null != m &&
            (b = a.intl.format(a.t.jn0Xy8, {
                guildName: m.name,
                helpdeskArticle: s.z
            })),
        (0, r.jsxs)(
            o.Y0X,
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
                    'aria-labelledby': u,
                    parentComponent: 'GuildLimitedAccessInfoModal',
                    children: [
                        (0, r.jsxs)(o.xBx, {
                            separator: !1,
                            className: i.modalHeader,
                            children: [
                                (0, r.jsx)(o.X6q, {
                                    id: u,
                                    variant: 'heading-xl/extrabold',
                                    children: a.intl.string(a.t.kJwpBQ)
                                }),
                                (0, r.jsx)(o.olH, {
                                    className: i.closeButton,
                                    onClick: d
                                })
                            ]
                        }),
                        (0, r.jsx)(o.hzk, {
                            className: i.modalContent,
                            children: (0, r.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                className: i.contentText,
                                children: b
                            })
                        }),
                        (0, r.jsx)(o.mzw, {
                            children: (0, r.jsx)(o.zxk, {
                                className: i.button,
                                size: o.zxk.Sizes.MIN,
                                onClick: d,
                                children: a.intl.string(a.t.BddRzc)
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
