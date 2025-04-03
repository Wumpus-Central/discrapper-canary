n.d(t, {
    I9: () => f,
    ZP: () => b
});
var r = n(200651),
    i = n(192379),
    o = n(692547),
    c = n(481060),
    s = n(496675),
    a = n(484455),
    l = n(981631),
    u = n(388032),
    d = n(664305);
function f(e) {
    switch (e) {
        case l.sFg.LOW:
            return u.NW.string(u.t.SsCK8P);
        case l.sFg.MEDIUM:
            return u.NW.string(u.t.WwNoR0);
        case l.sFg.HIGH:
            return u.NW.string(u.t.I2jMUF);
        case l.sFg.VERY_HIGH:
            return u.NW.string(u.t.cJY8w8);
        default:
            return '';
    }
}
let p = {
        [l.sFg.NONE]: '',
        [l.sFg.LOW]: o.Z.unsafe_rawColors.GREEN_360.css,
        [l.sFg.MEDIUM]: o.Z.unsafe_rawColors.YELLOW_300.css,
        [l.sFg.HIGH]: o.Z.unsafe_rawColors.ORANGE_345.css,
        [l.sFg.VERY_HIGH]: o.Z.unsafe_rawColors.RED_400.css
    },
    b = function (e) {
        let { guild: t } = e,
            o = s.Z.can(l.Plq.MANAGE_GUILD, t),
            b = t.verificationLevel,
            j = b === l.sFg.VERY_HIGH ? c.AtH : c._XJ,
            y = i.useMemo(() => f(b), [b]),
            m = p[b],
            g = (0, r.jsx)('div', {
                className: d.verificationLevelTitle,
                children: u.NW.format(u.t.OpV87e, {
                    verificationLevelHook: function () {
                        return (0, r.jsx)(
                            c.Text,
                            {
                                className: d.verificationLevelHook,
                                style: { color: m },
                                variant: 'text-sm/semibold',
                                children: y
                            },
                            'hook'
                        );
                    }
                })
            }),
            O = b === l.sFg.VERY_HIGH ? u.NW.string(u.t.IlXyd3) : u.NW.string(u.t.JlzMPj);
        return (0, r.jsx)(a.Z, {
            title: g,
            children: (0, r.jsxs)('div', {
                className: d.verificationContainer,
                children: [
                    (0, r.jsx)(j, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 20,
                        height: 20,
                        className: d.icon
                    }),
                    (0, r.jsx)(c.Text, {
                        className: d.guildVerificationText,
                        variant: 'text-sm/normal',
                        children: O
                    }),
                    o &&
                        (0, r.jsx)(c.P3F, {
                            className: d.iconInteractiveContainer,
                            onClick: () =>
                                (0, c.ZDy)(async () => {
                                    let { default: e } = await n.e('72458').then(n.bind(n, 694278));
                                    return (n) => {
                                        var i, o;
                                        return (0, r.jsx)(
                                            e,
                                            ((i = (function (e) {
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
                                            })({}, n)),
                                            (o = o = { guild: t }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                                                : (function (e, t) {
                                                      var n = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var r = Object.getOwnPropertySymbols(e);
                                                          n.push.apply(n, r);
                                                      }
                                                      return n;
                                                  })(Object(o)).forEach(function (e) {
                                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                                                  }),
                                            i)
                                        );
                                    };
                                }),
                            children: (0, r.jsx)(c.vdY, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 20,
                                height: 20,
                                className: d.iconInteractive
                            })
                        })
                ]
            })
        });
    };
