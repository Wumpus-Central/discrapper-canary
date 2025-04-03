r.d(t, { default: () => d });
var n = r(200651);
r(192379);
var o = r(481060),
    c = r(313201),
    s = r(430824),
    a = r(614812),
    l = r(388032),
    i = r(318350);
let d = (e) => {
    var t, r;
    let { onClose: d, guildId: u } = e,
        p = (0, c.Dt)(),
        b = l.NW.format(l.t.ZqkXsL, { helpdeskArticle: a.z }),
        m = s.Z.getGuild(u);
    return (
        null != m &&
            (b = l.NW.format(l.t.jn0Xy8, {
                guildName: m.name,
                helpdeskArticle: a.z
            })),
        (0, n.jsxs)(
            o.Y0X,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })({}, e)),
            (r = r =
                {
                    'aria-labelledby': p,
                    children: [
                        (0, n.jsxs)(o.xBx, {
                            separator: !1,
                            className: i.modalHeader,
                            children: [
                                (0, n.jsx)(o.X6q, {
                                    id: p,
                                    variant: 'heading-xl/extrabold',
                                    children: l.NW.string(l.t.kJwpBQ)
                                }),
                                (0, n.jsx)(o.olH, {
                                    className: i.closeButton,
                                    onClick: d
                                })
                            ]
                        }),
                        (0, n.jsx)(o.hzk, {
                            className: i.modalContent,
                            children: (0, n.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                className: i.contentText,
                                children: b
                            })
                        }),
                        (0, n.jsx)(o.mzw, {
                            children: (0, n.jsx)(o.zxk, {
                                className: i.button,
                                size: o.zxk.Sizes.MIN,
                                onClick: d,
                                children: l.NW.string(l.t.BddRzc)
                            })
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            t)
        )
    );
};
